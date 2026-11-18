// Static, dependency-free carousel. Works when index.html is opened directly.
document.getElementById('year').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-carousel]').forEach((cover) => {
  const slides = [...cover.querySelectorAll('.carousel-slide')];
  const controls = cover.nextElementSibling;
  if (!controls?.classList.contains('carousel-controls') || slides.length < 2) return;

  const dots = [...controls.querySelectorAll('[data-slide]')];
  const toggle = controls.querySelector('.carousel-toggle');
  const count = controls.querySelector('.carousel-count');
  let current = 0;
  let paused = reducedMotion.matches;
  let timer;
  let hovered = false;
  let focused = false;

  function show(index) {
    current = index;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
      dots[i].setAttribute('aria-pressed', String(i === current));
    });
    count.textContent = `${current + 1} / ${slides.length}`;
  }

  function schedule() {
    clearInterval(timer);
    toggle.textContent = paused ? '播放輪播' : '暫停輪播';
    toggle.setAttribute('aria-label', `${paused ? '播放' : '暫停'} ${cover.dataset.carousel} 自動輪播`);
    if (paused || hovered || focused || document.hidden) return;
    timer = setInterval(() => show((current + 1) % slides.length), 4500);
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); schedule(); }));
  toggle.addEventListener('click', () => { paused = !paused; schedule(); });
  cover.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  cover.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  cover.addEventListener('focusin', () => { focused = true; schedule(); });
  cover.addEventListener('focusout', () => { focused = false; schedule(); });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; schedule(); });
  controls.hidden = false;
  show(0);
  schedule();
});
