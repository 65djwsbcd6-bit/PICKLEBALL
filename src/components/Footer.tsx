import React from 'react';
import { PageId } from '../types/training';
import { ATHLETE_INFO, ACADEMIC_REFERENCES } from '../data/athleteData';
import { ArrowUp, BookOpen, Shield, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAssetCatalog: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAssetCatalog
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123B65] text-white pt-14 pb-12 border-t border-[#123B65]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs">
          {/* Col 1: Academic & Student Attribution */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-[#93C5FD] font-semibold uppercase tracking-wider text-[11px]">
              <Award className="w-4 h-4" />
              <span>{ATHLETE_INFO.courseCode} · Terminal Assessment</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Pickleball Microcycle Training Program
            </h3>
            <p className="text-[#BFDBFE] leading-relaxed max-w-lg">
              Translating biomechanical breakdown (Milestone 1) and exercise selection (Milestone 2) into periodized microcycles for competitive athletic development.
            </p>
            <div className="pt-2 text-[12px] text-white/90 space-y-1">
              <div>
                <strong className="text-white">Student: </strong>
                {ATHLETE_INFO.studentName} · <strong>Section: </strong> {ATHLETE_INFO.section}
              </div>
              <div className="text-white/70">
                {ATHLETE_INFO.institution}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Training Modules
            </h4>
            <ul className="space-y-2 text-[#BFDBFE]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('athlete-biomechanics')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Athlete Profile & Biomechanics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('preparation')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Phase 01: Preparation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pre-competition')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Phase 02: Pre-Competition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('competition')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Phase 03: Competition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comparison')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Program Comparison & Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Citations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#93C5FD]" />
              Milestone References
            </h4>
            <div className="space-y-2.5 text-[11px] text-[#BFDBFE] leading-normal">
              {ACADEMIC_REFERENCES.map((ref) => (
                <div key={ref.id} className="border-l border-white/20 pl-2">
                  <span className="font-semibold text-white">{ref.authors} ({ref.year}).</span>{' '}
                  <span className="italic">{ref.title}</span>. {ref.publisher}.
                </div>
              ))}
            </div>
            <button
              onClick={onOpenAssetCatalog}
              className="inline-flex items-center gap-1.5 text-xs text-[#93C5FD] hover:text-white font-medium underline mt-2 cursor-pointer"
            >
              Inspect Media Asset Directory
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BFDBFE]">
          <p>
            © 2026 {ATHLETE_INFO.studentName}. All coursework aligned with Mapúa Malayan Digital College academic standards.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
