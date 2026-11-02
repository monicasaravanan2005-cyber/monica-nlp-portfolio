import React, { useState } from 'react';
import { 
  Home, BookOpen, FileText, Layers, Scale, 
  Video, Presentation, MessageSquareQuote, 
  Menu, X 
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'journey', label: 'NLP Learning Journey', icon: BookOpen },
    { id: 'hands-on', label: 'Hands-on Sessions', icon: FileText },
    { id: 'activities', label: 'Class Activities', icon: Layers },
    { id: 'featured-project', label: 'Featured Project', icon: Scale },
    { id: 'demo', label: 'Project Demo', icon: Video },
    { id: 'presentation', label: 'Project Presentation', icon: Presentation },
    { id: 'reflections', label: 'Reflections', icon: MessageSquareQuote },
  ];

  const handleSelect = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#030306]/90 backdrop-blur-md border-b border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleSelect('home')}
            className="flex items-center space-x-3 text-left group cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1.5px]">
              <div className="w-full h-full bg-[#07070d] rounded-[6px] flex items-center justify-center font-display font-bold text-xs text-white">
                MS
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                  Monica S.
                </span>
                <span className="text-[9px] font-mono uppercase px-1 py-0.2 rounded bg-violet-950 text-violet-300 border border-violet-800/40">
                  NLP
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400">
                NLP & Comp. Linguistics
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-violet-600 text-white shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Tablet Select (md to lg) */}
          <div className="hidden sm:flex lg:hidden items-center space-x-2">
            <select
              value={currentPage}
              onChange={(e) => handleSelect(e.target.value)}
              className="bg-obsidian-900 border border-purple-500/30 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-purple-400 font-mono"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-obsidian-900 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                      isActive
                        ? 'bg-violet-600 text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
