// ============================================
//  GENERACIÓN VICTORIA — Scripts principales
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Carrusel ──────────────────────────────
  const carousel = document.querySelector('.carousel-slides');
  const dots     = document.querySelectorAll('.carousel-dots span');
  const total    = document.querySelectorAll('.carousel-slide').length;
  let current    = 0;
  let autoTimer;

  function goTo(n) {
    current = (n + total) % total;
    if (carousel) carousel.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  document.querySelector('.carousel-btn.next')?.addEventListener('click', () => { clearInterval(autoTimer); next(); startAuto(); });
  document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => { clearInterval(autoTimer); prev(); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(autoTimer); goTo(i); startAuto(); }));

  function startAuto() { autoTimer = setInterval(next, 5500); }
  if (total > 0) { goTo(0); startAuto(); }

  // Clic en slide → redirige a la sección
  document.querySelectorAll('.carousel-slide[data-href]').forEach(slide => {
    slide.addEventListener('click', () => { window.location.href = slide.dataset.href; });
  });

  // ── Menú hamburguesa ──────────────────────
  const hamburger = document.querySelector('.hamburger');
  const navInner  = document.querySelector('.nav-inner');
  hamburger?.addEventListener('click', () => {
    navInner?.classList.toggle('open');
  });

  // ── Marcar nav activo ─────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('nav a').forEach(a => {
    if (path.includes(a.getAttribute('href'))) a.classList.add('active');
  });

  // ── Lazy image placeholders ───────────────
  // Si una imagen no carga, mostrar placeholder con emoji
  document.querySelectorAll('img[data-placeholder]').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      const ph = document.createElement('div');
      ph.className = 'img-placeholder';
      const size = this.dataset.placeholder || '🖼️';
      ph.style.cssText = `width:100%;height:${this.style.height||'190px'};`;
      ph.textContent = size;
      this.parentNode.insertBefore(ph, this.nextSibling);
    });
  });

  // ── Ticker tape: pausa al hover ───────────
  const tickerText = document.querySelector('.ticker-text');
  tickerText?.addEventListener('mouseenter', () => {
    tickerText.style.animationPlayState = 'paused';
  });
  tickerText?.addEventListener('mouseleave', () => {
    tickerText.style.animationPlayState = 'running';
  });

  // ── Año en footer ─────────────────────────
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});

// Helper global: formatear fechas
function formatDate(isoStr) {
  const d = new Date(isoStr);
  return d.toLocaleDateString('es-EC', { day: 'numeric', month: 'long', year: 'numeric' });
}
