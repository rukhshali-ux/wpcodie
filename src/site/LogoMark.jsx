// The WPCodie mark: a W with an amber dot above it (the idea), on a brand-blue rounded tile.
// The owner's design (wpcodie-mark-a.svg) in the site's colors: tile #2451B8, W #F5F4F0,
// dot #F2C94C (Idea Guy's lightbulb). Reads on both the cream header and the ink intro/footer.
export default function LogoMark({ size = 30 }) {
  return (
    <svg class="logo-mark" viewBox="0 0 96 96" width={size} height={size} aria-hidden="true" focusable="false" style="flex:none;display:block">
      <rect width="96" height="96" rx="22" fill="#2451B8" />
      <path d="M20 38 L35 68 L48 47 L61 68 L76 38" fill="none" stroke="#F5F4F0" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="48" cy="25" r="6.5" fill="#F2C94C" />
    </svg>
  );
}
