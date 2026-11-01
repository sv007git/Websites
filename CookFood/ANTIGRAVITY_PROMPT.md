# COOKFOOD — MASTER AI AGENT CONTEXT & ARCHITECTURE DIRECTORY
> **File:** `ANTIGRAVITY_PROMPT.md`  
> **Role:** Master reference document for fresh Google Antigravity / AI coding assistant sessions.  
> **Notice to Incoming Agent:** **DO NOT waste tokens analyzing the full codebase or scanning individual files.** This document contains the complete technical architecture, file map, TypeScript domain models, recipe catalog, design system tokens, state management rules, routing tables, and known gotchas. Read this document to immediately become fully context-aware.

---

## 1. PROJECT IDENTITY & ESSENTIAL LINKS

- **Project Name:** CookFood
- **Tagline:** Modern Indian Recipe Discovery & Smart Cooking Platform with Dynamic Quantity Scaling
- **Inspiration:** Inspired by the visual elegance, meal-time browsing, and recipe presentation of *Hebbar's Kitchen*, but built with 100% original, copyright-clean code, custom branding, and modern React 19 architecture.
- **Repository:** `https://github.com/sv007git/CookFood`
- **Default Branch:** `main` (source code)
- **Deployment Branch:** `gh-pages` (production build output)
- **Live Production URL:** `https://sv007git.github.io/CookFood/`
- **Hosting Model:** 100% Client-Side Static Single Page Application (SPA) on GitHub Pages. No backend server, no database server, no paid third-party APIs.

---

## 2. CORE CAPABILITIES & HIGHLIGHTS

1. **Dynamic Recipe Quantity Adapter (Flagship Feature):**
   - Automatically recalculates all ingredient amounts in real time when serving size changes.
   - Handles kitchen fractions (`½`, `¼`, `¾`, `1 ½`), range quantities (`2–3 tbsp`), approximate amounts (`approx. 1 cup`), and qualitative items (`to taste`, `as needed`).
   - Pluralizes units accurately (`cup` ➔ `cups`, `clove` ➔ `cloves`, `pinch` ➔ `pinches`; while keeping `g`, `kg`, `ml`, `tbsp`, `tsp` invariant).
   - Multi-batch scaling guidance warning when scaled > 3x original size.
   - Interactive checklist with tap-to-cross ingredients.
   - One-click Copy to Clipboard, Browser Print, and Add to Shopping List.

2. **Interactive Cooking Mode:**
   - Fullscreen distraction-free step-by-step cooking experience.
   - Per-step interactive countdown timers with audio alert / visual pulse.
   - Confetti celebration upon recipe completion (`canvas-confetti`).

3. **Smart Search & Multi-Facet Filtering:**
   - Global modal search (Ctrl+K / Cmd+K) with live debounce and recent search memory.
   - Multi-criteria filter sidebar: Meal Time, Cuisine, Diet (Veg, Vegan, Jain, No Onion-Garlic, Gluten-Free), Max Cooking Time, Difficulty, and Sorting.

4. **Offline Shopping List:**
   - Persistent item basket stored in `localStorage`.
   - Check off items while shopping in the market.
   - One-click share formatted shopping list via WhatsApp.

5. **Internationalization (i18n):**
   - Tri-lingual support: English (`en`), Telugu (`te`), and Tamil (`ta`).
   - Language selector in header instantly updates UI labels across the app.

6. **Custom Recipe Builder:**
   - In-app modal tool allowing users to craft, preview, import, and export custom recipes via JSON schema.

7. **SEO & Structured Data:**
   - Schema.org `Recipe` JSON-LD dynamically injected in `RecipeDetailsPage`.
   - OpenGraph meta tags, `robots.txt`, and `sitemap.xml` in `public/`.

---

## 3. TECH STACK SPECIFICATION

| Layer | Technology | Version | Notes |
|---|---|---|---|
| **Core Framework** | React | `19.3.1` | Modern functional components with hooks |
| **DOM Engine** | React DOM | `19.3.1` | Client-side rendering |
| **Language** | TypeScript | `~7.0.2` | Strict typing with relaxed module syntax |
| **Bundler / Dev Server** | Vite | `^8.3.5` | Fast HMR; `base: '/CookFood/'` for GitHub Pages |
| **CSS Framework** | Tailwind CSS | `^3.4.19` | Custom saffron/warmcream color palette & dark mode |
| **Routing** | React Router DOM | `^7.18.5` | Uses `HashRouter` for GitHub Pages SPA compatibility |
| **Icons** | Lucide React | `^1.66.0` | Feather-derived icon set (Note: No `Github` icon in bundle) |
| **Effects** | Canvas Confetti | `^1.9.4` | Used in `CookingMode.tsx` |
| **Test Runner** | Vitest | `^5.0.5` | 15 passing unit tests across math and data integrity |
| **Linter** | Oxlint | `^1.89.0` | High-speed Rust-based JavaScript/TypeScript linter |
| **Persistence** | Browser LocalStorage | N/A | Zero external DB; keys prefixed with `cookfood_` |

---

## 4. COMPLETE PROJECT FILE DIRECTORY

```
CookFood/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD: Builds on push to main & pushes dist/ to gh-pages branch
├── public/
│   ├── 404.html                    # SPA redirection fallback for direct GitHub Pages hits
│   ├── favicon.svg                 # Brand chef hat / steam favicon
│   ├── icons.svg                   # PWA / web icon definitions
│   ├── robots.txt                  # Search engine crawling rules
│   └── sitemap.xml                 # Canonical XML sitemap for search engines
├── src/
│   ├── assets/
│   │   ├── hero.png                # Hero section illustration / photography asset
│   │   ├── react.svg               # Vite/React template icon
│   │   └── vite.svg                # Vite template icon
│   ├── components/
│   │   ├── CookingMode/
│   │   │   └── CookingMode.tsx     # Fullscreen distraction-free cooking wizard + confetti
│   │   ├── CookingSteps/
│   │   │   └── CookingSteps.tsx    # Step-by-step accordion with interactive timers
│   │   ├── Footer/
│   │   │   └── Footer.tsx          # Site footer (uses custom inline SVG for GitHub)
│   │   ├── Header/
│   │   │   └── Header.tsx          # Top navigation, search trigger, theme toggle, lang picker
│   │   ├── IngredientList/
│   │   │   └── IngredientList.tsx  # Scaled ingredient checklist with strike-through toggle
│   │   ├── MobileBottomNav/
│   │   │   └── MobileBottomNav.tsx # Sticky bottom tab bar for mobile/tablet screens
│   │   ├── RecipeBuilder/
│   │   │   └── RecipeBuilderModal.tsx # Interactive JSON recipe creator, importer & exporter
│   │   ├── RecipeCard/
│   │   │   └── RecipeCard.tsx      # Reusable card with 5 variants: standard, featured, horizontal, compact, trending
│   │   ├── RecipeFilters/
│   │   │   └── RecipeFilters.tsx   # Multi-attribute filter sidebar with drawer on mobile
│   │   ├── SearchBar/
│   │   │   └── SearchModal.tsx     # Ctrl+K modal with quick suggestions & recent searches
│   │   ├── ServingAdapter/
│   │   │   └── ServingAdapter.tsx  # Dynamic scaler: counter, quick buttons, copy, print, shopping list
│   │   └── ShoppingList/
│   │       └── ShoppingListModal.tsx # Shopping basket with item checks & WhatsApp share format
│   ├── context/
│   │   └── AppContext.tsx          # Central state: favorites, shopping list, theme, i18n, modals
│   ├── data/
│   │   └── recipes/
│   │       ├── breakfast.ts        # 10 Breakfast recipes (Dosa, Idli, Vada, Poha, Upma, etc.)
│   │       ├── dinner.ts           # 8 Dinner recipes (Dal Makhani, Khichdi, Phulka, etc.)
│   │       ├── drinks.ts           # 6 Beverage recipes (Filter Coffee, Chai, Lassi, Chaas, etc.)
│   │       ├── healthy.ts          # 6 Diet/Health recipes (Moong Chilla, Oats Upma, Quinoa, etc.)
│   │       ├── lunch.ts            # 10 Lunch recipes (Paneer Butter Masala, Biryani, Sambar, etc.)
│   │       ├── snacks.ts           # 8 Snack recipes (Samosa, Pakoda, Bonda, Sev Puri, etc.)
│   │       ├── sweets.ts           # 8 Sweet/Dessert recipes (Gulab Jamun, Rasmalai, Halwa, etc.)
│   │       ├── index.ts            # Consolidates all 56 recipes & exports lookup/helper functions
│   │       └── recipes.test.ts     # Vitest suite verifying ID uniqueness, slugs & data integrity
│   ├── pages/
│   │   ├── Category/
│   │   │   └── CategoryPage.tsx    # Filtered recipe view by meal time category
│   │   ├── Favorites/
│   │   │   └── FavoritesPage.tsx   # User's bookmarked recipes from localStorage
│   │   ├── Home/
│   │   │   └── HomePage.tsx        # High-conversion landing page with 10 rich curated sections
│   │   ├── RecipeDetails/
│   │   │   └── RecipeDetailsPage.tsx # Detailed recipe page with scaler, checklist, steps & JSON-LD
│   │   ├── Recipes/
│   │   │   └── RecipesPage.tsx     # Full browsable recipe directory with active filters
│   │   └── Search/
│   │       └── SearchPage.tsx      # Dedicated full-page search results with query params
│   ├── types/
│   │   └── recipe.ts               # Master TypeScript interfaces and custom union types
│   ├── utils/
│   │   ├── fractionFormatter.ts    # Converts decimals into kitchen fractions (½, ¼, 1⅓, etc.)
│   │   ├── i18n.ts                 # Translation dictionary for English, Telugu, and Tamil
│   │   ├── quantityScaler.ts       # Mathematical scaling engine, unit pluralization & warnings
│   │   ├── quantityScaler.test.ts  # Vitest suite covering edge cases in scaling & fractions
│   │   ├── searchEngine.ts         # Fast client-side fuzzy search and suggestion engine
│   │   └── storage.ts              # Type-safe wrappers for browser LocalStorage operations
│   ├── App.css                     # Minimal root style overrides
│   ├── App.tsx                     # Top-level Router layout and modal container
│   ├── index.css                   # Tailwind entry file, custom color classes & webfonts
│   └── main.tsx                    # React 19 application mount point
├── .gitignore                      # Standard git ignores (node_modules, dist, etc.)
├── .oxlintrc.json                  # Oxlint configuration
├── index.html                      # HTML template with metadata, favicon, and Google Fonts
├── package.json                    # Dependencies, scripts, and package metadata
├── postcss.config.js               # PostCSS configuration with Tailwind and Autoprefixer
├── README.md                       # Public-facing repository documentation
├── tailwind.config.js              # Custom Tailwind theme: saffron, warmcream, font families
├── tsconfig.app.json               # Frontend TypeScript compiler settings (relaxed module syntax)
├── tsconfig.json                   # Root TypeScript project reference
├── tsconfig.node.json              # TypeScript compiler settings for Vite config
└── vite.config.ts                  # Vite build settings, base URL, and Vitest configuration
```

---

## 5. TYPESCRIPT DOMAIN MODELS (`src/types/recipe.ts`)

```typescript
export type MealTime =
  | 'breakfast'
  | 'morning-snack'
  | 'lunch'
  | 'evening-snack'
  | 'dinner'
  | 'night'
  | 'sweets'
  | 'dessert'
  | 'drinks'
  | 'healthy'
  | 'snacks'
  | 'starters'
  | 'festival-special'
  | 'summer-special';

export type DietType =
  | 'vegetarian'
  | 'vegan'
  | 'jain'
  | 'no-onion-garlic'
  | 'gluten-free';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface Ingredient {
  name: string;
  quantity: number | null; // null for non-measurable / qualitative items
  unit: string;            // e.g. 'cup', 'tsp', 'tbsp', 'g', 'pinch', 'to taste'
  scalable: boolean;       // false for non-scalable items like 'Salt to taste'
  notes?: string;          // e.g. 'finely chopped', 'soaked overnight'
  isRange?: boolean;       // true if quantity is a range (e.g. 2–3)
  rangeMax?: number;       // upper bound of range
  approximate?: boolean;   // true if preceded by 'approx.'
  optional?: boolean;      // true if optional
  section?: string;        // e.g. 'For Batter', 'For Tempering'
}

export interface CookingStep {
  stepNumber: number;
  title?: string;
  instruction: string;
  timerSeconds?: number;   // In seconds; automatically triggers interactive timer
  tip?: string;
  image?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  hindiTitle?: string;
  regionalTitle?: string;
  description: string;
  image: string;
  cuisine: string[];
  mealTimes: MealTime[];
  categories: string[];
  diet: DietType[];
  servings: number;
  prepTime: number;        // in minutes
  cookTime: number;        // in minutes
  totalTime: number;       // in minutes
  difficulty: DifficultyLevel;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  trending?: boolean;
  isFestivalSpecial?: boolean;
  festivalName?: string;
  ingredients: Ingredient[];
  instructions: CookingStep[];
  tips: string[];
  substitutions?: string[];
  storage?: string;
  scalingNotes?: string;
  tags: string[];
  author?: string;
  nutrition?: NutritionInfo;
  videoUrl?: string;
}

export interface ShoppingItem {
  id: string;
  recipeId?: string;
  recipeTitle?: string;
  name: string;
  quantityString: string;
  completed: boolean;
  addedAt: number;
}

export interface RecipeFilterState {
  searchQuery: string;
  mealTime: MealTime | 'all';
  cuisine: string;
  category: string;
  diet: string;
  maxTime: number | null;
  difficulty: string;
  sortBy: 'popular' | 'newest' | 'fastest' | 'alphabetical';
}

export type SupportedLanguage = 'en' | 'te' | 'ta';
```

---

## 6. DYNAMIC RECIPE QUANTITY ADAPTER ENGINE

Located in `src/utils/quantityScaler.ts` and `src/utils/fractionFormatter.ts`.

### Mathematical Scaling Formula
$$\text{ratio} = \frac{\text{targetServings}}{\text{originalServings}}$$
$$\text{scaledQuantity} = \text{baseQuantity} \times \text{ratio}$$

### Fraction Conversion Engine (`formatKitchenFraction`)
Converts raw floating-point numbers into clean culinary notation:
- `0.125` ➔ `⅛`
- `0.25` ➔ `¼`
- `0.33` ➔ `⅓`
- `0.5` ➔ `½`
- `0.66` ➔ `⅔`
- `0.75` ➔ `¾`
- Mixed numbers: `1.5` ➔ `1 ½`, `2.25` ➔ `2 ¼`, `3.75` ➔ `3 ¾`
- Clean integers: `2.0` ➔ `2`

### Unit Pluralization Logic (`getPluralizedUnit`)
- **Invariable Units (Never pluralized):** `g`, `kg`, `ml`, `l`, `liter`, `litres`, `to taste`, `as needed`, `sprig`.
- **Pluralized when quantity > 1:**
  - `cup` ➔ `cups`
  - `piece` ➔ `pieces`
  - `clove` ➔ `cloves`
  - `pinch` ➔ `pinches`
  - `inch` ➔ `inches`
  - `leaf` ➔ `leaves`
  - `tablespoon` ➔ `tablespoons` (`tbsp` stays `tbsp`)
  - `teaspoon` ➔ `teaspoons` (`tsp` stays `tsp`)

### Edge Cases Handled
1. **Qualitative / Non-scalable items:** Ingredients with `scalable: false` or `quantity: null` (e.g., *"Salt to taste"*, *"Oil for deep frying"*) are untouched regardless of serving multiplier.
2. **Range Quantities:** If `isRange: true`, both `quantity` and `rangeMax` scale proportionally (e.g. `2–3 tbsp` for 4 people becomes `4–6 tbsp` for 8 people).
3. **Approximate Quantities:** If `approximate: true`, formatted text is prepended with `approx.`
4. **Batch Scaling Advisory:** If $\text{ratio} > 3.0$ or $\text{targetServings} \ge 16$, the `ServingAdapter` displays a contextual kitchen warning:
   > *"Cooking for large crowds: Please cook in multiple batches. Cooking time does not scale linearly with ingredient volume."*

---

## 7. RECIPE CATALOG INVENTORY (56 RECIPES ACROSS 7 COLLECTIONS)

All recipes are pure TypeScript modules in `src/data/recipes/`, aggregated by `index.ts`.

| Module | Count | Recipes Included |
|---|---|---|
| **`breakfast.ts`** | 10 | Masala Dosa, Idli Sambar, Medu Vada, Poha, Rava Upma, Aloo Paratha, Pesarattu, Poori Masala, Appam with Vegetable Stew, Onion Uttapam |
| **`lunch.ts`** | 10 | Paneer Butter Masala, Hyderabadi Veg Dum Biryani, Traditional South Indian Sambar, Dal Tadka, Chana Masala (Chole), Kerala Avial, Palak Paneer, Punjabi Rajma Masala, Lemon Rice (Chitranna), Bisi Bele Bath |
| **`dinner.ts`** | 8 | Dal Makhani, Phulka / Roti, Moong Dal Khichdi, Kadai Paneer, Gujarati Methi Thepla, Matar Paneer, Vegetable Pulao, Paneer Bhurji |
| **`snacks.ts`** | 8 | Punjabi Samosa, Onion Pakoda, Batata Vada / Bonda, Mumbai Sev Puri, Crispy Aloo Tikki, Crispy Gobi 65, Masala Corn Chat, Dahi Vada |
| **`sweets.ts`** | 8 | Gulab Jamun, Rasmalai, Authentic Mysore Pak, Royal Rice Kheer, Gajar Ka Halwa, Kaju Katli, Besan Ladoo, Motichoor Ladoo |
| **`drinks.ts`** | 6 | South Indian Filter Coffee, Masala Chai, Sweet Mango Lassi, Spiced Masala Chaas, Badam Milk, Shikanji (Spiced Lemonade) |
| **`healthy.ts`** | 6 | Moong Dal Chilla, Oats Vegetable Upma, Sprouted Moong Salad, Ragi Dosa, Quinoa Khichdi, Creamy Palak Soup |

### Core Database Queries (`src/data/recipes/index.ts`)
- `allRecipes`: Array containing all 56 recipes.
- `getRecipeBySlug(slug: string)`: Finds recipe by `slug` or `id`.
- `getRecipesByMealTime(mealTime: MealTime)`: Filters recipes by mealtime tag.
- `getFeaturedRecipes()`: Returns recipes with `featured: true`.
- `getTrendingRecipes()`: Returns recipes with `trending: true`.
- `getLatestRecipes(limit = 8)`: Returns highest review count recipes.
- `getRelatedRecipes(currentRecipe, limit = 4)`: Finds matching recipes by cuisine, meal time, or category.
- `allCuisines`: Unique sorted list of cuisines (e.g. *South Indian*, *North Indian*, *Punjabi*, *Gujarati*, *Kerala*, *Hyderabadi*).
- `allCategories`: Unique sorted list of category tags.

---

## 8. COMPONENT INVENTORY & RESPONSIBILITIES

### Layout & Navigation
- **`Header.tsx`**: Sticky glassmorphism header. Contains logo, top category links, search trigger (Ctrl+K), language picker (`en`/`te`/`ta`), dark mode toggle, favorites badge, and responsive mobile hamburger drawer.
- **`Footer.tsx`**: Site footer with brand info, quick navigation links, newsletter disclaimer, and attribution. *Uses custom inline SVG for GitHub icon* (see Gotchas).
- **`MobileBottomNav.tsx`**: Persistent bottom tab bar on mobile/tablet screens: Home, Explore, Favorites, Shopping List, Search.

### Recipe Exploration & Presentation
- **`RecipeCard.tsx`**: Highly optimized recipe card component supporting 5 visual variations:
  1. `standard`: Default 3-column grid card with image, badges, ratings, and time.
  2. `featured`: Full-width banner card with large photo, extensive description, and call to action.
  3. `horizontal`: List view card with image on left and details on right.
  4. `compact`: Minimalist card for sidebars and related recipe carousels.
  5. `trending`: Visual badge card emphasizing popularity rank and quick cook time.
- **`RecipeFilters.tsx`**: Multi-dimensional filtering sidebar with desktop collapsible panels and mobile slide-out bottom sheet.

### Recipe Details & Interactive Cooking
- **`ServingAdapter.tsx`**: The core scaling UI. Includes `[-]` and `[+]` buttons, fast serving presets (`1`, `2`, `4`, `6`, `8`, `10`, `12`, `16`, `20`), custom number input, "Reset to Original", "Copy Scaled Ingredients", "Print Recipe", and "Add to Shopping List".
- **`IngredientList.tsx`**: Renders scaled ingredients grouped by recipe section (e.g. *For Batter*, *For Tempering*). Each row has an interactive checkbox allowing cooks to cross off ingredients as they prepare them.
- **`CookingSteps.tsx`**: Numbered step cards with instruction details, chef tips, and interactive countdown timers for steps with defined `timerSeconds`.
- **`CookingMode.tsx`**: Fullscreen modal that presents one step at a time in large typography for hands-free cooking in the kitchen. Handles keyboard navigation (Left/Right arrows), per-step timers, and fires confetti celebration upon the final step.

### Modals & Utilities
- **`SearchModal.tsx`**: High-speed modal activated by Ctrl+K / Cmd+K. Features debounced input, popular suggestion pills, and recent search history stored in `localStorage`.
- **`ShoppingListModal.tsx`**: Interactive grocery cart. Grouped or individual item checklist, custom item addition, item deletion, and "Share to WhatsApp" export button.
- **`RecipeBuilderModal.tsx`**: In-browser recipe builder and JSON validator. Allows users to create new recipes or export current recipes as JSON schemas.

---

## 9. STATE MANAGEMENT & LOCAL STORAGE SCHEMA

Global state is managed via React Context in `src/context/AppContext.tsx`. Zero external libraries (no Redux, no Zustand).

### Context State & Actions
```typescript
interface AppContextType {
  favorites: string[];                          // Array of recipe IDs
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  shoppingList: ShoppingItem[];
  addIngredientsToShoppingList: (recipe: Recipe, scaled: ScaledIngredient[]) => void;
  addCustomShoppingItem: (name: string, quantity?: string) => void;
  toggleShoppingItem: (id: string) => void;
  removeShoppingItem: (id: string) => void;
  clearShoppingList: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;                              // Active translated string dictionary
  recentlyViewedIds: string[];
  markRecipeViewed: (id: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isShoppingListOpen: boolean;
  setIsShoppingListOpen: (open: boolean) => void;
  isRecipeBuilderOpen: boolean;
  setIsRecipeBuilderOpen: (open: boolean) => void;
}
```

### LocalStorage Storage Keys (`src/utils/storage.ts`)
| Key | Type | Description |
|---|---|---|
| `cookfood_favorites` | `string[]` | Array of favorited recipe IDs |
| `cookfood_shopping_list` | `ShoppingItem[]` | Grocery items with completion status |
| `cookfood_theme` | `'light' \| 'dark'` | Active theme preference |
| `cookfood_language` | `'en' \| 'te' \| 'ta'` | Active UI language |
| `cookfood_recent` | `string[]` | Last 12 viewed recipe IDs |
| `cookfood_servings_<recipeId>` | `number` | Persisted custom serving size per recipe |

---

## 10. DESIGN SYSTEM & TAILWIND CONFIGURATION

Configured in `tailwind.config.js`:

```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#f58206', // Primary Brand Color
          700: '#d96f04',
          800: '#9a3412',
          900: '#7c2d12',
        },
        warmcream: {
          50: '#fdfcf9',  // Page Background (Light)
          100: '#f7f2ea', // Subtle Card Background
          200: '#efe6d5',
          300: '#e3d2b7',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(245, 130, 6, 0.15)',
      },
    },
  },
};
```

---

## 11. ROUTING ARCHITECTURE (`src/App.tsx`)

The app uses `HashRouter` to ensure 100% reliability on GitHub Pages without requiring server-side URL rewrite configuration.

| Route Path | Page Component | Description |
|---|---|---|
| `#/` | `HomePage` | Hero banner, categories, featured recipes, popular dishes, festival specials |
| `#/recipes` | `RecipesPage` | Full catalog browsing with multi-filter sidebar & view toggle |
| `#/category/:category` | `CategoryPage` | Filtered category view (e.g. `#/category/breakfast`, `#/category/lunch`) |
| `#/recipe/:slug` | `RecipeDetailsPage` | Full recipe detail, serving adapter, checklist, timers, JSON-LD |
| `#/favorites` | `FavoritesPage` | Bookmarked recipes stored in user's browser |
| `#/search` | `SearchPage` | Full-page search view with query params (`?q=...`) |
| `*` | `Navigate to="/"` | Catch-all redirect to homepage |

---

## 12. CI/CD & GITHUB PAGES DEPLOYMENT

The GitHub Actions workflow is located at `.github/workflows/deploy.yml`.

### Deployment Mechanism
1. Triggers on every push to the `main` branch.
2. Checks out the repository, installs Node.js 22, and runs `npm ci`.
3. Runs `npm run build` which produces the production bundle in `dist/` (configured with `base: '/CookFood/'`).
4. Uses `JamesIves/github-pages-deploy-action@v4` with `permissions: contents: write` to deploy the `dist/` directory directly to the `gh-pages` branch.
5. Also triggers `actions/deploy-pages@v4` with `continue-on-error: true` as a dual fallback.

---

## 13. CRITICAL GOTCHAS, QUIRKS & DEVELOPER RULES

> [!IMPORTANT]
> Keep the following rules in mind when modifying or extending this repository:

1. **Do NOT Import `Github` from `lucide-react`:**
   In `lucide-react@^1.66.0`, the `Github` icon is not exported. In `src/components/Footer/Footer.tsx`, an inline SVG is used instead. Always use an inline SVG for the GitHub brand mark.
2. **Timer Type Definitions in Browser:**
   Do NOT use `NodeJS.Timeout` for `setInterval` / `setTimeout` references in React components. Always use:
   ```typescript
   let timer: ReturnType<typeof setInterval> | null = null;
   ```
3. **TypeScript Module Syntax (`tsconfig.app.json`):**
   - `verbatimModuleSyntax: false` is configured to avoid enforcing `import type` everywhere.
   - `noUnusedLocals: false` is relaxed to streamline development velocity.
   - Do NOT turn `verbatimModuleSyntax` back to `true`.
4. **Vite Base Path:**
   `vite.config.ts` has `base: '/CookFood/'`. All static public asset references must be relative or account for this base path.
5. **Always Use `HashRouter`:**
   GitHub Pages serves static files. If standard browser `BrowserRouter` is used, refreshing a subpage like `/recipe/masala-dosa` will trigger a 404 error from GitHub Pages. Always maintain `HashRouter`.
6. **Unit Tests Passing:**
   Run `npm test` before any deployment. Vitest runs 15 automated tests verifying:
   - Dynamic quantity scaling math, ranges, and fractions (`quantityScaler.test.ts`).
   - Recipe database integrity, slug uniqueness, and required fields (`recipes.test.ts`).

---

## 14. DEVELOPER QUICK-START COMMANDS

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Run Vitest automated test suite
npm test

# Build production bundle with TypeScript type-checking
npm run build

# Preview production build locally
npm run preview

# Run Oxlint high-speed linter
npm run lint
```

---
*Created and maintained for CookFood — All rights reserved.*
