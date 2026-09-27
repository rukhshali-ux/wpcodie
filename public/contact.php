<?php
// Contact form endpoint. The site posts JSON here (src/site/logic.js, `submit`) and this
// emails it to the inbox below. Runs on the Hostinger web host; no framework, no database.
declare(strict_types=1);

// Where enquiries go, and the address they are sent from. FROM must be a mailbox that
// exists on this domain in Hostinger, or providers will mark the mail as spam.
const TO = 'hello@wpcodie.com';
const FROM = 'hello@wpcodie.com';
const MAX_PER_HOUR = 5;
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

$name = str_replace(["\r", "\n"], ' ', field($in, 'name', 200));
$email = field($in, 'email', 254);
$company = str_replace(["\r", "\n"], ' ', field($in, 'company', 200));
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

$sent = mail(TO, mb_encode_mimeheader('New enquiry: ' . $name, 'UTF-8'), $body, $headers, '-f' . FROM);
reply($sent ? 200 : 500, ['ok' => $sent]);
