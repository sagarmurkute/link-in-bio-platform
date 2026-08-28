// Product Name Config
const PRODUCT_NAME = "VYB";
if (PRODUCT_NAME) {
  document.querySelectorAll('#brandName,#loaderBrand,#footerBrand').forEach(el => el.textContent = PRODUCT_NAME);
  if (!location.pathname.includes('manifesto')) {
    document.title = PRODUCT_NAME + " — One account. One link. Everything you.";
  }
}

// Light/Dark Theme Switcher
const savedTheme = localStorage.getItem('vyb-theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}

const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('vyb-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('vyb-theme', 'light');
    }
  });
}

// Loader Animation
const loader = document.getElementById('loader');
const loaderLine = document.getElementById('loaderLine');
const loaderPercent = document.getElementById('loaderPercent');
let prog = 0;

const li = setInterval(() => {
  prog += Math.random() * 18;
  if (prog > 100) prog = 100;
  if (loaderPercent) loaderPercent.textContent = String(Math.floor(prog)).padStart(2, '0') + '%';
  if (loaderLine) loaderLine.style.transform = `scaleX(${prog / 100})`;
  
  if (prog >= 100) {
    clearInterval(li);
    setTimeout(() => {
      if (loader) loader.classList.add('hide');
      const page = document.getElementById('page');
      if (page) page.classList.add('loaded');
    }, 320);
  }
}, 60);

// Canvas Fluid Background
const canvas = document.getElementById('fluid');
if (canvas) {
  const ctx = canvas.getContext('2d', { alpha: true });
  let w, h, dpr;

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 1.8);
    w = innerWidth;
    h = innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  addEventListener('resize', resize, { passive: true });

  const blobs = [
    { x: 0.5, y: -0.1, r: 0.9, vx: 0.0002, vy: 0.00015, c: '245,242,237', a: 0.14 },
    { x: 0.9, y: 0.25, r: 0.5, vx: -0.00018, vy: 0.0001, c: '212,205,193', a: 0.08 },
    { x: 0.15, y: 0.9, r: 0.6, vx: 0.00012, vy: -0.00012, c: '232,226,217', a: 0.07 }
  ];
  let t = 0;

  (function render() {
    t += 0.0016;
    ctx.clearRect(0, 0, w, h);
    blobs.forEach((b, i) => {
      b.x += b.vx + Math.sin(t * 0.5 + i) * 0.00015;
      b.y += b.vy + Math.cos(t * 0.4 + i) * 0.00012;
      const rx = b.r * w * 0.8;
      const ry = b.r * h * 0.9;
      const grad = ctx.createRadialGradient(b.x * w, b.y * h, 0, b.x * w, b.y * h, Math.max(rx, ry));
      grad.addColorStop(0, `rgba(${b.c},${b.a})`);
      grad.addColorStop(0.5, `rgba(${b.c},${b.a * 0.3})`);
      grad.addColorStop(1, `rgba(${b.c},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(b.x * w, b.y * h, rx, ry, Math.sin(t + i) * 0.15, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(render);
  })();
}

// Custom Mouse Cursor
const cursor = document.getElementById('cursor');
const isTouch = 'ontouchstart' in window;

if (!isTouch && cursor) {
  let mx = 0, my = 0, cx = 0, cy = 0;
  addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  (function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a,button,input,.waitlist').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('is-hovering'));
  });
} else if (cursor) {
  cursor.style.display = 'none';
}

// Waitlist Form Interaction
const waitlist = document.getElementById('waitlist');
const emailInput = document.getElementById('emailInput');
const btn = document.getElementById('waitlistBtn');

if (btn && emailInput && waitlist) {
  btn.addEventListener('click', () => {
    const v = emailInput.value.trim();
    if (!v || !v.includes('@')) {
      emailInput.focus();
      emailInput.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(4px)' },
        { transform: 'translateX(-4px)' },
        { transform: 'translateX(0)' }
      ], { duration: 280 });
      return;
    }
    waitlist.classList.add('is-success');
  });

  emailInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') btn.click();
  });
}

// Time and Build Status Updater
function updateTime() {
  const now = new Date();
  const ist = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);
  
  const timeEl = document.getElementById('timeIST');
  if (timeEl) timeEl.textContent = ist + ' IST';
}

setInterval(updateTime, 1000);
updateTime();

const buildEl = document.getElementById('build');
if (buildEl) {
  buildEl.textContent = 'Build ' + Math.floor(Math.random() * 900 + 100) + ' Private';
}

if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const page = document.getElementById('page');
  if (page) page.classList.add('loaded');
  if (loader) loader.classList.add('hide');
}
