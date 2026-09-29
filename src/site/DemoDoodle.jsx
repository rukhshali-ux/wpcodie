// "Idea Guy" from the intro, standing beside the "Watch the demo" button: pointing at it with
// one hand, waving with the other and hopping, so the button gets noticed. Same drawing as the
// intro's doodle in Home.jsx, fixed in one pose; the movement is the .dd-* rules in page.css.
// Decorative only (aria-hidden, no pointer events).
export default function DemoDoodle() {
  return (
    <svg class="demo-doodle" viewBox="-8 28 172 232" aria-hidden="true" focusable="false" fill="none" stroke="#F5F4F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <g class="dd-marks">
        <path d="M140,48 l9,-7 M143,64 l12,-3 M60,48 l-9,-7 M57,64 l-12,-3" stroke="#2451B8" stroke-width="2.5" />
      </g>
      <g class="dd-hop">
        <path d="M86,192 L85,246 L99,246 L101,202 L103,246 L117,246 L116,192 Z" fill="#C4A77D" stroke-width="2.6" />
        <path d="M92,206 L92,244 M110,206 L110,244" stroke="#A88B62" stroke-width="1.4" />
        <path d="M83,246 h17 q6,0 6,6 h-26 q-2,-6 3,-6 Z" fill="#F5F4F0" stroke-width="2.4" />
        <path d="M101,246 h17 q5,0 3,6 h-26 q0,-6 6,-6 Z" fill="#F5F4F0" stroke-width="2.4" />
        <path d="M80,252 h26 M95,252 h26" stroke="#2451B8" stroke-width="2" />
        <path d="M77,194 C73,142 84,116 100,113 C116,116 127,142 123,194 Z" fill="#8FAAE8" stroke-width="2.8" />
        <path d="M80,150 L80,190 M120,150 L120,190" stroke="#7A95D6" stroke-width="1.4" />
        <path d="M93,114 L100,132 L107,114" fill="#D9A274" stroke="none" />
        <path d="M88,114 L100,132 L94,119 Z M112,114 L100,132 L106,119 Z" fill="#DCE5F7" stroke-width="2" />
        <line x1="100" y1="132" x2="100" y2="190" stroke="#5E79BC" stroke-width="1.6" />
        <circle cx="102.5" cy="146" r="1.6" fill="#F5F4F0" stroke="none" />
        <circle cx="102.5" cy="162" r="1.6" fill="#F5F4F0" stroke="none" />
        <circle cx="102.5" cy="178" r="1.6" fill="#F5F4F0" stroke="none" />
        <path d="M77,190 L123,190 L123,197 L77,197 Z" fill="#6B4A3A" stroke-width="2.4" />
        <rect x="96" y="189.5" width="8" height="8" rx="1.5" fill="#C9A45C" stroke="none" />
        {/* Waving arm, raised */}
        <g class="dd-wave">
          <line x1="118" y1="128" x2="118" y2="154" stroke-width="10" stroke="#F5F4F0" />
          <line x1="118" y1="128" x2="118" y2="154" stroke-width="7" stroke="#8FAAE8" />
          <line x1="118" y1="154" x2="118" y2="160" stroke-width="9" stroke="#DCE5F7" stroke-linecap="butt" />
          <g style="transform-origin:118px 160px;transform:rotate(-12deg)">
            <line x1="118" y1="160" x2="118" y2="190" stroke-width="8.5" stroke="#F5F4F0" />
            <line x1="118" y1="160" x2="118" y2="190" stroke-width="5.5" stroke="#D9A274" />
            <line x1="115.5" y1="185" x2="120.5" y2="185" stroke="#2B2F3A" stroke-width="2.4" stroke-linecap="butt" />
            <circle cx="118" cy="196" r="6" fill="#D9A274" stroke-width="2.4" />
          </g>
        </g>
        {/* Head: eyes on the button, mouth open with excitement */}
        <g style="transform-origin:100px 104px;transform:rotate(-6deg)">
          <path d="M93,104 L93,114 L107,114 L107,104" fill="#C98E5E" stroke-width="2" />
          <path d="M70,78 q-7,3 -1,12" fill="#C98E5E" stroke-width="2.5" />
          <path d="M130,78 q7,3 1,12" fill="#C98E5E" stroke-width="2.5" />
          <ellipse cx="100" cy="74" rx="29" ry="32" fill="#D9A274" />
          <path d="M71.5,76 C69,50 80,40 100,39 C120,40 131,50 128.5,76 C127,66 125,60 121,57 C120,52 114,49 108,50 C101,48 92,49 86,52 C80,54 77,58 76,64 C74,68 72.5,72 71.5,76 Z" fill="#2B2F3A" />
          <path d="M74,60 l3,-2 M124,59 l2,2 M78,50 l2,-2" stroke="#8C877D" stroke-width="1.5" />
          <path d="M78,41 l-7,6 M122,41 l7,6" stroke="#6B4A3A" stroke-width="2.4" />
          <rect x="77" y="35" width="20" height="12.5" rx="5" fill="rgba(143,170,232,0.22)" stroke="#F5F4F0" stroke-width="2.2" />
          <rect x="103" y="35" width="20" height="12.5" rx="5" fill="rgba(143,170,232,0.22)" stroke="#F5F4F0" stroke-width="2.2" />
          <path d="M97,40 q3,-3.5 6,0" stroke="#F5F4F0" stroke-width="2.2" />
          <path d="M81,44 l5,-6 M107,44 l5,-6" stroke="#FFFFFF" stroke-width="1.6" opacity="0.8" />
          <path d="M71,80 C71,100 84,114 100,115 C116,114 129,100 129,80 C126,92 120,98 113,97 C107,93 93,93 87,97 C80,98 74,92 71,80 Z" fill="#9E9A92" stroke="#F5F4F0" stroke-width="2.5" />
          <path d="M80,100 l2,3 M90,106 l1,3 M100,109 l0,3 M110,106 l-1,3 M120,100 l-2,3 M85,104 l1,2 M115,104 l-1,2" stroke="#F5F4F0" stroke-width="1.4" />
          <path d="M76,92 l2,2 M124,92 l-2,2 M96,111 l1,2" stroke="#2B2F3A" stroke-width="1.4" />
          <path d="M87,91 C93,86 107,86 113,91 C107,90 101,89.5 100,90.5 C99,89.5 93,90 87,91 Z" fill="#2B2F3A" stroke="#2B2F3A" stroke-width="2" />
          <path d="M98,76 q-3,7 1,8 q3,0 3,-1" stroke="#8A5A38" stroke-width="2" />
          <g class="dd-blink">
            <circle cx="89" cy="72" r="5.4" fill="#F5F4F0" stroke="none" />
            <circle cx="111" cy="72" r="5.4" fill="#F5F4F0" stroke="none" />
            <circle cx="86.4" cy="73.2" r="2.6" fill="#15181F" stroke="none" />
            <circle cx="108.4" cy="73.2" r="2.6" fill="#15181F" stroke="none" />
          </g>
          <line x1="83" y1="62" x2="95" y2="62" stroke="#15181F" stroke-width="3.4" style="transform-origin:89px 62px;transform:translateY(-5px) rotate(-8deg)" />
          <line x1="105" y1="62" x2="117" y2="62" stroke="#15181F" stroke-width="3.4" style="transform-origin:111px 62px;transform:translateY(-5px) rotate(8deg)" />
          <path d="M89,92 Q100,91 111,92 Q109,106 100,106 Q91,106 89,92 Z" fill="#6E2A1E" stroke="#15181F" stroke-width="2.2" />
          <path d="M90.5,93 Q100,92.4 109.5,93 L109,96 Q100,95.4 91,96 Z" fill="#F5F4F0" stroke="none" />
          <path d="M94,103 Q100,100 106,103 Q100,105.5 94,103 Z" fill="#D9776A" stroke="none" />
        </g>
        {/* Pointing arm, reaching for the button */}
        <g style="transform-origin:82px 128px;transform:rotate(50deg)">
          <line x1="82" y1="128" x2="82" y2="154" stroke-width="10" stroke="#F5F4F0" />
          <line x1="82" y1="128" x2="82" y2="154" stroke-width="7" stroke="#8FAAE8" />
          <line x1="82" y1="154" x2="82" y2="160" stroke-width="9" stroke="#DCE5F7" stroke-linecap="butt" />
          <g style="transform-origin:82px 160px;transform:rotate(10deg)">
            <g class="dd-point">
              <line x1="82" y1="160" x2="82" y2="190" stroke-width="8.5" stroke="#F5F4F0" />
              <line x1="82" y1="160" x2="82" y2="190" stroke-width="5.5" stroke="#D9A274" />
              <circle cx="82" cy="196" r="6" fill="#D9A274" stroke-width="2.4" />
              <line x1="82" y1="202" x2="82" y2="212" stroke="#D9A274" stroke-width="3.4" />
            </g>
          </g>
        </g>
        <g transform="rotate(-4 100 175)">
          <rect x="70" y="167" width="60" height="17" rx="4" fill="#15181F" stroke="#F5F4F0" stroke-width="1.6" />
          <circle cx="78.5" cy="174.2" r="3.4" fill="#F2C94C" stroke="none" />
          <rect x="76.9" y="177.2" width="3.2" height="2.4" rx="0.6" fill="#B5B1A8" stroke="none" />
          <text x="85" y="179" text-anchor="start" textLength="40" lengthAdjust="spacingAndGlyphs" stroke="none" fill="#F5F4F0" style="font:700 9.6px 'Space Grotesk',sans-serif">Idea Guy</text>
        </g>
      </g>
    </svg>
  );
}
