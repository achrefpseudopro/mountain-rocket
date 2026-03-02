/* ============================================================
   Shared components (navbar + footer)
   Injected via JS so you edit them in ONE place.
   Each page just calls:  <div id="navbar-placeholder"></div>
                           <div id="footer-placeholder"></div>
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Determine path prefix (are we in /pages or /blog ?) --- */
  const depth = window.location.pathname.split('/').filter(Boolean);
  const inSub = depth.some(d => ['pages', 'blog'].includes(d));
  const P = inSub ? '../' : '';

  /* --- NAVBAR --- */
  const navHTML = `
  <nav class="navbar navbar-expand-lg navbar-topfab fixed-top">
    <div class="container">
      <a class="navbar-brand" href="${P}index.html">
        <span class="status-dot"></span>CECAM-ESCR <span class="x">×</span> Nicomatic
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="mainNav">
        <ul class="navbar-nav gap-1">
          <li class="nav-item"><a class="nav-link" href="${P}index.html">Accueil</a></li>
          <li class="nav-item"><a class="nav-link" href="${P}pages/robot.html">Robot</a></li>
          <li class="nav-item"><a class="nav-link" href="${P}pages/blog.html">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="${P}pages/gallery.html">Galerie</a></li>
          <li class="nav-item"><a class="nav-link" href="${P}pages/about.html">Équipe</a></li>
          <li class="nav-item"><a class="nav-link" href="${P}pages/contact.html">Communauté</a></li>
        </ul>
      </div>
    </div>
  </nav>`;

  const navPh = document.getElementById('navbar-placeholder');
  if (navPh) navPh.innerHTML = navHTML;

  // Highlight active link
  const loc = window.location.pathname;
  document.querySelectorAll('.navbar-topfab .nav-link').forEach(link => {
    if (link.getAttribute('href') && loc.endsWith(link.getAttribute('href').replace('../', ''))) {
      link.classList.add('active');
    }
  });

  /* --- FOOTER --- */
  const footHTML = `
  <footer class="footer-topfab text-center">
    <div class="container">
      <p class="small text-muted-custom mb-2">© 2025–2026 Équipe FTC CECAM-ESCR × Nicomatic — TOP FAB Saison 3</p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="https://www.nicomatic.com/fr" target="_blank" class="small">Nicomatic</a>
        <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" class="small">FIRST Tech Challenge</a>
        <a href="https://radiomontblanc.fr" target="_blank" class="small">Radio Mont Blanc</a>
        <a href="https://robotiquefirstfrance.org" target="_blank" class="small">Robotique First France</a>
      </div>
    </div>
  </footer>`;

  const footPh = document.getElementById('footer-placeholder');
  if (footPh) footPh.innerHTML = footHTML;

});
