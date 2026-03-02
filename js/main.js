/* ============================================================
   CECAM-ESCR × Nicomatic — TOP FAB S3
   Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll effect ----
  const nav = document.querySelector('.navbar-topfab');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => obs.observe(el));
  }

  // ---- Counter animation (hero stats) ----
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          let cur = 0;
          const step = Math.max(1, Math.floor(target / 25));
          const interval = setInterval(() => {
            cur += step;
            if (cur >= target) { el.textContent = target; clearInterval(interval); }
            else el.textContent = cur;
          }, 40);
          cObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObs.observe(c));
  }

  // ---- Lightbox for gallery images ----
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');

  document.querySelectorAll('.gallery-grid img, [data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      if (lightbox && lbImg) {
        lbImg.src = img.src;
        lbImg.alt = img.alt || '';
        lightbox.classList.add('active');
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
  }

  // ---- Back to top button ----
  const btnTop = document.getElementById('btn-top');
  if (btnTop) {
    window.addEventListener('scroll', () => {
      btnTop.classList.toggle('show', window.scrollY > 400);
    });
    btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- Demo contact form ----
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      if (msg) {
        msg.classList.remove('d-none');
        msg.textContent = '✓ Merci ! (Connectez Formspree / EmailJS pour rendre ce formulaire fonctionnel.)';
      }
      form.reset();
    });
  }

});
