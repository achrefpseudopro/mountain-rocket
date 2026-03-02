# CECAM-ESCR × Nicomatic — TOP FAB Saison 3

Site web statique de l'équipe FTC du Lycée CECAM-ESCR et Nicomatic (Chablais, Haute-Savoie).

**Pas de backend, pas de build.** HTML + CSS + JS + Bootstrap 5. Ouvrez `index.html` dans un navigateur.

---

## Structure du projet

```
topfab/
├── index.html              ← Page d'accueil
├── css/
│   └── style.css           ← Thème custom (variables, composants, dark theme)
├── js/
│   ├── components.js       ← Navbar + Footer partagés (éditez ici = mis à jour partout)
│   └── main.js             ← Scroll reveal, lightbox, compteurs, form handler
├── pages/
│   ├── robot.html          ← Page robot + timeline
│   ├── blog.html           ← Liste des articles
│   ├── gallery.html        ← Photos + vidéos avec lightbox
│   ├── about.html          ← Équipe (mentors + élèves)
│   └── contact.html        ← Formulaire de contact
├── blog/
│   ├── _template.html      ← ⭐ TEMPLATE — copiez-le pour chaque nouvel article
│   └── 2025-09-15-lancement.html  ← Article d'exemple
├── images/                 ← Mettez vos photos ici
├── videos/                 ← Mettez vos vidéos ici
└── README.md
```

---

## Comment ajouter du contenu

### Ajouter un article de blog

1. **Copier** `blog/_template.html` → `blog/YYYY-MM-DD-slug.html`
2. **Éditer** le fichier : titre, date, catégorie, texte, images
3. **Ajouter une carte** dans `pages/blog.html` ET dans `index.html` (section "Dernières nouvelles") :

```html
<div class="col-md-6 col-lg-4 reveal">
  <div class="card-topfab blog-card h-100">
    <img src="../images/mon-image.jpg" alt="Titre">
    <div class="card-body">
      <div class="meta mb-2">10 Jan 2026 · Catégorie</div>
      <h5 class="card-title">Mon titre</h5>
      <p class="text-sec small">Résumé court.</p>
      <a href="../blog/2026-01-10-slug.html" class="small">Lire la suite →</a>
    </div>
  </div>
</div>
```

### Ajouter des photos

1. Déposez vos images dans `images/`
2. Dans `pages/gallery.html`, ajoutez dans la `gallery-grid` :

```html
<img src="../images/nom-du-fichier.jpg" alt="Description">
```

La lightbox fonctionne automatiquement (clic pour zoomer).

### Ajouter une vidéo

**YouTube/Vimeo** — dans `pages/gallery.html` :
```html
<div class="col-md-6">
  <div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Titre" allowfullscreen></iframe>
  </div>
</div>
```

**Vidéo locale** — déposez dans `videos/` puis :
```html
<video src="../videos/demo.mp4" controls class="w-100 rounded"></video>
```

### Ajouter / modifier un membre d'équipe

Dans `pages/about.html`, copiez un bloc de carte et changez les initiales, nom et rôle. Pour une photo à la place des initiales :

```html
<img src="../images/team/prenom.jpg" class="rounded-circle" width="64" height="64" alt="Prénom">
```

### Modifier la navbar ou le footer

Éditez **`js/components.js`** — un seul fichier, répercuté sur toutes les pages.

---




## Licence

Projet open source pour l'équipe FTC CECAM-ESCR × Nicomatic, dans le cadre de TOP FAB Saison 3.
