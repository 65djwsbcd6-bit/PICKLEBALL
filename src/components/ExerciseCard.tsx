import React, { useState } from 'react';
import { ExerciseItem } from '../types/training';
import { MediaPlaceholder } from './MediaPlaceholder';
import {
  ChevronDown,
  ChevronUp,
  Activity,
  Dumbbell,
  Timer,
  Zap,
  RotateCcw,
  Target,
  Sparkles,
  Info
} from 'lucide-react';

interface ExerciseCardProps {
  exercise: ExerciseItem;
  defaultExpanded?: boolean;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  defaultExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white rounded-xl border border-[#DCE6F1] shadow-xs overflow-hidden transition-all hover:shadow-sm hover:border-[#BFDBFE]">
      {/* Top Header Strip */}
      <div className="p-5 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          {/* Target Movement Kicker */}
          <div className="flex items-center gap-2 text-xs text-[#2563EB] font-semibold tracking-wide uppercase">
            <Target className="w-3.5 h-3.5" />
            <span>{exercise.movementTarget}</span>
            {exercise.isMilestoneOriginal && (
              <>
                <span className="text-[#DCE6F1]">·</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-medium">
                  Milestone 2 Original
                </span>
              </>
            )}
            {exercise.progressionNote && !exercise.isMilestoneOriginal && (
              <>
                <span className="text-[#DCE6F1]">·</span>
                <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[11px] font-medium">
                  Phase Progression
                </span>
              </>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 text-xs text-[#64748B]">
            <span className="flex items-center gap-1">
              <Timer className="w-3.5 h-3.5 text-[#2563EB]" />
              <strong className="text-[#172B45] font-medium">{exercise.setsAndReps}</strong>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>{exercise.trainingIntensity}</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#123B65] tracking-tight mb-2">
          {exercise.name}
        </h3>

        {/* Short Movement Description */}
        <p className="text-sm text-[#475569] leading-relaxed">
          {exercise.movementDescription}
        </p>
      </div>

      {/* Media Placeholder Showcase */}
      <div className="px-5 pb-4">
        <MediaPlaceholder
          type={exercise.mediaPlaceholder.type}
          filename={exercise.mediaPlaceholder.filename}
          description={exercise.mediaPlaceholder.description}
          aspectRatio="16:9"
          originalLink={exercise.mediaPlaceholder.originalMilestoneLink}
        />
      </div>

      {/* Primary Muscles & Equipment Strip */}
      <div className="px-5 py-3 bg-[#F8FAFD] border-t border-[#DCE6F1] flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B]">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-[#123B65] flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-[#2563EB]" /> Muscles:
          </span>
          <span className="text-[#172B45]">
            {exercise.primaryMuscles.join(', ')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#123B65] flex items-center gap-1">
            <Dumbbell className="w-3.5 h-3.5 text-[#2563EB]" /> Equipment:
          </span>
          <span className="text-[#172B45] font-medium">{exercise.equipmentNeeded}</span>
        </div>
      </div>

      {/* Expand/Collapse Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-2.5 px-5 bg-white hover:bg-[#EAF3FF]/50 border-t border-[#DCE6F1] text-xs font-semibold text-[#2563EB] flex items-center justify-center gap-1.5 transition-colors cursor-pointer select-none"
      >
        <span>{isExpanded ? 'Hide Detailed Instructions & Biomechanics' : 'View Step-by-Step Instructions & Biomechanics'}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {/* Expandable Content Area */}
      {isExpanded && (
        <div className="p-5 border-t border-[#DCE6F1] bg-white space-y-4">
          {/* Step-by-Step Instructions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B65] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
              Step-by-Step Execution Instructions
            </h4>
            <ol className="space-y-2 text-sm text-[#334155]">
              {exercise.stepByStepInstructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#2563EB] bg-[#EAF3FF] w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Prescription Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-[#F4F8FD] border border-[#DCE6F1]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block mb-0.5">
                Volume / Reps
              </span>
              <p className="text-xs font-bold text-[#123B65]">{exercise.setsAndReps}</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block mb-0.5">
                Training Intensity
              </span>
              <p className="text-xs font-bold text-[#123B65]">{exercise.trainingIntensity}</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block mb-0.5">
                Rest Interval
              </span>
              <p className="text-xs font-bold text-[#123B65] flex items-center gap-1">
                <RotateCcw className="w-3 h-3 text-[#2563EB]" />
                {exercise.restInterval}
              </p>
            </div>
          </div>

          {/* Training Benefits & Biomechanical Rationale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
              <h5 className="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Training Benefits
              </h5>
              <p className="text-xs text-emerald-950 leading-relaxed">
                {exercise.trainingBenefits}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-blue-50/50 border border-blue-100">
              <h5 className="text-xs font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-600" />
                Biomechanical Rationale
              </h5>
              <p className="text-xs text-blue-950 leading-relaxed">
                {exercise.biomechanicalRationale}
              </p>
            </div>
          </div>

          {/* Progression Note (if applicable) */}
          {exercise.progressionNote && (
            <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs text-amber-900">
              <strong className="font-semibold text-amber-950">Progression Logic: </strong>
              {exercise.progressionNote}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
