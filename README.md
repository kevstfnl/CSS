# CSS Base Template

Une base CSS simple pour demarrer un projet avec des fondations propres.
Ce repo sert surtout a fournir un socle reutilisable :

- un reset coherent,
- des variables centralisees,
- une base typo,
- une gestion claire du theme clair/sombre.

Les dossiers `components/` et une partie du JavaScript sont seulement la pour illustrer comment brancher quelques morceaux de composants. 
Ce ne sont pas le coeur du template.

## Structure

```text
styles/
  commons/
    reset.css
    variables.css
    typography.css
  components/
    button.css
  index.css
scripts/
  components/
    buttons.js
    theme.js
  index.js
index.html
```

## A quoi sert chaque fichier

| Fichier                         | Role                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------- |
| `styles/commons/reset.css`      | Reset global et harmonisation des comportements navigateur                        |
| `styles/commons/variables.css`  | Variables CSS partagees, breakpoints, timings, couleurs et theme                  |
| `styles/commons/typography.css` | Base typographique pour titres et paragraphes                                     |
| `styles/index.css`              | Point d'entree CSS qui importe la base                                            |
| `scripts/components/theme.js`   | Gestion du theme systeme, persistance `localStorage`, attribut `theme` sur `html` |
| `scripts/index.js`              | Point d'entree JavaScript                                                         |
| `styles/components/button.css`  | Exemple de composant bouton                                                       |
| `scripts/components/buttons.js` | Exemple de comportement JS pour le bouton                                         |
| `index.html`                    | Exemple d'integration simple du template                                          |

## Utilisation simple

```html
<link rel="stylesheet" href="/styles/index.css">
<script type="module" src="/scripts/index.js"></script>
```

Exemple :

```html
<button class="btn" data-toggle-theme>Changer de theme</button>
```

## Integration avec TailwindCSS v4

Cette base peut remplacer la couche de base de Tailwind si tu veux garder les utilitaires mais utiliser ton propre reset, tes propres variables et ta propre gestion du theme.
D'apres la documentation actuelle de Tailwind CSS v4.1,
le plus propre est de ne pas importer `preflight.css` et de ne garder que `theme` et `utilities`.

### Installation de TailwindCSS via Vite

```bash
npm install tailwindcss@latest @tailwindcss/vite@latest
```

```ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### Configuration de TailwindCSS

```css
@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "./styles/commons/reset.css" layer(base);
@import "./styles/commons/variables.css" layer(base);
@import "./styles/commons/typography.css" layer(base);
@import "./styles/components/button.css" layer(components);
@import "tailwindcss/utilities.css" layer(utilities);
```

## Licence

MIT
