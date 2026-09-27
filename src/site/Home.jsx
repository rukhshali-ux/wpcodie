// Converted from the design export's dc template. This file IS the page markup now:
// edit it directly. Render values (`v`) come from ./logic.js renderVals().
import { Fragment } from 'preact';
import { css, txt, each } from './dc.js';
import { Button, Input } from './ds.jsx';

export function template(v) {
  return (
    <Fragment>
    <div id="top" style={css("background:#F5F4F0;min-height:100vh")}>
      {v.showIntro ? (
        <Fragment>
          <div data-screen-label="Intro" style={css(`position:fixed;inset:0;z-index:1000;background:#15181F;background-image:radial-gradient(#232833 1px,transparent 1px);background-size:24px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(24px,5vh,56px);overflow:hidden;opacity:${v.introOpacity ?? ""};transition:opacity 900ms cubic-bezier(0.4,0,0.2,1) 250ms;pointer-events:${v.introPointer ?? ""}`)}>
          {" "}
          <div style={css(`position:relative;z-index:5;display:flex;flex-direction:column;align-items:center;gap:20px;text-align:center;padding:0 24px;opacity:${v.copyOpacity ?? ""};transform:${v.copyShift ?? ""};transition:all 600ms cubic-bezier(0.4,0,0.2,1)`)}>
            {" "}
            <div style={css("display:flex;align-items:center;gap:10px;color:#F5F4F0")}>
              <span style={css("width:28px;height:28px;border-radius:8px;background:#2451B8;display:grid;place-items:center;font:700 14px 'Space Grotesk',sans-serif")}>W</span>
              <span style={css("font:600 17px 'Space Grotesk',sans-serif")}>WPCodie</span>
            </div>
            {" "}
            <p style={css("margin:0;color:#F5F4F0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2.25rem,5.6vw,4.5rem);line-height:1.02;letter-spacing:-0.035em;text-wrap:balance")}>Got a technology problem?</p>
            {" "}
          </div>
          {" "}
          <div style={css(`position:relative;top:${v.btnTop ?? ""};z-index:6;display:flex;flex-direction:column;align-items:center;gap:10px;opacity:${v.copyOpacity ?? ""};transform:${v.copyShift ?? ""};transition:all 600ms cubic-bezier(0.4,0,0.2,1)`)}>
            {" "}
            <span onClick={v.openLaptop} onMouseEnter={v.hoverOn} onMouseLeave={v.hoverOff} style={css("position:relative;display:inline-flex;--color-midnight:#F5F4F0")}>
              <Button size="lg">Open it</Button>
            </span>
            {" "}
            <span style={css("font-size:14px;color:#B5B1A8")}>Tap to see how we solve it.</span>
            {" "}
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="#8FAAE8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style={css(`animation:${v.arrowAnim ?? ""}`)}>
              <path d="M3,3 L11,11 L19,3" />
            </svg>
            {" "}
          </div>
          {" "}
          <div ref={v.lapRef} style={css(`visibility:${v.lapVis ?? ""};position:relative;z-index:1;pointer-events:none;perspective:1800px;perspective-origin:50% 20%;width:${v.lapW ?? ""};height:${v.lapH ?? ""};margin-bottom:${v.lapBase ?? ""};transform:${v.zoom ?? ""};transition:transform ${v.lapDur ?? ""} cubic-bezier(0.65,0,0.35,1)`)}>
            {" "}
            <div style={css(`position:absolute;z-index:4;${v.doodleSide ?? ""};bottom:${v.doodleB ?? ""};width:${v.doodleW ?? ""};opacity:${v.doodleO ?? ""};transition:opacity 500ms cubic-bezier(0.4,0,0.2,1);clip-path:${v.doodleClip ?? ""}`)}>
              {" "}
              <svg viewBox="0 0 290 320" style={css("width:100%;height:auto;display:block;overflow:visible")} fill="none" stroke="#F5F4F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                {" "}
                <g transform="translate(60,60)">
                  {" "}
                  <g style={css(`animation:${v.hopAnim ?? ""}`)}>
                    {" "}
                    <path d="M86,192 L85,246 L99,246 L101,202 L103,246 L117,246 L116,192 Z" fill="#C4A77D" stroke-width="2.6" />
                    {" "}
                    <path d="M92,206 L92,244 M110,206 L110,244" stroke="#A88B62" stroke-width="1.4" />
                    {" "}
                    <path d="M83,246 h17 q6,0 6,6 h-26 q-2,-6 3,-6 Z" fill="#F5F4F0" stroke-width="2.4" />
                    {" "}
                    <path d="M101,246 h17 q5,0 3,6 h-26 q0,-6 6,-6 Z" fill="#F5F4F0" stroke-width="2.4" />
                    {" "}
                    <path d="M80,252 h26 M95,252 h26" stroke="#2451B8" stroke-width="2" />
                    {" "}
                    <path d="M77,194 C73,142 84,116 100,113 C116,116 127,142 123,194 Z" fill="#8FAAE8" stroke-width="2.8" />
                    {" "}
                    <path d="M80,150 L80,190 M120,150 L120,190" stroke="#7A95D6" stroke-width="1.4" />
                    {" "}
                    <path d="M93,114 L100,132 L107,114" fill="#D9A274" stroke="none" />
                    {" "}
                    <path d="M88,114 L100,132 L94,119 Z M112,114 L100,132 L106,119 Z" fill="#DCE5F7" stroke-width="2" />
                    {" "}
                    <line x1="100" y1="132" x2="100" y2="190" stroke="#5E79BC" stroke-width="1.6" />
                    {" "}
                    <circle cx="102.5" cy="146" r="1.6" fill="#F5F4F0" stroke="none" />
                    {" "}
                    <circle cx="102.5" cy="162" r="1.6" fill="#F5F4F0" stroke="none" />
                    {" "}
                    <circle cx="102.5" cy="178" r="1.6" fill="#F5F4F0" stroke="none" />
                    {" "}
                    <path d="M77,190 L123,190 L123,197 L77,197 Z" fill="#6B4A3A" stroke-width="2.4" />
                    {" "}
                    <rect x="96" y="189.5" width="8" height="8" rx="1.5" fill="#C9A45C" stroke="none" />
                    {" "}
                    <g style={css(`transform-origin:118px 128px;transform:rotate(${v.rU ?? ""});transition:transform 550ms cubic-bezier(0.4,0,0.2,1)`)}>
                      {" "}
                      <line x1="118" y1="128" x2="118" y2="154" stroke-width="10" stroke="#F5F4F0" />
                      {" "}
                      <line x1="118" y1="128" x2="118" y2="154" stroke-width="7" stroke="#8FAAE8" />
                      {" "}
                      <line x1="118" y1="154" x2="118" y2="160" stroke-width="9" stroke="#DCE5F7" stroke-linecap="butt" />
                      {" "}
                      <g style={css(`transform-origin:118px 160px;transform:rotate(${v.rF ?? ""});transition:transform 550ms cubic-bezier(0.4,0,0.2,1)`)}>
                        {" "}
                        <g style={css(`transform-origin:118px 160px;animation:${v.tapRAnim ?? ""}`)}>
                          {" "}
                          <line x1="118" y1="160" x2="118" y2="190" stroke-width="8.5" stroke="#F5F4F0" />
                          {" "}
                          <line x1="118" y1="160" x2="118" y2="190" stroke-width="5.5" stroke="#D9A274" />
                          {" "}
                          <line x1="115.5" y1="185" x2="120.5" y2="185" stroke="#2B2F3A" stroke-width="2.4" stroke-linecap="butt" />
                          {" "}
                          <circle cx="118" cy="196" r="6" fill="#D9A274" stroke-width="2.4" />
                          {" "}
                          <line x1="118" y1="202" x2="118" y2="212" stroke="#D9A274" stroke-width="3.4" style={css(`opacity:${v.rFingerO ?? ""};transition:opacity 300ms`)} />
                          {" "}
                        </g>
                        {" "}
                      </g>
                      {" "}
                    </g>
                    {" "}
                    <g style={css(`transform-origin:100px 104px;transform:rotate(${v.headTilt ?? ""});transition:transform 550ms cubic-bezier(0.4,0,0.2,1)`)}>
                      {" "}
                      <path d="M93,104 L93,114 L107,114 L107,104" fill="#C98E5E" stroke-width="2" />
                      {" "}
                      <path d="M70,78 q-7,3 -1,12" fill="#C98E5E" stroke-width="2.5" />
                      {" "}
                      <path d="M130,78 q7,3 1,12" fill="#C98E5E" stroke-width="2.5" />
                      {" "}
                      <ellipse cx="100" cy="74" rx="29" ry="32" fill="#D9A274" />
                      {" "}
                      <path d="M71.5,76 C69,50 80,40 100,39 C120,40 131,50 128.5,76 C127,66 125,60 121,57 C120,52 114,49 108,50 C101,48 92,49 86,52 C80,54 77,58 76,64 C74,68 72.5,72 71.5,76 Z" fill="#2B2F3A" />
                      {" "}
                      <path d="M74,60 l3,-2 M124,59 l2,2 M78,50 l2,-2" stroke="#8C877D" stroke-width="1.5" />
                      {" "}
                      <g>
                        {" "}
                        <path d="M78,41 l-7,6 M122,41 l7,6" stroke="#6B4A3A" stroke-width="2.4" />
                        {" "}
                        <rect x="77" y="35" width="20" height="12.5" rx="5" fill="rgba(143,170,232,0.22)" stroke="#F5F4F0" stroke-width="2.2" />
                        {" "}
                        <rect x="103" y="35" width="20" height="12.5" rx="5" fill="rgba(143,170,232,0.22)" stroke="#F5F4F0" stroke-width="2.2" />
                        {" "}
                        <path d="M97,40 q3,-3.5 6,0" stroke="#F5F4F0" stroke-width="2.2" />
                        {" "}
                        <path d="M81,44 l5,-6 M107,44 l5,-6" stroke="#FFFFFF" stroke-width="1.6" opacity="0.8" />
                        {" "}
                      </g>
                      {" "}
                      <path d="M71,80 C71,100 84,114 100,115 C116,114 129,100 129,80 C126,92 120,98 113,97 C107,93 93,93 87,97 C80,98 74,92 71,80 Z" fill="#9E9A92" stroke="#F5F4F0" stroke-width="2.5" />
                      {" "}
                      <path d="M80,100 l2,3 M90,106 l1,3 M100,109 l0,3 M110,106 l-1,3 M120,100 l-2,3 M85,104 l1,2 M115,104 l-1,2" stroke="#F5F4F0" stroke-width="1.4" />
                      {" "}
                      <path d="M76,92 l2,2 M124,92 l-2,2 M96,111 l1,2" stroke="#2B2F3A" stroke-width="1.4" />
                      {" "}
                      <path d="M87,91 C93,86 107,86 113,91 C107,90 101,89.5 100,90.5 C99,89.5 93,90 87,91 Z" fill="#2B2F3A" stroke="#2B2F3A" stroke-width="2" />
                      {" "}
                      <path d="M98,76 q-3,7 1,8 q3,0 3,-1" stroke="#8A5A38" stroke-width="2" />
                      {" "}
                      <g style={css(`opacity:${v.eyesO ?? ""};transition:opacity 200ms`)}>
                        {" "}
                        <g style={css("transform-origin:100px 72px;animation:wpEyeBlink 3.4s infinite")}>
                          {" "}
                          <circle cx="89" cy="72" r={v.eyeR} fill="#F5F4F0" stroke="none" />
                          {" "}
                          <circle cx="111" cy="72" r={v.eyeR} fill="#F5F4F0" stroke="none" />
                          {" "}
                          <g style={css(`transform:${v.pupil ?? ""};transition:transform 400ms cubic-bezier(0.4,0,0.2,1)`)}>
                            {" "}
                            <circle cx="89" cy="72" r="2.6" fill="#15181F" stroke="none" />
                            {" "}
                            <circle cx="111" cy="72" r="2.6" fill="#15181F" stroke="none" />
                            {" "}
                          </g>
                          {" "}
                        </g>
                        {" "}
                      </g>
                      {" "}
                      <path d="M84,73 q5,-6 10,0 M106,73 q5,-6 10,0" stroke="#15181F" stroke-width="2.6" style={css(`opacity:${v.laughO ?? ""};transition:opacity 200ms`)} />
                      {" "}
                      <line x1="83" y1="62" x2="95" y2="62" stroke="#15181F" stroke-width="3.4" style={css(`transform-origin:89px 62px;transform:${v.browL ?? ""};transition:transform 400ms cubic-bezier(0.4,0,0.2,1)`)} />
                      {" "}
                      <line x1="105" y1="62" x2="117" y2="62" stroke="#15181F" stroke-width="3.4" style={css(`transform-origin:111px 62px;transform:${v.browR ?? ""};transition:transform 400ms cubic-bezier(0.4,0,0.2,1)`)} />
                      {" "}
                      <path d="M93,94 q3.5,-2.5 7,0 q3.5,2.5 7,0" stroke="#15181F" stroke-width="2.3" style={css(`opacity:${v.mHmm ?? ""};transition:opacity 250ms`)} />
                      {" "}
                      <path d="M92,93 q8,7 16,0" stroke="#15181F" stroke-width="2.3" fill="#F5F4F0" style={css(`opacity:${v.mSmile ?? ""};transition:opacity 250ms`)} />
                      {" "}
                      <g style={css(`opacity:${v.mO ?? ""};transition:opacity 250ms`)}>
                        {" "}
                        <path d="M89,92 Q100,91 111,92 Q109,106 100,106 Q91,106 89,92 Z" fill="#6E2A1E" stroke="#15181F" stroke-width="2.2" />
                        {" "}
                        <path d="M90.5,93 Q100,92.4 109.5,93 L109,96 Q100,95.4 91,96 Z" fill="#F5F4F0" stroke="none" />
                        {" "}
                        <path d="M94,103 Q100,100 106,103 Q100,105.5 94,103 Z" fill="#D9776A" stroke="none" />
                        {" "}
                      </g>
                      {" "}
                    </g>
                    {" "}
                    <g style={css(`transform-origin:82px 128px;transform:rotate(${v.lU ?? ""});transition:transform 550ms cubic-bezier(0.4,0,0.2,1)`)}>
                      {" "}
                      <line x1="82" y1="128" x2="82" y2="154" stroke-width="10" stroke="#F5F4F0" />
                      {" "}
                      <line x1="82" y1="128" x2="82" y2="154" stroke-width="7" stroke="#8FAAE8" />
                      {" "}
                      <line x1="82" y1="154" x2="82" y2="160" stroke-width="9" stroke="#DCE5F7" stroke-linecap="butt" />
                      {" "}
                      <g style={css(`transform-origin:82px 160px;transform:rotate(${v.lF ?? ""});transition:transform 550ms cubic-bezier(0.4,0,0.2,1)`)}>
                        {" "}
                        <line x1="82" y1="160" x2="82" y2="190" stroke-width="8.5" stroke="#F5F4F0" />
                        {" "}
                        <line x1="82" y1="160" x2="82" y2="190" stroke-width="5.5" stroke="#D9A274" />
                        {" "}
                        <g style={css(`transform-origin:82px 194px;animation:${v.tapAnim ?? ""}`)}>
                          {" "}
                          <circle cx="82" cy="196" r="6" fill="#D9A274" stroke-width="2.4" />
                          {" "}
                          <line x1="82" y1="202" x2="82" y2="212" stroke="#D9A274" stroke-width="3.4" style={css(`opacity:${v.lFingerO ?? ""};transition:opacity 300ms`)} />
                          {" "}
                        </g>
                        {" "}
                      </g>
                      {" "}
                    </g>
                    {" "}
                  </g>
                  {" "}
                  <g style={css(`animation:${v.hopAnim ?? ""}`)}>
                    <g transform="rotate(-4 100 175)">
                      {" "}
                      <rect x="70" y="167" width="60" height="17" rx="4" fill="#15181F" stroke="#F5F4F0" stroke-width="1.6" />
                      {" "}
                      <circle cx="78.5" cy="174.2" r="3.4" fill="#F2C94C" stroke="none" />
                      {" "}
                      <rect x="76.9" y="177.2" width="3.2" height="2.4" rx="0.6" fill="#B5B1A8" stroke="none" />
                      {" "}
                      <text x="85" y="179" text-anchor="start" textLength="40" lengthAdjust="spacingAndGlyphs" stroke="none" fill="#F5F4F0" style={css("font:700 9.6px 'Space Grotesk',sans-serif")}>Idea Guy</text>
                      {" "}
                    </g>
                  </g>
                  {" "}
                  <g style={css(`opacity:${v.thinkO ?? ""};transition:opacity 350ms cubic-bezier(0.4,0,0.2,1)`)}>
                    {" "}
                    <circle cx="70" cy="36" r="3" stroke-width="2.5" />
                    {" "}
                    <circle cx="58" cy="22" r="5" stroke-width="2.5" />
                    {" "}
                    <path d="M-4,-2 C-16,-4 -18,-26 -2,-28 C0,-44 24,-46 30,-34 C40,-46 64,-40 62,-24 C76,-20 72,2 58,0 C54,12 30,12 26,4 C16,12 -2,8 -4,-2 Z" fill="#15181F" stroke-width="2.5" />
                    {" "}
                    <text x="29" y="-4" text-anchor="middle" stroke="none" fill="#8FAAE8" style={css("font:700 30px 'Space Grotesk',sans-serif")}>?</text>
                    {" "}
                  </g>
                  {" "}
                  <g style={css(`opacity:${v.youO ?? ""};transition:opacity 300ms cubic-bezier(0.4,0,0.2,1)`)}>
                    {" "}
                    <path d="M144,92 h72 a10,10 0 0 1 10,10 v18 a10,10 0 0 1 -10,10 h-46 l-12,12 l2,-12 h-16 a10,10 0 0 1 -10,-10 v-18 a10,10 0 0 1 10,-10 Z" fill="#F5F4F0" stroke="none" />
                    {" "}
                    <text x="180" y="117" text-anchor="middle" stroke="none" fill="#15181F" style={css("font:700 16px 'Space Grotesk',sans-serif")}>You?</text>
                    {" "}
                  </g>
                  {" "}
                  <g style={css(`opacity:${v.lidO ?? ""};transition:opacity 250ms`)}>
                    {" "}
                    <path d="M200,112 l8,-6 M204,124 l10,0 M200,136 l8,6" stroke="#8FAAE8" stroke-width="2.4" />
                    {" "}
                  </g>
                  {" "}
                  <g style={css(`opacity:${v.laughMarksO ?? ""};transition:opacity 250ms`)}>
                    {" "}
                    <path d="M140,48 l9,-7 M143,64 l12,-3 M60,48 l-9,-7 M57,64 l-12,-3" stroke="#8FAAE8" stroke-width="2.5" />
                    {" "}
                  </g>
                  {" "}
                  <g style={css(`opacity:${v.arrowO ?? ""};transition:opacity 250ms`)}>
                    {" "}
                    <path d="M160,62 C196,40 212,4 216,-30" stroke="#8FAAE8" stroke-width="2" stroke-dasharray="4 7" />
                    {" "}
                    <path d="M208,-24 l8,-8 l3,11" stroke="#8FAAE8" stroke-width="2" />
                    {" "}
                  </g>
                  {" "}
                  <g style={css(`opacity:${v.cheerO ?? ""};transition:opacity 250ms`)}>
                    {" "}
                    <path d="M30,34 l-8,-10 M48,18 l-3,-12 M152,18 l3,-12 M170,34 l8,-10" stroke="#8FAAE8" stroke-width="2.6" />
                    {" "}
                  </g>
                  {" "}
                </g>
                {" "}
              </svg>
              {" "}
            </div>
            {" "}
            <div style={css(`position:absolute;left:-12%;right:-12%;bottom:${v.shadowB ?? ""};height:34%;background:radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,0.55),transparent 70%);transition:all 2400ms cubic-bezier(0.65,0,0.35,1);opacity:${v.shadowO ?? ""}`)} />
            {" "}
            <div style={css(`position:relative;width:100%;height:100%;transform-style:preserve-3d;animation:${v.bobAnim ?? ""}`)}>
              {" "}
              <div style={css(`position:relative;width:100%;height:100%;transform-style:preserve-3d;transform:${v.tilt ?? ""};transition:transform 2400ms cubic-bezier(0.65,0,0.35,1)`)}>
                {" "}
                <div style={css(`position:absolute;left:0;right:0;top:100%;height:${v.baseD ?? ""};transform-origin:top center;transform:rotateX(90deg);transform-style:preserve-3d;background:linear-gradient(180deg,#CFCCC6 0%,#DCDAD5 30%,#D3D0CA 100%);border-radius:4px 4px 18px 18px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.6),inset 0 0 0 1px #B9B6AF`)}>
                  {" "}
                  <div style={css("position:absolute;left:0;right:0;top:0;height:3%;background:linear-gradient(180deg,#8C877D,#B9B6AF)")} />
                  {" "}
                  <div style={css("position:absolute;left:11%;right:11%;top:8%;height:50%;border-radius:6px;background:#2B2F3A;padding:0.8%;display:grid;grid-template-columns:repeat(14,1fr);grid-template-rows:repeat(6,1fr);gap:1.6px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.4)")}>
                    {" "}
                    {each(v.keys).map((k, $index) => (
                      <Fragment key={$index}>
                        <span style={css(`grid-column:span ${k.span ?? ""};border-radius:2px;background:linear-gradient(180deg,#1C1F26,#15181F);box-shadow:inset 0 -1px 0 rgba(255,255,255,0.06)`)} />
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                  <div style={css("position:absolute;left:3.5%;width:5%;top:8%;height:50%;border-radius:4px;background-image:radial-gradient(#9E9A92 0.8px,transparent 1px);background-size:5px 5px")} />
                  {" "}
                  <div style={css("position:absolute;right:3.5%;width:5%;top:8%;height:50%;border-radius:4px;background-image:radial-gradient(#9E9A92 0.8px,transparent 1px);background-size:5px 5px")} />
                  {" "}
                  <div style={css("position:absolute;left:34%;right:34%;top:63%;bottom:7%;border-radius:8px;background:linear-gradient(180deg,#D6D3CD,#CDCAC3);box-shadow:inset 0 0 0 1px #BCB8B0")} />
                  {" "}
                  <div style={css(`position:absolute;left:0;right:0;top:100%;height:${v.baseT ?? ""};transform-origin:top center;transform:rotateX(-90deg);background:linear-gradient(180deg,#CFCCC6 0%,#B9B6AF 55%,#9E9A92 100%);border-radius:0 0 14px 14px;box-shadow:inset 0 1px 0 #6B675F,inset 0 2px 0 rgba(255,255,255,0.35)`)}>
                    {" "}
                    <div style={css("position:absolute;left:43%;right:43%;top:0;height:50%;border-radius:0 0 10px 10px;background:linear-gradient(180deg,#8C877D,#A9A59C)")} />
                    {" "}
                    <div style={css("position:absolute;left:6%;bottom:-3px;width:7%;height:3px;border-radius:0 0 3px 3px;background:#2B2F3A")} />
                    {" "}
                    <div style={css("position:absolute;right:6%;bottom:-3px;width:7%;height:3px;border-radius:0 0 3px 3px;background:#2B2F3A")} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={css(`position:absolute;inset:0;transform-origin:bottom center;transform-style:preserve-3d;transform:${v.lid ?? ""};transition:transform 2200ms cubic-bezier(0.65,0,0.35,1) 150ms`)}>
                  {" "}
                  <div style={css(`position:absolute;left:0;right:0;top:0;height:${v.lidT ?? ""};transform-origin:top center;transform:rotateX(-90deg);background:linear-gradient(180deg,#E6E4DF 0%,#CFCCC6 60%,#B9B6AF 100%);border-radius:3px 3px 10px 10px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.8)`)} />
                  {" "}
                  <div style={css(`visibility:${v.screenVis ?? ""};transition:visibility 0s linear ${v.screenDelay ?? ""};position:absolute;inset:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:#0B0C0F;border-radius:14px 14px 3px 3px;padding:${v.bezel ?? ""} ${v.bezel ?? ""} ${v.chin ?? ""};box-shadow:0 0 0 1.5px #9E9A92,0 0 0 3px #CFCCC6`)}>
                    {" "}
                    <span style={css(`position:absolute;left:50%;top:calc(${v.bezel ?? ""} / 2);width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;background:#232833;box-shadow:0 0 0 1px #15181F`)} />
                    {" "}
                    <div style={css("position:relative;width:100%;height:100%;overflow:hidden;border-radius:4px;background:#F5F4F0")}>
                      {" "}
                      <iframe src={v.frameSrc} title="WPCodie preview" tabindex="-1" style={css(`position:absolute;left:0;top:0;width:1440px;height:900px;border:0;transform-origin:top left;transform:${v.frameScale ?? ""};pointer-events:none`)} />
                      {" "}
                      <div style={css("position:absolute;inset:0;background:linear-gradient(115deg,rgba(255,255,255,0.10) 0%,rgba(255,255,255,0.03) 38%,transparent 38.5%);pointer-events:none")} />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={css(`position:absolute;inset:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(-${v.lidT ?? ""}) rotateX(180deg);background:radial-gradient(120% 90% at 50% 30%,#E4E2DD 0%,#D3D0CA 55%,#C4C1BA 100%);border-radius:14px 14px 3px 3px;box-shadow:inset 0 0 0 1px #B9B6AF,inset 0 2px 0 rgba(255,255,255,0.5);display:grid;place-items:center`)}>
                    {" "}
                    <span style={css("font:700 clamp(28px,5vw,56px) 'Space Grotesk',sans-serif;color:#C4C1BA;text-shadow:0 1px 0 rgba(255,255,255,0.7),0 -1px 0 rgba(0,0,0,0.12);letter-spacing:-0.04em")}>W</span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <span class="scp0" onClick={v.skipIntro} style={css(`position:absolute;bottom:24px;right:32px;cursor:pointer;font-size:13px;color:#B5B1A8;opacity:${v.copyOpacity ?? ""}`)}>Skip intro</span>
        </div>
        </Fragment>
      ) : null}
      <header style={css("position:sticky;top:0;z-index:30;background:rgba(245,244,240,0.92);backdrop-filter:blur(8px);border-bottom:1px solid #E2DFD7")}>
        {" "}
        <div class="hdr" style={css("max-width:1280px;margin:0 auto;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap")}>
          {" "}
          <a href="#top" style={css("display:flex;align-items:center;gap:10px;color:#15181F")}>
            {" "}
            <span style={css("width:30px;height:30px;border-radius:8px;background:#2451B8;color:#F5F4F0;display:grid;place-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px")}>W</span>
            {" "}
            <span style={css("font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:19px;letter-spacing:-0.01em")}>WPCodie</span>
            {" "}
          </a>
          {" "}
          <nav class="hdr-nav" style={css("display:flex;gap:4px;flex-wrap:wrap")}>
            {" "}
            {each(v.nav).map((n, $index) => (
              <Fragment key={$index}>
                {" "}
                <a href={n.href} style={css(`padding:8px 14px;border-radius:8px;font-size:14px;font-weight:500;color:${n.color ?? ""};background:${n.bg ?? ""};transition:all 200ms cubic-bezier(0.4,0,0.2,1)`)}>{txt(n.label)}</a>
                {" "}
              </Fragment>
            ))}
            {" "}
          </nav>
          {" "}
          <a class="hdr-cta" href="#contact" style={css("display:inline-flex;--color-midnight:#F5F4F0")}>
            <Button>Start a project →</Button>
          </a>
          {" "}
          {/* Small screens: a menu button replaces the nav and the call to action (styles in page.css). */}
          <button type="button" class="hdr-toggle" aria-label={v.menuOpen ? "Close menu" : "Open menu"} aria-expanded={v.menuOpen ? "true" : "false"} aria-controls="mobile-menu" onClick={v.toggleMenu}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
              {v.menuOpen ? <path d="M5 5 L15 15 M15 5 L5 15" /> : <path d="M3 6 H17 M3 10 H17 M3 14 H17" />}
            </svg>
          </button>
        </div>
        {v.menuOpen ? (
          <div id="mobile-menu" class="hdr-panel">
            {each(v.nav).map((n, $index) => (
              <a key={$index} href={n.href} onClick={v.closeMenu} style={css(`color:${n.color ?? ""}`)}>{n.label}</a>
            ))}
            <a href="#contact" onClick={v.closeMenu} class="hdr-panel-cta" style={css("display:flex;--color-midnight:#F5F4F0")}>
              <Button size="lg">Start a project →</Button>
            </a>
          </div>
        ) : null}
      </header>
      <section style={css("position:relative;overflow:hidden;background-image:radial-gradient(#DAD7CF 1px,transparent 1px);background-size:24px 24px")}>
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:88px 32px 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,480px),1fr));gap:56px;align-items:center")}>
          {" "}
          <div style={css("display:flex;flex-direction:column;gap:28px")}>
            {" "}
            <div data-reveal="1" style={css("display:flex;gap:10px;align-items:center;font-size:13px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;color:#8C877D")}>
              {" "}
              <span style={css("color:#2451B8;font-weight:600")}>Advise</span>
              <span>·</span>
              <span>Engineer</span>
              <span>·</span>
              <span>AI</span>
              <span>·</span>
              <span>Software</span>
              {" "}
            </div>
            {" "}
            <h1 data-reveal="1" style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2.6rem,5.4vw,4.5rem);line-height:1.02;letter-spacing:-0.035em;text-wrap:balance")}>
              {"Clear direction first. "}
              <span style={css("color:#2451B8")}>Working software</span>
              {" next."}
            </h1>
            {" "}
            <p data-reveal="1" style={css("margin:0;font-size:1.125rem;line-height:1.6;color:#4A4740;max-width:560px;text-wrap:pretty")}>WPCodie is a technology advisory and engineering studio. We help teams choose the right path for their technology, then design and ship the AI products and custom software that make it real.</p>
            {" "}
            <div data-reveal="1" style={css("display:flex;gap:12px;flex-wrap:wrap")}>
              {" "}
              <a href="#contact" style={css("display:inline-flex;--color-midnight:#F5F4F0")}>
                <Button size="lg">Start a project →</Button>
              </a>
              {" "}
              <a href="#capabilities" style={css("display:inline-flex;white-space:nowrap")}>
                <Button variant="secondary" size="lg">See what we build</Button>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={css("position:relative;width:100%;max-width:520px;aspect-ratio:1;justify-self:center")}>
            {" "}
            <div style={css("position:absolute;inset:6%;border:1px dashed #C9C5BB;border-radius:50%")} />
            {" "}
            <div style={css("position:absolute;inset:24%;border:1px solid #E2DFD7;border-radius:50%")} />
            {" "}
            <div ref={v.ringRef} style={css("position:absolute;inset:0;--r:0deg")}>
              {" "}
              {each(v.orbit).map((o, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={css(`position:absolute;left:${o.x ?? ""};top:${o.y ?? ""};transform:translate(-50%,-50%)`)}>
                  {" "}
                  <div style={css("transform:rotate(var(--r));background:#F5F4F0;border:1px solid #D6D3CB;border-radius:10px;padding:10px 14px;display:flex;flex-direction:column;gap:2px;box-shadow:0 4px 6px rgba(21,24,31,0.05);white-space:nowrap")}>
                    {" "}
                    <span style={css("font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:15px")}>{txt(o.title)}</span>
                    {" "}
                    <span style={css("font-size:12px;color:#8C877D")}>{txt(o.sub)}</span>
                    {" "}
                  </div>
                  {" "}
                </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div style={css("position:absolute;left:50%;top:50%;width:26%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:#2451B8;color:#F5F4F0;display:grid;place-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(1.4rem,2.6vw,2rem);letter-spacing:-0.02em;box-shadow:0 16px 32px rgba(36,81,184,0.25)")}>WP</div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:16px 32px 48px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap")}>
          {" "}
          <div style={css("display:flex;gap:10px;flex-wrap:wrap")}>
            {" "}
            {each(v.heroTags).map((t, $index) => (
              <Fragment key={$index}>
                {" "}
                <span style={css("white-space:nowrap;font-size:13px;font-weight:500;padding:8px 14px;border:1px solid #D6D3CB;border-radius:999px;background:#F5F4F0;color:#2B2F3A")}>{txt(t)}</span>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <span style={css("display:flex;align-items:center;gap:10px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#8C877D")}>
            <span style={css("width:1px;height:28px;background:#2451B8;animation:wpPulse 1.8s ease-in-out infinite")} />
            Scroll
          </span>
          {" "}
        </div>
      </section>
      <section id="capabilities" ref={v.capRef} style={css(`position:relative;height:${v.capHeight ?? ""};background:#15181F;color:#F5F4F0`)}>
        {" "}
        <div style={css("position:sticky;top:0;height:100vh;overflow:hidden;display:flex;flex-direction:column;justify-content:center;gap:clamp(12px,3vh,40px);padding:64px 0 clamp(8px,3vh,48px)")}>
          {" "}
          <div style={css("max-width:1280px;width:100%;margin:0 auto;padding:0 32px;display:flex;justify-content:space-between;align-items:end;gap:24px;flex-wrap:wrap")}>
            {" "}
            <div style={css("display:flex;flex-direction:column;gap:14px;max-width:720px")}>
              {" "}
              <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#8FAAE8")}>Capabilities</span>
              {" "}
              <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(1.5rem,min(3.6vw,5vh),2.75rem);line-height:1.1;letter-spacing:-0.02em;text-wrap:balance")}>From the first technical decision to software in production.</h2>
              {" "}
            </div>
            {" "}
            <div style={css("display:flex;flex-direction:column;align-items:end;gap:8px")}>
              {" "}
              <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.5rem;font-weight:600")}>{txt(v.capCounter)}</span>
              {" "}
              <div style={css("width:160px;height:2px;background:#2B2F3A;position:relative")}>
                <div ref={v.capBarRef} style={css("position:absolute;left:0;top:0;bottom:0;width:0%;background:#8FAAE8")} />
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={css("width:100%;overflow:hidden")}>
            {" "}
            <div ref={v.trackRef} style={css("display:flex;gap:20px;padding:0 max(32px,calc((100vw - 1216px)/2));will-change:transform")}>
              {" "}
              {each(v.caps).map((c, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={css(`flex:0 0 min(400px,82vw);border:1px solid ${c.border ?? ""};background:${c.bg ?? ""};border-radius:16px;padding:clamp(18px,3vh,28px);display:flex;flex-direction:column;gap:clamp(8px,1.6vh,14px);transition:border-color 300ms cubic-bezier(0.4,0,0.2,1),background 300ms cubic-bezier(0.4,0,0.2,1)`)}>
                  {" "}
                  <div style={css("position:relative;height:clamp(56px,12vh,130px);flex-shrink:0;border-radius:10px;background:#11141A;border:1px solid #232833;overflow:hidden;background-image:radial-gradient(#232833 1px,transparent 1px);background-size:14px 14px")}>
                    {" "}
                    {c.isAI ? (
                      <Fragment>
                        {" "}
                        <div style={css("position:absolute;left:50%;top:50%;width:54px;height:54px;border-radius:50%;border:1px solid #8FAAE8;animation:wpRing 2.4s ease-out infinite")} />
                        {" "}
                        <div style={css("position:absolute;left:22%;top:50%;width:28%;height:1px;background:#3A3F4C")} />
                        {" "}
                        <div style={css("position:absolute;left:50%;top:50%;width:28%;height:1px;background:#3A3F4C")} />
                        {" "}
                        <div style={css("position:absolute;left:50%;top:22%;width:1px;height:28%;background:#3A3F4C")} />
                        {" "}
                        <div style={css("position:absolute;left:50%;top:50%;width:46px;height:46px;transform:translate(-50%,-50%);border-radius:50%;background:#2451B8;display:grid;place-items:center;font:600 12px 'Space Grotesk',sans-serif;color:#F5F4F0")}>AI</div>
                        {" "}
                        <div style={css("position:absolute;left:14%;top:50%;transform:translateY(-50%);padding:6px 9px;border-radius:6px;background:#1F2430;border:1px solid #3A3F4C;font-size:10px;color:#D9D6CE")}>Docs</div>
                        {" "}
                        <div style={css("position:absolute;right:12%;top:50%;transform:translateY(-50%);padding:6px 9px;border-radius:6px;background:#1F2430;border:1px solid #8FAAE8;font-size:10px;color:#F5F4F0")}>Answer</div>
                        {" "}
                        <div style={css("position:absolute;left:50%;top:12%;transform:translateX(-50%);padding:6px 9px;border-radius:6px;background:#1F2430;border:1px solid #3A3F4C;font-size:10px;color:#D9D6CE")}>Rules</div>
                        {" "}
                      </Fragment>
                    ) : null}
                    {" "}
                    {c.isSW ? (
                      <Fragment>
                        {" "}
                        <div style={css("position:absolute;inset:22px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:8px")}>
                        {" "}
                        <div style={css("border-radius:6px;animation:wpLit 3.6s infinite 0s")} />
                        <div style={css("border-radius:6px;animation:wpLit 3.6s infinite .6s")} />
                        <div style={css("border-radius:6px;animation:wpLit 3.6s infinite 1.2s")} />
                        {" "}
                        <div style={css("border-radius:6px;animation:wpLit 3.6s infinite 3s")} />
                        <div style={css("border-radius:6px;animation:wpLit 3.6s infinite 2.4s")} />
                        <div style={css("border-radius:6px;animation:wpLit 3.6s infinite 1.8s")} />
                        {" "}
                      </div>
                        {" "}
                      </Fragment>
                    ) : null}
                    {" "}
                    {c.isWeb ? (
                      <Fragment>
                        {" "}
                        <div style={css("position:absolute;inset:16px 22px;border:1px solid #3A3F4C;border-radius:8px;background:#181B23;display:flex;flex-direction:column;overflow:hidden")}>
                        {" "}
                        <div style={css("height:18px;border-bottom:1px solid #2B2F3A;display:flex;align-items:center;gap:4px;padding:0 8px")}>
                          <span style={css("width:5px;height:5px;border-radius:50%;background:#3A3F4C")} />
                          <span style={css("width:5px;height:5px;border-radius:50%;background:#3A3F4C")} />
                          <span style={css("width:5px;height:5px;border-radius:50%;background:#3A3F4C")} />
                          <span style={css("margin-left:8px;height:6px;width:40%;border-radius:3px;background:#232833")} />
                        </div>
                        {" "}
                        <div style={css("flex:1;display:grid;grid-template-columns:24% 1fr;gap:8px;padding:10px")}>
                          {" "}
                          <div style={css("display:flex;flex-direction:column;gap:5px")}>
                            <span style={css("height:5px;border-radius:3px;background:#2451B8")} />
                            <span style={css("height:5px;border-radius:3px;background:#2B2F3A")} />
                            <span style={css("height:5px;border-radius:3px;background:#2B2F3A")} />
                          </div>
                          {" "}
                          <div style={css("display:flex;align-items:flex-end;gap:6px")}>
                            {" "}
                            <span style={css("flex:1;border-radius:3px 3px 0 0;background:#2B2F3A;height:40%")} />
                            <span style={css("flex:1;border-radius:3px 3px 0 0;background:#8FAAE8;height:70%;animation:wpPulse 2.4s infinite")} />
                            <span style={css("flex:1;border-radius:3px 3px 0 0;background:#2B2F3A;height:55%")} />
                            <span style={css("flex:1;border-radius:3px 3px 0 0;background:#2451B8;height:90%")} />
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </div>
                        {" "}
                      </Fragment>
                    ) : null}
                    {" "}
                    {c.isMob ? (
                      <Fragment>
                        {" "}
                        <div style={css("position:absolute;left:50%;top:14px;bottom:-20px;width:84px;transform:translateX(-50%);border:1px solid #3A3F4C;border-radius:14px;background:#181B23;overflow:hidden;padding:14px 8px 0")}>
                        {" "}
                        <div style={css("display:flex;flex-direction:column;gap:6px;animation:wpRow 2.4s cubic-bezier(0.4,0,0.2,1) infinite alternate")}>
                          {" "}
                          <span style={css("height:28px;border-radius:6px;background:#2451B8")} />
                          <span style={css("height:28px;border-radius:6px;background:#232833")} />
                          <span style={css("height:28px;border-radius:6px;background:#232833")} />
                          <span style={css("height:28px;border-radius:6px;background:#232833")} />
                          {" "}
                        </div>
                        {" "}
                      </div>
                        {" "}
                      </Fragment>
                    ) : null}
                    {" "}
                    {c.isAuto ? (
                      <Fragment>
                        {" "}
                        <div style={css("position:absolute;left:12%;right:12%;top:50%;height:1px;background:#3A3F4C")}>
                        {" "}
                        <span style={css("position:absolute;top:-4px;width:9px;height:9px;margin-left:-4px;border-radius:50%;background:#8FAAE8;animation:wpTravel 2.8s linear infinite")} />
                        {" "}
                      </div>
                        {" "}
                        <div style={css("position:absolute;left:12%;right:12%;top:50%;transform:translateY(-50%);display:flex;justify-content:space-between")}>
                        {" "}
                        <span style={css("width:26px;height:26px;margin-left:-13px;border-radius:6px;background:#1F2430;border:1px solid #3A3F4C")} />
                        <span style={css("width:26px;height:26px;border-radius:6px;background:#1F2430;border:1px solid #3A3F4C")} />
                        <span style={css("width:26px;height:26px;border-radius:50%;background:#1F2430;border:1px solid #8FAAE8;animation:wpBlink 2.8s infinite")} />
                        <span style={css("width:26px;height:26px;margin-right:-13px;border-radius:6px;background:#2451B8")} />
                        {" "}
                      </div>
                        {" "}
                      </Fragment>
                    ) : null}
                    {" "}
                    {c.isAPI ? (
                      <Fragment>
                        {" "}
                        <div style={css("position:absolute;left:16px;top:28px;bottom:28px;width:62px;border-radius:8px;background:#1F2430;border:1px solid #3A3F4C;display:grid;place-items:center;font:600 10px 'Space Grotesk',sans-serif;color:#D9D6CE")}>APP</div>
                        {" "}
                        <div style={css("position:absolute;right:16px;top:28px;bottom:28px;width:62px;border-radius:8px;background:#2451B8;display:grid;place-items:center;font:600 10px 'Space Grotesk',sans-serif;color:#F5F4F0")}>API</div>
                        {" "}
                        <div style={css("position:absolute;left:78px;right:78px;top:42%;height:1px;background:#3A3F4C")}>
                        <span style={css("position:absolute;top:-3px;width:7px;height:7px;border-radius:50%;background:#8FAAE8;animation:wpTravel 1.8s linear infinite")} />
                      </div>
                        {" "}
                        <div style={css("position:absolute;left:78px;right:78px;top:58%;height:1px;background:#3A3F4C;transform:scaleX(-1)")}>
                        <span style={css("position:absolute;top:-3px;width:7px;height:7px;border-radius:50%;background:#F5F4F0;animation:wpTravel 1.8s linear infinite .9s")} />
                      </div>
                        {" "}
                      </Fragment>
                    ) : null}
                    {" "}
                    {c.isCon ? (
                      <Fragment>
                        {" "}
                        <div style={css("position:absolute;left:18px;right:18px;top:58%;height:2px;background:#2B2F3A")}>
                        <div style={css("position:absolute;left:0;top:0;bottom:0;background:#2451B8;--w:66%;animation:wpGrow 4s cubic-bezier(0.4,0,0.2,1) infinite alternate")} />
                      </div>
                        {" "}
                        <div style={css("position:absolute;left:18px;right:18px;top:58%;transform:translateY(-50%);display:flex;justify-content:space-between")}>
                        {" "}
                        <span style={css("width:12px;height:12px;border-radius:50%;background:#2451B8")} />
                        <span style={css("width:12px;height:12px;border-radius:50%;background:#2451B8")} />
                        <span style={css("width:12px;height:12px;border-radius:50%;background:#8FAAE8;animation:wpBlink 2s infinite")} />
                        <span style={css("width:12px;height:12px;border-radius:50%;background:#2B2F3A")} />
                        {" "}
                      </div>
                        {" "}
                        <div style={css("position:absolute;left:18px;right:18px;top:24%;display:flex;justify-content:space-between;font-size:10px;color:#B5B1A8")}>
                        <span>Discover</span>
                        <span>Define</span>
                        <span>Design</span>
                        <span>Build</span>
                      </div>
                        {" "}
                      </Fragment>
                    ) : null}
                    {" "}
                  </div>
                  {" "}
                  <span style={css("font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:600;color:#8FAAE8")}>{txt(c.num)}{" / 07"}</span>
                  {" "}
                  <h3 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(1.25rem,2.8vh,1.625rem);letter-spacing:-0.02em")}>{txt(c.title)}</h3>
                  {" "}
                  <p style={css("margin:0;font-size:clamp(13px,1.9vh,15px);line-height:1.5;color:#C9C6BE")}>{txt(c.body)}</p>
                  {" "}
                  <div style={css("display:flex;gap:8px;flex-wrap:wrap;margin-top:auto")}>
                    {" "}
                    {each(c.tags).map((t, $index) => (
                      <Fragment key={$index}>
                        <span style={css("font-size:12px;font-weight:500;padding:6px 10px;border-radius:6px;border:1px solid #3A3F4C;color:#D9D6CE")}>{txt(t)}</span>
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
              <div style={css("flex:0 0 min(400px,82vw);background:#2451B8;border-radius:16px;padding:clamp(18px,3vh,28px);display:flex;flex-direction:column;gap:16px")}>
                {" "}
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase")}>Next</span>
                {" "}
                <h3 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:1.75rem;letter-spacing:-0.02em")}>A single team from start to finish.</h3>
                {" "}
                <p style={css("margin:0;font-size:15px;line-height:1.6")}>Advice, architecture, and engineering come from the same people, so context carries from the first workshop to the final release.</p>
                {" "}
                <a href="#contact" style={css("margin-top:auto;display:inline-flex;--color-accent:#F5F4F0;--color-midnight:#15181F")}>
                  <Button>Start a project →</Button>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="what">
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:112px 32px;display:flex;flex-direction:column;gap:56px")}>
          {" "}
          <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:14px;max-width:760px")}>
            {" "}
            <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>
              <b>01</b>
              {" What we do"}
            </span>
            {" "}
            <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2rem,3.6vw,2.75rem);line-height:1.1;letter-spacing:-0.02em")}>Advice and engineering, owned by one team.</h2>
            {" "}
            <p style={css("margin:0;font-size:1.125rem;line-height:1.6;color:#4A4740;text-wrap:pretty")}>We take organizations from a business question to a running system: settling the direction first, then shaping the architecture and building the product.</p>
            {" "}
          </div>
          {" "}
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:24px")}>
            {" "}
            {each(v.disciplines).map((d, $index) => (
              <Fragment key={$index}>
                {" "}
                <div data-reveal="1" style={css(`border:1px solid #E2DFD7;background:${d.bg ?? ""};color:${d.fg ?? ""};border-radius:16px;padding:40px;display:flex;flex-direction:column;gap:18px`)}>
                {" "}
                <div style={css("display:flex;align-items:baseline;gap:14px")}>
                  <span style={css(`font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:600;color:${d.accent ?? ""}`)}>{txt(d.num)}</span>
                  <span style={css("font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:600;letter-spacing:-0.02em")}>{txt(d.title)}</span>
                </div>
                {" "}
                <p style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-size:1.25rem;font-weight:500;line-height:1.35")}>{txt(d.lead)}</p>
                {" "}
                <p style={css("margin:0;font-size:15px;line-height:1.6;opacity:0.85")}>{txt(d.body)}</p>
                {" "}
                <div style={css("display:flex;gap:8px;flex-wrap:wrap;padding-top:8px")}>
                  {" "}
                  {each(d.tags).map((t, $index) => (
                    <Fragment key={$index}>
                      <span style={css(`font-size:13px;padding:6px 12px;border-radius:6px;border:1px solid ${d.tagBorder ?? ""}`)}>{txt(t)}</span>
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));border-top:1px solid #D6D3CB")}>
            {" "}
            {each(v.steps).map((s, $index) => (
              <Fragment key={$index}>
                {" "}
                <div data-reveal="1" style={css("padding:24px 20px 8px 0;display:flex;flex-direction:column;gap:10px;border-top:2px solid #2451B8;margin-top:-1px")}>
                {" "}
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#8C877D")}>{"Step "}{txt(s.num)}</span>
                {" "}
                <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.25rem;font-weight:600")}>{txt(s.title)}</span>
                {" "}
                <span style={css("font-size:14px;line-height:1.6;color:#4A4740")}>{txt(s.body)}</span>
                {" "}
              </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="ai" style={css("background:#EEECE6;border-top:1px solid #E2DFD7")}>
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:112px 32px;display:flex;flex-direction:column;gap:48px")}>
          {" "}
          <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:14px;max-width:760px")}>
            {" "}
            <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>
              <b>02</b>
              {" AI & intelligent applications"}
            </span>
            {" "}
            <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2rem,3.6vw,2.75rem);line-height:1.1;letter-spacing:-0.02em")}>AI that holds up after the pilot.</h2>
            {" "}
            <p style={css("margin:0;font-size:1.125rem;line-height:1.6;color:#4A4740;text-wrap:pretty")}>We build practical AI that plugs into the way your business already operates. The problem decides where AI goes — not the hype cycle.</p>
            {" "}
          </div>
          {" "}
          <div ref={v.aiRef} style={css("position:relative;background:#15181F;border-radius:16px;padding:28px;display:flex;flex-direction:column;gap:20px;overflow:hidden")}>
            {" "}
            <div style={css("display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#B5B1A8")}>
              <span>How an intelligent system moves</span>
              <span style={css("color:#8FAAE8;display:flex;align-items:center;gap:8px")}>
                <span style={css("width:7px;height:7px;border-radius:50%;background:#8FAAE8;animation:wpPulse 1.4s infinite")} />
                {txt(v.aiLabel)}
              </span>
            </div>
            {" "}
            <div style={css("position:relative;height:2px;background:#2B2F3A;margin:0 4px")}>
              {" "}
              <div style={css(`position:absolute;left:0;top:0;bottom:0;width:${v.aiProgress ?? ""};background:#2451B8;transition:width 900ms cubic-bezier(0.4,0,0.2,1)`)} />
              {" "}
              <span style={css(`position:absolute;top:-4px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#8FAAE8;box-shadow:0 0 0 4px rgba(143,170,232,0.2);left:${v.aiProgress ?? ""};transition:left 900ms cubic-bezier(0.4,0,0.2,1)`)} />
              {" "}
            </div>
            {" "}
            <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:12px")}>
              {" "}
              {each(v.pipeline).map((p, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={css(`border:1px solid ${p.border ?? ""};background:${p.bg ?? ""};border-radius:12px;padding:22px;display:flex;flex-direction:column;gap:12px;transform:${p.lift ?? ""};transition:all 500ms cubic-bezier(0.4,0,0.2,1)`)}>
                  {" "}
                  <div style={css("display:flex;justify-content:space-between;align-items:center")}>
                    <span style={css(`font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:600;color:${p.numColor ?? ""}`)}>{txt(p.num)}</span>
                    <span style={css(`font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:${p.numColor ?? ""}`)}>{txt(p.state)}</span>
                  </div>
                  {" "}
                  <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.375rem;font-weight:600;color:#F5F4F0")}>{txt(p.title)}</span>
                  {" "}
                  <span style={css("font-size:14px;line-height:1.6;color:#C9C6BE")}>{txt(p.body)}</span>
                  {" "}
                  <div style={css("display:flex;flex-direction:column;gap:5px;margin-top:auto")}>
                    {" "}
                    {each(p.signals).map((s, $index) => (
                      <Fragment key={$index}>
                        <div style={css("height:5px;border-radius:3px;background:#2B2F3A;overflow:hidden")}>
                        <div style={css(`height:100%;width:${s.w ?? ""};background:${s.c ?? ""};border-radius:3px;transition:width 700ms cubic-bezier(0.4,0,0.2,1) ${s.d ?? ""}`)} />
                      </div>
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:20px")}>
            {" "}
            {each(v.aiCards).map((a, $index) => (
              <Fragment key={$index}>
                {" "}
                <div class="scp1" data-reveal="1" style={css("background:#F5F4F0;border:1px solid #E2DFD7;border-radius:12px;padding:32px;display:flex;flex-direction:column;gap:14px;transition:transform 250ms cubic-bezier(0.4,0,0.2,1),box-shadow 250ms cubic-bezier(0.4,0,0.2,1)")}>
                {" "}
                <h3 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:1.375rem;letter-spacing:-0.01em")}>{txt(a.title)}</h3>
                {" "}
                <p style={css("margin:0;font-size:15px;line-height:1.6;color:#4A4740")}>{txt(a.body)}</p>
                {" "}
                <div style={css("margin-top:auto;background:#EEECE6;border-radius:8px;padding:16px 18px;display:flex;flex-direction:column;gap:6px")}>
                  {" "}
                  <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>In practice</span>
                  {" "}
                  <span style={css("font-size:14px;line-height:1.55;color:#2B2F3A")}>{txt(a.example)}</span>
                  {" "}
                </div>
                {" "}
              </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="applications">
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:112px 32px;display:flex;flex-direction:column;gap:48px")}>
          {" "}
          <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:14px;max-width:760px")}>
            {" "}
            <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>
              <b>03</b>
              {" Application development"}
            </span>
            {" "}
            <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2rem,3.6vw,2.75rem);line-height:1.1;letter-spacing:-0.02em")}>Idea in, product out.</h2>
            {" "}
            <p style={css("margin:0;font-size:1.125rem;line-height:1.6;color:#4A4740;text-wrap:pretty")}>We ship whole products, not just code: definition, architecture, engineering, release, and the operations that keep them healthy.</p>
            {" "}
          </div>
          {" "}
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(max(300px,calc(50% - 10px)),1fr));gap:20px")}>
            {" "}
            {each(v.apps).map((a, $index) => (
              <Fragment key={$index}>
                {" "}
                <div data-reveal="1" onMouseEnter={a.enter} onMouseLeave={a.leave} onClick={a.enter} style={css(`cursor:default;border:1px solid ${a.border ?? ""};border-radius:12px;padding:32px;display:flex;flex-direction:column;gap:14px;background:${a.bg ?? ""};box-shadow:${a.shadow ?? ""};transition:border-color 250ms cubic-bezier(0.4,0,0.2,1),background 250ms cubic-bezier(0.4,0,0.2,1),box-shadow 250ms cubic-bezier(0.4,0,0.2,1)`)}>
                {" "}
                <span style={css("width:44px;height:44px;border-radius:10px;background:#E3E8F4;color:#2451B8;display:grid;place-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13px")}>{txt(a.mark)}</span>
                {" "}
                <h3 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:1.375rem")}>{txt(a.title)}</h3>
                {" "}
                <p style={css("margin:0;font-size:15px;line-height:1.6;color:#4A4740")}>{txt(a.body)}</p>
                {" "}
                <div style={css(`display:flex;align-items:center;gap:8px;font-size:13px;font-weight:500;color:#2451B8;opacity:${a.hintOpacity ?? ""};transition:opacity 200ms cubic-bezier(0.4,0,0.2,1)`)}>
                  <span>Hover for details</span>
                  <span>+</span>
                </div>
                {" "}
                <div style={css(`display:grid;grid-template-rows:${a.rows ?? ""};transition:grid-template-rows 300ms cubic-bezier(0.4,0,0.2,1)`)}>
                  {" "}
                  <div style={css("overflow:hidden;min-height:0")}>
                    {" "}
                    <div style={css(`display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:0 20px;padding-top:4px;opacity:${a.listOpacity ?? ""};transform:${a.listShift ?? ""};transition:opacity 300ms cubic-bezier(0.4,0,0.2,1),transform 300ms cubic-bezier(0.4,0,0.2,1)`)}>
                      {" "}
                      {each(a.points).map((p, $index) => (
                        <Fragment key={$index}>
                          <span style={css("font-size:14px;padding:9px 0;border-top:1px solid #E2DFD7;display:flex;gap:10px")}>
                          <span style={css("color:#2451B8")}>→</span>
                          {txt(p)}
                        </span>
                        </Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="consulting" style={css("background:#EEECE6;border-top:1px solid #E2DFD7")}>
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:112px 32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:64px;align-items:start")}>
          {" "}
          <div style={css("display:flex;flex-direction:column;gap:24px")}>
            {" "}
            <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:14px")}>
              {" "}
              <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>
                <b>04</b>
                {" Technology consulting"}
              </span>
              {" "}
              <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2rem,3.6vw,2.75rem);line-height:1.1;letter-spacing:-0.02em")}>Understand first. Build second.</h2>
              {" "}
              <p style={css("margin:0;font-size:1.125rem;line-height:1.6;color:#4A4740;text-wrap:pretty")}>Good technology begins with a well-understood problem. We help teams weigh options, set technical direction, and draw up a roadmap before any development starts.</p>
              {" "}
            </div>
            {" "}
            <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:0;border-top:1px solid #D6D3CB")}>
              {" "}
              {each(v.deliverables).map((d, $index) => (
                <Fragment key={$index}>
                  <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.0625rem;font-weight:500;padding:13px 0;border-bottom:1px solid #D6D3CB;display:flex;gap:12px")}>
                  <span style={css("color:#2451B8")}>✓</span>
                  {txt(d)}
                </span>
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <p data-reveal="1" style={css("margin:0;font-size:15px;line-height:1.6;color:#4A4740")}>Our engagements end in something usable: decisions, architecture, and a plan an engineering team can pick up — whether that team is ours or yours.</p>
            {" "}
            <a href="#contact" style={css("display:inline-flex;align-self:flex-start")}>
              <Button variant="secondary">Discuss your project</Button>
            </a>
            {" "}
          </div>
          {" "}
          <div style={css("display:flex;flex-direction:column;position:relative")}>
            {" "}
            <div style={css("position:absolute;left:19px;top:28px;bottom:28px;width:1px;background:#C9C5BB")} />
            {" "}
            {each(v.phases).map((p, $index) => (
              <Fragment key={$index}>
                {" "}
                <div data-reveal="1" style={css("position:relative;display:grid;grid-template-columns:40px 1fr;gap:20px;padding:18px 0")}>
                {" "}
                <span style={css("width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:14px;background:#2451B8;color:#F5F4F0")}>{txt(p.num)}</span>
                {" "}
                <div style={css("display:flex;flex-direction:column;gap:6px;background:#F5F4F0;border:1px solid #E2DFD7;border-radius:12px;padding:18px 20px")}>
                  <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.25rem;font-weight:600")}>{txt(p.title)}</span>
                  <span style={css("font-size:14px;line-height:1.6;color:#4A4740")}>{txt(p.body)}</span>
                </div>
                {" "}
              </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="systems" ref={v.flowRef} style={css("position:relative;height:320vh;background:#15181F;color:#F5F4F0")}>
        {" "}
        <div style={css("position:sticky;top:0;height:100vh;overflow:hidden;display:flex;flex-direction:column;justify-content:center;gap:clamp(16px,4vh,48px);padding:clamp(56px,8vh,80px) 0 clamp(16px,3vh,32px)")}>
          {" "}
          <div style={css("max-width:1280px;width:100%;margin:0 auto;padding:0 32px;display:flex;flex-direction:column;gap:14px")}>
            {" "}
            <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#8FAAE8")}>
              <b>05</b>
              {" Ideas into systems"}
            </span>
            {" "}
            <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(1.5rem,min(3.6vw,5vh),2.75rem);line-height:1.1;letter-spacing:-0.02em")}>An idea is only the starting point.</h2>
            {" "}
            <p style={css("margin:0;font-size:1.0625rem;line-height:1.6;color:#C9C6BE;max-width:620px")}>Keep scrolling. A rough idea comes in on the left and leaves on the right as a deployed, intelligent system.</p>
            {" "}
          </div>
          {" "}
          <div style={css("max-width:1280px;width:100%;margin:0 auto;padding:0 32px;display:flex;flex-direction:column;gap:24px")}>
            {" "}
            <div style={css("position:relative;height:2px;background:#2B2F3A")}>
              <div ref={v.flowBarRef} style={css("position:absolute;left:0;top:0;bottom:0;width:0%;background:#2451B8")} />
            </div>
            {" "}
            <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:12px")}>
              {" "}
              {each(v.flow).map((f, $index) => (
                <Fragment key={$index}>
                  {" "}
                  <div style={css(`border:1px solid ${f.border ?? ""};background:${f.bg ?? ""};border-radius:12px;padding:clamp(12px,2.2vh,20px);min-height:clamp(110px,22vh,190px);display:flex;flex-direction:column;gap:clamp(6px,1.2vh,12px);opacity:${f.opacity ?? ""};transform:${f.transform ?? ""};transition:all 400ms cubic-bezier(0.4,0,0.2,1)`)}>
                  {" "}
                  <span style={css(`font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:600;color:${f.numColor ?? ""}`)}>{txt(f.num)}</span>
                  {" "}
                  <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.25rem;font-weight:600")}>{txt(f.title)}</span>
                  {" "}
                  <div style={css("display:flex;flex-direction:column;gap:6px;margin-top:auto")}>
                    {" "}
                    {each(f.items).map((i, $index) => (
                      <Fragment key={$index}>
                        <span style={css("font-size:12px;padding:5px 8px;border-radius:6px;background:rgba(245,244,240,0.08);color:#D9D6CE")}>{txt(i)}</span>
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div style={css("display:flex;justify-content:space-between;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:#B5B1A8")}>
              <span>Idea</span>
              <span>Impact</span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="principles">
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:112px 32px;display:flex;flex-direction:column;gap:48px")}>
          {" "}
          <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:14px;max-width:760px")}>
            {" "}
            <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>
              <b>06</b>
              {" How we operate"}
            </span>
            {" "}
            <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2rem,3.6vw,2.75rem);line-height:1.1;letter-spacing:-0.02em")}>Technology decisions you can defend.</h2>
            {" "}
            <p style={css("margin:0;font-size:1.125rem;line-height:1.6;color:#4A4740")}>Four principles guide every engagement, from the first workshop to the production release.</p>
            {" "}
          </div>
          {" "}
          <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:20px")}>
            {" "}
            {each(v.principles).map((p, $index) => (
              <Fragment key={$index}>
                {" "}
                <div data-reveal="1" style={css("background:#EEECE6;border:1px solid #E2DFD7;border-radius:12px;padding:32px 28px;display:flex;flex-direction:column;gap:14px;min-height:240px")}>
                {" "}
                <span style={css("font-family:'Space Grotesk',sans-serif;font-size:2.25rem;font-weight:600;color:#2451B8;letter-spacing:-0.02em")}>{txt(p.num)}</span>
                {" "}
                <h3 style={css("margin:auto 0 0;font-family:'Space Grotesk',sans-serif;font-size:1.25rem;font-weight:600")}>{txt(p.title)}</h3>
                {" "}
                <span style={css("font-size:15px;line-height:1.6;color:#4A4740")}>{txt(p.body)}</span>
                {" "}
              </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="work" style={css("background:#EEECE6;border-top:1px solid #E2DFD7")}>
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:112px 32px;display:flex;flex-direction:column;gap:72px")}>
          {" "}
          <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:14px;max-width:760px")}>
            {" "}
            <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>
              <b>07</b>
              {" Selected work"}
            </span>
            {" "}
            <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2rem,3.6vw,2.75rem);line-height:1.1;letter-spacing:-0.02em")}>Systems our clients run every day.</h2>
            {" "}
            <p style={css("margin:0;font-size:1.125rem;line-height:1.6;color:#4A4740")}>Two recent builds: one connects a law firm to its clients, the other takes admin off a business owner's plate.</p>
            {" "}
          </div>
          {" "}
          <div ref={v.w1Ref} style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,540px),1fr));gap:48px;align-items:center")}>
            {" "}
            <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:20px;max-width:520px")}>
              {" "}
              <div style={css("display:flex;gap:8px;flex-wrap:wrap")}>
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>Case study 01</span>
                <span style={css("font-size:12px;color:#8C877D")}>·</span>
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#6B675F")}>Legal · CRM + client app</span>
              </div>
              {" "}
              <h3 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(1.75rem,3vw,2.25rem);line-height:1.15;letter-spacing:-0.02em")}>{"Ashford & Ross LLP: one system for the firm and its clients."}</h3>
              {" "}
              <p style={css("margin:0;font-size:16px;line-height:1.6;color:#4A4740")}>Client correspondence lived in inboxes, leads in spreadsheets, and case assignments in people's heads. We built a staff CRM and a companion client app that share one source of truth.</p>
              {" "}
              <div style={css("display:flex;flex-direction:column;border-top:1px solid #D6D3CB")}>
                {" "}
                {each(v.cs1Points).map((p, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <div style={css("display:grid;grid-template-columns:24px 1fr;gap:12px;padding:14px 0;border-bottom:1px solid #D6D3CB")}>
                    {" "}
                    <span style={css("color:#2451B8;font-weight:600")}>→</span>
                    {" "}
                    <div style={css("display:flex;flex-direction:column;gap:2px")}>
                      <span style={css("font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:16px")}>{txt(p.t)}</span>
                      <span style={css("font-size:14px;line-height:1.55;color:#4A4740")}>{txt(p.d)}</span>
                    </div>
                    {" "}
                  </div>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
              <div style={css("display:flex;gap:8px;flex-wrap:wrap")}>
                {each(v.cs1Tags).map((t, $index) => (
                  <Fragment key={$index}>
                    <span style={css("white-space:nowrap;font-size:12px;font-weight:500;padding:6px 12px;border-radius:999px;background:#F5F4F0;border:1px solid #D6D3CB")}>{txt(t)}</span>
                  </Fragment>
                ))}
              </div>
              {" "}
            </div>
            {" "}
            <div style={css("position:relative;padding:0 0 56px 0;min-width:0")}>
              {" "}
              <div style={css("background:#FFFFFF;border:1px solid #E2DFD7;border-radius:14px;box-shadow:0 16px 32px rgba(21,24,31,0.08);overflow:hidden;margin-right:clamp(110px,22%,160px);min-width:min(100%,420px)")}>
                {" "}
                <div style={css("height:34px;display:flex;align-items:center;gap:6px;padding:0 14px;border-bottom:1px solid #EEECE6;background:#FAFAF8")}>
                  {" "}
                  <span style={css("width:8px;height:8px;border-radius:50%;background:#D6D3CB")} />
                  <span style={css("width:8px;height:8px;border-radius:50%;background:#D6D3CB")} />
                  <span style={css("width:8px;height:8px;border-radius:50%;background:#D6D3CB")} />
                  {" "}
                  <span style={css("margin-left:12px;font-size:11px;color:#8C877D")}>Staff CRM</span>
                  {" "}
                </div>
                {" "}
                <div style={css("display:grid;grid-template-columns:minmax(0,120px) minmax(0,1fr);min-height:330px")}>
                  {" "}
                  <div style={css("background:#F5F4F0;border-right:1px solid #EEECE6;padding:14px 10px;display:flex;flex-direction:column;gap:4px")}>
                    {" "}
                    <div style={css("display:flex;align-items:center;gap:8px;padding:0 4px 12px")}>
                      <span style={css("width:22px;height:22px;border-radius:6px;background:#15181F;color:#F5F4F0;display:grid;place-items:center;font:700 10px 'Space Grotesk',sans-serif")}>A</span>
                      <span style={css("font:600 11px 'Space Grotesk',sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>{"Ashford & Ross"}</span>
                    </div>
                    {" "}
                    {each(v.crmNav).map((n, $index) => (
                      <Fragment key={$index}>
                        <div style={css(`display:flex;align-items:center;justify-content:space-between;font-size:11px;padding:7px 8px;border-radius:6px;background:${n.bg ?? ""};color:${n.fg ?? ""};font-weight:${n.w ?? ""}`)}>
                        <span>{txt(n.l)}</span>
                        <span style={css(`width:6px;height:6px;border-radius:50%;background:#2451B8;opacity:${n.dot ?? ""}`)} />
                      </div>
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                  <div style={css("padding:16px;display:flex;flex-direction:column;gap:12px;min-width:0")}>
                    {" "}
                    <div style={css("display:flex;flex-direction:column;gap:2px")}>
                      <span style={css("font:600 16px 'Space Grotesk',sans-serif")}>Good morning, Practice</span>
                      <span style={css("font-size:11px;color:#8C877D")}>What needs you today, in order.</span>
                    </div>
                    {" "}
                    <div style={css("display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px")}>
                      {" "}
                      {each(v.crmStats).map((s, $index) => (
                        <Fragment key={$index}>
                          <div style={css(`border:1px solid ${s.border ?? ""};border-radius:8px;padding:8px 10px;display:flex;flex-direction:column;gap:2px;transition:border-color 400ms`)}>
                          <span style={css("font-size:10px;color:#6B675F;white-space:nowrap;overflow:hidden;text-overflow:ellipsis")}>{txt(s.l)}</span>
                          <span style={css(`font:600 18px 'Space Grotesk',sans-serif;color:${s.c ?? ""}`)}>{txt(s.v)}</span>
                        </div>
                        </Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                    <div style={css("border:1px solid #EEECE6;border-radius:8px;overflow:hidden")}>
                      {" "}
                      <div style={css("padding:8px 10px;font:600 12px 'Space Grotesk',sans-serif;border-bottom:1px solid #EEECE6;display:flex;justify-content:space-between")}>
                        <span style={css("white-space:nowrap")}>Awaiting review</span>
                        <span style={css("font:500 10px Inter,sans-serif;color:#2451B8")}>View all</span>
                      </div>
                      {" "}
                      <div style={css(`display:grid;grid-template-rows:${v.newRowRows ?? ""};transition:grid-template-rows 500ms cubic-bezier(0.4,0,0.2,1)`)}>
                        <div style={css("overflow:hidden;min-height:0")}>
                          {" "}
                          <div style={css("display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 10px;background:#E3E8F4;border-bottom:1px solid #EEECE6")}>
                            {" "}
                            <div style={css("display:flex;flex-direction:column;min-width:0")}>
                              <span style={css("font-size:11px;font-weight:500;white-space:nowrap")}>bank_statement.pdf</span>
                              <span style={css("font-size:10px;color:#6B675F;white-space:nowrap")}>Hana Idris · Proof of funds</span>
                            </div>
                            {" "}
                            <span style={css(`white-space:nowrap;font-size:10px;font-weight:600;padding:3px 8px;border-radius:999px;background:${v.newBadgeBg ?? ""};color:${v.newBadgeFg ?? ""};transition:all 300ms`)}>{txt(v.newBadge)}</span>
                            {" "}
                          </div>
                          {" "}
                        </div>
                      </div>
                      {" "}
                      {each(v.crmDocs).map((d, $index) => (
                        <Fragment key={$index}>
                          <div style={css("display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid #F2F0EB")}>
                          <div style={css("display:flex;flex-direction:column;min-width:0")}>
                            <span style={css("font-size:11px;font-weight:500;white-space:nowrap")}>{txt(d.f)}</span>
                            <span style={css("font-size:10px;color:#6B675F;white-space:nowrap")}>{txt(d.m)}</span>
                          </div>
                          <span style={css("white-space:nowrap;font-size:10px;font-weight:600;padding:3px 8px;border-radius:999px;background:#EEF1F8;color:#2451B8")}>Under review</span>
                        </div>
                        </Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={css("position:absolute;right:0;bottom:0;width:clamp(140px,26%,190px);background:#F5F4F0;border:6px solid #15181F;border-radius:26px;box-shadow:0 16px 32px rgba(21,24,31,0.2);padding:12px 10px;display:flex;flex-direction:column;gap:8px")}>
                {" "}
                <div style={css("display:flex;align-items:center;gap:6px")}>
                  <span style={css("width:20px;height:20px;border-radius:5px;background:#15181F;color:#F5F4F0;display:grid;place-items:center;font:700 8px 'Space Grotesk',sans-serif")}>{"A&R"}</span>
                  <div style={css("display:flex;flex-direction:column")}>
                    <span style={css("font:600 9px 'Space Grotesk',sans-serif")}>{"Ashford & Ross"}</span>
                    <span style={css("font-size:8px;color:#8C877D")}>Your case</span>
                  </div>
                </div>
                {" "}
                <span style={css("font:600 13px 'Space Grotesk',sans-serif;line-height:1.2")}>Good evening, Hana</span>
                {" "}
                <div style={css("background:#FFFFFF;border:1px solid #E2DFD7;border-radius:10px;padding:8px;display:flex;flex-direction:column;gap:6px")}>
                  {" "}
                  <span style={css(`align-self:flex-start;font-size:8px;font-weight:600;padding:2px 6px;border-radius:999px;background:${v.urgBg ?? ""};color:${v.urgFg ?? ""}`)}>{txt(v.urgLabel)}</span>
                  {" "}
                  <span style={css("font-size:10px;font-weight:600")}>Bank statement</span>
                  {" "}
                  <span style={css("font-size:9px;color:#6B675F")}>Requested for M-2026-0014</span>
                  {" "}
                  <div style={css(`text-align:center;font-size:10px;font-weight:600;padding:7px;border-radius:7px;background:${v.sendBg ?? ""};color:#F5F4F0;transform:${v.sendScale ?? ""};transition:all 250ms cubic-bezier(0.4,0,0.2,1)`)}>{txt(v.sendLabel)}</div>
                  {" "}
                </div>
                {" "}
                <div style={css("display:grid;grid-template-columns:1fr 1fr;gap:6px")}>
                  {" "}
                  <div style={css("background:#FFFFFF;border:1px solid #E2DFD7;border-radius:8px;padding:6px")}>
                    <span style={css("display:block;font:600 13px 'Space Grotesk',sans-serif")}>{txt(v.phoneDocs)}</span>
                    <span style={css("font-size:8px;color:#6B675F")}>To send</span>
                  </div>
                  {" "}
                  <div style={css("background:#FFFFFF;border:1px solid #E2DFD7;border-radius:8px;padding:6px")}>
                    <span style={css("display:block;font:600 13px 'Space Grotesk',sans-serif")}>{txt(v.phoneMsgs)}</span>
                    <span style={css("font-size:8px;color:#6B675F")}>Messages</span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={css(`position:absolute;left:clamp(12px,6%,40px);bottom:12px;display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:#15181F;color:#F5F4F0;font-size:12px;font-weight:500;box-shadow:0 8px 16px rgba(21,24,31,0.15);opacity:${v.toastOpacity ?? ""};transform:${v.toastShift ?? ""};transition:all 400ms cubic-bezier(0.4,0,0.2,1)`)}>
                <span style={css("width:7px;height:7px;border-radius:50%;background:#8FAAE8")} />
                {txt(v.toastText)}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div ref={v.w2Ref} style={css("background:#15181F;color:#F5F4F0;border-radius:20px;padding:clamp(28px,4vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,500px),1fr));gap:48px;align-items:center")}>
            {" "}
            <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:20px;max-width:500px")}>
              {" "}
              <div style={css("display:flex;gap:8px;flex-wrap:wrap")}>
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#8FAAE8")}>Case study 02</span>
                <span style={css("font-size:12px;color:#8C877D")}>·</span>
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#B5B1A8")}>AI agent · WhatsApp</span>
              </div>
              {" "}
              <h3 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(1.75rem,3vw,2.25rem);line-height:1.15;letter-spacing:-0.02em")}>A voice note in. Emails sent, meetings booked.</h3>
              {" "}
              <p style={css("margin:0;font-size:16px;line-height:1.6;color:#C9C6BE")}>A business owner speaks to an AI agent on WhatsApp. It works out the tasks, drafts emails in their voice, finds a free slot, books the meeting, and reports back. Nothing is sent without approval.</p>
              {" "}
              <div style={css("display:flex;flex-direction:column;gap:10px")}>
                {" "}
                {each(v.cs2Steps).map((s, $index) => (
                  <Fragment key={$index}>
                    {" "}
                    <div style={css(`display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:center;opacity:${s.o ?? ""};transition:opacity 300ms`)}>
                    {" "}
                    <span style={css(`width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font:600 11px 'Space Grotesk',sans-serif;background:${s.bg ?? ""};color:#F5F4F0;border:1px solid #3A3F4C;transition:background 300ms`)}>{txt(s.n)}</span>
                    {" "}
                    <span style={css("font-size:14px")}>{txt(s.t)}</span>
                    {" "}
                  </div>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
              <div style={css("display:flex;gap:8px;flex-wrap:wrap")}>
                {each(v.cs2Tags).map((t, $index) => (
                  <Fragment key={$index}>
                    <span style={css("white-space:nowrap;font-size:12px;font-weight:500;padding:6px 12px;border-radius:999px;border:1px solid #3A3F4C;color:#D9D6CE")}>{txt(t)}</span>
                  </Fragment>
                ))}
              </div>
              {" "}
            </div>
            {" "}
            <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));gap:16px;align-items:start;min-width:0")}>
              {" "}
              <div style={css("background:#F5F4F0;color:#15181F;border:6px solid #2B2F3A;border-radius:26px;overflow:hidden;display:flex;flex-direction:column;min-height:400px")}>
                {" "}
                <div style={css("padding:10px 12px;background:#FFFFFF;border-bottom:1px solid #E2DFD7;display:flex;align-items:center;gap:8px")}>
                  <span style={css("width:26px;height:26px;border-radius:50%;background:#2451B8;color:#F5F4F0;display:grid;place-items:center;font:700 10px 'Space Grotesk',sans-serif")}>AI</span>
                  <div style={css("display:flex;flex-direction:column")}>
                    <span style={css("font-size:11px;font-weight:600")}>Assistant</span>
                    <span style={css("font-size:9px;color:#8C877D")}>{txt(v.agentStatus)}</span>
                  </div>
                  <span style={css("margin-left:auto;font-size:9px;color:#8C877D")}>WhatsApp</span>
                </div>
                {" "}
                <div style={css("flex:1;padding:12px 10px;display:flex;flex-direction:column;gap:8px;justify-content:flex-end")}>
                  {" "}
                  <div style={css("align-self:flex-end;max-width:88%;background:#2451B8;color:#F5F4F0;border-radius:12px 12px 2px 12px;padding:8px 10px;display:flex;align-items:center;gap:8px")}>
                    {" "}
                    <span style={css("font-size:11px")}>▶</span>
                    {" "}
                    <div style={css("display:flex;align-items:center;gap:2px;height:18px")}>
                      {each(v.wave).map((b, $index) => (
                        <Fragment key={$index}>
                          <span style={css(`width:2px;border-radius:1px;background:#F5F4F0;height:${b.h ?? ""};animation:${b.anim ?? ""}`)} />
                        </Fragment>
                      ))}
                    </div>
                    {" "}
                    <span style={css("font-size:9px;opacity:0.85")}>0:07</span>
                    {" "}
                  </div>
                  {" "}
                  {each(v.chat).map((m, $index) => (
                    <Fragment key={$index}>
                      {" "}
                      <div style={css(`display:grid;grid-template-rows:${m.rows ?? ""};transition:grid-template-rows 450ms cubic-bezier(0.4,0,0.2,1)`)}>
                      <div style={css("overflow:hidden;min-height:0")}>
                        {" "}
                        <div style={css(`max-width:92%;background:#FFFFFF;border:1px solid #E2DFD7;border-radius:12px 12px 12px 2px;padding:8px 10px;font-size:10.5px;line-height:1.45;display:flex;flex-direction:column;gap:6px;opacity:${m.o ?? ""};transition:opacity 400ms`)}>
                          {" "}
                          <span>{txt(m.t)}</span>
                          {" "}
                          {m.actions ? (
                            <Fragment>
                              <div style={css("display:flex;gap:6px")}>
                              <span style={css(`font-size:9.5px;font-weight:600;padding:4px 10px;border-radius:6px;background:${v.approveBg ?? ""};color:${v.approveFg ?? ""};border:1px solid #2451B8;transition:all 300ms`)}>{txt(v.approveLabel)}</span>
                              <span style={css("font-size:9.5px;font-weight:600;padding:4px 10px;border-radius:6px;border:1px solid #D6D3CB")}>Edit</span>
                            </div>
                            </Fragment>
                          ) : null}
                          {" "}
                        </div>
                        {" "}
                      </div>
                    </div>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={css("display:flex;flex-direction:column;gap:10px;min-width:0")}>
                {" "}
                <div style={css(`border:1px solid ${v.p1.b ?? ""};background:#1C2029;border-radius:12px;padding:14px;opacity:${v.p1.o ?? ""};transition:all 400ms`)}>
                  <span style={css("font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#8FAAE8")}>Transcript</span>
                  <p style={css("margin:6px 0 0;font-size:12px;line-height:1.5;color:#D9D6CE")}>"Email Daniel the revised proposal and book a call with him Thursday afternoon."</p>
                </div>
                {" "}
                <div style={css(`border:1px solid ${v.p2.b ?? ""};background:#1C2029;border-radius:12px;padding:14px;opacity:${v.p2.o ?? ""};transition:all 400ms;display:flex;flex-direction:column;gap:6px`)}>
                  <span style={css("font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#8FAAE8")}>Plan</span>
                  {" "}
                  {each(v.tasks).map((t, $index) => (
                    <Fragment key={$index}>
                      <div style={css("display:flex;align-items:center;gap:8px;font-size:12px;color:#D9D6CE")}>
                      <span style={css(`width:14px;height:14px;border-radius:4px;display:grid;place-items:center;font-size:9px;background:${t.bg ?? ""};border:1px solid #3A3F4C;color:#F5F4F0;transition:background 300ms`)}>{txt(t.mark)}</span>
                      {txt(t.l)}
                    </div>
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
                <div style={css(`border:1px solid ${v.p3.b ?? ""};background:#F5F4F0;color:#15181F;border-radius:12px;padding:14px;opacity:${v.p3.o ?? ""};transition:all 400ms;display:flex;flex-direction:column;gap:6px`)}>
                  {" "}
                  <div style={css("display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap")}>
                    <span style={css("white-space:nowrap;font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#2451B8")}>Email draft</span>
                    <span style={css("white-space:nowrap;font-size:10px;color:#8C877D")}>Gmail · Outlook</span>
                  </div>
                  {" "}
                  <span style={css("font-size:11px;color:#6B675F")}>To: daniel@client.co</span>
                  {" "}
                  <span style={css("font-size:12px;font-weight:600")}>Revised proposal + Thursday call</span>
                  {" "}
                  <div style={css("height:6px;border-radius:3px;background:#E2DFD7;overflow:hidden")}>
                    <div style={css(`height:100%;width:${v.draftW ?? ""};background:#8C877D;transition:width 900ms cubic-bezier(0.4,0,0.2,1)`)} />
                  </div>
                  {" "}
                  <div style={css("height:6px;border-radius:3px;background:#E2DFD7;overflow:hidden;width:80%")}>
                    <div style={css(`height:100%;width:${v.draftW ?? ""};background:#8C877D;transition:width 900ms cubic-bezier(0.4,0,0.2,1) 150ms`)} />
                  </div>
                  {" "}
                  <span style={css("font-size:10px;color:#6B675F")}>Attached: proposal_v2.pdf</span>
                  {" "}
                </div>
                {" "}
                <div style={css(`border:1px solid ${v.p4.b ?? ""};background:#1C2029;border-radius:12px;padding:14px;opacity:${v.p4.o ?? ""};transition:all 400ms;display:flex;flex-direction:column;gap:8px`)}>
                  {" "}
                  <div style={css("display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap")}>
                    <span style={css("white-space:nowrap;font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#8FAAE8")}>Calendar</span>
                    <span style={css("white-space:nowrap;font-size:10px;color:#B5B1A8")}>Google Calendar</span>
                  </div>
                  {" "}
                  <div style={css("display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px")}>
                    {" "}
                    {each(v.cal).map((c, $index) => (
                      <Fragment key={$index}>
                        <div style={css(`height:18px;border-radius:4px;background:${c.bg ?? ""};font-size:8px;overflow:visible;white-space:nowrap;display:grid;place-items:center;color:#F5F4F0;transition:background 400ms`)}>{txt(c.l)}</div>
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="contact" style={css("background:#2451B8;color:#F5F4F0")}>
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:112px 32px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:64px;align-items:start")}>
          {" "}
          <div data-reveal="1" style={css("display:flex;flex-direction:column;gap:22px")}>
            {" "}
            <span style={css("font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase")}>
              <b>08</b>
              {" Contact"}
            </span>
            {" "}
            <h2 style={css("margin:0;font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(2.25rem,4.4vw,3.5rem);line-height:1.05;letter-spacing:-0.03em")}>Got a technology problem?</h2>
            {" "}
            <p style={css("margin:0;font-size:1.125rem;line-height:1.6;text-wrap:pretty")}>Let's turn it into something that runs. Share the problem, the systems it touches, and where you want to be a year from now.</p>
            {" "}
            <div style={css("display:flex;flex-direction:column;border-top:1px solid rgba(245,244,240,0.35)")}>
              {" "}
              <div style={css("display:grid;grid-template-columns:110px 1fr;gap:16px;padding:20px 0;border-bottom:1px solid rgba(245,244,240,0.35)")}>
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase")}>Email</span>
                <a href="mailto:hello@wpcodie.com" style={css("color:#F5F4F0;font-family:'Space Grotesk',sans-serif;font-size:1.125rem;font-weight:500;text-decoration:underline;text-underline-offset:4px")}>hello@wpcodie.com</a>
              </div>
              {" "}
              <div style={css("display:grid;grid-template-columns:110px 1fr;gap:16px;padding:20px 0;border-bottom:1px solid rgba(245,244,240,0.35)")}>
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase")}>Response</span>
                <span style={css("font-size:15px;line-height:1.6")}>Within the same day, you'll hear back with our view and a suggested first step.</span>
              </div>
              {" "}
              <div style={css("display:grid;grid-template-columns:110px 1fr;gap:16px;padding:20px 0")}>
                <span style={css("font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase")}>Include</span>
                {" "}
                <div style={css("display:flex;flex-direction:column;gap:8px")}>
                  {each(v.helpful).map((h, $index) => (
                    <Fragment key={$index}>
                      <span style={css("font-size:15px;line-height:1.55;display:flex;gap:10px")}>
                      <span>→</span>
                      {txt(h)}
                    </span>
                    </Fragment>
                  ))}
                </div>
                {" "}
              </div>
              {" "}
            </div>
          </div>
          {" "}
          <div data-reveal="1" style={css("background:#F5F4F0;color:#15181F;border-radius:16px;padding:clamp(24px,4vw,40px);box-shadow:0 16px 32px rgba(21,24,31,0.18)")}>
            {" "}
            {v.notSent ? (
              <Fragment>
                {" "}
                <div style={css("display:flex;flex-direction:column;gap:18px")}>
                {" "}
                <div style={css("display:flex;flex-direction:column;gap:6px")}>
                  <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.5rem;font-weight:600")}>Start a conversation</span>
                  <span style={css("font-size:14px;color:#4A4740")}>A few details help us come back with a useful first step.</span>
                </div>
                {" "}
                <div style={css("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:16px")}>
                  {" "}
                  <Input label="Name" placeholder="Jane Doe" value={v.form.name} onChange={v.setName} error={v.nameError} />
                  {" "}
                  <Input label="Work email" placeholder="jane@company.com" value={v.form.email} onChange={v.setEmail} error={v.emailError} />
                  {" "}
                </div>
                {" "}
                <Input label="Company" placeholder="Company name" value={v.form.company} onChange={v.setCompany} />
                {" "}
                <div style={css("display:flex;flex-direction:column;gap:8px")}>
                  {" "}
                  <span style={css("font-size:14px;font-weight:500")}>What do you need?</span>
                  {" "}
                  <div style={css("display:flex;gap:8px;flex-wrap:wrap")}>
                    {" "}
                    {each(v.needs).map((n, $index) => (
                      <Fragment key={$index}>
                        {" "}
                        <span onClick={n.toggle} style={css(`cursor:pointer;white-space:nowrap;font-size:13px;font-weight:500;padding:8px 14px;border-radius:999px;border:1px solid ${n.border ?? ""};background:${n.bg ?? ""};color:${n.fg ?? ""};transition:all 200ms cubic-bezier(0.4,0,0.2,1)`)}>{txt(n.label)}</span>
                        {" "}
                      </Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={css("display:flex;flex-direction:column;gap:8px")}>
                  {" "}
                  <span style={css("font-size:14px;font-weight:500")}>Tell us about the problem</span>
                  {" "}
                  <textarea value={v.form.msg ?? ""} onInput={v.setMsg} rows="4" placeholder="What you're solving, systems involved, timeline…" style={css("font:14px/1.6 Inter,sans-serif;padding:12px 16px;border:1px solid #D6D3CB;border-radius:8px;background:#FFFFFF;color:#15181F;resize:vertical;outline-color:#2451B8")} />
                  {" "}
                </div>
                {" "}
                {/* Spam trap: invisible to people, filled in by bots. Taken out of layout, so the design is unchanged. */}
                <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style={css("position:absolute;left:-9999px;width:1px;height:1px;opacity:0")} />
                <div style={css("display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap")}>
                  {" "}
                  <span onClick={v.submit} style={css("display:inline-flex;--color-midnight:#F5F4F0")}>
                    <Button size="lg">{v.sending ? "Sending…" : "Send message →"}</Button>
                  </span>
                  {" "}
                  <span style={css("font-size:13px;color:#6B675F")}>
                    {"Or email "}
                    <a href="mailto:hello@wpcodie.com">hello@wpcodie.com</a>
                  </span>
                  {" "}
                </div>
                {v.sendError ? <span role="alert" style={css("font-size:var(--font-size-ui-sm);color:var(--color-error)")}>{v.sendError}</span> : null}
                {" "}
              </div>
                {" "}
              </Fragment>
            ) : null}
            {" "}
            {v.sent ? (
              <Fragment>
                {" "}
                <div style={css("display:flex;flex-direction:column;gap:14px;padding:16px 0")}>
                {" "}
                <span style={css("width:44px;height:44px;border-radius:50%;background:#2451B8;color:#F5F4F0;display:grid;place-items:center;font-size:20px")}>✓</span>
                {" "}
                <span style={css("font-family:'Space Grotesk',sans-serif;font-size:1.75rem;font-weight:600")}>{"Thanks, "}{txt(v.firstName)}{"."}</span>
                {" "}
                <span style={css("font-size:15px;line-height:1.6;color:#4A4740")}>{"Your message is on its way. We'll reply to "}{txt(v.form.email)}{" within the same day with our view and a suggested first step."}</span>
                {" "}
                <div onClick={v.reset} style={css("display:inline-flex")}>
                  <Button variant="tertiary">Send another</Button>
                </div>
                {" "}
              </div>
                {" "}
              </Fragment>
            ) : null}
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <footer style={css("background:#15181F;color:#F5F4F0")}>
        {" "}
        <div style={css("max-width:1280px;margin:0 auto;padding:56px 32px 32px;display:flex;flex-direction:column;gap:40px")}>
          {" "}
          <div style={css("display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap")}>
            {" "}
            <div style={css("display:flex;flex-direction:column;gap:10px")}>
              {" "}
              <a href="#top" style={css("display:flex;align-items:center;gap:10px;color:#F5F4F0")}>
                <span style={css("width:30px;height:30px;border-radius:8px;background:#2451B8;display:grid;place-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px")}>W</span>
                <span style={css("font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:19px")}>WPCodie</span>
              </a>
              {" "}
              <span style={css("font-size:14px;color:#B5B1A8")}>AI · Software · Technology consulting</span>
              {" "}
            </div>
            {" "}
            <div style={css("display:flex;gap:24px;flex-wrap:wrap")}>
              {" "}
              {each(v.footNav).map((n, $index) => (
                <Fragment key={$index}>
                  <a class="scp2" href={n.href} style={css("font-size:14px;color:#D9D6CE")}>{txt(n.label)}</a>
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={css("display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:24px;border-top:1px solid #2B2F3A;font-size:13px;color:#B5B1A8")}>
            {" "}
            <span>© 2026 WPCodie. All rights reserved.</span>
            <span class="scp0" onClick={v.replayIntro} style={css("cursor:pointer;color:#8FAAE8")}>Replay intro ↺</span>
            <a href="mailto:hello@wpcodie.com" style={css("color:#8FAAE8")}>hello@wpcodie.com</a>
            {" "}
          </div>
          {" "}
        </div>
      </footer>
      {/* Added for the live site. Phones: a floating "Start a project" (after the hero, hidden at the
          contact form). All sizes: "Back to top" after the first screen; an icon beside it on phones. */}
      <a href="#contact" class={v.showCta ? "m-cta is-visible" : "m-cta"} aria-hidden={v.showCta ? undefined : "true"} tabindex={v.showCta ? undefined : "-1"}>
        Start a project <span aria-hidden="true">→</span>
      </a>
      <a href="#top" class={v.showTop ? "to-top is-visible" : "to-top"} aria-label="Back to top" aria-hidden={v.showTop ? undefined : "true"} tabindex={v.showTop ? undefined : "-1"}>
        <span class="to-top-label">Back to top</span> <span aria-hidden="true">↑</span>
      </a>
    </div>
    </Fragment>
  );
}
