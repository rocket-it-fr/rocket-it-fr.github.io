# ROCKET IT — Documentation Technique du Site

> **Site officiel ROCKET IT** — Partenaire Zoho Officiel Certifié
> Document de synthèse technique pour reprise / évolution du projet

**Dernière mise à jour** : juin 2026
**URL de production** : https://www.rocket-it.fr/
**Repo GitHub** : (à créer) `rocket-it-fr/rocket-it-fr.github.io`

---

## 📋 Vue d'ensemble

Site vitrine professionnel composé de **11 pages HTML statiques** présentant les services de ROCKET IT (intégration Zoho One pour PME/ETI). Conçu pour générer des leads via formulaire de contact (Zoho Web-to-Lead).

### Stack technique
- **Frontend** : HTML5 / CSS3 / Vanilla JS (sans framework)
- **Fonts** : Orbitron (display) + Manrope (body) via Google Fonts
- **Hébergement** : GitHub Pages
- **DNS** : PlanetHoster (registrar uniquement, pas d'hosting)
- **Formulaire** : Zoho Web-to-Lead → Zoho CRM
- **Chat support** : Zoho SalesIQ (chargé d'office, opt-out possible)
- **RDV** : Zoho Bookings (custom domain `booking.rocket-it.fr` en cours)

### Performance et accessibilité
- Images en **WebP** (réduction ~80% du poids vs PNG)
- Favicons multi-tailles (16, 32, 48, 180, 192, 512px) + favicon.ico
- `lang="fr"` partout, viewport responsive
- Pas de JS bloquant
- Compatible mobiles, tablettes (iPad portrait/landscape), desktop

---

## 🗂 Structure des fichiers

```
rocket-it-site/
├── 📄 Pages HTML (11)
│   ├── index.html                      # Accueil
│   ├── pourquoi-zoho.html              # Pitch Zoho + comparatifs
│   ├── services.html                   # 6 services détaillés
│   ├── realisations.html               # 14 études de cas + 13 secteurs
│   ├── avis.html                       # 7 témoignages clients
│   ├── a-propos.html                   # Bio James Cauliez + frise carrière
│   ├── contact.html                    # Form + Zoho Bookings embed
│   ├── merci.html                      # Confirmation form
│   ├── statut-zoho.html                # Embed status.zoho.eu
│   ├── mentions-legales.html           # LCEN
│   └── politique-confidentialite.html  # RGPD + cookies
│
├── 📁 css/
│   └── style.css                       # Stylesheet unique partagé
│
├── 📁 js/
│   └── main.js                         # Burger, KPI counters, year, SalesIQ
│
├── 📁 assets/
│   ├── 🚀 Logos & fusées (WebP + PNG backup)
│   │   ├── fusee-violet.webp / .png    # Logo principal (header, etc.)
│   │   ├── fusee-lavande.webp / .png   # Footer
│   │   ├── fusee-mint.webp / .png      # Accents
│   │   ├── fusee-gold.webp / .png      # Variante alternative
│   │   ├── fusee-noire.webp / .png     # Variante alternative
│   │   ├── fusee-or-transparente.webp / .png
│   │   ├── logo-rocket-noir.webp / .png
│   │   └── logo-rocket-blanc.webp / .png
│   │
│   ├── 👤 Personnes
│   │   └── james-portrait.webp / .jpg  # Portrait fondateur
│   │
│   ├── 🏷️ Badges Zoho
│   │   ├── zoho-authorized-partner-horizontal.webp / .png
│   │   └── zoho-authorized-partner-square.webp / .png
│   │
│   ├── 🌐 Assets sociaux & SEO
│   │   ├── og-rocket-it.jpg            # Open Graph 1200x630
│   │   └── linkedin-banner.jpg         # Bannière LinkedIn 1584x396
│   │
│   └── 🎨 Favicons
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── favicon-48x48.png
│       ├── favicon-180x180 (apple-touch-icon.png)
│       ├── favicon-192x192.png
│       └── favicon-512x512.png
│
├── 🔗 Racine
│   ├── favicon.ico                     # Favicon multi-tailles
│   ├── robots.txt                      # Crawl rules
│   ├── sitemap.xml                     # 10 URLs publiques
│   ├── CNAME                           # www.rocket-it.fr (GitHub Pages)
│   └── README.md                       # Ce document
```

---

## 🎨 Charte graphique — Variante E "Lavande Douce"

### Couleurs (CSS variables dans `:root`)

```css
/* Backgrounds */
--bg: #FAFAF7;            /* Crème ultra clair - main background */
--bg-soft: #F2EFF5;       /* Lavande pâle - cards, blocs soft */
--bg-lavande: #ECEAF3;    /* Lavande accent - page headers */
--bg-card: #FFFFFF;       /* Blanc pur - cards principales */
--bg-dark: #380140;       /* Violet profond - footer, contraste */

/* Primaires */
--violet: #380140;        /* Couleur principale marque */
--violet-soft: #5E2370;   /* Variation violet pour dégradés */
--lavande: #C4C1D9;       /* Lavande médium - badges, accents */
--mint: #A0F2CC;          /* Mint clair - highlights, CTA */
--mint-dark: #5DB89A;     /* Mint foncé - hover, accents */
--mint-darker: #4A9580;   /* Mint très foncé - boutons, borders */

/* Texte */
--text: #1A0A1F;          /* Texte principal - noir violet */
--text-muted: #6E6E73;    /* Texte secondaire */
--border: #E5E2EA;        /* Bordures soft */
--border-lavande: #C4C1D9;
```

### Typography
- **Display** (titres, labels) : **Orbitron** 500/600/700/800/900
- **Body** : **Manrope** 300/400/500/600/700/800
- Chargement via Google Fonts (preconnect dans `<head>`)

### Design tokens utiles

```css
--font-display: 'Orbitron', sans-serif;
--font-body: 'Manrope', sans-serif;
--ease: cubic-bezier(0.4, 0, 0.2, 1);
--shadow-card: 0 4px 24px rgba(56,1,64,0.06);
--shadow-card-hover: 0 12px 40px rgba(56,1,64,0.12);
```

---

## 🧩 Composants CSS clés

### Layout
- `.container` : largeur max 1200px, centré, padding latéral
- `.section` : padding vertical responsive (clamp 3-5rem)
- `.section-soft` : variante background lavande
- `.section-violet` : variante background sombre

### Navigation
- `.site-header` : header sticky avec logo + nav + badge Zoho + burger
- `.burger` : menu mobile qui se déclenche à 900px (tablettes incluses)
- `.zoho-badge-wrapper` : badge Zoho dans le header (masqué <900px)

### Cards & contenus
- `.card` : card standard avec hover effect (lift + ombre)
- `a.card` : version cliquable (lien) avec flèche → au hover
- `.case-study` : étude de cas (réalisations)
- `.sector` : tile secteur d'activité
- `.testimonial` : carte témoignage
- `.service-detail` : layout 2 col (numéro + contenu) pour les 6 services
- `.service-features` : grille 2 colonnes pour les features (✓ + texte sur fond soft)
- `.service-highlight` : encart mint avec icône + texte explicatif

### Spécifiques pages
- `.hero-grid` : grid 2 colonnes hero (texte + visuel)
- `.hero-eyebrow` : pastille violette au-dessus du H1
- `.hero-partner-link` : pastille mint sous CTAs avec lien partenaire
- `.story-section` : sections de la page À propos
- `.timeline-vertical` : frise verticale carrière (emojis + années)
- `.modules-marquee` : carousel infini des apps Zoho

### Footer
- `.footer-grid` : 4 colonnes (brand / nav / ressources / contact)
- `.footer-trial-mini` : lien Essai Zoho dans Ressources (mint)
- `.contact-bases` : lignes géographiques (nowrap)

### Bouton / CTA
- `.btn` : base + variantes `.btn-primary`, `.btn-secondary`, `.btn-mint`
- `.btn-arrow` : ajoute une flèche → au hover

---

## ⚙️ Fonctionnement JS (`js/main.js`)

### Modules actifs
1. **Mobile burger** : toggle du menu hamburger
2. **KPI counters** : animation des chiffres au scroll (IntersectionObserver)
3. **Year footer** : injection auto de l'année courante
4. **SalesIQ loader** : chargement conditionnel du chat Zoho

### Logique cookies/SalesIQ
- SalesIQ est **chargé d'office** au DOMContentLoaded
- Si `localStorage.rocketit_salesiq_disabled === 'true'` → ne charge pas
- Fonctions publiques exposées : `disableSalesIQ()`, `enableSalesIQ()`
- Utilisées depuis le bouton sur `politique-confidentialite.html`

---

## 🔍 SEO mis en place

### Métadonnées par page
- `<title>` unique (50-70 chars, mots-clés ciblés)
- `<meta name="description">` unique (150-160 chars)
- `<meta name="keywords">` (marque + métier + local)
- Canonical URL
- Geo tags (geo.region, geo.placename)
- Open Graph complet (type, locale, site_name, url, title, description, image)
- Twitter Cards (summary_large_image)
- Pages légales en `noindex, follow`

### JSON-LD Schema.org
- **`index.html`** : `Organization` + `LocalBusiness` + `ProfessionalService` (graph)
  - Adresse Besançon + GeoCoordinates
  - `areaServed` : France + Besançon + Lyon + Paris + Drôme + Ardèche + régions
  - `knowsAbout` : 25+ technologies (Zoho One, CRM, Deluge, IA, etc.)
  - `hasCredential` : Zoho Authorized Partner
  - `aggregateRating` : 5/5 sur 7 reviews
  - `openingHoursSpecification` : Lun-Ven 9h-18h
  - `hasOfferCatalog` : 6 services listés
- **`a-propos.html`** : `Person` (James Cauliez) avec `alumniOf`, `knowsAbout`
- **`services.html`** : `ItemList` des 6 services
- **`pourquoi-zoho.html`, `realisations.html`, `avis.html`, `contact.html`** : `BreadcrumbList`
- **`contact.html`** : `ContactPage` aussi

### Mots-clés cibles
**Marque** : rocket it, rocketit, james cauliez
**Métier** : partenaire zoho officiel, intégrateur zoho france, expert zoho, consultant zoho, certifié zoho
**Local** : consultant zoho besançon, intégrateur zoho lyon, zoho drôme ardèche, zoho franche-comté
**Spécifique** : zoho one pme, zoho crm intégration, formation zoho, audit zoho, migration zoho, deluge, blueprint, canvas
**Différenciants** : ex-dsi, 20 ans d'expérience IT, 7 ans expertise zoho

---

## 🔌 Intégrations externes

### 1. Zoho Web-to-Lead (formulaire contact)
- **URL** : `https://crm.zoho.eu/crm/WebToLeadForm`
- **Form ID** : `webform827425000006812126`
- **Lead Source** : "Site Web" (caché)
- **reCAPTCHA** : v2 avec sitekey `6LeRYxQtAAAAAN0sXPH544iz4GnY6yuBItemp7uy`
- **Champs mandatory** : Company, Last Name, Email, Description
- **Page de remerciement** : `merci.html`

### 2. Zoho SalesIQ (chat)
- **Widget code** : `siq8555576954171dd06d9d2b71f74e165891ea1e734a38740064f4ea3ed0609cf7`
- **Source** : `https://salesiq.zohopublic.eu/widget`
- Chargé via `js/main.js` au DOMContentLoaded
- ⚠️ **TODO** : configurer le domaine `www.rocket-it.fr` dans Zoho SalesIQ > Brands

### 3. Zoho Bookings (RDV)
- **Embed script** : `https://bookings.nimbuspop.com/assets/embed.js`
- **Booking ID** : `222505000000040006`
- **URL actuelle** : `https://james-rocketit.zohobookings.eu/portal-embed#/222505000000040006`
- ⚠️ **TODO** : updater l'URL après config du custom domain `booking.rocket-it.fr` côté Zoho

### 4. Google reCAPTCHA v2
- Sitekey : `6LeRYxQtAAAAAN0sXPH544iz4GnY6yuBItemp7uy`
- Theme : dark (cohérent avec design)
- Charge automatique sur `contact.html`

---

## 📋 Pages — contenu et structure

### `index.html` (Accueil)
- Hero : H1 + lead + CTAs + lien partenaire + trust
- Partner strip : badge Zoho + USP
- Stats : 4 KPIs animés (20 ans, 5/5, 100%, 24h)
- Notre méthode : 4 cards cliquables → services.html#ancres
- About teaser : photo James + bio courte
- Testimonials : 3 sélectionnés
- CTA finale

### `pourquoi-zoho.html`
- Hero
- Modules marquee (carousel infini Zoho apps)
- 6 raisons (cards) : écosystème, prix, France, sécurité, IA, ROI
- Comparatifs Zoho vs Salesforce / HubSpot / Microsoft 365
- Bandeau partenaire Zoho trial
- CTA finale

### `services.html`
- Page header
- 6 service-detail (avec ancres #analyse, #parametrage, #integrations, #ia, #formation, #support)
  - Chacun avec `service-features` (2 col) + `service-highlight` (mint)
- CTA finale

### `realisations.html`
- Page header
- 13 secteurs (sectors-grid) avec emojis
- 14 case-studies anonymisés (par secteur, sans nom client)
- Placeholder-box "Votre projet ne ressemble..."
- CTA finale

### `avis.html`
- Page header
- 4 KPIs (stats)
- 7 témoignages (testimonial cards, prénom seul, sans société)
- CTA finale

### `a-propos.html`
- Page header
- Hero perso (photo ronde + bio)
- Frise carrière verticale avec emojis (🚀 Zoho, 📡 Télécom, 💊 Pharma, ⌚ Luxe, 🧱 BTP)
- Valeurs / principes
- Pourquoi Zoho (perspective perso)
- CTA finale

### `contact.html`
- Page header
- Form Zoho Web-to-Lead + reCAPTCHA
- Embed Zoho Bookings (calendrier inline)
- Pas de CTA finale (page d'action)

---

## 🚀 Déploiement (à venir)

### Plan déploiement GitHub Pages
1. Créer repo `rocket-it-fr/rocket-it-fr.github.io` (Public)
2. Upload tout le contenu du dossier `rocket-it-site/`
3. Vérifier que `CNAME` contient bien `www.rocket-it.fr`
4. Activer GitHub Pages dans Settings > Pages (source: main branch, root)
5. Attendre le déploiement (~1 min)

### Configuration DNS PlanetHoster
Records à créer dans Espace Client PlanetHoster → Zone DNS `rocket-it.fr` :

```
Type    Nom              Valeur
A       @                185.199.108.153
A       @                185.199.109.153
A       @                185.199.110.153
A       @                185.199.111.153
CNAME   www              rocket-it-fr.github.io.
```

### Vérifications post-déploiement
1. Test `https://www.rocket-it.fr/` → site visible
2. Test SSL : certificat actif (GitHub Pages le fait auto)
3. Test redirections : `rocket-it.fr` → `www.rocket-it.fr` (auto par GitHub)
4. Soumettre `sitemap.xml` à Google Search Console
5. Tester partage LinkedIn avec og:image
6. Configurer SalesIQ Brands avec `www.rocket-it.fr`

---

## 🔄 Comment éditer / faire évoluer

### Éditer un texte
- Ouvrir le fichier HTML concerné dans VSCode
- Chercher le texte (Cmd+F / Ctrl+F)
- Modifier, sauvegarder, recharger localement (Live Server)

### Ajouter une nouvelle page
1. Copier une page existante (ex: `services.html`) comme template
2. Adapter le `<head>` (title, description, canonical)
3. Modifier le contenu principal
4. Ajouter le lien dans la navigation des autres pages (header + footer)
5. Ajouter l'URL dans `sitemap.xml`

### Ajouter un nouveau témoignage
- Ouvrir `avis.html`
- Dupliquer une `<div class="testimonial">` existante
- Modifier prénom, note, contenu, secteur
- Mettre à jour le KPI count si besoin
- Ne PAS mettre de nom de société (confidentialité clients)

### Ajouter une nouvelle étude de cas
- Ouvrir `realisations.html`
- Dupliquer une `<article class="case-study">` existante (~24 lignes)
- Adapter : tags, h3, "🎯 Le besoin", "⚡ Notre intervention", modules Zoho, "💡 Résultat clé"
- **Ne pas mentionner de nom de société** (juste secteur)

### Ajouter une langue (anglais ?)
- Créer un dossier `/en/` à la racine
- Dupliquer toutes les pages dans ce dossier
- Traduire le contenu
- Ajouter `<link rel="alternate" hreflang="en">` dans les `<head>`

### Couleurs / charte
- Toutes les couleurs sont dans `:root` au début de `css/style.css`
- Modifier une seule variable change toute l'identité visuelle

---

## ⚠️ Points d'attention / TODO

### En attente
- [ ] **Embed Zoho Bookings** : updater l'URL après config custom domain `booking.rocket-it.fr` (en cours côté Zoho support)
- [ ] **SalesIQ Brands** : ajouter `www.rocket-it.fr` dans Zoho SalesIQ > Settings > Brands pour activer en prod
- [ ] **Badge Zoho Reverse/Dark** : récupérer la version dark mode du badge depuis le portail partenaire Zoho
- [ ] **15+ avis clients** : objectif James, à étoffer progressivement
- [ ] **FAQ** : pas prioritaire selon James, mais peut être ajoutée plus tard

### Améliorations possibles
- [ ] Lazy loading des images (`loading="lazy"`) sur les images sous le pli
- [ ] Compression CSS/JS (minification)
- [ ] Service Worker pour le offline
- [ ] Page FAQ schema.org `FAQPage`
- [ ] Blog / articles (Schema `BlogPosting`)
- [ ] Animations supplémentaires (parallax, etc.)
- [ ] Mode dark complet (pas seulement variante E)

---

## 📞 Contacts techniques

- **Propriétaire / Décideur** : James Cauliez (contact@rocket-it.fr)
- **Forme juridique** : SASU ROCKET IT
- **SIRET** : 941 205 213 000 15
- **Capital** : 1 000 €
- **Siège** : Besançon (25)
- **TVA intra** : FR68941205213

---

## 📚 Ressources utiles

- **Documentation Zoho Web-to-Lead** : https://help.zoho.com/portal/en/kb/crm/developer-guide/web-forms
- **Documentation Zoho SalesIQ** : https://www.zoho.com/salesiq/help/
- **GitHub Pages docs** : https://docs.github.com/en/pages
- **Schema.org Reference** : https://schema.org/
- **Google Search Console** : https://search.google.com/search-console
- **Open Graph debugger** : https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector** : https://www.linkedin.com/post-inspector/
- **Lighthouse (audit perf)** : Outils dev Chrome / PageSpeed Insights

---

*Ce document est conçu pour permettre la reprise du projet par un développeur ou par James dans une nouvelle conversation Claude. Il contient tous les éléments structurels et conventionnels pour faire évoluer le site sans casser l'existant.*
