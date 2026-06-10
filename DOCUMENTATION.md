# ROCKET IT — Documentation Technique du Site

> **Site officiel ROCKET IT** — Partenaire Zoho Officiel Certifié  
> Document de synthèse technique pour reprise / évolution du projet

**Dernière mise à jour** : 10 juin 2026  
**URL de production** : https://www.rocket-it.fr/  
**Repo GitHub** : https://github.com/rocket-it-fr/rocket-it-fr.github.io  
**Statut** : 🟢 EN PRODUCTION

---

## 📋 Vue d'ensemble

Site vitrine professionnel composé de **11 pages HTML statiques** présentant les services de ROCKET IT (intégration Zoho One pour PME/ETI). Conçu pour générer des leads via formulaire de contact (Zoho Web-to-Lead) et permettre la prise de RDV directe (Zoho Bookings).

### Stack technique
- **Frontend** : HTML5 / CSS3 / Vanilla JS (sans framework)
- **Fonts** : Orbitron (display) + Manrope (body) via Google Fonts
- **Hébergement** : GitHub Pages (gratuit, illimité pour repo public)
- **DNS** : PlanetHoster (registrar uniquement)
- **SSL** : Let's Encrypt auto-généré par GitHub Pages ✅
- **Formulaire** : Zoho Web-to-Lead → Zoho CRM
- **Chat support** : Zoho SalesIQ (chargé d'office, opt-out via politique de confidentialité)
- **RDV** : Zoho Bookings via custom domain `booking.rocket-it.fr`

### Performance et accessibilité
- Images en **WebP** (réduction ~80% du poids vs PNG, PNG conservés en backup)
- Favicon **emoji 🚀 Twemoji** (multi-tailles 16-512px) + cache-busting `?v=2`
- `lang="fr"` partout, viewport responsive
- Pas de JS bloquant
- **Responsive complet** : iPhone, iPad portrait/landscape (tous modèles), Mac/PC, écrans 4K

---

## 🗂 Structure des fichiers

```
rocket-it-fr.github.io/
├── 📄 Pages HTML (11)
│   ├── index.html                      # Accueil
│   ├── pourquoi-zoho.html              # Pitch Zoho + comparatifs
│   ├── services.html                   # 6 services + 4 modèles de contrats
│   ├── realisations.html               # 14 études de cas + 13 secteurs
│   ├── avis.html                       # 8 témoignages clients (chronologique)
│   ├── a-propos.html                   # Bio James Cauliez + frise carrière
│   ├── contact.html                    # Form + Zoho Bookings embed
│   ├── merci.html                      # Confirmation form
│   ├── statut-zoho.html                # Embed status.zoho.eu
│   ├── mentions-legales.html           # LCEN (noindex)
│   └── politique-confidentialite.html  # RGPD + opt-out SalesIQ (noindex)
│
├── 📁 css/
│   └── style.css                       # Stylesheet partagé (10 pages sur 11)
│
├── 📁 js/
│   └── main.js                         # Burger, KPI counters, year, SalesIQ
│
├── 📁 assets/
│   ├── 🚀 Logos & fusées (WebP + PNG backup)
│   │   ├── fusee-violet.webp           # Logo principal (header)
│   │   ├── fusee-lavande.webp          # Footer
│   │   ├── fusee-mint.webp             # Accents
│   │   ├── fusee-gold.webp             # Variante alternative
│   │   ├── fusee-noire.webp            # Variante alternative
│   │   ├── fusee-or-transparente.webp
│   │   ├── logo-rocket-noir.webp
│   │   └── logo-rocket-blanc.webp
│   │
│   ├── 👤 Personnes
│   │   └── james-portrait.webp / .jpg  # Portrait fondateur (compressé)
│   │
│   ├── 🏷️ Badges Zoho
│   │   ├── zoho-authorized-partner-horizontal.webp
│   │   └── zoho-authorized-partner-square.webp
│   │
│   ├── 🌐 Assets sociaux & SEO
│   │   ├── og-rocket-it.jpg            # Open Graph 1200x630 (gradient violet)
│   │   └── linkedin-banner.jpg         # Bannière LinkedIn 1584x396
│   │
│   └── 🎨 Favicons (emoji 🚀 Twemoji bleu/rouge/orange)
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── favicon-48x48.png
│       ├── apple-touch-icon.png (180x180, fond crème pour iOS)
│       ├── favicon-192x192.png
│       └── favicon-512x512.png
│
├── 🔗 Racine
│   ├── favicon.ico                     # Multi-tailles (16/32/48)
│   ├── robots.txt                      # Allow all + sitemap reference
│   ├── sitemap.xml                     # 10 URLs publiques (priorities 0.3-1.0)
│   ├── CNAME                           # www.rocket-it.fr (GitHub Pages)
│   ├── README.md                       # Présentation projet
│   └── DOCUMENTATION.md                # Ce document
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
--mint-bg: #E5F9EE;       /* Mint très clair - highlights */

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

### Theme color mobile
`<meta name="theme-color" content="#380140">` → barre navigation mobile en violet (couleur marque).

---

## 📱 Responsive — Breakpoints clés

| Plage | Comportement |
|---|---|
| **< 720px** | Mobile : burger menu, layout 1 colonne |
| **720-960px** | Tablet portrait : burger menu, grilles 2 colonnes |
| **960-1100px** | iPad portrait + petits écrans : burger menu, layouts intermédiaires |
| **1100-1300px** | **Nav horizontale COMPACTE** : font 0.82rem, gaps réduits, badge Zoho 36px |
| **> 1300px** | Nav horizontale normale (taille pleine), grilles desktop |

**Décision design clé** : breakpoint burger à **1100px** (au lieu de 900px initialement) pour que tous les iPads en portrait passent en burger, et qu'il y ait toujours assez de place pour les 6 items du menu sur tablette landscape (iPad Pro 11" = 1194px).

---

## 🧩 Composants CSS clés

### Layout
- `.container` : largeur max 1200px, centré, padding latéral
- `.section` : padding vertical responsive (clamp 3-5rem)
- `.section-soft` : variante background lavande
- `.section-violet` : variante background sombre

### Navigation
- `.site-header` : header sticky avec logo + nav + badge Zoho + burger
- `.burger` : menu mobile qui se déclenche à 1100px
- `.zoho-badge-wrapper` : badge Zoho dans le header (masqué <1100px)

### Cards & contenus
- `.card` : card standard avec hover effect (lift + ombre)
- `a.card` : version cliquable (lien) avec flèche → au hover
- `.case-study` : étude de cas (réalisations)
- `.sector` : tile secteur d'activité
- `.testimonial` : carte témoignage
- `.service-detail` : layout 2 col (numéro + contenu) pour les 6 services
- `.service-features` : grille 2 colonnes pour les features (✓ + texte sur fond soft)
- `.service-highlight` : encart mint avec icône + texte explicatif

### Section "Modèles d'engagement" (services.html)
Nouvelle section après les 6 services :
- `.engagement-grid` : grille 2×2 des 4 modèles
- `.engagement-card` : card individuelle (forfait / régie / support / amélioration continue)
- `.engagement-tag` : pastille mint du type de contrat
- `.engagement-features` : liste avec flèches → mint
- `.engagement-note` : encart final "💼 Sur mesure, vraiment"

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
- `.footer-legal-links` : Mentions légales · Politique de confidentialité

### Boutons / CTA
- `.btn` : base + variantes `.btn-primary`, `.btn-secondary`, `.btn-mint`
- `.btn-arrow` : ajoute une flèche → au hover

### Paddings hero / page-header (réduits récemment)
- `.hero { padding: 2.5rem 0 1rem; }` (home — était 5rem)
- `.page-header { padding: 2rem 0 1.5rem; }` (autres pages — était 4rem)
- Réduction de ~50% pour gagner de l'espace en haut

---

## ⚙️ Fonctionnement JS (`js/main.js`)

### Modules actifs
1. **Mobile burger** : toggle du menu hamburger (`.burger` + `.nav-links.open`)
2. **KPI counters** : animation des chiffres au scroll (IntersectionObserver)
3. **Year footer** : injection auto de l'année courante
4. **SalesIQ loader** : chargement conditionnel du chat Zoho

### Logique cookies/SalesIQ
- SalesIQ est **chargé d'office** au DOMContentLoaded (Option B — choisi par James pour visibilité prospects temps réel)
- Si `localStorage.rocketit_salesiq_disabled === 'true'` → ne charge pas
- Fonctions publiques exposées : `disableSalesIQ()`, `enableSalesIQ()`, `loadSalesIQ()`
- Utilisées depuis le bouton sur `politique-confidentialite.html` (status dynamique)
- Pas de bandeau cookies bloquant (vu que SalesIQ + reCAPTCHA sont les seuls cookies et qu'on a la politique de confidentialité transparente)

---

## 🔍 SEO mis en place

### Métadonnées par page
- `<title>` unique (50-70 chars, mots-clés ciblés)
- `<meta name="description">` unique (150-160 chars)
- `<meta name="keywords">` (marque + métier + local)
- Canonical URL
- Geo tags (geo.region FR-25, geo.placename)
- Open Graph complet (type, locale fr_FR, site_name, url, title, description, image)
- Twitter Cards (summary_large_image)
- Pages légales en `noindex, follow`

### JSON-LD Schema.org
- **`index.html`** : graph avec `Organization` + `LocalBusiness` + `ProfessionalService` + `WebSite` + `Service`
  - Adresse Besançon + GeoCoordinates 47.2380, 6.0243
  - `areaServed` : France + Besançon + Lyon + Paris + Drôme + Ardèche + 3 régions
  - `knowsAbout` : 25+ technologies (Zoho One, CRM, Deluge, Blueprint, Canvas, IA, etc.)
  - `hasCredential` : Zoho Authorized Partner
  - **`aggregateRating` : 5/5 sur 8 reviews**
  - `openingHoursSpecification` : Lun-Ven 9h-18h
  - `hasOfferCatalog` : 6 services listés
  - `sameAs` : LinkedIn + Malt
- **`a-propos.html`** : `Person` (James Cauliez) avec `alumniOf`, `knowsAbout` + `BreadcrumbList`
- **`services.html`** : `ItemList` des 6 services + `BreadcrumbList`
- **`pourquoi-zoho.html`, `realisations.html`, `avis.html`** : `BreadcrumbList`
- **`contact.html`** : `ContactPage` + `BreadcrumbList`

### Mots-clés cibles
**Marque** : rocket it, rocketit, james cauliez  
**Métier** : partenaire zoho officiel, intégrateur zoho france, expert zoho, consultant zoho, certifié zoho  
**Local** : consultant zoho besançon, intégrateur zoho lyon, zoho drôme ardèche, zoho franche-comté  
**Spécifique** : zoho one pme, zoho crm intégration, formation zoho, audit zoho, migration zoho, deluge, blueprint, canvas  
**Différenciants** : ex-dsi, 20 ans d'expérience IT, 7 ans expertise zoho, anglophone c1

### Google Search Console
- ✅ Propriété vérifiée via TXT (`google-site-verification=...` dans DNS)
- ✅ **Sitemap soumis** : `https://www.rocket-it.fr/sitemap.xml` (10 URLs détectées)
- À surveiller : top requêtes, impressions, position moyenne, pages indexées

---

## 🔌 Intégrations externes

### 1. Zoho Web-to-Lead (formulaire contact)
- **URL** : `https://crm.zoho.eu/crm/WebToLeadForm`
- **Form ID** : `webform827425000006812126`
- **Lead Source** : "Site Web" (caché)
- **reCAPTCHA v2** : sitekey `6LeRYxQtAAAAAN0sXPH544iz4GnY6yuBItemp7uy`
- **Champs mandatory** : Company, Last Name, Email, Description
- **Page de remerciement** : `merci.html`

### 2. Zoho SalesIQ (chat) ✅ Opérationnel
- **Widget code** : `siq8555576954171dd06d9d2b71f74e165891ea1e734a38740064f4ea3ed0609cf7`
- **Source** : `https://salesiq.zohopublic.eu/widget`
- Chargé via `js/main.js` au DOMContentLoaded
- Domaines configurés dans SalesIQ Brands : `www.rocket-it.fr`, `rocket-it.fr`, `localhost`

### 3. Zoho Bookings (RDV) — Custom domain configuré
- **Embed script** : `https://bookings.nimbuspop.com/assets/embed.js`
- **Booking ID** : `222505000000040006`
- **URL embed actuelle** : `https://booking.rocket-it.fr/portal-embed#/222505000000040006`
- **URL fallback** : `https://booking.rocket-it.fr/#/222505000000040006`
- **Custom domain DNS** : ✅ CNAME `booking.rocket-it.fr` → `bookings.cs.zohohost.eu.`
- **Custom domain Zoho** : ✅ validé côté Zoho
- ⏳ **En attente** : génération certificat SSL côté Zoho (notifié par mail)

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
- Approche en 4 étapes : Analyse → Mise en œuvre → Formation → Support (cards cliquables → services.html#ancres)
- About teaser : photo James + bio courte
- **Testimonials home** : Geoffroy + Louis + Christine (3 sélectionnés pour leur impact, pas chronologique)
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
- **6 service-detail** (avec ancres) :
  1. `#analyse` — Analyse (profils, rôles, sécurité, risques projet)
  2. `#parametrage` — Paramétrage & développement (apps tierces, IA, Canvas, Blueprint)
  3. `#integrations` — Connexion aux applications tierces (Pappers, etc.)
  4. `#ia` — Intégration de l'IA (Zia + ChatGPT/Claude/Gemini via API et MCP)
  5. `#formation` — Formation (sessions, supports, conduite du changement)
  6. `#support` — Support & amélioration continue (hotline, revues trimestrielles)
- **Section "Contrats sur mesure"** (4 modèles d'engagement) :
  - 📋 Au forfait (projet à périmètre défini)
  - ⚙️ À la régie (accompagnement au temps passé)
  - 🛟 Support (hotline et tickets prioritaires)
  - ♻️ Amélioration continue (évolution permanente)
  - Encart final : "💼 Sur mesure, vraiment — les modèles se combinent"
- CTA finale

### `realisations.html`
- Page header
- 13 secteurs (sectors-grid) avec emojis
- 14 case-studies anonymisés (par secteur, sans nom client)
- Placeholder-box "Votre projet ne ressemble..."
- CTA finale

### `avis.html`
- Page header
- 4 KPIs (stats) : 8 avis, 5/5, 100% recommanderaient, 24h délai
- **8 témoignages** (testimonial cards, prénom seul, sans société), ordre chronologique du + récent au + ancien :
  1. Christine — Directrice administrative · Juin 2026
  2. Clarisse — Chargée de communication · Mars 2026
  3. David — Dirigeant · Mars 2026
  4. Geoffroy — CEO · Mars 2026
  5. Louis — Responsable du développement · Mars 2026
  6. Raphael — Dirigeant · Mars 2026
  7. Clément — CEO · Août 2025
  8. Daniel — Dirigeant · Août 2025
- CTA finale

### `a-propos.html`
- Page header
- Hero perso (photo ronde + bio)
- Frise carrière verticale avec emojis (🚀 Zoho, 📡 Télécom, 💊 Pharma, ⌚ Luxe, 🧱 BTP)
- Valeurs / principes (5 cards) :
  - 🎯 Expertise terrain
  - 🔐 Confidentialité absolue
  - 🤝 Engagement contractuel clair
  - 🌍 **Interlocuteur unique — français & anglais** (Anglais C1 validé par 20 ans en groupes internationaux)
- Pourquoi Zoho (perspective perso)
- CTA finale

⚠️ **Particularité technique** : a-propos.html utilise un `<style>` interne au lieu d'importer `css/style.css`. Conséquence pratique : toute modification globale (CSS partagé) doit être répliquée dans le `<style>` local de cette page. C'est un héritage de version précédente avec design custom, à refactorer plus tard si besoin.

### `contact.html`
- Page header
- Form Zoho Web-to-Lead + reCAPTCHA
- Embed Zoho Bookings (calendrier inline via `booking.rocket-it.fr`)
- Pas de CTA finale (page d'action)

### `mentions-legales.html` & `politique-confidentialite.html`
- En `noindex, follow`
- Mentions : SASU ROCKET IT, capital 1000€, SIRET 941 205 213 000 15, RCS Besançon, hébergeur GitHub Inc., DNS PlanetHoster (N7 Inc., Laval Québec)
- Politique : RGPD, conservation 3 ans, droits, tableau cookies (reCAPTCHA essentiel + SalesIQ fonctionnel), bouton désactivation SalesIQ

---

## 🚀 Déploiement — Statut ✅ EN PRODUCTION

### GitHub Pages
- **Repo** : `rocket-it-fr/rocket-it-fr.github.io` (Public)
- **Branch** : `main` / root
- **CNAME** : `www.rocket-it.fr` détecté auto via fichier CNAME du repo
- **HTTPS** : `Enforce HTTPS` à activer une fois DNS check 100% ✅
- **Wikis/Issues/Projects** : désactivés (Settings → Features)

### DNS PlanetHoster (zone DNS `rocket-it.fr`)
**Records GitHub Pages** :
```
A      rocket-it.fr     → 185.199.108.153
A      rocket-it.fr     → 185.199.109.153
A      rocket-it.fr     → 185.199.110.153
A      rocket-it.fr     → 185.199.111.153
CNAME  www              → rocket-it-fr.github.io.
```

**Records préservés (emails, Bookings, etc.)** :
```
MX     rocket-it.fr     → mx.zoho.eu (priority 10)
MX     rocket-it.fr     → mx2.zoho.eu (priority 20)
MX     rocket-it.fr     → mx3.zoho.eu (priority 50)
A      mail             → 185.22.110.54
CNAME  booking          → bookings.cs.zohohost.eu.
CNAME  ndeuta4          → bookings.cs.zohohost.eu. (validation Zoho)
TXT    default._domainkey, zmail._domainkey, etc. (DKIM Zoho)
TXT    _dmarc           → v=DMARC1; p=none
TXT    rocket-it.fr     → SPF Zoho + Google verifications
NS     rocket-it.fr     → nsa/nsb/nsc.n0c.com (PlanetHoster)
```

### Vérifications post-déploiement effectuées
- ✅ Site visible sur `https://www.rocket-it.fr/`
- ✅ Certificat SSL Let's Encrypt actif
- ✅ Redirection `rocket-it.fr` → `www.rocket-it.fr` (auto par GitHub)
- ✅ Sitemap soumis à Google Search Console (10 URLs)
- ✅ SalesIQ Brands configurés
- ⏳ Bookings custom domain : DNS OK, en attente certificat SSL côté Zoho

---

## 🔄 Comment éditer / faire évoluer

### Workflow standard (modif simple)
1. Modifier le fichier dans VSCode + Live Server (test en local)
2. Sur GitHub : aller dans le repo → cliquer sur le fichier → bouton crayon ✏️ → coller le contenu mis à jour
3. Scroll en bas → message de commit (descriptif) → bouton vert "Commit changes"
4. GitHub Pages redéploie automatiquement en 1-2 min

### Workflow alternatif (drag & drop multiple fichiers)
1. Modifier tous les fichiers nécessaires
2. Sur GitHub : "Add file" → "Upload files"
3. Drag & drop **les fichiers ET les dossiers** (le drag de dossier ne fonctionne que depuis Finder Mac sur Chrome/Firefox/Safari récent — pas via le bouton "choose files")
4. Commit message + Commit changes

### Éditer un texte
- Chercher le texte (Cmd+F) dans le fichier HTML concerné
- Modifier, sauvegarder
- Pousser sur GitHub

### Ajouter une nouvelle page
1. Copier une page existante (ex: `services.html`) comme template
2. Adapter le `<head>` (title, description, canonical, OG, JSON-LD BreadcrumbList)
3. Modifier le contenu principal
4. Ajouter le lien dans la navigation des autres pages (header + footer)
5. Ajouter l'URL dans `sitemap.xml` avec priority appropriée

### Ajouter un nouveau témoignage
- Ouvrir `avis.html`
- Dupliquer un `<article class="testimonial">` existant
- Adapter prénom, fonction, date, contenu (5★)
- **Ordre chronologique** du + récent au + ancien (alpha pour ex-aequo dates)
- Mettre à jour le KPI count (stats) + le `aggregateRating reviewCount` dans le JSON-LD d'`index.html` et `avis.html`
- Mettre à jour le titre/description meta avec le nouveau nombre
- **Ne PAS mettre de nom de société** (confidentialité clients)

### Ajouter une nouvelle étude de cas
- Ouvrir `realisations.html`
- Dupliquer un `<article class="case-study">` existant (~24 lignes)
- Adapter : tags, h3, "🎯 Le besoin", "⚡ Notre intervention", modules Zoho, "💡 Résultat clé"
- **Ne pas mentionner de nom de société** (juste secteur)

### Modifier le CSS global
- Toutes les couleurs sont dans `:root` au début de `css/style.css`
- Modifier une seule variable change toute l'identité visuelle
- ⚠️ **Pour a-propos.html** : il faut aussi modifier son `<style>` local s'il y a impact sur header/burger/menu

### Forcer le refresh d'assets côté visiteurs
- Incrémenter le `?v=2` dans les URLs des favicons → `?v=3`, `?v=4`, etc.
- Pareil possible pour `css/style.css?v=2`, etc.

### Ajouter une langue (anglais ?)
- Créer un dossier `/en/` à la racine
- Dupliquer toutes les pages dans ce dossier
- Traduire le contenu
- Ajouter `<link rel="alternate" hreflang="en">` dans les `<head>`

---

## ⚠️ Points d'attention / TODO

### En attente / À surveiller
- [ ] **Certificat SSL Bookings** : génération en cours côté Zoho pour `booking.rocket-it.fr` (mail reçu)
- [ ] **Bannière LinkedIn** : à refaire (l'actuelle n'est "pas terrible" selon James)
- [ ] **Badge Zoho Reverse/Dark** : récupérer la version dark mode du badge depuis le portail partenaire Zoho
- [ ] **15+ avis clients** : objectif James, à étoffer progressivement
- [ ] **Post LinkedIn** : annonce du nouveau site (3 options A/B/C déjà prêtes, à publier quand Bookings 100% OK)
- [ ] **FAQ** : pas prioritaire selon James, mais peut être ajoutée plus tard

### Améliorations possibles
- [ ] Lazy loading des images (`loading="lazy"`) sur les images sous le pli
- [ ] Compression CSS/JS (minification)
- [ ] Service Worker pour le offline
- [ ] Page FAQ schema.org `FAQPage`
- [ ] Blog / articles (Schema `BlogPosting`)
- [ ] Animations supplémentaires (parallax, etc.)
- [ ] Mode dark complet (pas seulement variante E)
- [ ] **Refactorer a-propos.html** pour qu'elle importe `css/style.css` au lieu d'avoir son CSS local (économie de maintenance future)

---

## 🔧 Troubleshooting fréquent

### Le favicon ne se met pas à jour
- Le favicon est l'asset le plus cache-agressif (jusqu'à 7 jours)
- Solution : incrémenter `?v=2` → `?v=3` dans tous les `<link rel="icon">` (déjà fait pour v=2)
- Ou : Cmd+Q sur Safari/Chrome puis relancer

### Cache DNS Mac qui s'entête
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```
Si ça ne suffit pas : reboot Mac, ou changer DNS de la connexion Wi-Fi (Préférences → Wi-Fi → Détails → DNS → mettre `1.1.1.1` et `1.0.0.1`).

### Erreur DNS check sur GitHub Pages
Affichage temporaire le temps de propagation mondiale (1-4h habituellement). Cliquer "Check again" périodiquement. Pas critique tant que le site est accessible.

### Tests de propagation DNS
```bash
dig @8.8.8.8 www.rocket-it.fr +short      # Google DNS
dig @1.1.1.1 www.rocket-it.fr +short      # Cloudflare DNS
dig @nsa.n0c.com www.rocket-it.fr +short  # Serveur source PlanetHoster
```

---

## 📞 Contacts techniques

- **Propriétaire / Décideur** : James Cauliez (contact@rocket-it.fr)
- **Forme juridique** : SASU ROCKET IT
- **SIRET** : 941 205 213 000 15
- **Capital** : 1 000 €
- **Siège** : Besançon (25)
- **TVA intra** : FR68941205213
- **Compte GitHub** : `rocket-it-fr`

---

## 📚 Ressources utiles

- **Repo GitHub** : https://github.com/rocket-it-fr/rocket-it-fr.github.io
- **Documentation Zoho Web-to-Lead** : https://help.zoho.com/portal/en/kb/crm/developer-guide/web-forms
- **Documentation Zoho SalesIQ** : https://www.zoho.com/salesiq/help/
- **Documentation Zoho Bookings** : https://help.zoho.com/portal/en/kb/zoho-bookings
- **GitHub Pages docs** : https://docs.github.com/en/pages
- **Schema.org Reference** : https://schema.org/
- **Google Search Console** : https://search.google.com/search-console
- **Open Graph debugger** : https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector** : https://www.linkedin.com/post-inspector/
- **Lighthouse (audit perf)** : Outils dev Chrome / PageSpeed Insights
- **DNS Checker (propagation)** : https://dnschecker.org/

---

## 📊 Historique des versions importantes

### v1.0 — Juin 2026 (initial)
- 11 pages livrées
- Charte Variante E "Lavande Douce"
- 7 témoignages
- Breakpoint burger 900px

### v1.1 — Juin 2026 (corrections & enrichissements)
- Section "Contrats sur mesure" (services.html)
- Anglais C1 mentionné (a-propos.html)
- 8e témoignage (Daniel)
- Réordonnancement chronologique des avis
- Favicon emoji 🚀 Twemoji
- Paddings hero/page-header réduits de 50%
- Breakpoint burger remonté à 1100px (meilleure UX iPad)
- Nav compacte 1100-1300px

### v1.2 — Juin 2026 (déploiement)
- Déployé sur GitHub Pages
- DNS PlanetHoster configurés
- Certificat SSL Let's Encrypt actif
- Sitemap soumis Search Console
- Bookings custom domain configuré

---

*Ce document est conçu pour permettre la reprise du projet par un développeur ou par James dans une nouvelle conversation Claude. Il contient tous les éléments structurels, conventionnels et opérationnels pour faire évoluer le site sans casser l'existant.*
