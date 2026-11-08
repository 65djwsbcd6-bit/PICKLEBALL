import React from 'react';
import { PageId } from '../types/training';
import { ATHLETE_INFO, BIOMECHANICAL_MOVEMENTS } from '../data/athleteData';
import { ALL_PHASES } from '../data/microcycleData';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import {
  ArrowRight,
  Target,
  Activity,
  Layers,
  Heart,
  Timer,
  ChevronRight,
  Shield,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full space-y-20 pb-20">
      {/* SECTION A: HERO */}
      <section className="relative pt-10 sm:pt-14 pb-12 border-b border-[#DCE6F1] bg-gradient-to-b from-[#F4F8FD] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Academic Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-4">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#2563EB]" />
              {ATHLETE_INFO.courseCode} · Terminal Assessment
            </span>
            <span className="text-[#CBD5E1]">·</span>
            <span className="text-[#123B65] font-bold">
              {ATHLETE_INFO.studentName} ({ATHLETE_INFO.section})
            </span>
            <span className="text-[#CBD5E1]">·</span>
            <span className="text-[#64748B]">Sport: Pickleball</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#123B65] tracking-tight leading-[1.08] text-balance">
                BUILT TO MOVE. <br />
                <span className="text-[#2563EB]">TRAINED TO COMPETE.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                A structured pickleball strength and conditioning program designed to develop rotational power, explosive performance, court agility, and sustained lower-body endurance.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('preparation')}
                  className="px-6 py-3 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE THE PROGRAM</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('athlete-biomechanics')}
                  className="px-6 py-3 text-sm font-bold text-[#123B65] bg-white hover:bg-[#EAF3FF] border border-[#DCE6F1] rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>VIEW BIOMECHANICS</span>
                  <ChevronRight className="w-4 h-4 text-[#2563EB]" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#DCE6F1]/80 grid grid-cols-3 gap-4 text-xs text-[#64748B]">
                <div>
                  <span className="font-mono text-lg font-extrabold text-[#123B65] block">3 Phases</span>
                  <span>Periodized Cycle</span>
                </div>
                <div>
                  <span className="font-mono text-lg font-extrabold text-[#123B65] block">6 Exercises</span>
                  <span>Kinetic Prescriptions</span>
                </div>
                <div>
                  <span className="font-mono text-lg font-extrabold text-[#123B65] block">8 Weeks</span>
                  <span>Endurance Progression</span>
                </div>
              </div>
            </div>

            {/* Right Media Column: Large Hero Image Placeholder */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 rounded-2xl border border-[#DCE6F1] shadow-lg">
                <MediaPlaceholder
                  type="image"
                  filename="/images/home/hero-pickleball.jpg"
                  aspectRatio="16:9"
                  description="High-impact athletic shot of pickleball player in dynamic ready stance on tournament court with crisp blue lines."
                />
                <div className="p-3 text-left">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2563EB] block">
                    PE4 Athletic Performance Portfolio
                  </span>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Scientific periodization based on ground reaction forces, stretch-shortening cycle, and Kitchen line endurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: PROGRAM OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EAF3FF] px-3 py-1 rounded-full">
            Scientific Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B65] tracking-tight">
            Program Architecture & Academic Purpose
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Pickleball is a multi-planar sport requiring rapid split-step agility, sustained isometric quadriceps endurance during non-volley zone exchanges, and explosive rotational kinetic energy transfer. This program translates theoretical biomechanics into progressive microcycles.
          </p>
        </div>

        {/* 3 Core Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs hover:border-[#93C5FD] transition-colors space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] text-[#2563EB] flex items-center justify-center font-bold text-lg font-mono">
              01
            </div>
            <h3 className="text-xl font-bold text-[#123B65]">
              3 Periodized Phases
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Preparation (Build Foundation), Pre-Competition (Turn Strength into Power), and Competition (Maintain & Taper) demonstrate a logical progression of volume, intensity, and recovery.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#2563EB] flex items-center gap-1">
              <span>Systematic Periodization</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs hover:border-[#93C5FD] transition-colors space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] text-[#2563EB] flex items-center justify-center font-bold text-lg font-mono">
              02
            </div>
            <h3 className="text-xl font-bold text-[#123B65]">
              3 Primary Movements
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Directly targeted from Milestone 1: Forehand Drive (3rd class lever rotation), Overhead Smash (SSC & shoulder deceleration), and Dink Shot & Split Step (isometric crouch control).
            </p>
            <div className="pt-2 text-xs font-semibold text-[#2563EB] flex items-center gap-1">
              <span>Specific Kinetic Chains</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs hover:border-[#93C5FD] transition-colors space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] text-[#2563EB] flex items-center justify-center font-bold text-lg font-mono">
              03
            </div>
            <h3 className="text-xl font-bold text-[#123B65]">
              8-Week Fitness Goal
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Targeted progression from 20 to 45 minutes of continuous aerobic and court agility capacity at 65–75% HRmax through 5 structured paddle sessions weekly.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#2563EB] flex items-center gap-1">
              <span>Measurable Progression</span>
            </div>
          </div>
        </div>

        {/* Overview Media Banner */}
        <div className="mt-8 bg-[#F4F8FD] rounded-2xl border border-[#DCE6F1] p-4">
          <MediaPlaceholder
            type="image"
            filename="/images/home/program-overview.jpg"
            aspectRatio="16:9"
            description="Editorial wide angle showing athlete setting up at the kitchen line with paddle focused forward, highlighting athletic stance and readiness."
          />
        </div>
      </section>

      {/* SECTION C: PERFORMANCE OBJECTIVE & METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#123B65] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex items-center gap-2 text-[#93C5FD] font-semibold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Milestone 2 Performance Objective</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              "Increase continuous pickleball aerobic & court agility capacity from 20 to 45 minutes at 65–75% HRmax within 8 weeks."
            </h2>

            <p className="text-sm sm:text-base text-[#BFDBFE] leading-relaxed max-w-2xl">
              Anchored in documented baseline measurements, tracking cardiovascular efficiency, resting heart rate reduction, and sustained low-crouch endurance at the Kitchen line.
            </p>

            {/* Metrics Triad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {/* Baseline Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#93C5FD] block">
                  Baseline Measurement
                </span>
                <div className="text-2xl font-bold font-mono text-white">
                  {ATHLETE_INFO.baselineMetrics.restingHeartRate}
                </div>
                <p className="text-xs text-[#BFDBFE] leading-relaxed">
                  {ATHLETE_INFO.baselineMetrics.kitchenCrouchEndurance}
                </p>
                <span className="text-[10px] text-white/60 block pt-1">
                  Start of Assessment
                </span>
              </div>

              {/* Current Measure Card */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-[#2563EB]/50 shadow-inner space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300 block">
                  Current Documented Status
                </span>
                <div className="text-2xl font-bold font-mono text-white">
                  {ATHLETE_INFO.currentMetrics.restingHeartRate}
                </div>
                <p className="text-xs text-[#BFDBFE] leading-relaxed">
                  {ATHLETE_INFO.currentMetrics.courtAgilityEndurance}
                </p>
                <span className="text-[10px] text-emerald-300/80 block pt-1">
                  Verified Progress (Milestone 2)
                </span>
              </div>

              {/* 8-Week Target Card */}
              <div className="bg-[#2563EB] rounded-2xl p-5 border border-blue-400 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 block">
                  8-Week Program Target
                </span>
                <div className="text-2xl font-bold font-mono text-white">
                  {ATHLETE_INFO.targetMetrics.kitchenCrouchEndurance.split(' ')[0]} mins
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Continuous agility at {ATHLETE_INFO.targetMetrics.trainingHeartRateZone}
                </p>
                <span className="text-[10px] text-white/80 block pt-1">
                  Target Resting HR: {ATHLETE_INFO.targetMetrics.restingHeartRate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: THREE TRAINING PHASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DCE6F1] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Microcycle Progression
            </span>
            <h2 className="text-3xl font-extrabold text-[#123B65] tracking-tight mt-1">
              The Three Training Phases
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
            Click any phase card to inspect its dedicated 7-day microcycle calendar, exercise library, and video demonstrations.
          </p>
        </div>

        {/* Large Phase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Phase 1: Preparation */}
          <div
            onClick={() => onNavigate('preparation')}
            className="group bg-white rounded-2xl border border-[#DCE6F1] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2563EB] transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="p-3 bg-[#F4F8FD] border-b border-[#DCE6F1]">
                <MediaPlaceholder
                  type="image"
                  filename="/images/phases/preparation-banner.jpg"
                  aspectRatio="16:9"
                  description="Preparation Phase: Foundational core and shoulder rotational conditioning."
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EAF3FF] px-2.5 py-1 rounded">
                    PHASE 01
                  </span>
                  <span className="text-xs text-[#64748B]">Foundational Base</span>
                </div>

                <h3 className="text-2xl font-bold text-[#123B65] group-hover:text-[#2563EB] transition-colors">
                  Preparation Phase
                </h3>
                <p className="text-xs font-semibold text-[#2563EB]">
                  "BUILD THE FOUNDATION."
                </p>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Develops the physical foundation through strength, muscular endurance, core stability, shoulder conditioning, and aerobic capacity.
                </p>

                <div className="pt-2 border-t border-[#DCE6F1]/70 text-xs text-[#64748B] space-y-1.5">
                  <div><strong>Focus:</strong> Rotational control, quad stamina, posterior shoulder integrity.</div>
                  <div><strong>Volume/Intensity:</strong> Moderate volume · 60–70% HRmax · RPE 6.</div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="w-full py-2.5 px-4 bg-[#EAF3FF] group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
                <span>VIEW PREPARATION PHASE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Phase 2: Pre-Competition */}
          <div
            onClick={() => onNavigate('pre-competition')}
            className="group bg-white rounded-2xl border border-[#DCE6F1] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2563EB] transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="p-3 bg-[#F4F8FD] border-b border-[#DCE6F1]">
                <MediaPlaceholder
                  type="image"
                  filename="/images/phases/pre-competition-banner.jpg"
                  aspectRatio="16:9"
                  description="Pre-Competition Phase: Explosive jump smashes and reactive split-step changes of direction."
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EAF3FF] px-2.5 py-1 rounded">
                    PHASE 02
                  </span>
                  <span className="text-xs text-[#64748B]">Power & Specificity</span>
                </div>

                <h3 className="text-2xl font-bold text-[#123B65] group-hover:text-[#2563EB] transition-colors">
                  Pre-Competition Phase
                </h3>
                <p className="text-xs font-semibold text-[#2563EB]">
                  "TURN STRENGTH INTO POWER."
                </p>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Converts foundational strength into explosive rotational power, plyometrics, and reactive agility at 65–75% HRmax.
                </p>

                <div className="pt-2 border-t border-[#DCE6F1]/70 text-xs text-[#64748B] space-y-1.5">
                  <div><strong>Focus:</strong> Angular whip, reactive split-step, vertical jump smashes.</div>
                  <div><strong>Volume/Intensity:</strong> Moderate volume · 70–80% HRmax · RPE 8.</div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="w-full py-2.5 px-4 bg-[#EAF3FF] group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
                <span>VIEW PRE-COMPETITION PHASE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Phase 3: Competition */}
          <div
            onClick={() => onNavigate('competition')}
            className="group bg-white rounded-2xl border border-[#DCE6F1] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2563EB] transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="p-3 bg-[#F4F8FD] border-b border-[#DCE6F1]">
                <MediaPlaceholder
                  type="image"
                  filename="/images/phases/competition-banner.jpg"
                  aspectRatio="16:9"
                  description="Competition Phase: High-stakes tournament kitchen exchanges and match readiness."
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EAF3FF] px-2.5 py-1 rounded">
                    PHASE 03
                  </span>
                  <span className="text-xs text-[#64748B]">Maintenance & Taper</span>
                </div>

                <h3 className="text-2xl font-bold text-[#123B65] group-hover:text-[#2563EB] transition-colors">
                  Competition Phase
                </h3>
                <p className="text-xs font-semibold text-[#2563EB]">
                  "PERFORM WHEN IT MATTERS."
                </p>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Maintains power and strength while prioritizing match sharpness, neuromuscular freshness, and fatigue management.
                </p>

                <div className="pt-2 border-t border-[#DCE6F1]/70 text-xs text-[#64748B] space-y-1.5">
                  <div><strong>Focus:</strong> Tapering volume, rotator preservation, peak match day readiness.</div>
                  <div><strong>Volume/Intensity:</strong> Low volume · High quality bursts · RPE 6–7.</div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="w-full py-2.5 px-4 bg-[#EAF3FF] group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
                <span>VIEW COMPETITION PHASE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: BIOMECHANICAL FOUNDATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFD] rounded-3xl border border-[#DCE6F1] p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Milestone 1 Biomechanics
            </span>
            <h2 className="text-3xl font-extrabold text-[#123B65] tracking-tight">
              The Three Foundational Pickleball Movements
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Every exercise in this training program directly trains one of three core skill groups analyzed in Milestone 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BIOMECHANICAL_MOVEMENTS.map((mov) => (
              <div
                key={mov.id}
                className="bg-white rounded-xl border border-[#DCE6F1] p-5 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EAF3FF] px-2 py-0.5 rounded">
                    {mov.shortTag}
                  </span>
                  <h3 className="text-lg font-bold text-[#123B65] mt-2 mb-1">
                    {mov.name}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {mov.actionSummary}
                  </p>
                  <div className="mt-3 text-[11px] text-[#64748B] space-y-1">
                    <div>
                      <strong className="text-[#123B65]">Lever / System: </strong>
                      {mov.leverClassAndKinematics.leverClassification.split('(')[0]}
                    </div>
                    <div>
                      <strong className="text-[#123B65]">Agonists: </strong>
                      {mov.muscleActivation.agonists.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DCE6F1]/70">
                  <button
                    onClick={() => onNavigate('athlete-biomechanics')}
                    className="text-xs font-bold text-[#2563EB] hover:text-[#123B65] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Kinematics</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: CLOSING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#123B65] to-[#1E4D80] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#93C5FD]">
            Terminal Assessment Framework
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            "PERFORMANCE IS BUILT THROUGH PREPARATION."
          </h2>

          <p className="text-sm sm:text-base text-[#BFDBFE] max-w-2xl mx-auto leading-relaxed">
            Examine the complete scientific dossier, physiological considerations, injury risk mitigation strategies, and the exercise selection foundation.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('athlete-biomechanics')}
              className="px-6 py-3 text-sm font-bold text-[#123B65] bg-white hover:bg-[#EAF3FF] rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW ATHLETE PROFILE & BIOMECHANICS</span>
              <ArrowRight className="w-4 h-4 text-[#2563EB]" />
            </button>

            <button
              onClick={() => onNavigate('comparison')}
              className="px-6 py-3 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>PROGRAM PROGRESSION DASHBOARD</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
