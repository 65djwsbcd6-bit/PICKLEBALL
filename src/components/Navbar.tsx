import React, { useState } from 'react';
import { PageId } from '../types/training';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'athlete-biomechanics', label: 'Athlete & Biomechanics' },
    { id: 'preparation', label: 'Preparation Phase' },
    { id: 'pre-competition', label: 'Pre-Competition Phase' },
    { id: 'competition', label: 'Competition Phase' },
    { id: 'comparison', label: 'Progression' }
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#DCE6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single clean brand wordmark (Strict Top Bar Contract) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-lg font-bold tracking-tight text-[#123B65] whitespace-nowrap shrink-0 hover:text-[#2563EB] transition-colors cursor-pointer text-left"
        >
          Pickleball Performance
        </button>

        {/* Zone 2: Single-line text navigation links with completed phase names */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wide uppercase text-[#64748B]">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                  isActive
                    ? 'text-[#2563EB] border-[#2563EB]'
                    : 'border-transparent text-[#64748B] hover:text-[#123B65]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('preparation')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <span>Start Training</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#123B65] hover:bg-[#F4F8FD] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE6F1] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? 'bg-[#EAF3FF] text-[#2563EB] font-bold'
                  : 'text-[#172B45] hover:bg-[#F4F8FD]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('preparation')}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-[#2563EB] rounded-lg shadow-xs flex items-center justify-center gap-2"
            >
              <span>Start Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
