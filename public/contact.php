<?php
// Contact form endpoint. The site posts JSON here (src/site/logic.js, `submit`). Every
// enquiry is first saved to a CSV file outside the web root, then emailed to the inbox below,
// so nothing is lost if email fails. Runs on the Hostinger web host; no framework, no database.
//
// Saved enquiries: /domains/wpcodie.com/enquiries/enquiries.csv (hPanel -> File Manager). That
// folder sits next to public_html, not inside it, so it cannot be opened from a browser.
declare(strict_types=1);

// Where enquiries go, and the address they are sent from. FROM must be a mailbox that
// exists on this domain in Hostinger, or providers will mark the mail as spam.
const TO = 'service@wpcodie.com';
const FROM = 'service@wpcodie.com';
const MAX_PER_HOUR = 5;
const STORE_DIR = __DIR__ . '/../enquiries';
const NEEDS = ['AI application', 'Custom software', 'Web app', 'Mobile app', 'Automation', 'Consulting'];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function reply(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function field(array $in, string $key, int $max): string
{
    $value = isset($in[$key]) && is_string($in[$key]) ? trim($in[$key]) : '';
    return mb_substr($value, 0, $max);
}

/**
 * Appends one enquiry to enquiries.csv, creating the folder and header row the first time.
 * Cells a spreadsheet would read as a formula are prefixed with a quote.
 */
function store(array $row): bool
{
    if (!is_dir(STORE_DIR) && !@mkdir(STORE_DIR, 0700, true)) {
        return false;
    }
    $guard = STORE_DIR . '/.htaccess';
    if (!is_file($guard)) {
        @file_put_contents($guard, "Require all denied\nDeny from all\n");
    }
    $file = STORE_DIR . '/enquiries.csv';
    $new = !is_file($file);
    $fh = @fopen($file, 'ab');
    if ($fh === false) {
        return false;
    }
    $safe = array_map(static fn ($v) => preg_match('/^[=+\-@\t\r]/', (string) $v) ? "'" . $v : (string) $v, $row);
    $ok = flock($fh, LOCK_EX);
    if ($ok && $new) {
        $ok = fputcsv($fh, ['received (UTC)', 'name', 'email', 'company', 'needs', 'message', 'emailed'], ',', '"', '') !== false;
    }
    if ($ok) {
        $ok = fputcsv($fh, $safe, ',', '"', '') !== false;
    }
    flock($fh, LOCK_UN);
    fclose($fh);
    return $ok;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(405, ['ok' => false]);
}

$in = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($in)) {
    reply(400, ['ok' => false]);
}

// Spam trap: people never see this field. Answer as if it worked so bots learn nothing.
if (field($in, 'website', 200) !== '') {
    reply(200, ['ok' => true]);
}

// One-line fields: every control character (line breaks, tabs, NUL, Unicode line separators)
// becomes a space, so nothing typed here can add a line to the email or its subject.
function line(string $value): string
{
    return trim((string) preg_replace('/[\x00-\x1F\x7F\x{85}\x{2028}\x{2029}]+/u', ' ', $value));
}

$name = line(field($in, 'name', 200));
$email = field($in, 'email', 254);
$company = line(field($in, 'company', 200));
$message = field($in, 'msg', 5000);
$needs = array_values(array_intersect(NEEDS, is_array($in['needs'] ?? null) ? $in['needs'] : []));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    reply(422, ['ok' => false]);
}

// A few messages per hour per address is plenty for a person and stops a flood.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$log = sys_get_temp_dir() . '/wpcodie-contact-' . hash('sha256', $ip);
$recent = array_filter(
    is_file($log) ? (array) json_decode((string) file_get_contents($log), true) : [],
    static fn ($t) => is_int($t) && $t > time() - 3600
);
if (count($recent) >= MAX_PER_HOUR) {
    reply(429, ['ok' => false]);
}
$recent[] = time();
file_put_contents($log, json_encode(array_values($recent)), LOCK_EX);

$body = "New enquiry from wpcodie.com\n\n"
    . "Name:    {$name}\n"
    . "Email:   {$email}\n"
    . 'Company: ' . ($company !== '' ? $company : '-') . "\n"
    . 'Needs:   ' . ($needs ? implode(', ', $needs) : '-') . "\n\n"
    . ($message !== '' ? $message : '(no message)') . "\n";

$headers = implode("\r\n", [
    'From: WPCodie website <' . FROM . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = @mail(TO, mb_encode_mimeheader('New enquiry: ' . $name, 'UTF-8'), $body, $headers, '-f' . FROM);
$stored = store([gmdate('Y-m-d H:i:s'), $name, $email, $company, implode(', ', $needs), $message, $sent ? 'yes' : 'no']);

// Saved or emailed is enough: the enquiry reached us. Only when both fail does the visitor
// see the "please email us instead" message.
reply($stored || $sent ? 200 : 500, ['ok' => $stored || $sent, 'stored' => $stored, 'emailed' => $sent]);
