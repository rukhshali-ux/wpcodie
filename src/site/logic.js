// Page behaviour and the copy for every repeated block (capabilities, services, steps,
// principles, form options...). Carried over from the design export; the few changes made
// for the live site are marked with comments.
import { DCLogic, React } from './dc.js';
import { ADDRESS_LINES, PHONE, PHONE_DISPLAY } from './business.js';

// The intro laptop's width, W in introVals(), as CSS: min(740, 84% of width, 42% of height / 0.625).
const CSS_W = 'min(740px, 84vw, 67.2dvh)';

class Component extends DCLogic {
  lapRef = React.createRef();
  state = { lift: 0, center: 0, hoverOpen: false, pose: 0, intro: 'closed', vw: 1280, vh: 800, cap: 0, flow: -1, active: '', ai: 0, app: -1, w1: 0, w2: 0, needs: [], form: { name: '', email: '', company: '', msg: '' }, sent: false, emailError: '', nameError: '' };
  field = (k) => (e) => { const v = e.target.value; this.setState(s => ({ form: { ...s.form, [k]: v }, emailError: k === 'email' ? '' : s.emailError, nameError: k === 'name' ? '' : s.nameError })); };
  aiRef = React.createRef(); w1Ref = React.createRef(); w2Ref = React.createRef();
  ringRef = React.createRef(); capRef = React.createRef(); trackRef = React.createRef(); capBarRef = React.createRef();
  flowRef = React.createRef(); flowBarRef = React.createRef();
  componentDidMount() {
    this.skip = new URLSearchParams(location.search).get('intro') === '0' || window.self !== window.top && /intro=0/.test(location.href) || this.props.intro === false;
    const measure = () => this.setState({ vw: window.innerWidth, vh: window.innerHeight });
    measure(); this.setState({ measured: true }); this.onResizeIntro = measure; window.addEventListener('resize', measure);
    this.tickPose();
    if (this.skip) this.setState({ intro: 'done' }); else document.documentElement.style.overflow = 'hidden';
    // The laptop screen is a live copy of the page (an iframe). Load it once the page itself
    // has finished loading, and never when the intro is skipped.
    if (!this.skip) { const loadFrame = () => this.setState({ frame: true }); if (document.readyState === 'complete') loadFrame(); else window.addEventListener('load', loadFrame, { once: true }); }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches || this.props.motion === false;
    let a = 0, last = performance.now();
    const spin = (t) => { const r = this.ringRef.current; if (r && !reduce) { a = (a + (t - last) * 0.006) % 360; r.style.transform = `rotate(${a}deg)`; r.style.setProperty('--r', `${-a}deg`); } last = t; this.raf = requestAnimationFrame(spin); };
    this.raf = requestAnimationFrame(spin);
    const inView = (r) => { const el = r.current; if (!el) return false; const b = el.getBoundingClientRect(); return b.bottom > 0 && b.top < window.innerHeight; };
    this.wT = setInterval(() => { const a = inView(this.w1Ref), b = inView(this.w2Ref); if (a || b) this.setState(s => ({ w1: a ? (s.w1 + 1) % 5 : s.w1, w2: b ? (s.w2 + 1) % 7 : s.w2 })); }, 1700);
    this.aiT = setInterval(() => { const el = this.aiRef.current; if (!el) return; const r = el.getBoundingClientRect(); if (r.bottom > 0 && r.top < window.innerHeight) this.setState(s => ({ ai: (s.ai + 1) % 4 }), this.aiFollow); }, 1600);
    this.onScroll = () => {
      const vh = window.innerHeight;
      // Back-to-top button (added for the live site).
      // Both floating buttons stay out of the way while "05 Ideas into systems" is pinned: it fills the screen.
      const sys = document.getElementById('systems'), sr = sys && sys.getBoundingClientRect();
      const inSystems = !!sr && sr.top < vh * 0.5 && sr.bottom > vh * 0.5;
      const showTop = window.scrollY > vh && !inSystems; if (showTop !== !!this.state.showTop) this.setState({ showTop });
      // Floating call to action on phones: past the hero, until the contact section comes on screen.
      const contact = document.getElementById('contact');
      const showCta = window.scrollY > vh * 0.8 && !inSystems && !(contact && contact.getBoundingClientRect().top < vh);
      if (showCta !== !!this.state.showCta) this.setState({ showCta });
      const prog = (el) => { if (!el) return 0; const r = el.getBoundingClientRect(); const tot = el.offsetHeight - vh; return tot > 0 ? Math.min(1, Math.max(0, -r.top / tot)) : 0; };
      const cp = prog(this.capRef.current), tr = this.trackRef.current;
      // Phone carousel: the cards are swiped, so page scrolling leaves them alone. Back on a wide
      // screen, clear any swipe position so the scroll-driven track starts from its edge.
      const carousel = this.capCarousel();
      if (!carousel && tr && tr.parentElement.scrollLeft) tr.parentElement.scrollLeft = 0;
      if (tr && !carousel) { const max = tr.scrollWidth - tr.parentElement.clientWidth; tr.style.transform = `translate3d(${-cp * Math.max(0, max)}px,0,0)`; }
      if (this.capBarRef.current && !carousel) this.capBarRef.current.style.width = (cp * 100) + '%';
      const ci = carousel ? (this.state.cap || 0) : Math.min(6, Math.floor(cp * 7));
      const fp = prog(this.flowRef.current);
      if (this.flowBarRef.current) this.flowBarRef.current.style.width = (fp * 100) + '%';
      const fr = this.flowRef.current ? this.flowRef.current.getBoundingClientRect() : null;
      const fi = fr && fr.top <= 1 ? Math.min(5, Math.floor(fp * 6.2)) : -1;
      // The nav highlight goes to the section whose top most recently passed 40% of the screen,
      // so it does not depend on the order the sections are in.
      let active = '', last = -Infinity;
      ['capabilities','work','ai','applications','consulting','contact'].forEach(id => { const el = document.getElementById(id), t = el ? el.getBoundingClientRect().top : Infinity; if (t < vh * 0.4 && t > last) { active = id; last = t; } });
      if (ci !== this.state.cap || fi !== this.state.flow || active !== this.state.active) this.setState({ cap: ci, flow: fi, active });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll);
    this.onScroll();
    this.hidden = [];
    this.reveal = () => {
      const lim = window.innerHeight * 0.92;
      this.hidden = this.hidden.filter(el => {
        if (!el.isConnected || el.getBoundingClientRect().top < lim) { el.style.opacity = '1'; el.style.transform = 'none'; return false; }
        return true;
      });
    };
    this.revealT = setTimeout(() => {
      if (reduce) return;
      document.querySelectorAll('[data-reveal]').forEach(el => {
        if (el.closest('#top > section:first-of-type') || el.getBoundingClientRect().top < window.innerHeight) return;
        el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 600ms cubic-bezier(0.4,0,0.2,1)';
        this.hidden.push(el);
      });
      this.reveal();
    }, 300);
    window.addEventListener('scroll', () => this.reveal && this.reveal(), { passive: true });
  }
  // Capabilities as a swipe carousel below 960px (matches the .cap-* rules in page.css).
  capCarousel = () => typeof window !== 'undefined' && window.innerWidth < 960;
  capStep = (sc) => { const card = sc.querySelector('.cap-card'); return card ? card.offsetWidth + 20 : sc.clientWidth; };
  capSwipe = (e) => {
    if (!this.capCarousel()) return;
    const sc = e.currentTarget, step = this.capStep(sc), max = sc.scrollWidth - sc.clientWidth;
    const idx = sc.scrollLeft >= max - 2 ? 6 : Math.max(0, Math.min(6, Math.round(sc.scrollLeft / step)));
    // The last card snaps at 6 steps, before the end of the scroll area: that is 100%.
    if (this.capBarRef.current) this.capBarRef.current.style.width = Math.min(100, (sc.scrollLeft / (6 * step)) * 100) + '%';
    if (idx !== this.state.cap) this.setState({ cap: idx });
  };
  capMove = (dir) => { const sc = this.trackRef.current && this.trackRef.current.parentElement; if (sc) sc.scrollBy({ left: dir * this.capStep(sc), behavior: 'smooth' }); };
  // "02 AI & intelligent applications" on phones: the pipeline and the example cards are swipe
  // rows (.ai-* rules in page.css). The pipeline row keeps the active step in view, unless the
  // visitor touched it in the last few seconds.
  aiHold = () => { this.aiHeld = Date.now(); };
  aiFollow = () => {
    const row = this.aiRef.current && this.aiRef.current.querySelector('.ai-steps');
    if (!row || row.scrollWidth - row.clientWidth < 2 || Date.now() - (this.aiHeld || 0) < 5000) return;
    const card = row.querySelectorAll('.ai-step')[this.state.ai]; if (!card) return;
    const left = row.scrollLeft + card.getBoundingClientRect().left - row.getBoundingClientRect().left - parseFloat(getComputedStyle(row).paddingLeft);
    row.scrollTo({ left, behavior: 'smooth' });
  };
  // Swipe rows (the AI examples, the applications): the counter follows the card at the start
  // of the row, and the previous / next buttons move one card.
  swipeCard = (sc) => { const card = sc.firstElementChild; return card ? card.offsetWidth + (parseFloat(getComputedStyle(sc).columnGap) || 0) : sc.clientWidth; };
  swipeTo = (key, n) => (e) => {
    const sc = e.currentTarget, max = sc.scrollWidth - sc.clientWidth; if (max < 2) return;
    const idx = sc.scrollLeft >= max - 2 ? n - 1 : Math.max(0, Math.min(n - 1, Math.round(sc.scrollLeft / this.swipeCard(sc))));
    if (idx !== (this.state[key] || 0)) this.setState({ [key]: idx });
  };
  swipeMove = (sel, dir) => { const sc = document.querySelector(sel); if (sc) sc.scrollBy({ left: dir * this.swipeCard(sc), behavior: 'smooth' }); };
  aiSwipe = this.swipeTo('aiCard', 6);
  appSwipe = this.swipeTo('appCard', 4);
  opsSwipe = this.swipeTo('opsCard', 4);
  loops = 0;
  tickPose = () => { clearTimeout(this.poseT); const dur = [2000, 1500, 1300, 1700, 1800][this.state.pose] || 1500;
    this.poseT = setTimeout(() => { if (this.state.intro !== 'closed') return this.tickPose();
      let n = this.state.pose === 3 ? 4 : (this.state.pose + 1) % 5;
      this.setState({ pose: n }, this.tickPose); }, dur); };
  replayIntro = () => { clearTimeout(this.iT1); clearTimeout(this.iT2); this.loops = 0; this.setState({ pose: 0, hoverOpen: false }, this.tickPose); window.scrollTo(0, 0); document.documentElement.style.overflow = 'hidden'; this.setState({ intro: 'closed' }); };
  componentDidUpdate(prev) {
    if (prev.intro !== this.props.intro && prev.intro !== undefined) { if (this.props.intro === false) this.setState({ intro: 'done' }); else this.replayIntro(); }
    const want = this.state.intro === 'done' ? '' : 'hidden';
    if (document.documentElement.style.overflow !== want) { document.documentElement.style.overflow = want; if (!want) this.onScroll && this.onScroll(); }
  }
  componentWillUnmount() { cancelAnimationFrame(this.raf); clearInterval(this.aiT); clearTimeout(this.poseT); clearTimeout(this.iT1); clearTimeout(this.iT2); window.removeEventListener('resize', this.onResizeIntro); document.documentElement.style.overflow = ''; clearInterval(this.wT); clearTimeout(this.revealT); window.removeEventListener('scroll', this.onScroll); window.removeEventListener('resize', this.onScroll); this.io && this.io.disconnect(); }
  doodleVals(W, vw, ph) {
    const cheer = ph === 'opening' || ph === 'zoom';
    const p = cheer ? 5 : (this.state.hoverOpen ? 3 : this.state.pose);
    const P = [
      { lU:-55, lF:-122, rU:-28, rF:58, head:6, pupil:'translate(-2px,-2.5px)', eyeR:5, bL:'translateY(-3px) rotate(-14deg)', bR:'rotate(8deg)', m:'hmm', lFin:1, rFin:0, eyes:'open' },
      { lU:25, lF:-55, rU:-62, rF:-8, head:0, pupil:'translate(0.5px,0.5px)', eyeR:5.2, bL:'translateY(-2px) rotate(-6deg)', bR:'translateY(-2px) rotate(6deg)', m:'smile', lFin:0, rFin:1, eyes:'open' },
      { lU:25, lF:-55, rU:-82, rF:-18, head:6, pupil:'translate(2.6px,1.6px)', eyeR:5, bL:'rotate(-4deg)', bR:'translateY(-2px) rotate(4deg)', m:'smile', lFin:0, rFin:0, eyes:'open' },
      { lU:-10, lF:-75, rU:-145, rF:-5, head:-7, pupil:'translate(0px,0px)', eyeR:5, bL:'translateY(-4px) rotate(-8deg)', bR:'translateY(-4px) rotate(8deg)', m:'o', lFin:0, rFin:1, eyes:'laugh' },
      { lU:25, lF:-55, rU:-145, rF:-5, head:-3, pupil:'translate(2.4px,-2.4px)', eyeR:5.2, bL:'translateY(-3px) rotate(-6deg)', bR:'translateY(-3px) rotate(6deg)', m:'smile', lFin:0, rFin:1, eyes:'open' },
      { lU:150, lF:12, rU:-150, rF:-12, head:0, pupil:'translate(0px,0px)', eyeR:5, bL:'translateY(-6px)', bR:'translateY(-6px)', m:'o', lFin:0, rFin:0, eyes:'laugh' },
    ][p];
    const mobile = vw < 820;
    return {
      showDoodle: true,
      // Narrow screens: the design showed only his head peeking over the lid (clipped at 52%).
      // For the live site he stands in full on the lid's top edge instead.
      doodleSide: mobile ? 'left:-10%' : 'right:calc(100% - 9%)',
      doodleW: Math.round(mobile ? W * 0.36 : Math.min(W * 0.82, (vw - W) / 2 + W * 0.09 + 30)) + 'px',
      doodleB: Math.round(mobile ? W * 0.498 : -W * 0.06) + 'px',
      doodleClip: 'none',
      doodleO: ph === 'zoom' ? 0 : 1,
      lU: P.lU + 'deg', lF: P.lF + 'deg', rU: P.rU + 'deg', rF: P.rF + 'deg', headTilt: P.head + 'deg',
      pupil: P.pupil, eyeR: P.eyeR, browL: P.bL, browR: P.bR,
      mHmm: P.m === 'hmm' ? 1 : 0, mSmile: P.m === 'smile' ? 1 : 0, mO: P.m === 'o' ? 1 : 0,
      eyesO: P.eyes === 'open' ? 1 : 0, laughO: P.eyes === 'laugh' ? 1 : 0,
      lFingerO: P.lFin, rFingerO: P.rFin,
      tapAnim: p === 0 ? 'wpTap 0.42s ease-in-out infinite' : 'none',
      tapRAnim: p === 2 ? 'wpTapR 0.3s ease-in-out infinite' : 'none',
      hopAnim: p === 3 ? 'wpChuckle 0.32s ease-in-out infinite' : (p === 5 ? 'wpCheer 0.5s cubic-bezier(0.4,0,0.2,1) 2' : 'none'),
      thinkO: p === 0 ? 1 : 0, youO: p === 1 ? 1 : 0, lidO: p === 2 ? 1 : 0,
      laughMarksO: p === 3 ? 1 : 0, arrowO: (p === 3 || p === 4) ? 1 : 0, cheerO: p === 5 ? 1 : 0,
      hoverOn: () => this.setState({ hoverOpen: true }), hoverOff: () => this.setState({ hoverOpen: false }),
    };
  }
  introVals() {
    const ph = this.state.intro, vw = this.state.vw, vh = this.state.vh;
    const W = Math.round(Math.min(740, vw * 0.84, (vh * 0.42) / 0.625));
    const H = Math.round(W * 0.625), bez = Math.max(6, Math.round(W * 0.014));
    const inner = W - bez * 2;
    const done = () => { document.documentElement.style.overflow = ''; window.scrollTo(0, 0); this.setState({ intro: 'done' }); };
    return {
      showIntro: ph !== 'done',
      baseT: Math.max(8, Math.round(W * 0.03)) + 'px', lidT: Math.max(5, Math.round(W * 0.016)) + 'px', chin: Math.round(bez * 1.8) + 'px',
      shadowB: ph === 'closed' ? '-8%' : '-38%', shadowO: ph === 'zoom' ? 0 : 1,
      keys: [...Array(13).fill(1), 1, ...Array(12).fill(1), 2, 2, ...Array(11).fill(1), 1, 2, ...Array(10).fill(1), 2, 2, ...Array(10).fill(1), 2, 1, 1, 1, 7, 1, 1, 1, 1].slice(0, 84).map(s => ({ span: s })),
      lapW: W + 'px', lapH: H + 'px', lapBase: Math.round(W * 0.12) + 'px', baseD: H + 'px', bezel: bez + 'px',
      // Before the page script has measured the window (the pre-built HTML), size the laptop
      // with the same formula in CSS and keep it hidden, so nothing jumps when it takes over.
      ...(this.state.measured ? { lapVis: 'visible' } : { lapVis: 'hidden', lapW: CSS_W, lapH: `calc(${CSS_W} * 0.625)`, lapBase: `calc(${CSS_W} * 0.12)` }),
      frameScale: 'scale(' + (inner / 1440) + ')',
      lid: ph === 'closed' ? 'rotateX(-90deg)' : 'rotateX(0deg)',
      tilt: ph === 'closed' ? 'translateY(-70%) rotateX(-30deg) rotateY(0deg)' : (ph === 'opening' ? 'translateY(0) rotateX(-10deg)' : 'translateY(0) rotateX(0deg)'),
      zoom: ph === 'zoom' ? 'translateY(' + this.state.center + 'px) scale(' + (vw / inner * 1.02).toFixed(3) + ')' : (ph === 'opening' ? 'translateY(' + this.state.lift + 'px)' : 'none'),
      lapDur: ph === 'zoom' ? '1100ms' : '2400ms', lapRef: this.lapRef,
      // The screen only shows once the opening lid has turned to face the viewer: it passes
      // edge-on 1.05s after "Open it" (measured from the lid and tilt transitions below).
      // Safari ignores backface-visibility on the iframe, so without this the lid shows the
      // page mirrored on iPhone, both closed and during the first half of the opening.
      screenVis: ph === 'closed' ? 'hidden' : 'visible', screenDelay: ph === 'closed' ? '0s' : '1100ms',
      copyOpacity: ph === 'closed' ? 1 : 0, copyShift: ph === 'closed' ? 'none' : 'translateY(-16px)',
      introOpacity: ph === 'zoom' ? 0 : 1, introPointer: ph === 'zoom' ? 'none' : 'auto',
      openLaptop: () => { if (this.state.intro !== 'closed') return;
        const el = this.lapRef.current; let lift = 0, center = 0;
        if (el) { const r = el.getBoundingClientRect(); const mid = r.top + r.height / 2; lift = Math.round(vh / 2 - H * 0.2 - mid); center = Math.round(vh / 2 - mid); }
        this.setState({ intro: 'opening', lift, center });
        this.iT1 = setTimeout(() => { this.setState({ intro: 'zoom' }); this.iT2 = setTimeout(done, 1200); }, 2600); },
      bobAnim: 'wpBob 2.6s ease-in-out infinite ' + (ph === 'closed' ? 'running' : 'paused'), arrowAnim: 'wpArrow 1.1s ease-in-out infinite',
      skipIntro: done, replayIntro: this.replayIntro,
      ...this.doodleVals(W, vw, ph),
      btnTop: this.state.measured ? Math.round(W * 0.066) + 'px' : `calc(${CSS_W} * 0.066)`,
      frameSrc: this.state.frame ? location.href.split('#')[0].split('?')[0] + '?intro=0' : undefined,
    };
  }
  workVals() {
    const w1 = this.state.w1 || 0, w2 = this.state.w2 || 0, B = '#2451B8';
    const panel = (i) => ({ b: w2 === i ? B : '#2B2F3A', o: w2 >= i ? 1 : 0.45 });
    return {
      cs1Points: [
        { t:'Lead & client management', d:'Capture, qualify, and convert enquiries without duplicate data entry.' },
        { t:'Case management', d:'Assign matters to the right teams and track ownership, progress, tasks, and deadlines.' },
        { t:'Centralised communication', d:'Keep emails, messages, documents, and activity connected to each client and matter.' },
        { t:'Client portal', d:'Clients can upload documents, make payments, receive updates, and communicate securely with the firm.' },
      ],
      cs1Tags: ['Law firms','Fee earners','Case managers','Administrators','Their clients'],
      crmNav: ['My day','Matters','Leads','Clients','Conversations','Calendar'].map((l, i) => ({ l, bg: i === 0 ? '#E3E8F4' : 'transparent', fg: i === 0 ? B : '#2B2F3A', w: i === 0 ? 600 : 400, dot: (i === 4 && w1 >= 3) ? 1 : 0 })),
      crmStats: [{ l:'Dates', v:'2', c:'#B3261E' }, { l:'Review', v: w1 >= 2 ? '4' : '3', c: B, hi: w1 === 2 }, { l:'Leads', v:'5', c:'#15181F' }].map(s => ({ ...s, border: s.hi ? B : '#EEECE6' })),
      crmDocs: [{ f:'engagement.pdf', m:'Owen Mercer · Agreement' }, { f:'id_passport.jpg', m:'Leila Shah · Identity' }, { f:'tax_return.pdf', m:'Tom Avery · Financials' }],
      newRowRows: w1 >= 2 ? '1fr' : '0fr',
      newBadge: w1 >= 3 ? 'Assigned' : 'New', newBadgeBg: w1 >= 3 ? B : '#15181F', newBadgeFg: '#F5F4F0',
      urgLabel: w1 >= 1 ? 'Sent' : 'Needed', urgBg: w1 >= 1 ? '#E3E8F4' : '#F8E1DF', urgFg: w1 >= 1 ? B : '#B3261E',
      sendLabel: w1 === 1 ? 'Uploading…' : (w1 >= 2 ? 'Sent ✓' : 'Send document'), sendBg: w1 >= 1 ? B : '#15181F', sendScale: w1 === 1 ? 'scale(0.97)' : 'none',
      phoneDocs: w1 >= 1 ? '0' : '1', phoneMsgs: w1 >= 4 ? '1' : '0',
      toastOpacity: w1 >= 3 ? 1 : 0, toastShift: w1 >= 3 ? 'none' : 'translateY(8px)',
      toastText: w1 >= 4 ? 'Hana notified: "Your document is with J. Mercer"' : 'Assigned to J. Mercer · Family team',
      cs2Steps: ['Voice note arrives on WhatsApp','Speech is transcribed and understood','Tasks planned: email, slot, invite','Email drafted for approval','Meeting booked and confirmed'].map((t, i) => ({ n: i + 1, t, o: w2 >= i ? 1 : 0.45, bg: w2 === i ? B : (w2 > i ? '#2B2F3A' : 'transparent') })),
      cs2Tags: ['WhatsApp','Gmail','Outlook','Google Calendar','Custom integrations'],
      agentStatus: ['listening…','transcribing…','planning…','drafting…','waiting for approval','booking…','online'][w2],
      wave: [6,12,9,16,11,18,8,14,17,10,15,7,12,16,9,6].map((v, i) => ({ h: v + 'px', anim: w2 === 0 ? ('wpWave 0.9s ease-in-out ' + (i * 0.05) + 's infinite') : 'none' })),
      chat: [
        { t:'On it. Drafting an email to Daniel with the revised proposal and finding a Thursday afternoon slot.', show: w2 >= 2 },
        { t:'Draft ready. Thursday 3:00–3:30 PM is free for both of you.', show: w2 >= 4, actions: true },
        { t:'Sent ✓ Call booked for Thu 3:00 PM and invite sent to Daniel.', show: w2 >= 6 },
      ].map(m => ({ ...m, rows: m.show ? '1fr' : '0fr', o: m.show ? 1 : 0 })),
      approveLabel: w2 >= 5 ? 'Approved ✓' : 'Approve', approveBg: w2 >= 5 ? B : 'transparent', approveFg: w2 >= 5 ? '#F5F4F0' : B,
      p1: panel(1), p2: panel(2), p3: panel(3), p4: panel(5),
      tasks: [['Draft email to Daniel', 3], ['Find free slot Thursday PM', 4], ['Send calendar invite', 6]].map(([l, at]) => ({ l, mark: w2 >= at ? '✓' : '', bg: w2 >= at ? B : 'transparent' })),
      draftW: w2 >= 3 ? '100%' : '0%',
      cal: Array.from({ length: 15 }, (_, i) => { const busy = [0,2,6,8,11,14].includes(i); const slot = i === 13; return { l: slot && w2 >= 5 ? 'Dan' : '', bg: slot ? (w2 >= 5 ? B : (w2 >= 4 ? 'rgba(143,170,232,0.35)' : '#232833')) : (busy ? '#3A3F4C' : '#232833') }; }),
    };
  }
  appsRaw() { return [
        { mark:'WEB', title:'Web applications', body:'Modern, scalable applications in the browser.', points:['Any stack','Responsive','Secure by default','Scales with demand','Connected to your systems'] },
        { mark:'APP', title:'Mobile applications', body:'iOS and Android apps built around real use.', points:['iOS & Android','Native or cross-platform','Works offline','Store-ready','Backend-connected'] },
        { mark:'SYS', title:'Custom software', body:'Purpose-built systems for specific requirements.', points:['Any language','Fits your process','Easy to extend','Documented','Fully yours'] },
        { mark:'API', title:'APIs & integrations', body:'Link platforms, data, services, and workflows.', points:['Any platform','Reliable at scale','Secure access','Real-time or batch','Documented'] },
      ]; }
  renderVals() {
    const B = '#2451B8', INK = '#15181F', OFF = '#F5F4F0';
    const links = [['#capabilities','capabilities','Capabilities'],['/portfolio/','work','Work'],['#ai','ai','AI'],['#applications','applications','Applications'],['#consulting','consulting','Consulting'],['#contact','contact','Contact']];
    const orbitData = [['Direction','Roadmap · Priorities'],['Data','Models · Pipelines'],['APIs','Services · Integrations'],['Outcome','Shipped · Measured'],['Product','Web · Mobile · Custom']];
    const capData = [
      ['AI applications','Products built around models from day one: retrieval, reasoning, and automation shaped by your data and your policies.',['Assistants','Search','Decision support','Evaluation']],
      ['Custom software','Systems made for the parts of your operation that packaged software never quite fits.',['Internal tools','Workflow systems','Modernization']],
      ['Web applications','Fast, scalable browser applications engineered to be maintained for years.',['SaaS','Portals','Dashboards']],
      ['Mobile apps','iOS and Android apps shaped by how people really use them, wired to your backend.',['iOS','Android','Cross-platform']],
      ['Automation','Multi-step processes that run on their own and pull people in only when a judgment call is needed.',['Intake','Approvals','Back office']],
      ['API systems','Backends and integrations that link platforms, data, services, and partners dependably.',['Integrations','Data sync','Partner access']],
      ['Technology consulting','Discovery, architecture, and roadmaps that give a build a firm direction before it begins.',['Discovery','Architecture','Roadmaps']],
    ];
    const flowData = [['01','Idea',['Business goal','Users']],['02','Strategy',['Constraints','Priorities']],['03','Architecture',['Client layer','Services / APIs']],['04','Application',['Data layer','Working app']],['05','Intelligence',['Models','Automation']],['06','Impact',['Deployed','Measured']]];
    const fi = this.state.flow;
    return {
      ringRef: this.ringRef, aiRef: this.aiRef, w1Ref: this.w1Ref, w2Ref: this.w2Ref, ...this.workVals(), ...this.introVals(), capRef: this.capRef, trackRef: this.trackRef, capBarRef: this.capBarRef, flowRef: this.flowRef, flowBarRef: this.flowBarRef,
      // Small-screen menu (added for the live site).
      capSwipe: this.capSwipe, capPrev: () => this.capMove(-1), capNext: () => this.capMove(1),
      aiHold: this.aiHold, aiSwipe: this.aiSwipe, aiPrev: () => this.swipeMove('#ai .ai-cards', -1), aiNext: () => this.swipeMove('#ai .ai-cards', 1),
      aiCardCounter: String((this.state.aiCard || 0) + 1).padStart(2, '0') + ' / 06',
      appSwipe: this.appSwipe, appPrev: () => this.swipeMove('#applications .app-cards', -1), appNext: () => this.swipeMove('#applications .app-cards', 1),
      appCardCounter: String((this.state.appCard || 0) + 1).padStart(2, '0') + ' / 04',
      opsSwipe: this.opsSwipe, opsPrev: () => this.swipeMove('#principles .ops-cards', -1), opsNext: () => this.swipeMove('#principles .ops-cards', 1),
      opsCardCounter: String((this.state.opsCard || 0) + 1).padStart(2, '0') + ' / 04',
      whatTab: this.state.whatTab || 0, setWhatTab: (i) => this.setState({ whatTab: i }),
      showTop: !!this.state.showTop && this.state.intro === 'done', showCta: !!this.state.showCta && this.state.intro === 'done', menuOpen: !!this.state.menuOpen, toggleMenu: () => this.setState((s) => ({ menuOpen: !s.menuOpen })), closeMenu: () => this.setState({ menuOpen: false }),
      nav: links.map(([href,id,label]) => ({ href, label, color: this.state.active === id ? B : '#2B2F3A', bg: this.state.active === id ? '#E3E8F4' : 'transparent' })),
      footNav: links.map(([href,,label]) => ({ href, label })),
      phoneDisplay: PHONE_DISPLAY, phoneHref: 'tel:' + PHONE.replace(/-/g, ''), addressLines: ADDRESS_LINES,
      orbit: orbitData.map(([title, sub], i) => { const ang = (i / 5) * Math.PI * 2 - Math.PI / 2; return { title, sub, x: (50 + 44 * Math.cos(ang)) + '%', y: (50 + 44 * Math.sin(ang)) + '%' }; }),
      heroTags: ['AI application development','Custom software & apps','Technology consulting'],
      capHeight: '420vh',
      capCounter: String(this.state.cap + 1).padStart(2, '0') + ' / 07',
      caps: capData.map(([title, body, tags], i) => ({ num: String(i + 1).padStart(2, '0'), title, body, tags,
        isAI: i === 0, isSW: i === 1, isWeb: i === 2, isMob: i === 3, isAuto: i === 4, isAPI: i === 5, isCon: i === 6,
        bg: i === this.state.cap ? '#1F2430' : '#181B23', border: i === this.state.cap ? '#8FAAE8' : '#2B2F3A' })),
      disciplines: [
        { num:'01', title:'Advise', lead:'Make technology questions into clear choices.', body:'Technology strategy, architecture, technical discovery, AI opportunity reviews, automation planning, and product definition.', tags:['Strategy','Architecture','Discovery','AI opportunities','Automation planning','Product definition'], bg: OFF, fg: INK, accent: B, tagBorder:'#D6D3CB' },
        { num:'02', title:'Engineer', lead:'Make those choices into running technology.', body:'AI products, web and mobile applications, APIs, integrations, automation, and custom software.', tags:['AI products','Web apps','Mobile apps','APIs','Integrations','Automation','Custom software'], bg: B, fg: OFF, accent: OFF, tagBorder:'rgba(245,244,240,0.45)' },
      ],
      steps: [['01','Challenge','A problem, constraint, or opening that technology can address.'],['02','Strategy','The right direction, weighed against cost, scale, and risk.'],['03','Architecture','Systems, data, and integrations designed before coding starts.'],['04','Build','Engineering in steady iterations, with the architecture as the agreement.'],['05','Launch','Deployed, monitored, and ready to grow with the business.']].map(([num,title,body]) => ({num,title,body})),
      aiLabel: ['Ingesting data','Reasoning','Deciding','Acting'][this.state.ai],
      aiProgress: (this.state.ai / 3 * 100) + '%',
      pipeline: [['Data','Documents, records, events, and the systems you already run.'],['Intelligence','Models, retrieval, and reasoning tuned to your domain.'],['Decision','Classify, recommend, route — with people where judgment counts.'],['Action','Updates, messages, and workflows triggered automatically.']].map(([title,body], i) => {
        const ai = this.state.ai, cur = i === ai, done = i < ai;
        return { title, body, num: String(i + 1).padStart(2, '0'), state: cur ? 'Active' : (done ? 'Done' : 'Waiting'),
          bg: cur ? '#2451B8' : '#1C2029', border: cur ? '#2451B8' : (done ? '#8FAAE8' : '#2B2F3A'), numColor: cur ? '#F5F4F0' : '#8FAAE8',
          lift: cur ? 'translateY(-6px)' : 'none',
          signals: [0.9, 0.6, 0.75].map((w, k) => ({ w: (cur || done) ? (w * 100) + '%' : '12%', c: cur ? '#F5F4F0' : '#8FAAE8', d: (k * 120) + 'ms' })) };
      }),
      aiCards: [
        { title:'AI applications', body:'Products with models at their centre, not added on later.', example:'A claims assistant that reviews submissions against policy and prepares a recommendation for an adjuster.' },
        { title:'Intelligent automation', body:'Multi-step processes that run unattended and escalate only when needed.', example:'Supplier invoices are matched, approved within thresholds, and posted, with exceptions sent to finance.' },
        { title:'AI-powered workflows', body:'Intelligence placed inside the tools your teams use every day.', example:'Account managers see suggested next steps and drafted emails right inside their CRM.' },
        { title:'Conversational interfaces', body:'Assistants and agents grounded in your own data and rules.', example:'A help-desk assistant answers from your knowledge base and passes full context to a human when needed.' },
        { title:'Document & data intelligence', body:'Extraction, classification, and search across unstructured content.', example:'Agreements and reports become structured, searchable records with key clauses highlighted.' },
        { title:'AI integrations', body:'Models connected to your platforms, APIs, and data stores.', example:'Language models linked to your ERP or data warehouse through governed, audited APIs.' },
      ],
      apps: this.appsRaw().map((a, i) => { const on = this.state.app === i; return { ...a,
        enter: () => this.setState({ app: i }), leave: () => this.setState({ app: -1 }),
        rows: on ? '1fr' : '0fr', listOpacity: on ? 1 : 0, listShift: on ? 'none' : 'translateY(-6px)', hintOpacity: on ? 0 : 1,
        border: on ? '#2451B8' : '#E2DFD7', bg: on ? '#FFFFFF' : '#F5F4F0', shadow: on ? '0 8px 16px rgba(21,24,31,0.08)' : 'none' }; }),
      deliverables: ['Technology discovery','Technical architecture','Product strategy','AI opportunity review','Technology roadmap','System modernization'],
      phases: [['01','Discover','People, systems, constraints, and the real problem behind the request.'],['02','Define','Scope, success measures, and the direction worth committing to.'],['03','Architect','Systems, data flows, integrations, and AI that will survive production.'],['04','Build','Engineering against the architecture, with the roadmap as the plan.'],['05','Optimize','Measure, refine, and modernize as the business and its data evolve.']].map(([num,title,body]) => ({num,title,body})),
      flow: flowData.map(([num,title,items], i) => { const on = i <= fi, cur = i === fi; return { num, title, items,
        opacity: on ? 1 : 0.35, transform: on ? 'none' : 'translateY(16px)',
        bg: cur ? B : (on ? '#1F2430' : '#181B23'), border: cur ? B : (on ? '#8FAAE8' : '#2B2F3A'), numColor: cur ? OFF : '#8FAAE8' }; }),
      // Clients ticker (added for the live site). logo: public/clients/, w x h its pixel size, size the
      // displayed height in px (set per logo so they look the same weight), bg the card behind it.
      clients: [
        ['Find Healthcare USA', 'https://findhealthcare.com', 'findhealthcare-usa', 312, 74, 36, '#FFFFFF'],
        ['Silver Streak Senior Services', 'https://silverstreakhelp.com/', 'silver-streak-senior-services', 217, 55, 40, '#06152B'],
        ['Wellapy', 'https://wellapy.gr', 'wellapy', 264, 60, 34, '#FFFFFF'],
        ['Shield Funding', 'https://shieldfunding.com', 'shield-funding', 400, 64, 34, '#FFFFFF'],
        ['re:source Roadmap', 'https://resourceroadmap.com/', 'resource-roadmap', 388, 21, 14, '#4B1901'],
        ['WagIt', 'https://wagit.uk', 'wagit', 135, 59, 34, '#FFFFFF'],
        ['SME Blue Pages', 'https://smebluepages.com', 'sme-blue-pages', 198, 43, 32, '#F0F8FF'],
        ['Seattle Pro Contractors', 'https://seattleprocontractors.com', 'seattle-pro-contractors', 307, 76, 44, 'linear-gradient(90deg,#878B8E,#787B83)'],
        ['Premier FL Magazine', 'https://premiereflmagazine.com', 'premier-fl-magazine', 166, 40, 34, '#FFFFFF'],
      ].map(([name, url, file, w, h, size, bg]) => ({ name, url, logo: `/clients/${file}.webp`, w, h, size, bg })),
      principles: [['01','Outcomes over output','We\'re paid to fix a business problem, not to bill hours or write code for its own sake.'],['02','Room to grow','What we build grows with you, so you never pay to rebuild it twice.'],['03','Proof before hype','No AI you don\'t need. We prove it works with a prototype and real numbers first.'],['04','No handoff gap','The people who plan your project are the people who build it, so nothing gets lost.']].map(([num,title,body]) => ({num,title,body})),
      stackLeft: [{ title:'AI & data', items:['AI models','Data platforms','Intelligent automation'] },{ title:'Applications', items:['Web','Mobile','SaaS','Custom platforms'] }],
      stackRight: [{ title:'Infrastructure', items:['Cloud','APIs','Databases','Security'] },{ title:'Integrations', items:['Business systems','Payments','CRM','Third-party platforms'] }],
      form: this.state.form, setName: this.field('name'), setEmail: this.field('email'), setCompany: this.field('company'), setMsg: this.field('msg'),
      emailError: this.state.emailError || undefined, nameError: this.state.nameError || undefined,
      needs: ['AI application','Custom software','Web app','Mobile app','Automation','Consulting'].map(n => { const on = (this.state.needs || []).includes(n); return { label: n, bg: on ? '#2451B8' : '#FFFFFF', fg: on ? '#F5F4F0' : '#15181F', border: on ? '#2451B8' : '#D6D3CB', toggle: () => this.setState(s => { const cur = s.needs || []; return { needs: cur.includes(n) ? cur.filter(x => x !== n) : [...cur, n] }; }) }; }),
      submit: () => { const f = this.state.form; const ne = f.name.trim() ? '' : 'Please add your name'; const ee = /^\S+@\S+\.\S+$/.test(f.email) ? '' : 'Enter a valid email address'; if (ne || ee) return this.setState({ nameError: ne, emailError: ee });
        // Sent by public/contact.php on the web host. `website` is the spam trap.
        if (this.state.sending) return;
        this.setState({ sending: true, sendError: '' });
        const trap = document.querySelector('input[name="website"]');
        fetch('/contact.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, needs: this.state.needs || [], website: trap ? trap.value : '' }) })
          .then((r) => { if (!r.ok) throw new Error(String(r.status)); this.setState({ sent: true, sending: false }); })
          .catch(() => this.setState({ sending: false, sendError: 'Your message could not be sent. Please email service@wpcodie.com instead.' })); },
      sending: this.state.sending, sendError: this.state.sendError,
      reset: () => this.setState({ sent: false, sendError: '', needs: [], form: { name: '', email: '', company: '', msg: '' } }),
      sent: this.state.sent, notSent: !this.state.sent, firstName: this.state.form.name.trim().split(' ')[0] || 'there',
      helpful: ['The problem or opportunity you want to tackle','Systems, data, or platforms already involved','Timeline, constraints, and who is involved on your side'],
    };
  }
}

export default Component;
