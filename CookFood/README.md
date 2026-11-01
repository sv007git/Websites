# 🍲 CookFood — Indian Recipe Discovery & Smart Cooking Platform

[![Deploy CookFood to GitHub Pages](https://github.com/sv007git/CookFood/actions/workflows/deploy.yml/badge.svg)](https://github.com/sv007git/CookFood/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-success.svg)](https://sv007git.github.io/CookFood/)

> **Live Website:** [https://sv007git.github.io/CookFood/](https://sv007git.github.io/CookFood/)  
> **GitHub Repository:** [https://github.com/sv007git/CookFood](https://github.com/sv007git/CookFood)

**CookFood** is a mobile-first Indian food recipe discovery and smart cooking platform. Inspired by the clean recipe presentation, card organization, and intuitive browsing experience of platforms like *Hebbar's Kitchen*, CookFood features a signature **Dynamic Recipe Quantity Adapter** that automatically recalculates and formats all ingredient quantities when visitors adjust serving sizes.

---

## 🌟 The Signature Feature: Dynamic Recipe Quantity Adapter

Cooking for 1 student? A family of 4? Or hosting a festive gathering for 15?  
CookFood's **Dynamic Recipe Quantity Adapter** recalculates every single ingredient proportion in real time directly inside the browser with zero page reloads:

$$\text{New Quantity} = \text{Original Quantity} \times \left(\frac{\text{Selected Servings}}{\text{Original Servings}}\right)$$

### Key Adapter Capabilities
- **Quick Preset Selector:** `[-] 1 2 3 4 5 6 8 10 12 15 20 [+]` plus direct numeric custom input (1 to 100 people).
- **Culinary Fraction Formatting:** Displays intuitive kitchen fractions such as `½`, `¼`, `¾`, `⅓`, `⅔`, `⅛`, `1 ½`, and `1 ¼` instead of awkward decimals like `0.3333` or `1.25`.
- **Smart Unit Pluralization & Preservation:** Accurately formats grams (`g`), kilograms (`kg`), millilitres (`ml`), litres, cups, tablespoons (`tbsp`), teaspoons (`tsp`), pieces, cloves, and pinches.
- **Intelligent Qualitative Handling:** Preserves items marked "to taste", "as needed", non-scalable items (e.g. oil for deep frying), and ranges (e.g. `2–3 green chillies` -> `4–6 green chillies`).
- **Batch Scaling Guidance:** Displays chef advice when scaling $3\times$ or larger (e.g., advising that whole spices and salt scale best at 75–80% of direct calculation to prevent overwhelming the dish).
- **One-Click Actions:**
  - 📋 **Copy Ingredients:** Formats and copies all scaled ingredients with sections to the clipboard for instant WhatsApp or notes sharing.
  - 🖨️ **Print Recipe:** Clean media-optimized print stylesheet.
  - 🛒 **Add to Shopping List:** Transfers scaled items directly into the user's interactive grocery checklist.
  - 🔄 **Reset to Original:** Restores default recipe author quantities in one click.

### Mandatory Verification Results

| Recipe Ingredient | Base (4 Servings) | 2 Servings (Half) | 8 Servings (Double) | 10 Servings (2.5x) |
| :--- | :--- | :--- | :--- | :--- |
| **Rice** | 2 cups | **1 cup** | **4 cups** | **5 cups** |
| **Urad Dal** | 0.5 cup | **¼ cup** (`0.25`) | **1 cup** (`1.0`) | **1 ¼ cups** (`1.25`) |
| **Fenugreek Seeds** | 0.5 tsp | **¼ tsp** | **1 tsp** | **1 ¼ tsp** |
| **Salt** | 1 tsp | **½ tsp** | **2 tsp** | **2 ½ tsp** |

*Verified by automated Vitest suite (`npm test`).*

---

## 📱 Visual Design & User Experience

- **Design Inspiration:** Hebbar's Kitchen, premium culinary magazines, and modern food blogs.
- **Warm Aesthetics:** Cream backgrounds (`#fdfcf9`), deep saffron and warm amber accents (`#f58206`), crisp dark typography, and emerald badges for pure vegetarian recipes.
- **Five Reusable Card Formats:**
  1. **Standard Recipe Card:** Thumbnail, prep/cook times, servings, rating, difficulty, and quick actions.
  2. **Featured Recipe Card:** High-impact magazine hero banner with quick statistics.
  3. **Horizontal Recipe Card:** Optimized for search results and list views.
  4. **Compact Card:** Ideal for mobile carousels and sidebar recommendations.
  5. **Trending Card:** Features rank badges and flame icons.
- **Mobile-First Layout:**
  - Zero horizontal overflow (`overflow-x-hidden`).
  - Sticky mobile bottom navigation (Home, Explore, Search, Favorites, Shopping List).
  - Touch-friendly serving counter controls.

---

## 🍳 Comprehensive Feature Set

1. **Distraction-Free Cooking Mode:**
   - Full-screen view with giant, high-contrast instruction text.
   - Integrated countdown timers for active cooking steps.
   - Scaled ingredient drawer accessible at any step without scrolling.
   - Celebration screen with confetti upon recipe completion.
2. **Interactive Shopping List:**
   - Persistent `localStorage` grocery list.
   - Check off purchased items in store.
   - Add custom items (e.g., "Amul Milk - 1L").
   - WhatsApp sharing and clipboard export.
3. **Multi-Faceted Search & Discovery Engine:**
   - Instant search with live modal suggestions (`Ctrl+K` / `Cmd+K`).
   - Filter by Meal Time, Regional Cuisine, Dietary Tags, Max Prep Time, and Difficulty.
   - Sorting by Popularity, Fastest Time, or Alphabetical.
4. **Multilingual Architecture:**
   - Instant language switching between **English**, **Telugu (తెలుగు)**, and **Tamil (தமிழ்)**.
5. **Dark Mode Support:**
   - System-aware with manual one-click toggle.
6. **Recipe Importer & JSON Schema Editor:**
   - In-app developer interface to validate and export CookFood JSON templates.
7. **SEO & Performance:**
   - Schema.org `Recipe` JSON-LD structured data on all detail pages.
   - OpenGraph and Twitter card preview metadata.
   - `sitemap.xml` and `robots.txt` included in static output.

---

## 📚 Recipe Database Summary (56 Tested Recipes)

The database is organized into structured JSON files with rich step-by-step instructions, timers, and nutritional estimates:

- **Breakfast (10):** Crispy Masala Dosa, Soft Steamed Idli, Crispy Medu Vada, Kanda Poha, Classic Rava Upma, Dhaba Aloo Paratha, Andhra Pesarattu, Poori Masala, Kerala Appam & Stew, Instant Rava Uttapam.
- **Lunch (10):** Paneer Butter Masala, Hyderabadi Veg Dum Biryani, South Indian Sambar, Dhaba Dal Tadka, Amritsari Chana Masala, Kerala Sadya Avial, Palak Paneer, Punjabi Rajma Masala, Lemon Rice, Karnataka Bisi Bele Bath.
- **Dinner (8):** Slow-Cooked Dal Makhani, Puffed Soft Phulka Roti, Moong Dal Khichdi, Smoky Kadai Paneer, Gujarati Methi Thepla, Homestyle Matar Paneer, Vegetable Pulao, Street-Style Paneer Bhurji.
- **Snacks & Chaats (8):** Halwai Punjabi Samosa, Crispy Onion Pakoda, Mysore Bonda, Mumbai Chowpatty Sev Puri, Delhi Aloo Tikki, Restaurant Gobi 65, Buttery Masala Sweet Corn, Delhi Dahi Vada.
- **Sweets & Desserts (8):** Melt-in-Mouth Khoya Gulab Jamun, Saffron Pistachio Rasmalai, Ghee Mysore Pak, Creamy Rice Kheer, Traditional Gajar Ka Halwa, Kaju Katli, Besan Ladoo, Motichoor Ladoo.
- **Drinks & Beverages (6):** Authentic Filter Kaapi, Kadak Masala Chai, Alphonso Mango Lassi, Spiced Chaas (Majjiga), Kesar Badam Milk, Delhi Shikanji.
- **Healthy & Diet (6):** Moong Dal Chilla, Vegetable Oats Upma, Sprouted Moong Salad, Iron-Rich Ragi Dosa, Quinoa Khichdi, Roasted Garlic Palak Soup.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Routing:** HashRouter (`react-router-dom`) + `404.html` SPA redirect fallback
- **Storage:** LocalStorage API
- **Testing:** Vitest
- **Hosting & CI/CD:** GitHub Actions -> GitHub Pages

---

## 📂 Project Structure

```
CookFood/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD
├── public/
│   ├── 404.html                    # GitHub Pages SPA fallback
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── CookingMode/            # Distraction-free full-screen cooking UI
│   │   ├── CookingSteps/           # Step list with live timers
│   │   ├── Footer/                 # Brand footer with links and attribution
│   │   ├── Header/                 # Navigation, search, theme, and language
│   │   ├── IngredientList/         # Scaled items with prep checkboxes
│   │   ├── MobileBottomNav/        # Mobile bottom navigation bar
│   │   ├── RecipeBuilder/          # Developer JSON importer & exporter
│   │   ├── RecipeCard/             # 5 card variations (Standard, Featured, etc.)
│   │   ├── RecipeFilters/          # Multi-faceted filter sidebar
│   │   ├── SearchBar/              # Live search modal (Ctrl+K)
│   │   ├── ServingAdapter/         # Dynamic quantity scaling engine
│   │   └── ShoppingList/           # Interactive shopping basket modal
│   ├── context/
│   │   └── AppContext.tsx          # Global state (favorites, shopping list, i18n, theme)
│   ├── data/
│   │   └── recipes/                # 56 structured recipes by course
│   ├── pages/
│   │   ├── Category/               # Category specific views
│   │   ├── Favorites/              # Saved favorites collection
│   │   ├── Home/                   # Hero, featured, and meal collections
│   │   ├── RecipeDetails/          # Full detail page with scaler & Schema.org JSON-LD
│   │   ├── Recipes/                # Browse catalog with filters & view toggles
│   │   └── Search/                 # Dedicated search results page
│   ├── types/
│   │   └── recipe.ts               # TypeScript interfaces & types
│   ├── utils/
│   │   ├── fractionFormatter.ts    # Kitchen fraction conversion (½, ¼, 1 ¼)
│   │   ├── i18n.ts                 # English, Telugu, and Tamil translations
│   │   ├── quantityScaler.ts       # Mathematical scaling logic & batch guidance
│   │   ├── searchEngine.ts         # Multi-field filtering & autocomplete
│   │   └── storage.ts              # LocalStorage helpers
│   ├── App.tsx                     # Route declarations
│   ├── index.css                   # Tailwind base & custom scrollbar styles
│   └── main.tsx                    # Root React entry
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Local Development & Build

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/sv007git/CookFood.git
   cd CookFood
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. Run unit tests:
   ```bash
   npm test
   ```

5. Build for production:
   ```bash
   npm run build
   ```
   The static distribution bundle will be output to `dist/`.

---

## 🌐 GitHub Pages Deployment

The repository is configured with a GitHub Actions workflow in `.github/workflows/deploy.yml`:

1. On every push to `main`, GitHub Actions:
   - Installs dependencies (`npm ci`).
   - Runs unit tests (`npm run test`).
   - Builds the production bundle with base path `/CookFood/`.
   - Deploys the `dist/` directory to GitHub Pages.
2. In the repository settings on GitHub:
   - Navigate to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.

---

## 📄 License & Attribution

- **Branding & Code:** 100% Original CookFood implementation licensed under the [MIT License](LICENSE).
- **Inspiration:** Content organization and presentation inspired by *Hebbar's Kitchen* and classic Indian cookbooks.
- **Food Photography:** High-resolution photography curated from Unsplash under open license.
