import React from 'react';
import { PageId } from '../types/training';
import { PRE_COMPETITION_PHASE_DATA } from '../data/microcycleData';
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
  TrendingUp,
  Info
} from 'lucide-react';

interface PreCompetitionPhasePageProps {
  onNavigate: (page: PageId) => void;
}

export const PreCompetitionPhasePage: React.FC<PreCompetitionPhasePageProps> = ({
  onNavigate
}) => {
  const phase = PRE_COMPETITION_PHASE_DATA;

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
              <span>Power & Reactive Development</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <button
                onClick={() => onNavigate('preparation')}
                className="text-[#64748B] hover:text-[#123B65] transition-colors cursor-pointer"
              >
                ← Back to Preparation Phase
              </button>
              <button
                onClick={() => onNavigate('competition')}
                className="text-[#2563EB] hover:text-[#123B65] flex items-center gap-1 cursor-pointer"
              >
                <span>Next: Competition Phase</span>
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
              Phase 02 Training Priorities & Conversion Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Priorities List */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B65]">
                Core Power & Agility Priorities
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
                High-Velocity Prescription Parameters
              </h3>

              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-[#DCE6F1]">
                  <strong className="text-[#123B65] block font-semibold">Target Volume:</strong>
                  <span className="text-[#475569]">{phase.targetVolume}</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#DCE6F1]">
                  <strong className="text-[#123B65] block font-semibold">Intensity & HR Zone:</strong>
                  <span className="text-[#2563EB] font-bold">{phase.targetIntensity} ({phase.targetHeartRate})</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#DCE6F1]">
                  <strong className="text-[#123B65] block font-semibold">Rest & ATP-PCr Resynthesis:</strong>
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
                Weekly Microcycle Calendar (Monday – Sunday)
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Click on any day below to inspect its sport-specific power workout—including plyometric ground reaction drills, audio/visual split-step cues, and Saturday's 40-minute endurance benchmark.
          </p>

          <MicrocycleCalendar
            days={phase.days}
            phaseTitle="Phase 02: Pre-Competition"
          />
        </section>

        {/* 5, 6, 7 & 8. Exercise Library with Video Placeholders */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#DCE6F1] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Progressed Prescriptions
              </span>
              <h2 className="text-2xl font-bold text-[#123B65] tracking-tight mt-1">
                Phase 02 Exercise Library & Video Demonstrations
              </h2>
            </div>
            <span className="text-xs text-[#64748B]">
              {phase.exercises.length} Progressed Prescriptions
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Progressions of the original Milestone 2 exercises, increasing movement velocity, stretch-shortening cycle impulse, and reactive split-step decision speed.
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

        {/* 7. Equipment Requirements & 9. Recovery Details */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Equipment */}
          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#123B65] flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#2563EB]" />
              Equipment & Court Setup
            </h3>
            <p className="text-xs text-[#64748B]">
              Sport-specific court layout with agility cones, paddle handling, and reaction timers.
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

          {/* Recovery Strategy */}
          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#123B65] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Central Nervous System (CNS) Recovery
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Maximal rate of force development (RFD) and plyometrics place heavy demands on motor unit recruitment and the stretch-reflex arc. Rest periods are extended to 60–90 seconds to ensure 100% phosphagen replenishment and prevent neural fatigue.
            </p>
            <div className="p-3 rounded-lg bg-emerald-50 text-xs text-emerald-900 border border-emerald-100">
              <strong>Quality Over Fatigue: </strong> If movement speed drops by &gt;10%, terminate the set immediately.
            </div>
          </div>
        </section>

        {/* 10. Explanation of how this phase progresses from Preparation */}
        <section className="p-8 rounded-3xl bg-[#F8FAFD] border border-[#DCE6F1] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B65]">
            <TrendingUp className="w-4 h-4 text-[#2563EB]" />
            <span>Progression Rationale from Phase 01 to Phase 02</span>
          </div>

          <h3 className="text-xl font-bold text-[#123B65]">
            How Phase 02 Converts Strength into Explosive Power
          </h3>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {phase.progressionFromPrevious}
          </p>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {phase.phaseRationale}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-[#DCE6F1]">
            <button
              onClick={() => onNavigate('preparation')}
              className="text-xs font-semibold text-[#64748B] hover:text-[#123B65]"
            >
              ← Review Phase 01
            </button>
            <button
              onClick={() => onNavigate('competition')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>ADVANCE TO PHASE 03: COMPETITION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
