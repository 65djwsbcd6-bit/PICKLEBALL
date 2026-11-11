import React, { useState } from 'react';
import { PageId } from '../types/training';
import { ALL_PHASES } from '../data/microcycleData';
import { ATHLETE_INFO, ACADEMIC_REFERENCES } from '../data/athleteData';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Activity,
  Heart,
  Timer,
  Shield,
  Zap,
  BarChart2
} from 'lucide-react';

interface ProgramComparisonPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProgramComparisonPage: React.FC<ProgramComparisonPageProps> = ({
  onNavigate
}) => {
  const [selectedDimension, setSelectedDimension] = useState<'all' | 'volume' | 'intensity' | 'recovery'>('all');

  const comparisonRows = [
    {
      category: 'Phase Identification',
      prep: 'Phase 01',
      preComp: 'Phase 02',
      comp: 'Phase 03',
      dimension: 'general'
    },
    {
      category: 'Headline & Core Philosophy',
      prep: '"BUILD THE FOUNDATION."',
      preComp: '"TURN STRENGTH INTO POWER."',
      comp: '"PERFORM WHEN IT MATTERS."',
      dimension: 'general'
    },
    {
      category: 'Main Function',
      prep: 'Develop foundational strength, muscular endurance, core stability, and baseline aerobic capacity.',
      preComp: 'Convert foundational physical qualities into explosive rotational power, reactive agility, and high-velocity smashes.',
      comp: 'Maintain physical qualities while prioritizing match sharpness, neuromuscular freshness, and recovery.',
      dimension: 'general'
    },
    {
      category: 'Primary Fitness Components',
      prep: 'Muscular endurance, isometric quad stamina, core stiffness, shoulder rotator integrity, basic aerobic base (Zone 2).',
      preComp: 'Rate of force development (RFD), stretch-shortening cycle (SSC) power, reactive agility, anaerobic lactic tolerance.',
      comp: 'Neuromuscular speed, fine motor paddle control, explosive reaction speed, psychological and physiological freshness.',
      dimension: 'general'
    },
    {
      category: 'Exercise Characteristics & Media Format',
      prep: '4 Core Foundational Exercises (Bodyweight Squat, Forearm Plank, Walking Lunges, Standard Push-Ups) with static 9:16 form images, establishing tissue tolerance (12–15 reps / 35–45s).',
      preComp: 'The 6 Milestone 2 exercise video demonstrations (Rotational Windmill, Lateral Lunge, Overhead Slams, Prone Cobra, Shuttle Shuffle, Isometric Squat) in 9:16 portrait video at sport-specific intensity (70–80% HRmax).',
      comp: 'Strictly 3 static 9:16 images for core pickleball movements (Forehand Drive, Overhead Smash, Dink Shot & Split Step) for pristine motor pattern fidelity without fatigue.',
      dimension: 'volume'
    },
    {
      category: 'Training Volume',
      prep: 'Moderate-High: 3–4 sets × 12–15 reps per exercise; 30 minutes total session duration.',
      preComp: 'Moderate Volume: 3–4 sets × 6–10 explosive reps; 35–40 minutes total session duration.',
      comp: 'Low / Tapered: 2 sets × 6–8 reps or 20s priming bursts; 20–25 minutes session duration (reduced by ~45%).',
      dimension: 'volume'
    },
    {
      category: 'Training Intensity',
      prep: 'Moderate: RPE 6/10; 60–70% of Heart Rate Max.',
      preComp: 'High: RPE 7.5–8.5/10; 70–80% HRmax (intervals targeting the 65–75% goal).',
      comp: 'Moderate Intensity with High Speed: RPE 5–7/10; 60–70% HRmax; reserving peak output for match day.',
      dimension: 'intensity'
    },
    {
      category: 'Rest Intervals Between Sets',
      prep: '45–60 seconds (aerobic recovery & muscular endurance stimulus).',
      preComp: '60–90 seconds (full phosphagen ATP-PCr restoration for maximal velocity).',
      comp: '60+ seconds (complete recovery; sessions stimulate without fatiguing).',
      dimension: 'recovery'
    },
    {
      category: 'Recovery & Rest Emphasis',
      prep: 'Active recovery mobility on Wed/Fri; complete rest on Sunday; tissue remodeling in tendons.',
      preComp: 'CNS restoration on Wed/Fri; deep sleep; glycogen replenishment between high-force days.',
      comp: 'Structured around Saturday tournament matches; post-match flush on Monday; pre-match prime on Friday.',
      dimension: 'recovery'
    },
    {
      category: 'Expected Training Adaptations',
      prep: 'Increased isometric quadriceps tolerance (>20m to 35m); resting HR reduction toward 73 bpm; stabilized rotator cuff.',
      preComp: 'Increased paddle head angular velocity (15–20 m/s); faster lateral court braking; vertical jump impulse for smashes.',
      comp: 'Zero lingering muscular soreness; peak cognitive-motor alertness; tactical consistency across 3-set matches.',
      dimension: 'general'
    }
  ];

  const filteredRows = comparisonRows.filter(
    (row) => selectedDimension === 'all' || row.dimension === 'general' || row.dimension === selectedDimension
  );

  return (
    <div className="w-full space-y-16 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#F4F8FD] to-white border-b border-[#DCE6F1] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
            <span>Terminal Assessment Synthesis</span>
            <span>·</span>
            <span>Periodization Matrix</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123B65] tracking-tight">
            Program Progression & Microcycle Comparison Dashboard
          </h1>

          <p className="text-sm sm:text-base text-[#475569] max-w-3xl leading-relaxed">
            Side-by-side comparative analysis demonstrating the periodized progression from foundational tissue tolerance through explosive sport-specific power to competition taper and match readiness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* VISUAL PROGRESSION PIPELINE */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Periodized Macrocycle Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Phase 1 Card */}
            <div
              onClick={() => onNavigate('preparation')}
              className="bg-white rounded-2xl border-2 border-[#BFDBFE] p-6 shadow-xs hover:shadow-lg transition-all cursor-pointer relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#2563EB] bg-[#EAF3FF] px-2.5 py-1 rounded">
                  STAGE 01
                </span>
                <span className="text-xs text-[#64748B]">Weeks 1–3</span>
              </div>
              <h3 className="text-xl font-bold text-[#123B65] group-hover:text-[#2563EB] transition-colors">
                PREPARATION
              </h3>
              <p className="text-xs text-[#2563EB] font-semibold mt-0.5">
                Build the Foundation
              </p>
              <p className="text-xs text-[#475569] mt-3 leading-relaxed">
                High-volume, moderate-intensity training developing tissue tolerance, rotational core control, and isometric quad stamina at the Kitchen line.
              </p>
              <div className="mt-4 pt-3 border-t border-[#DCE6F1] text-[11px] text-[#64748B] flex items-center justify-between">
                <span>Volume: Moderate-High</span>
                <span className="text-[#2563EB] font-bold">RPE 6 · 60–70% HR</span>
              </div>
            </div>

            {/* Phase 2 Card */}
            <div
              onClick={() => onNavigate('pre-competition')}
              className="bg-white rounded-2xl border-2 border-[#2563EB] p-6 shadow-md hover:shadow-xl transition-all cursor-pointer relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-white bg-[#2563EB] px-2.5 py-1 rounded">
                  STAGE 02
                </span>
                <span className="text-xs text-[#64748B]">Weeks 4–6</span>
              </div>
              <h3 className="text-xl font-bold text-[#123B65] group-hover:text-[#2563EB] transition-colors">
                PRE-COMPETITION
              </h3>
              <p className="text-xs text-[#2563EB] font-semibold mt-0.5">
                Turn Strength into Power
              </p>
              <p className="text-xs text-[#475569] mt-3 leading-relaxed">
                Converting strength into rate of force development (RFD), stretch-shortening cycle (SSC) power, and reactive agility at 65–75% HRmax.
              </p>
              <div className="mt-4 pt-3 border-t border-[#DCE6F1] text-[11px] text-[#64748B] flex items-center justify-between">
                <span>Volume: Moderate</span>
                <span className="text-[#2563EB] font-bold">RPE 8 · 70–80% HR</span>
              </div>
            </div>

            {/* Phase 3 Card */}
            <div
              onClick={() => onNavigate('competition')}
              className="bg-white rounded-2xl border-2 border-[#123B65] p-6 shadow-xs hover:shadow-lg transition-all cursor-pointer relative group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-white bg-[#123B65] px-2.5 py-1 rounded">
                  STAGE 03
                </span>
                <span className="text-xs text-[#64748B]">Weeks 7–8</span>
              </div>
              <h3 className="text-xl font-bold text-[#123B65] group-hover:text-[#2563EB] transition-colors">
                COMPETITION
              </h3>
              <p className="text-xs text-[#2563EB] font-semibold mt-0.5">
                Perform When It Matters
              </p>
              <p className="text-xs text-[#475569] mt-3 leading-relaxed">
                45% volume taper, maintaining neuromuscular sharpness and rotator cuff integrity while peaking for Saturday tournament match play.
              </p>
              <div className="mt-4 pt-3 border-t border-[#DCE6F1] text-[11px] text-[#64748B] flex items-center justify-between">
                <span>Volume: Low / Taper</span>
                <span className="text-[#2563EB] font-bold">RPE 6–7 · Match Focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX DASHBOARD */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DCE6F1] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Comprehensive Matrix
              </span>
              <h2 className="text-2xl font-bold text-[#123B65] tracking-tight mt-1">
                Side-by-Side Training Phase Comparison
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1 p-1 bg-[#F1F5F9] rounded-lg text-xs">
              <button
                onClick={() => setSelectedDimension('all')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedDimension === 'all'
                    ? 'bg-white text-[#123B65] shadow-xs'
                    : 'text-[#64748B] hover:text-[#123B65]'
                }`}
              >
                All Metrics
              </button>
              <button
                onClick={() => setSelectedDimension('volume')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedDimension === 'volume'
                    ? 'bg-white text-[#123B65] shadow-xs'
                    : 'text-[#64748B] hover:text-[#123B65]'
                }`}
              >
                Volume & Reps
              </button>
              <button
                onClick={() => setSelectedDimension('intensity')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedDimension === 'intensity'
                    ? 'bg-white text-[#123B65] shadow-xs'
                    : 'text-[#64748B] hover:text-[#123B65]'
                }`}
              >
                Intensity & HR
              </button>
              <button
                onClick={() => setSelectedDimension('recovery')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  selectedDimension === 'recovery'
                    ? 'bg-white text-[#123B65] shadow-xs'
                    : 'text-[#64748B] hover:text-[#123B65]'
                }`}
              >
                Recovery
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#DCE6F1] bg-white shadow-xs">
            <table className="w-full text-left text-xs divide-y divide-[#DCE6F1]">
              <thead className="bg-[#F8FAFD] text-[#123B65] font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 w-1/4">Evaluation Dimension</th>
                  <th className="p-4 w-1/4 border-l border-[#DCE6F1]">
                    Phase 01: Preparation
                  </th>
                  <th className="p-4 w-1/4 border-l border-[#DCE6F1] bg-[#EAF3FF]/30">
                    Phase 02: Pre-Competition
                  </th>
                  <th className="p-4 w-1/4 border-l border-[#DCE6F1]">
                    Phase 03: Competition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE6F1] text-[#334155]">
                {filteredRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F4F8FD]/40 transition-colors">
                    <td className="p-4 font-bold text-[#123B65] bg-[#F8FAFD]/60">
                      {row.category}
                    </td>
                    <td className="p-4 leading-relaxed border-l border-[#DCE6F1]">
                      {row.prep}
                    </td>
                    <td className="p-4 leading-relaxed border-l border-[#DCE6F1] bg-[#EAF3FF]/15 font-medium text-[#172B45]">
                      {row.preComp}
                    </td>
                    <td className="p-4 leading-relaxed border-l border-[#DCE6F1]">
                      {row.comp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CONCLUDING SYNTHESIS */}
        <section className="bg-gradient-to-r from-[#123B65] to-[#174677] text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#93C5FD]">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Academic Synthesis & Periodization Conclusion</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            How the Three Microcycles Harmonize for Peak Performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#BFDBFE] leading-relaxed pt-2">
            <p>
              In competitive racket sports, attempting high-velocity plyometric jump smashes or rapid &lt;0.4s reactive direction changes without prior joint stabilization leads directly to lateral epicondylitis and patellar/Achilles tendinopathy. Phase 01 systematically conditions tissue capacity and establishes the kinetic chain from ground reaction forces through the core.
            </p>
            <p>
              Once this physiological foundation is set, Phase 02 elevates the rate of force development, transforming muscle endurance into winning court acceleration and match-speed smash velocity. Finally, Phase 03 applies the taper principle from Baechle & Earle (2008)—slashing volume while sharpening speed to ensure the athlete takes the court at 100% freshness, capable of sustaining 45 minutes of intense Kitchen warfare at 65–75% HRmax.
            </p>
          </div>

          {/* Closing Navigation Action */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#BFDBFE]">
              Explore the individual 7-day microcycle schedules and movement mechanics.
            </div>

            <button
              onClick={() => onNavigate('preparation')}
              className="px-5 py-2.5 text-xs font-bold text-[#123B65] bg-white hover:bg-[#EAF3FF] rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Explore Preparation Phase</span>
              <ArrowRight className="w-4 h-4 text-[#2563EB]" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
