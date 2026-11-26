/* ---------- Bead chains (moving background behind the home page top) ----------
   Rings of six beads drift slowly behind the hero. Each one opens into
   a gently waving chain and closes back into a whole ring. A row of
   smaller rings sits along the top, a few stay near the corners, and
   rings fade out near the words so the text always reads clearly.
   Visitors who ask their device for less motion see one still frame. */
(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const cv = document.createElement("canvas");
  cv.className = "bead-chains";
  cv.setAttribute("aria-hidden", "true");
  hero.insertBefore(cv, hero.firstChild);
  if (!cv.getContext) return;
  const ctx = cv.getContext("2d");
  const textBox = hero.querySelector(".wrap > div") || hero.querySelector(".wrap");
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const BEADS = 6, TAU = Math.PI * 2, FADE = 110;
  let W = 0, H = 0, chains = [], last = 0, t = 0, running = false, onScreen = true;

  const rand = (a, b) => a + Math.random() * (b - a);
  const ease = x => x * x * (3 - 2 * x);

  function ring(size, extra) {
    const small = W < 700;
    return Object.assign({
      x: rand(0, W), y: rand(0, H), vx: rand(-7, 7), vy: rand(-5, 5),
      r: (small ? 24 : 36) * size, bead: (small ? 4.6 : 6.4) * size,
      rot: rand(0, TAU), spin: rand(-0.06, 0.06),
      phase: rand(0, TAU), period: rand(16, 26),
      alpha: 0.10 + 0.16 * Math.min(1, Math.max(0, (size - 0.55) / 0.8)),
      mauve: Math.random() < 0.45
    }, extra || {});
  }

  function build() {
    const small = W < 700;
    chains = [];
    // Drifting rings
    for (let i = 0; i < (small ? 6 : 13); i++) chains.push(ring(rand(0.55, 1.35)));
    // Rings that stay near the top corners
    const corners = small ? [[0.10, 0.14], [0.90, 0.14]] : [[0.07, 0.14], [0.17, 0.30], [0.93, 0.14], [0.83, 0.30]];
    corners.forEach(([fx, fy]) => chains.push(ring(rand(0.7, 1.2), {
      home: [fx, fy], wx: rand(18, 34), wy: rand(12, 24), fx: rand(0.05, 0.09), fy: rand(0.04, 0.08)
    })));
    // A row of smaller rings along the top, never faded
    const topXs = small ? [0.12, 0.5, 0.88] : [0.05, 0.19, 0.34, 0.5, 0.66, 0.81, 0.95];
    topXs.forEach(fx => chains.push(ring(rand(0.5, 0.75), {
      home: [fx, small ? 30 : 40], homePx: true, top: true,
      wx: rand(14, 26), wy: rand(3, 6), fx: rand(0.05, 0.09), fy: rand(0.05, 0.09),
      alpha: rand(0.16, 0.24)
    })));
    place();
  }

  function place() {
    chains.forEach(c => {
      if (!c.home) return;
      c.x = c.home[0] * W + Math.sin(t * c.fx + c.phase) * c.wx;
      c.y = (c.homePx ? c.home[1] : c.home[1] * H) + Math.cos(t * c.fy + c.phase) * c.wy;
    });
  }

  function resize() {
    const box = hero.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const firstTime = !W;
    W = box.width; H = box.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (firstTime || !chains.length) build();
    place();
    if (reduce || !running) draw();
  }

  const color = (c, a) => c.mauve ? `rgba(176,110,124,${a})` : `rgba(74,47,59,${a})`;

  function drawChain(c) {
    const closed = ease(0.5 - 0.5 * Math.cos(TAU * t / c.period + c.phase));   // 0 open chain, 1 closed ring
    const step = TAU * c.r / BEADS;
    const cos = Math.cos(c.rot), sin = Math.sin(c.rot);
    const pts = [];
    for (let i = 0; i < BEADS; i++) {
      const ang = c.rot + i * TAU / BEADS;
      const rx = c.x + c.r * Math.cos(ang), ry = c.y + c.r * Math.sin(ang);
      const ox = (i - (BEADS - 1) / 2) * step * 0.82;
      const oy = Math.sin(t * 0.7 + i * 0.95 + c.phase) * c.r * 0.28;
      const lx = c.x + ox * cos - oy * sin, ly = c.y + ox * sin + oy * cos;
      pts.push([lx + (rx - lx) * closed, ly + (ry - ly) * closed]);
    }
    const A = c.alpha * (c.fade == null ? 1 : c.fade);
    const w = Math.max(1, c.bead * 0.42);
    ctx.lineWidth = w; ctx.lineCap = "round";
    const link = (p, q, a) => {
      const dx = q[0] - p[0], dy = q[1] - p[1], d = Math.hypot(dx, dy);
      if (d <= c.bead * 2.2) return;
      const ux = dx / d, uy = dy / d, g = c.bead + w * 0.5;
      ctx.strokeStyle = color(c, a);
      ctx.beginPath(); ctx.moveTo(p[0] + ux * g, p[1] + uy * g); ctx.lineTo(q[0] - ux * g, q[1] - uy * g); ctx.stroke();
    };
    for (let i = 0; i < BEADS - 1; i++) link(pts[i], pts[i + 1], A);
    if (closed > 0.02) link(pts[BEADS - 1], pts[0], A * closed);
    ctx.strokeStyle = color(c, A);
    pts.forEach(p => { ctx.beginPath(); ctx.arc(p[0], p[1], c.bead, 0, TAU); ctx.stroke(); });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    let z = null;
    if (textBox) {
      const a = cv.getBoundingClientRect(), b = textBox.getBoundingClientRect();
      z = { l: b.left - a.left - 20, r: b.right - a.left + 20, t: b.top - a.top - 20, b: b.bottom - a.top + 20 };
    }
    chains.forEach(c => {
      let f = 1;
      if (z && !c.top) {
        const reach = c.r + c.bead;
        const dx = Math.max(z.l - (c.x + reach), 0, (c.x - reach) - z.r);
        const dy = Math.max(z.t - (c.y + reach), 0, (c.y - reach) - z.b);
        f = Math.min(1, Math.hypot(dx, dy) / FADE);
        if (W < 700) f = Math.max(f, 0.45);   // phones: dim behind the words instead of vanishing
      }
      c.fade = f;
      if (f > 0.01) drawChain(c);
    });
  }

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now; t += dt;
    const pad = 80;
    place();
    chains.forEach(c => {
      c.rot += c.spin * dt;
      if (c.home) return;
      c.x += c.vx * dt; c.y += c.vy * dt;
      if (c.x < -pad) c.x = W + pad; else if (c.x > W + pad) c.x = -pad;
      if (c.y < -pad) c.y = H + pad; else if (c.y > H + pad) c.y = -pad;
    });
    draw();
    requestAnimationFrame(frame);
  }

  function setRunning(on) {
    if (reduce) return;
    if (on && !running) { running = true; last = 0; requestAnimationFrame(frame); }
    if (!on) running = false;
  }

  resize();
  window.addEventListener("resize", resize);
  if (reduce) { t = 6; place(); draw(); return; }
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => { onScreen = es[0].isIntersecting; setRunning(onScreen && !document.hidden); }).observe(cv);
  }
  document.addEventListener("visibilitychange", () => setRunning(onScreen && !document.hidden));
  setRunning(true);
})();
