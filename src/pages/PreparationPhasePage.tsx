import React from 'react';
import { PageId } from '../types/training';
import { PREPARATION_PHASE_DATA } from '../data/microcycleData';
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
  Info
} from 'lucide-react';

interface PreparationPhasePageProps {
  onNavigate: (page: PageId) => void;
}

export const PreparationPhasePage: React.FC<PreparationPhasePageProps> = ({
  onNavigate
}) => {
  const phase = PREPARATION_PHASE_DATA;

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
              <span>Foundational Conditioning</span>
            </div>

            <button
              onClick={() => onNavigate('pre-competition')}
              className="text-xs font-semibold text-[#2563EB] hover:text-[#123B65] flex items-center gap-1 cursor-pointer"
            >
              <span>Next: Pre-Competition Phase</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123B65] tracking-tight">
                {phase.title}: {phase.headline}
              </h1>
              <p className="text-sm sm:text-base text-[#475569] mt-3 max-w-3xl leading-relaxed">
                {phase.mainFunction}
              </p>
            </div>

            {/* Banner Placeholder (9:16 Vertical Portrait) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-[260px] sm:max-w-[280px]">
                <MediaPlaceholder
                  type="image"
                  filename={phase.bannerPlaceholder.filename}
                  aspectRatio="9:16"
                  description={phase.bannerPlaceholder.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 2. Training Objectives & Prescriptions Strip */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Phase 01 Training Priorities & Physiological Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Priorities List */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B65]">
                Core Training Priorities
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
                Periodization Parameters
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
                  <strong className="text-[#123B65] block font-semibold">Rest & Recovery Focus:</strong>
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
            Click on any day below to open the complete, itemized workout session protocol—including the 5-minute dynamic warm-up, exact sets/reps, equipment, and 5-minute cool-down protocol.
          </p>

          <MicrocycleCalendar
            days={phase.days}
            phaseTitle="Phase 01: Preparation"
          />
        </section>

        {/* 5, 6, 7 & 8. Exercise Library with Video Placeholders */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#DCE6F1] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Prescription Catalog
              </span>
              <h2 className="text-2xl font-bold text-[#123B65] tracking-tight mt-1">
                Phase 01 Exercise Library & Video Demonstrations
              </h2>
            </div>
            <span className="text-xs text-[#64748B]">
              {phase.exercises.length} Prescribed Exercises
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Each card incorporates video demonstration placeholders, target movement classifications, step-by-step instructions, equipment, muscles, and biomechanical rationale.
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
              Equipment & Setup Requirements
            </h3>
            <p className="text-xs text-[#64748B]">
              Minimal equipment approach focused on bodyweight mastery, proper court footwear, and paddle shadow swinging.
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
              Recovery Days & Fatigue Management
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Wednesday and Friday serve as active recovery and low-intensity aerobic flush days (&lt;65% HRmax), allowing connective tissues in the Achilles and shoulder rotator cuff to remodel. Sunday is designated for complete rest and systemic supercompensation.
            </p>
            <div className="p-3 rounded-lg bg-emerald-50 text-xs text-emerald-900 border border-emerald-100">
              <strong>Heart Rate Check: </strong> Ensure morning resting heart rate steadily stabilizes below 73 bpm.
            </div>
          </div>
        </section>

        {/* 10. Explanation of why selected exercises support this phase */}
        <section className="p-8 rounded-3xl bg-[#F8FAFD] border border-[#DCE6F1] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B65]">
            <Info className="w-4 h-4 text-[#2563EB]" />
            <span>Biomechanical & Academic Rationale for Phase 01</span>
          </div>

          <h3 className="text-xl font-bold text-[#123B65]">
            Why These Selected Exercises Build the Foundation
          </h3>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {phase.phaseRationale}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-[#DCE6F1]">
            <span className="text-xs text-[#64748B]">
              Ready to progress to power and reactive agility?
            </span>
            <button
              onClick={() => onNavigate('pre-competition')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>PROGRESS TO PHASE 02: PRE-COMPETITION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
