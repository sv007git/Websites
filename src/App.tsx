import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { Loader2 } from 'lucide-react';

// Lazy-loaded website modules for optimal performance & code splitting
const ChatModule = lazy(() => import('./modules/chat/ChatModule'));
const CookFoodModule = lazy(() => import('./modules/cookfood/CookFoodModule'));
const DoctorModule = lazy(() => import('./modules/doctor/DoctorModule'));
const ErpModule = lazy(() => import('./modules/erp/ErpModule'));
const InviteDecideModule = lazy(() => import('./modules/invitedecide/InviteDecideModule'));
const MyPageModule = lazy(() => import('./modules/mypage/MyPageModule'));
const PujasModule = lazy(() => import('./modules/pujas/PujasModule'));
const ShareItModule = lazy(() => import('./modules/shareit/ShareItModule'));
const ShortsHubModule = lazy(() => import('./modules/shortshub/ShortsHubModule'));
const StudyModule = lazy(() => import('./modules/study/StudyModule'));

// Loading spinner fallback
const ModuleLoadingFallback: React.FC<{ name?: string }> = ({ name = 'Application' }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg animate-pulse">
      <Loader2 className="w-6 h-6 animate-spin" />
    </div>
    <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
      Loading {name}...
    </h3>
    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
      Initializing application module and workspace environment
    </p>
  </div>
);

// App Content layout wrapper — header & full page viewports, no footer anywhere
const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)] transition-colors">
      <Header />
      <main className="flex-1 w-full">
        <Suspense fallback={<ModuleLoadingFallback />}>
          <Routes>
            {/* Super Central Homepage */}
            <Route path="/" element={<HomePage />} />

            {/* 10 Individual Website Applications */}
            <Route
              path="/site/chat/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="Just You & Me" />}>
                  <ChatModule />
                </Suspense>
              }
            />
            <Route
              path="/site/cookfood/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="CookFood Recipes" />}>
                  <CookFoodModule />
                </Suspense>
              }
            />
            <Route
              path="/site/doctor/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="Doctor Anatomy" />}>
                  <DoctorModule />
                </Suspense>
              }
            />
            <Route
              path="/site/erp/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="Enterprise ERP Suite" />}>
                  <ErpModule />
                </Suspense>
              }
            />
            <Route
              path="/site/invitedecide/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="InviteDecide Events" />}>
                  <InviteDecideModule />
                </Suspense>
              }
            />
            <Route
              path="/site/mypage/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="Prabhata Morning Sanctuary" />}>
                  <MyPageModule />
                </Suspense>
              }
            />
            <Route
              path="/site/pujas/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="Sanatana Pujas" />}>
                  <PujasModule />
                </Suspense>
              }
            />
            <Route
              path="/site/shareit/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="ShareIT Live Screen" />}>
                  <ShareItModule />
                </Suspense>
              }
            />
            <Route
              path="/site/shortshub/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="ShortsHub Video" />}>
                  <ShortsHubModule />
                </Suspense>
              }
            />
            <Route
              path="/site/study/*"
              element={
                <Suspense fallback={<ModuleLoadingFallback name="NCERT Cartoon Academy" />}>
                  <StudyModule />
                </Suspense>
              }
            />

            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
