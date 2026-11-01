import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MobileBottomNav } from './components/MobileBottomNav/MobileBottomNav';
import { SearchModal } from './components/SearchBar/SearchModal';
import { ShoppingListModal } from './components/ShoppingList/ShoppingListModal';
import { RecipeBuilderModal } from './components/RecipeBuilder/RecipeBuilderModal';
import { HomePage } from './pages/Home/HomePage';
import { RecipesPage } from './pages/Recipes/RecipesPage';
import { CategoryPage } from './pages/Category/CategoryPage';
import { RecipeDetailsPage } from './pages/RecipeDetails/RecipeDetailsPage';
import { FavoritesPage } from './pages/Favorites/FavoritesPage';
import { SearchPage } from './pages/Search/SearchPage';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />

          {/* Main Page Body */}
          <main className="flex-1 pb-16 xl:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/recipe/:slug" element={<RecipeDetailsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/search" element={<SearchPage />} />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <MobileBottomNav />

          {/* Modals & Overlays */}
          <SearchModal />
          <ShoppingListModal />
          <RecipeBuilderModal />
        </div>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
