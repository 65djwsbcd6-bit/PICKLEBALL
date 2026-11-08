/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types/training';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AthleteProfileBiomechanicsPage } from './pages/AthleteProfileBiomechanicsPage';
import { PreparationPhasePage } from './pages/PreparationPhasePage';
import { PreCompetitionPhasePage } from './pages/PreCompetitionPhasePage';
import { CompetitionPhasePage } from './pages/CompetitionPhasePage';
import { ProgramComparisonPage } from './pages/ProgramComparisonPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync scroll on page change
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172B45] flex flex-col font-sans selection:bg-[#EAF3FF] selection:text-[#123B65]">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'athlete-biomechanics' && (
          <AthleteProfileBiomechanicsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'preparation' && (
          <PreparationPhasePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'pre-competition' && (
          <PreCompetitionPhasePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'competition' && (
          <CompetitionPhasePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'comparison' && (
          <ProgramComparisonPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
