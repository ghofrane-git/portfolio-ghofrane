# Portfolio — Ghofrane Boutefnouchet

## 📁 Structure du projet

```
portfolio/
├── index.html          ← Page principale
├── css/
│   └── style.css       ← Tous les styles (variables, composants, responsive)
├── js/
│   └── main.js         ← Animations, menu mobile, scroll effects
├── assets/             ← Dossier pour images (photo de profil, logos, etc.)
└── README.md           ← Ce fichier
```

## 🚀 Utilisation

1. Ouvrir le dossier `portfolio/` dans VS Code
2. Installer l'extension **Live Server** si pas déjà fait
3. Clic droit sur `index.html` → **Open with Live Server**

## ✏️ Guide de modification rapide

### Changer les couleurs
→ Fichier : `css/style.css` — Section **1. VARIABLES & TOKENS**
- `--champagne` : couleur dorée principale
- `--bg-deep` : fond noir
- `--text-primary` : couleur du texte

### Modifier le contenu
→ Fichier : `index.html` — Chaque section est commentée

### Ajouter un projet
→ Copier le bloc `.project-card` dans la section **PROJECTS** et modifier

### Ajouter une photo de profil
→ Placer l'image dans `assets/` et l'ajouter dans le hero de `index.html`

## 🌐 Déploiement

### Vercel (recommandé)
1. Créer un compte sur [vercel.com](https://vercel.com)
2. Glisser-déposer le dossier `portfolio/`
3. Le site est en ligne !

### Netlify
1. Aller sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glisser-déposer le dossier
3. C'est fait !

### GitHub Pages
1. Créer un repo GitHub
2. Push le code
3. Settings → Pages → Source: main branch
