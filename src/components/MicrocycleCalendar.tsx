import React, { useState } from 'react';
import { DayWorkout } from '../types/training';
import { WorkoutDetailModal } from './WorkoutDetailModal';
import { Calendar, Clock, ChevronRight, Activity, Zap } from 'lucide-react';

interface MicrocycleCalendarProps {
  days: DayWorkout[];
  phaseTitle: string;
}

export const MicrocycleCalendar: React.FC<MicrocycleCalendarProps> = ({
  days,
  phaseTitle
}) => {
  const [selectedDay, setSelectedDay] = useState<DayWorkout | null>(null);

  const getStatusBadge = (status: DayWorkout['status']) => {
    switch (status) {
      case 'Training':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Match Play':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Active Recovery':
        return 'text-teal-700 bg-teal-50 border-teal-200';
      case 'Complete Rest':
      default:
        return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  return (
    <div className="w-full">
      {/* Calendar Grid Header Notice */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 text-xs text-[#64748B]">
          <Calendar className="w-4 h-4 text-[#2563EB]" />
          <span>Monday to Sunday Microcycle Schedule</span>
          <span>·</span>
          <span className="font-medium text-[#123B65]">Click any day to view complete workout plan</span>
        </div>
        <div className="text-xs text-[#64748B]">
          7-Day Periodized Cycle
        </div>
      </div>

      {/* 7-Day Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
        {days.map((day) => {
          const isRest = day.status === 'Complete Rest';
          const isMatch = day.status === 'Match Play';

          return (
            <div
              key={day.dayName}
              onClick={() => setSelectedDay(day)}
              className={`relative rounded-xl border p-4 flex flex-col justify-between transition-all cursor-pointer group text-left ${
                isMatch
                  ? 'bg-amber-50/40 border-amber-300 hover:border-amber-500 shadow-xs'
                  : isRest
                  ? 'bg-[#F8FAFD] border-[#DCE6F1] hover:border-[#93C5FD]'
                  : 'bg-white border-[#DCE6F1] hover:border-[#2563EB] hover:shadow-md'
              }`}
            >
              {/* Day Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#123B65] uppercase tracking-wider">
                    {day.shortDay}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getStatusBadge(
                      day.status
                    )}`}
                  >
                    {day.status}
                  </span>
                </div>

                {/* Day Title */}
                <h4 className="font-bold text-sm text-[#123B65] group-hover:text-[#2563EB] transition-colors line-clamp-2 mb-1.5">
                  {day.title}
                </h4>

                {/* Training Focus */}
                <p className="text-xs text-[#2563EB] font-medium line-clamp-1 mb-2">
                  {day.focus}
                </p>

                {/* Short Description */}
                <p className="text-[11px] text-[#64748B] line-clamp-3 leading-relaxed mb-3">
                  {day.shortDescription}
                </p>
              </div>

              {/* Day Footer / Micro-Metrics */}
              <div className="pt-3 border-t border-[#DCE6F1]/70 flex items-center justify-between text-[11px] text-[#64748B]">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#2563EB]" />
                  <span>{day.durationMinutes}m</span>
                </div>

                <div className="flex items-center gap-1 font-medium text-[#123B65]">
                  {day.exercises.length > 0 ? (
                    <span className="flex items-center gap-0.5 text-[#2563EB]">
                      <Activity className="w-3 h-3" />
                      {day.exercises.length} ex
                    </span>
                  ) : (
                    <span className="text-[#64748B]">Rest</span>
                  )}
                  <ChevronRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Click-to-view detailed modal */}
      <WorkoutDetailModal
        workout={selectedDay}
        phaseTitle={phaseTitle}
        onClose={() => setSelectedDay(null)}
      />
    </div>
  );
};
