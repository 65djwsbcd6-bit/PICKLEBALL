import React from 'react';
import { PageId } from '../types/training';
import { COMPETITION_PHASE_DATA } from '../data/microcycleData';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { MicrocycleCalendar } from '../components/MicrocycleCalendar';
import { ExerciseCard } from '../components/ExerciseCard';
import {
  Layers,
  CheckCircle2,
  Dumbbell,
  Heart,
  Timer,
  Zap,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Trophy,
  Info
} from 'lucide-react';

interface CompetitionPhasePageProps {
  onNavigate: (page: PageId) => void;
}

export const CompetitionPhasePage: React.FC<CompetitionPhasePageProps> = ({
  onNavigate
}) => {
  const phase = COMPETITION_PHASE_DATA;

  return (
    <div className="w-full space-y-16 pb-20">
      {/* 1. Phase Hero Banner & Introduction */}
      <div className="bg-gradient-to-b from-[#F4F8FD] to-white border-b border-[#DCE6F1] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
              <span className="font-mono bg-[#EAF3FF] px-2.5 py-1 rounded">
                PHASE {phase.phaseNumber}
              </span>
              <span>·</span>
              <span>Peak Performance & Match Taper</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <button
                onClick={() => onNavigate('pre-competition')}
                className="text-[#64748B] hover:text-[#123B65] transition-colors cursor-pointer"
              >
                ← Back to Pre-Competition Phase
              </button>
              <button
                onClick={() => onNavigate('comparison')}
                className="text-[#2563EB] hover:text-[#123B65] flex items-center gap-1 cursor-pointer"
              >
                <span>Program Comparison Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123B65] tracking-tight">
              {phase.title}: {phase.headline}
            </h1>
            <p className="text-sm sm:text-base text-[#475569] mt-3 max-w-3xl leading-relaxed">
              {phase.mainFunction}
            </p>
          </div>

          {/* Banner Placeholder */}
          <div className="pt-2">
            <MediaPlaceholder
              type="image"
              filename={phase.bannerPlaceholder.filename}
              aspectRatio="21:9"
              description={phase.bannerPlaceholder.description}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 2. Training Objectives & Prescriptions Strip */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Phase 03 Training Priorities & Match Readiness
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Priorities List */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B65] flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-[#2563EB]" />
                Tournament Readiness Priorities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
                {phase.trainingPriorities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 bg-[#F8FAFD] rounded-lg border border-[#DCE6F1]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prescriptions Sidebar */}
            <div className="lg:col-span-5 bg-[#F4F8FD] rounded-2xl border border-[#DCE6F1] p-6 space-y-4 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B65]">
                Taper & Readiness Parameters
              </h3>

              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-[#DCE6F1]">
                  <strong className="text-[#123B65] block font-semibold">Target Volume:</strong>
                  <span className="text-[#475569]">{phase.targetVolume}</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#DCE6F1]">
                  <strong className="text-[#123B65] block font-semibold">Intensity & HR Preservation:</strong>
                  <span className="text-[#2563EB] font-bold">{phase.targetIntensity} ({phase.targetHeartRate})</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#DCE6F1]">
                  <strong className="text-[#123B65] block font-semibold">Fatigue & Recovery Strategy:</strong>
                  <span className="text-[#475569]">{phase.restRecoveryFocus}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Interactive Weekly Microcycle Calendar */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#DCE6F1] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
              <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
                Competition Microcycle Calendar (Structured Around Saturday Match Play)
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Click on any day below to inspect the tapered routine. Sessions are condensed to 20–25 minutes of crisp, non-fatiguing activation, peaking for Saturday's tournament competition.
          </p>

          <MicrocycleCalendar
            days={phase.days}
            phaseTitle="Phase 03: Competition"
          />
        </section>

        {/* 5, 6, 7 & 8. Exercise Library with Video Placeholders */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#DCE6F1] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Neuromuscular Sharpening Prescriptions
              </span>
              <h2 className="text-2xl font-bold text-[#123B65] tracking-tight mt-1">
                Phase 03 Exercise Library & Video Demonstrations
              </h2>
            </div>
            <span className="text-xs text-[#64748B]">
              {phase.exercises.length} Maintenance Prescriptions
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Low-volume, speed-optimized variations designed to stimulate motor unit rate coding while preventing muscle micro-tears or residual stiffness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phase.exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                defaultExpanded={false}
              />
            ))}
          </div>
        </section>

        {/* 7. Equipment Requirements & 9. Match-Day Recovery Considerations */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Equipment */}
          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#123B65] flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#2563EB]" />
              Tournament Equipment & Ready Bag
            </h3>
            <p className="text-xs text-[#64748B]">
              Tournament-spec paddle with proper overgrip, court shoes, and electrolyte hydration packs.
            </p>
            <ul className="space-y-2 text-xs text-[#334155] pt-2">
              {phase.equipmentRequirements.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Match Day & Recovery */}
          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#123B65] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Match-Day Warm-Up & Recovery Protocol
            </h3>
            <div className="space-y-2 text-xs text-[#475569] leading-relaxed">
              <p>
                <strong>Pre-Match (15–20 mins prior):</strong> 5 minutes dynamic mobility, 5 minutes progressive dinking at the kitchen line, and 5 minutes high-velocity split-step drop hops to activate the nervous system.
              </p>
              <p>
                <strong>Post-Match Recovery:</strong> 5 minutes light court cool-down walk, 500ml electrolyte replenishment, and passive stretches for calves and posterior shoulder capsule to prevent stiffness.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 text-xs text-emerald-900 border border-emerald-100">
              <strong>Academic Principle: </strong> Tapering volume by 40–50% restores glycogen and eliminates fatigue while maintaining 100% of power and velocity adaptations (Baechle & Earle, 2008).
            </div>
          </div>
        </section>

        {/* 10. Explanation of how this phase maintains performance */}
        <section className="p-8 rounded-3xl bg-[#F8FAFD] border border-[#DCE6F1] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B65]">
            <Info className="w-4 h-4 text-[#2563EB]" />
            <span>How the Competition Phase Maintains Performance</span>
          </div>

          <h3 className="text-xl font-bold text-[#123B65]">
            The Science of the Competition Taper
          </h3>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {phase.phaseRationale}
          </p>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {phase.progressionFromPrevious}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-[#DCE6F1]">
            <button
              onClick={() => onNavigate('pre-competition')}
              className="text-xs font-semibold text-[#64748B] hover:text-[#123B65]"
            >
              ← Back to Phase 02
            </button>
            <button
              onClick={() => onNavigate('comparison')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>VIEW 3-PHASE PROGRESSION COMPARISON</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
