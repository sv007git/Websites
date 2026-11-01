import React from 'react';
import { Link } from 'react-router-dom';
import { CookingPot, Heart, ExternalLink, Sparkles, Scale, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7f2ea] dark:bg-[#141210] border-t border-[#ebdcca] dark:border-[#2a2622] pt-12 pb-16 text-gray-700 dark:text-gray-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-gray-900 dark:text-white">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                <CookingPot className="w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-300 bg-clip-text text-transparent">
                CookFood
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Discover authentic Indian home cooking, step-by-step guidance, and our signature <strong>Dynamic Recipe Quantity Adapter</strong> that automatically scales any ingredient portion for 1 to 20+ people.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/sv007git/CookFood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white dark:bg-neutral-800 dark:text-gray-200 text-xs font-semibold hover:bg-gray-800 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href="https://sv007git.github.io/CookFood/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-saffron-100 text-saffron-800 dark:bg-saffron-950/60 dark:text-saffron-300 text-xs font-semibold hover:bg-saffron-200 transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>GitHub Pages Live</span>
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="font-serif font-bold text-gray-900 dark:text-white text-base mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-saffron-600" />
              <span>Meal Times</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/breakfast" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Morning Breakfast</Link></li>
              <li><Link to="/category/lunch" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Traditional Lunch</Link></li>
              <li><Link to="/category/dinner" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Dinner & Phulkas</Link></li>
              <li><Link to="/category/snacks" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Tea-Time Snacks</Link></li>
              <li><Link to="/category/sweets" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Sweets & Desserts</Link></li>
              <li><Link to="/category/drinks" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Coolers & Beverages</Link></li>
            </ul>
          </div>

          {/* Regional Cuisines */}
          <div>
            <h4 className="font-serif font-bold text-gray-900 dark:text-white text-base mb-3">
              Regional Flavors
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/search?cuisine=South%20Indian" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">South Indian Specialties</Link></li>
              <li><Link to="/search?cuisine=Punjabi" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">North Indian & Punjabi</Link></li>
              <li><Link to="/search?cuisine=Andhra" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Spicy Andhra & Telangana</Link></li>
              <li><Link to="/search?cuisine=Karnataka" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Karnataka Comforts</Link></li>
              <li><Link to="/search?cuisine=Kerala" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Kerala Coconut Delights</Link></li>
              <li><Link to="/search?cuisine=Gujarati" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Gujarati & Maharashtrian</Link></li>
            </ul>
          </div>

          {/* Smart Features */}
          <div>
            <h4 className="font-serif font-bold text-gray-900 dark:text-white text-base mb-3 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-saffron-600" />
              <span>Smart Platform</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/recipes" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Dynamic Serving Scaler</Link></li>
              <li><Link to="/recipes" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Hands-Free Cooking Mode</Link></li>
              <li><Link to="/favorites" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Offline Saved Favorites</Link></li>
              <li><span className="text-gray-500">Auto Shopping Checklist</span></li>
              <li><Link to="/category/healthy" className="hover:text-saffron-600 dark:hover:text-saffron-400 transition">Diabetic & High-Protein</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ebdcca] dark:border-[#2a2622] pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-4">
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for food lovers everywhere. © {new Date().getFullYear()} CookFood. All rights reserved.</span>
          </p>
          <p className="text-center md:text-right text-[11px] text-gray-500 dark:text-gray-400 max-w-xl">
            Clean static architecture powered by React, TypeScript, Vite & Tailwind CSS. Designed with inspiration from Hebbar's Kitchen and modern Indian food magazines with 100% original implementation.
          </p>
        </div>
      </div>
    </footer>
  );
};
