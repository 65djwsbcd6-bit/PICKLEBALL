import React from 'react';
import { DayWorkout } from '../types/training';
import { MediaPlaceholder } from './MediaPlaceholder';
import {
  X,
  Calendar,
  Clock,
  Zap,
  Activity,
  Flame,
  ShieldCheck,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface WorkoutDetailModalProps {
  workout: DayWorkout | null;
  phaseTitle: string;
  onClose: () => void;
}

export const WorkoutDetailModal: React.FC<WorkoutDetailModalProps> = ({
  workout,
  phaseTitle,
  onClose
}) => {
  if (!workout) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#123B65]/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl border border-[#DCE6F1] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-[#DCE6F1] bg-gradient-to-r from-[#F4F8FD] to-white flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] mb-1">
              <span className="uppercase tracking-wider">{phaseTitle}</span>
              <span>·</span>
              <span className="text-[#64748B] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                {workout.dayName} Microcycle Schedule
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              {workout.title}
            </h2>
            <p className="text-sm text-[#475569] mt-1">
              {workout.focus}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#123B65] hover:bg-[#EAF3FF] rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status / Metric Ribbon */}
        <div className="px-6 py-3 bg-[#EAF3FF]/50 border-b border-[#DCE6F1] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-[#123B65]">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  workout.status === 'Training'
                    ? 'bg-blue-600'
                    : workout.status === 'Match Play'
                    ? 'bg-amber-600'
                    : 'bg-emerald-600'
                }`}
              />
              Status: <strong className="font-bold">{workout.status}</strong>
            </span>
            <span className="text-[#CBD5E1]">|</span>
            <span className="flex items-center gap-1 text-[#475569]">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Intensity: <strong className="text-[#172B45]">{workout.intensity}</strong>
            </span>
            <span className="text-[#CBD5E1]">|</span>
            <span className="flex items-center gap-1 text-[#475569]">
              <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
              Duration: <strong className="text-[#172B45]">{workout.durationMinutes} mins</strong>
            </span>
          </div>

          <div className="text-[#64748B] text-[11px]">
            {workout.exercises.length} Targeted Exercises
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Summary / Concept */}
          <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE6F1]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B65] mb-1">
              Daily Training Objective
            </h3>
            <p className="text-sm text-[#334155] leading-relaxed">
              {workout.shortDescription}
            </p>
          </div>

          {/* Warm-Up Section */}
          {workout.warmupProtocol.drills.length > 0 && (
            <div className="border border-orange-100 rounded-xl bg-orange-50/40 p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-900 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-orange-600" />
                  Dynamic Warm-Up Protocol ({workout.warmupProtocol.duration})
                </h4>
                <span className="text-[11px] text-orange-700 font-medium">Injury Prevention Focus</span>
              </div>
              <ul className="space-y-1.5 text-xs text-orange-950">
                {workout.warmupProtocol.drills.map((drill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{drill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prescribed Exercises */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123B65] mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#2563EB]" />
              Prescribed Workout Exercises
            </h3>

            {workout.exercises.length === 0 ? (
              <div className="p-6 rounded-xl bg-[#F4F8FD] border border-[#DCE6F1] text-center">
                <p className="text-sm font-semibold text-[#123B65]">Complete Rest Day</p>
                <p className="text-xs text-[#64748B] mt-1 max-w-md mx-auto">
                  No active exercises scheduled today. Prioritize restful sleep, whole-food nutrition, and mental visualization to maximize physical supercompensation.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {workout.exercises.map((ex, index) => (
                  <div
                    key={ex.id || index}
                    className="border border-[#DCE6F1] rounded-xl p-4 bg-white hover:border-[#93C5FD] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EAF3FF] w-6 h-6 rounded-md flex items-center justify-center">
                          0{index + 1}
                        </span>
                        <h4 className="font-bold text-base text-[#123B65]">
                          {ex.name}
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-[#2563EB] bg-[#EAF3FF] px-2.5 py-0.5 rounded-full">
                        {ex.movementTarget}
                      </span>
                    </div>

                    <p className="text-xs text-[#475569] mb-3 leading-relaxed">
                      {ex.movementDescription}
                    </p>

                    {/* Media Placeholder inside day workout modal */}
                    <div className="mb-3">
                      <MediaPlaceholder
                        type={ex.mediaPlaceholder.type}
                        filename={ex.mediaPlaceholder.filename}
                        description={ex.mediaPlaceholder.description}
                        aspectRatio={(ex.mediaPlaceholder.aspectRatio as any) || '9:16'}
                        originalLink={ex.mediaPlaceholder.originalMilestoneLink}
                      />
                    </div>

                    {/* Prescription Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2.5 rounded-lg bg-[#F8FAFD] border border-[#DCE6F1] text-xs">
                      <div>
                        <span className="text-[10px] uppercase text-[#64748B] block">Sets & Reps</span>
                        <strong className="text-[#172B45]">{ex.setsAndReps}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-[#64748B] block">Intensity</span>
                        <strong className="text-[#172B45]">{ex.trainingIntensity}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-[#64748B] block">Rest Interval</span>
                        <strong className="text-[#172B45] flex items-center gap-1">
                          <RotateCcw className="w-3 h-3 text-[#2563EB]" />
                          {ex.restInterval}
                        </strong>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-[#64748B] block">Equipment</span>
                        <strong className="text-[#172B45] truncate block" title={ex.equipmentNeeded}>
                          {ex.equipmentNeeded}
                        </strong>
                      </div>
                    </div>

                    {/* Muscles Worked */}
                    <div className="mt-2.5 text-xs text-[#64748B]">
                      <strong className="text-[#123B65] font-semibold">Muscles: </strong>
                      {ex.primaryMuscles.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cool-Down Section */}
          {workout.cooldownProtocol.drills.length > 0 && (
            <div className="border border-blue-100 rounded-xl bg-blue-50/40 p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Cool-Down & Recovery Protocol ({workout.cooldownProtocol.duration})
                </h4>
                <span className="text-[11px] text-blue-700 font-medium">Heart Rate Lowering</span>
              </div>
              <ul className="space-y-1.5 text-xs text-blue-950">
                {workout.cooldownProtocol.drills.map((drill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{drill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Coaching Cues */}
          {workout.coachingNotes && (
            <div className="p-4 rounded-xl bg-[#F4F8FD] border border-[#93C5FD]/60">
              <h4 className="text-xs font-bold text-[#123B65] uppercase tracking-wider mb-1">
                Academic & Biomechanical Coaching Cue
              </h4>
              <p className="text-xs text-[#334155] leading-relaxed italic">
                "{workout.coachingNotes}"
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#DCE6F1] bg-white flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors cursor-pointer"
          >
            Close Workout Details
          </button>
        </div>
      </div>
    </div>
  );
};
