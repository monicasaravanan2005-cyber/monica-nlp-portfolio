import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// 8 Dedicated Modular Pages
import { HomePage } from './pages/HomePage';
import { LearningJourneyPage } from './pages/LearningJourneyPage';
import { HandsOnSessionsPage } from './pages/HandsOnSessionsPage';
import { ClassActivitiesPage } from './pages/ClassActivitiesPage';
import { FeaturedProjectPage } from './pages/FeaturedProjectPage';
import { ProjectDemoPage } from './pages/ProjectDemoPage';
import { ProjectPresentationPage } from './pages/ProjectPresentationPage';
import { ReflectionsPage } from './pages/ReflectionsPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      // Map alias hashes
      if (hash === 'jurisgraph' || hash === 'project') {
        setCurrentPage('featured-project');
        return;
      }

      const validPages = [
        'home',
        'journey',
        'hands-on',
        'activities',
        'featured-project',
        'demo',
        'presentation',
        'reflections',
      ];

      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'journey':
        return <LearningJourneyPage />;
      case 'hands-on':
        return <HandsOnSessionsPage />;
      case 'activities':
        return <ClassActivitiesPage />;
      case 'featured-project':
        return <FeaturedProjectPage />;
      case 'demo':
        return <ProjectDemoPage />;
      case 'presentation':
        return <ProjectPresentationPage />;
      case 'reflections':
        return <ReflectionsPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030306] text-slate-100 flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-200">
      
      {/* Top Simple, Organized Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Separate Dedicated Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Academic Footer */}
      <Footer onNavigate={navigateTo} />

    </div>
  );
};

export default App;
