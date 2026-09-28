// /llms.txt — a plain-language summary for AI assistants (llmstxt.org), generated from the
// page's own content.
import { ADDRESS_LINES, DESCRIPTION, EMAIL, NAME, PHONE_DISPLAY, SITE, TAGLINE, pageContent } from '../site/seo.js';
import { PROJECTS } from '../site/portfolio.js';

export function GET() {
  const v = pageContent();
  const lines = [
    `# ${NAME}`,
    '',
    `> ${DESCRIPTION}`,
    '',
    `${TAGLINE} ${NAME} is a technology advisory and engineering studio: advice, architecture and engineering come from the same team, from the first workshop to the final release.`,
    '',
    '## Services',
    '',
    ...v.caps.map((c) => `- **${c.title}**: ${c.body} (${c.tags.join(', ')})`),
    '',
    '## How we work',
    '',
    ...v.phases.map((p) => `${Number(p.num)}. **${p.title}**: ${p.body}`),
    '',
    '## Principles',
    '',
    ...v.principles.map((p) => `- **${p.title}**: ${p.body}`),
    '',
    '## Portfolio',
    '',
    `Selected case studies: ${SITE}/portfolio/`,
    '',
    ...PROJECTS.map((p) => `- **${p.name}**${p.url ? ` (${p.url})` : ''}: ${p.subtitle}. ${p.summary}`),
    '',
    '## Contact',
    '',
    `- Email: ${EMAIL}`,
    `- Phone: ${PHONE_DISPLAY}`,
    `- Address: ${ADDRESS_LINES.join(', ')}`,
    `- Website: ${SITE}/`,
    `- Start a project: ${SITE}/#contact`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
