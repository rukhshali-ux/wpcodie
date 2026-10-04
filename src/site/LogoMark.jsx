// The WPCodie mark: a W with an amber dot above it (the idea), on a brand-blue rounded tile.
// The owner's design (wpcodie-mark-a.svg) in the site's colors: tile #2451B8, W #F5F4F0,
// dot #F2C94C (Idea Guy's lightbulb). Reads on both the cream header and the ink intro/footer.
// The favicons, app icons and og.png in public/ are drawn from the same design (scripts/icons.mjs).
// `tile={false}` draws the W and dot alone, centered, for a surface that is already brand blue
// (the hero's center circle); `size` may then be a CSS width such as "56%".
export default function LogoMark({ size = 30, tile = true }) {
  const fixed = typeof size === 'number';
  return (
    <svg class="logo-mark" viewBox={tile ? '0 0 96 96' : '12 9.75 72 72'} width={fixed ? size : undefined} height={fixed ? size : undefined}
      aria-hidden="true" focusable="false" style={`flex:none;display:block${fixed ? '' : `;width:${size};height:auto`}`}>
      {tile && <rect width="96" height="96" rx="22" fill="#2451B8" />}
      <path d="M20 38 L35 68 L48 47 L61 68 L76 38" fill="none" stroke="#F5F4F0" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="48" cy="25" r="6.5" fill="#F2C94C" />
    </svg>
  );
}
