import React, { useState } from 'react';
import { PageId } from '../types/training';
import {
  ATHLETE_INFO,
  BIOMECHANICAL_MOVEMENTS,
  MILESTONE_2_EXERCISES,
  INJURY_RISK_ANALYSIS,
  ACADEMIC_REFERENCES
} from '../data/athleteData';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { ExerciseCard } from '../components/ExerciseCard';
import {
  User,
  Heart,
  Timer,
  Calendar,
  Activity,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Sparkles,
  Zap,
  Target,
  Layers,
  ChevronRight,
  CheckCircle2,
  Maximize2
} from 'lucide-react';

interface AthleteProfileBiomechanicsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AthleteProfileBiomechanicsPage: React.FC<AthleteProfileBiomechanicsPageProps> = ({
  onNavigate
}) => {
  const [activeConceptTab, setActiveConceptTab] = useState<'kinetic-chain' | 'ssc' | 'cog' | 'levers' | 'impulse'>('kinetic-chain');

  return (
    <div className="w-full space-y-16 pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#F4F8FD] to-white border-b border-[#DCE6F1] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">
            <span>MO-PE014 PE4</span>
            <span>·</span>
            <span>Milestone 1 & 2 Synthesis</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123B65] tracking-tight">
            Athlete Profile & Biomechanical Analysis
          </h1>
          <p className="text-sm sm:text-base text-[#475569] mt-3 max-w-3xl leading-relaxed">
            The scientific cornerstone of this training program. Integrates the kinematic motion breakdowns from Milestone 1 with the physiological fitness profile and original six exercises from Milestone 2.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* SECTION A: ATHLETE AND FITNESS PROFILE */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Section A: Athlete and Fitness Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Athlete Info Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#DCE6F1] p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EAF3FF] text-[#2563EB] flex items-center justify-center font-bold text-lg">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#123B65]">
                    {ATHLETE_INFO.studentName}
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Section {ATHLETE_INFO.section} · {ATHLETE_INFO.sport}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#DCE6F1] pt-4 space-y-2 text-xs text-[#475569]">
                <div>
                  <strong className="text-[#123B65]">Course: </strong>
                  {ATHLETE_INFO.courseCode}
                </div>
                <div>
                  <strong className="text-[#123B65]">Assessment: </strong>
                  {ATHLETE_INFO.assessmentTitle}
                </div>
                <div>
                  <strong className="text-[#123B65]">Academic Affiliate: </strong>
                  {ATHLETE_INFO.institution}
                </div>
              </div>

              {/* Schedule Protocol as originally documented */}
              <div className="border-t border-[#DCE6F1] pt-4 space-y-2 text-xs">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#123B65] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                  Original Milestone 2 Workout Parameters
                </h4>
                <div className="bg-[#F8FAFD] p-3 rounded-lg border border-[#DCE6F1] space-y-1.5 text-xs">
                  <div>
                    <strong className="text-[#172B45]">Frequency: </strong>
                    <span className="text-[#2563EB] font-semibold">{ATHLETE_INFO.originalProgram.frequency}</span>
                  </div>
                  <div>
                    <strong className="text-[#172B45]">Workout Days: </strong>
                    <span>{ATHLETE_INFO.originalProgram.workoutDays.join(', ')}</span>
                  </div>
                  <div>
                    <strong className="text-[#172B45]">Total Session Duration: </strong>
                    <span>{ATHLETE_INFO.originalProgram.totalDuration}</span>
                  </div>
                  <div className="text-[11px] text-[#64748B] pt-1">
                    Structure: {ATHLETE_INFO.originalProgram.structure}
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Goals & Comparison Cards */}
            <div className="lg:col-span-8 space-y-6">
              {/* The Goal Banner */}
              <div className="bg-[#123B65] text-white p-6 rounded-2xl shadow-sm space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#93C5FD]">
                  Prescribed Fitness Goal (Milestone 2)
                </span>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  "{ATHLETE_INFO.fitnessGoal}"
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs text-[#BFDBFE]">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Targeting 5 structured paddle sessions/wk at 65–75% HRmax over 8 weeks.</span>
                </div>
              </div>

              {/* Baseline vs Current Comparative Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Baseline Box */}
                <div className="bg-white rounded-2xl border border-[#DCE6F1] p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Before Measurement
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                      Milestone 2 Start
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-[#DCE6F1]/60 pb-2">
                      <span className="text-xs text-[#64748B]">Resting Heart Rate</span>
                      <strong className="text-lg font-mono text-[#123B65]">
                        {ATHLETE_INFO.baselineMetrics.restingHeartRate}
                      </strong>
                    </div>

                    <div className="pt-1">
                      <span className="text-xs text-[#64748B] block mb-1">Kitchen Crouch Endurance</span>
                      <p className="text-xs text-[#172B45] font-medium bg-[#F8FAFD] p-2.5 rounded-lg border border-[#DCE6F1]">
                        {ATHLETE_INFO.baselineMetrics.kitchenCrouchEndurance}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Current Box */}
                <div className="bg-[#F4F8FD] rounded-2xl border border-[#93C5FD] p-5 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                      Current Documented Measure
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                      Interim Milestone 2 Progress
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-[#DCE6F1] pb-2">
                      <span className="text-xs text-[#64748B]">Resting Heart Rate</span>
                      <strong className="text-lg font-mono text-emerald-700">
                        {ATHLETE_INFO.currentMetrics.restingHeartRate}
                      </strong>
                    </div>

                    <div className="pt-1">
                      <span className="text-xs text-[#64748B] block mb-1">Lateral Agility & Split-Step</span>
                      <p className="text-xs text-[#123B65] font-medium bg-white p-2.5 rounded-lg border border-[#DCE6F1]">
                        {ATHLETE_INFO.currentMetrics.courtAgilityEndurance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Energy Systems Demand Box */}
              <div className="p-4 rounded-xl bg-white border border-[#DCE6F1] space-y-2 text-xs">
                <span className="font-bold text-[#123B65] uppercase tracking-wider text-[11px] block">
                  Energy Systems Contribution (Milestone 1 & 2)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-2.5 rounded-lg bg-[#EAF3FF] border border-[#BFDBFE]">
                    <strong className="text-[#123B65] block font-bold">ATP-PCr (0–10 sec)</strong>
                    <span className="text-[#475569] text-[11px]">Explosive overhead smashes, split-step burst hops, and high-velocity drives.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <strong className="text-emerald-950 block font-bold">Glycolytic (10–60 sec)</strong>
                    <span className="text-[#475569] text-[11px]">Sustained multi-shot Kitchen dink exchanges and continuous low-crouch isometric hold.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                    <strong className="text-blue-950 block font-bold">Aerobic (1–2 hrs)</strong>
                    <span className="text-[#475569] text-[11px]">Baseline recovery between rallies, heart rate recovery to &lt;73 bpm, match endurance.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B: PRIMARY PICKLEBALL MOVEMENTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Section B: Primary Pickleball Movements & Biomechanical Demands
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Detailed breakdown of the three core pickleball strokes investigated in Milestone 1, detailing kinetic sequence, joint lever classification, muscle agonist-stabilizer pairings, and kinematic measurements.
          </p>

          <div className="space-y-10">
            {BIOMECHANICAL_MOVEMENTS.map((mov, idx) => (
              <div
                key={mov.id}
                className="bg-white rounded-2xl border border-[#DCE6F1] shadow-xs overflow-hidden"
              >
                {/* Movement Header */}
                <div className="p-6 bg-[#F8FAFD] border-b border-[#DCE6F1] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#2563EB] bg-[#EAF3FF] px-2.5 py-1 rounded">
                      {mov.shortTag}
                    </span>
                    <h3 className="text-2xl font-bold text-[#123B65] tracking-tight mt-1">
                      {mov.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                      {mov.actionSummary}
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-[#123B65] bg-white border border-[#DCE6F1] px-3 py-1 rounded-lg">
                    {mov.leverClassAndKinematics.leverClassification.split('(')[0]}
                  </span>
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Image Placeholder */}
                  <div className="lg:col-span-5 space-y-4">
                    <MediaPlaceholder
                      type="image"
                      filename={mov.mediaPlaceholder.filename}
                      aspectRatio="16:9"
                      description={mov.mediaPlaceholder.description}
                    />

                    {/* Movement Phases Stepper */}
                    <div className="p-4 rounded-xl bg-[#F4F8FD] border border-[#DCE6F1] space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B65]">
                        Execution Phases (Milestone 1)
                      </h4>
                      <div className="space-y-2 text-xs">
                        {mov.movementPhases.map((phase, pIdx) => (
                          <div key={pIdx} className="border-l-2 border-[#2563EB] pl-2.5">
                            <strong className="text-[#123B65] block">{phase.phase}:</strong>
                            <span className="text-[#475569] leading-relaxed">{phase.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Biomechanical Analysis */}
                  <div className="lg:col-span-7 space-y-5 text-xs">
                    {/* Kinematic Chain */}
                    <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 space-y-1.5">
                      <span className="font-bold text-xs uppercase tracking-wider text-blue-900 block">
                        Kinematic Chain Flow
                      </span>
                      <p className="font-mono text-xs text-[#123B65] font-semibold">
                        {mov.leverClassAndKinematics.kinematicChain}
                      </p>
                    </div>

                    {/* Kinematic Measures Grid */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B65] mb-2">
                        Quantified Kinematic Measures (Milestone 1)
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {mov.leverClassAndKinematics.keyKinematicMeasures.map((measure, mIdx) => (
                          <li
                            key={mIdx}
                            className="p-2.5 bg-[#F8FAFD] border border-[#DCE6F1] rounded-lg text-[#334155] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                            <span>{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Muscle Activation Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                        <strong className="font-bold text-emerald-950 block uppercase text-[11px] mb-1">
                          Agonist Muscles (Prime Movers)
                        </strong>
                        <ul className="space-y-1 text-emerald-900">
                          {mov.muscleActivation.agonists.map((m, mIdx) => (
                            <li key={mIdx}>• {m}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100">
                        <strong className="font-bold text-purple-950 block uppercase text-[11px] mb-1">
                          Synergists & Joint Stabilizers
                        </strong>
                        <ul className="space-y-1 text-purple-900">
                          {mov.muscleActivation.synergistsAndStabilizers.map((m, mIdx) => (
                            <li key={mIdx}>• {m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Physiological & Fitness Demands */}
                    <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-[#DCE6F1] space-y-2">
                      <div>
                        <strong className="text-[#123B65] uppercase text-[11px] block">Physiological Demands:</strong>
                        <p className="text-[#475569]">{mov.physiologicalDemands.join(' ')}</p>
                      </div>
                      <div>
                        <strong className="text-[#123B65] uppercase text-[11px] block">Related Fitness Components:</strong>
                        <span className="text-[#2563EB] font-medium">{mov.relatedFitnessComponents.join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION C: BIOMECHANICAL CONCEPTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Section C: Biomechanical Concepts & Physics of Court Play
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Key physical principles extracted from Milestone 1. Click each concept tab to inspect interactive visual diagrams and clinical definitions.
          </p>

          {/* Concept Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#DCE6F1]">
            <button
              onClick={() => setActiveConceptTab('kinetic-chain')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeConceptTab === 'kinetic-chain'
                  ? 'bg-[#123B65] text-white shadow-xs'
                  : 'bg-white text-[#64748B] hover:text-[#123B65] border border-[#DCE6F1]'
              }`}
            >
              1. Kinetic Chain & GRF
            </button>
            <button
              onClick={() => setActiveConceptTab('ssc')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeConceptTab === 'ssc'
                  ? 'bg-[#123B65] text-white shadow-xs'
                  : 'bg-white text-[#64748B] hover:text-[#123B65] border border-[#DCE6F1]'
              }`}
            >
              2. Stretch-Shortening Cycle (SSC)
            </button>
            <button
              onClick={() => setActiveConceptTab('cog')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeConceptTab === 'cog'
                  ? 'bg-[#123B65] text-white shadow-xs'
                  : 'bg-white text-[#64748B] hover:text-[#123B65] border border-[#DCE6F1]'
              }`}
            >
              3. Center of Gravity & Kitchen BOS
            </button>
            <button
              onClick={() => setActiveConceptTab('levers')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeConceptTab === 'levers'
                  ? 'bg-[#123B65] text-white shadow-xs'
                  : 'bg-white text-[#64748B] hover:text-[#123B65] border border-[#DCE6F1]'
              }`}
            >
              4. 3rd Class Lever Dynamics
            </button>
            <button
              onClick={() => setActiveConceptTab('impulse')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeConceptTab === 'impulse'
                  ? 'bg-[#123B65] text-white shadow-xs'
                  : 'bg-white text-[#64748B] hover:text-[#123B65] border border-[#DCE6F1]'
              }`}
            >
              5. Impulse-Momentum in Dinking
            </button>
          </div>

          {/* Concept Display Window */}
          <div className="bg-white rounded-2xl border border-[#DCE6F1] p-6 sm:p-8 shadow-xs">
            {activeConceptTab === 'kinetic-chain' && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">Concept 01</span>
                  <h3 className="text-xl font-bold text-[#123B65] mt-1">
                    Bottom-Up Kinetic Chain & Ground Reaction Forces (GRF)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    Power in pickleball groundstrokes does not originate in the forearm or shoulder. Instead, it is generated when the rear foot pushes down into the court, producing a Ground Reaction Force (1.5×–2.0× body weight). This force travels through knee extension, pelvic rotation, torso uncoiling, and terminates at paddle-ball impact.
                  </p>
                </div>

                {/* CSS-based Kinetic Chain Diagram */}
                <div className="p-6 rounded-xl bg-[#F4F8FD] border border-[#DCE6F1] space-y-4">
                  <span className="text-xs font-bold text-[#123B65] uppercase tracking-wider block text-center">
                    Kinetic Energy Transmission Sequence
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs">
                    <div className="p-3 bg-white rounded-lg border border-[#DCE6F1] shadow-2xs">
                      <strong className="text-[#2563EB] block font-mono">STEP 1</strong>
                      <span className="font-bold text-[#123B65]">GRF (Foot Plant)</span>
                      <p className="text-[10px] text-[#64748B] mt-1">1.5–2.0× body weight ground impulse</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#DCE6F1] shadow-2xs">
                      <strong className="text-[#2563EB] block font-mono">STEP 2</strong>
                      <span className="font-bold text-[#123B65]">Knee & Pelvic Drive</span>
                      <p className="text-[10px] text-[#64748B] mt-1">Hips turn forward over lead leg</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#DCE6F1] shadow-2xs">
                      <strong className="text-[#2563EB] block font-mono">STEP 3</strong>
                      <span className="font-bold text-[#123B65]">Torso Core Uncoil</span>
                      <p className="text-[10px] text-[#64748B] mt-1">Obliques transfer rotational torque</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#DCE6F1] shadow-2xs">
                      <strong className="text-[#2563EB] block font-mono">STEP 4</strong>
                      <span className="font-bold text-[#123B65]">Glenohumeral Sweep</span>
                      <p className="text-[10px] text-[#64748B] mt-1">Shoulder horiz. adduction & cuff stability</p>
                    </div>
                    <div className="p-3 bg-[#EAF3FF] rounded-lg border border-[#BFDBFE] shadow-2xs">
                      <strong className="text-[#2563EB] block font-mono">STEP 5</strong>
                      <span className="font-bold text-[#123B65]">Paddle Impact</span>
                      <p className="text-[10px] text-[#2563EB] mt-1">15–20 m/s clean paddle speed</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeConceptTab === 'ssc' && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">Concept 02</span>
                  <h3 className="text-xl font-bold text-[#123B65] mt-1">
                    The Stretch-Shortening Cycle (SSC) in the Overhead Smash
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    The SSC couples rapid eccentric muscle lengthening with instantaneous concentric shortening. During the trophy position setup, the pectoralis major and internal rotators undergo rapid elastic pre-stretch. Stored elastic energy in parallel elastic components (fascia and tendons) is immediately released, multiplying strike velocity.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE6F1]">
                    <span className="font-bold text-[#123B65] block mb-1">Phase 1: Eccentric Loading</span>
                    <p className="text-[#475569] leading-relaxed">Pre-stretching chest and anterior shoulder rotators in trophy cocking stance.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                    <span className="font-bold text-amber-950 block mb-1">Phase 2: Amortization (Coupling)</span>
                    <p className="text-[#475569] leading-relaxed">Must be ultra-short (&lt;0.1s); any delay dissipates elastic energy as heat.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                    <span className="font-bold text-emerald-950 block mb-1">Phase 3: Concentric Explosion</span>
                    <p className="text-[#475569] leading-relaxed">Rapid downward whip &gt;1000°/s shoulder internal rotational velocity.</p>
                  </div>
                </div>
              </div>
            )}

            {activeConceptTab === 'cog' && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">Concept 03</span>
                  <h3 className="text-xl font-bold text-[#123B65] mt-1">
                    Center of Gravity (COG) & Base of Support (BOS) at the Kitchen Line
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    To react within the &lt;0.4 second response window during Kitchen dink exchanges, athletes must lower their center of gravity via 60°–90° knee flexion while maintaining a wide base of support (~1.3× shoulder width). This ensures stability against incoming body attacks while preparing for multi-directional push-offs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE6F1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <strong className="text-[#123B65] block">Stability Formula in Court Agility:</strong>
                    <span className="text-[#475569]">Lower COG + Wide BOS = Greater Resistance to Perturbation & Faster Lateral Push-Off</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#DCE6F1] font-mono text-[#2563EB] font-bold">
                    Target Knee Flexion: 60°–90°
                  </div>
                </div>
              </div>
            )}

            {activeConceptTab === 'levers' && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">Concept 04</span>
                  <h3 className="text-xl font-bold text-[#123B65] mt-1">
                    Third-Class Lever Mechanics of the Pickleball Paddle Arm
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    The human arm holding a paddle functions biomechanically as a 3rd class lever: the fulcrum is at the glenohumeral joint, muscular effort is applied close to the joint by the pectoralis and deltoid, and the load is at the paddle's sweet spot. While mechanical advantage is less than 1, it allows massive angular speed at the paddle head!
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#DCE6F1] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <strong className="text-[#123B65] block">Fulcrum:</strong>
                    <span className="text-[#475569]">Glenohumeral shoulder joint</span>
                  </div>
                  <div>
                    <strong className="text-[#123B65] block">Effort:</strong>
                    <span className="text-[#475569]">Pectoralis Major & Anterior Deltoid insertions</span>
                  </div>
                  <div>
                    <strong className="text-[#123B65] block">Load:</strong>
                    <span className="text-[#475569]">Paddle face & ball contact point</span>
                  </div>
                </div>
              </div>
            )}

            {activeConceptTab === 'impulse' && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">Concept 05</span>
                  <h3 className="text-xl font-bold text-[#123B65] mt-1">
                    Impulse-Momentum Relationship in Soft Touch Dinking
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                    According to the impulse-momentum theorem (J = F · Δt = m · Δv), when retrieving a fast attack at the Kitchen, the athlete slightly yields the paddle grip and extends contact duration (Δt). This cushions incoming momentum without popping the ball up high for an opponent smash.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#EAF3FF] border border-[#BFDBFE] text-xs text-[#123B65]">
                  <strong className="block mb-1">Key Kinematic Prescript:</strong>
                  Minimal paddle acceleration (&lt;5 m/s) with shoulder-driven pendulum control and locked wrist to prevent pop-up errors.
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION D: EXERCISE SELECTION FOUNDATION */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Section D: Exercise Selection Foundation (Original Milestone 2 Prescriptions)
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            The six original exercises submitted in Milestone 2. Each exercise is mapped to its target movement, primary muscles worked, step-by-step instructions, and video demonstration placeholders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MILESTONE_2_EXERCISES.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                defaultExpanded={false}
              />
            ))}
          </div>
        </section>

        {/* INJURY RISK ANALYSIS & MITIGATION TABLE (Milestone 1) */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-2 border-b border-[#DCE6F1] pb-3">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-[#123B65] tracking-tight">
              Injury Risk Analysis & Biomechanical Mitigation
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
            From Milestone 1: Analysis of high-incidence injuries in court racket sports and how structured exercise selection prevents chronic trauma.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#DCE6F1] bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FAFD] border-b border-[#DCE6F1] text-[#123B65] font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4">Injury Risk</th>
                  <th className="p-4">Biomechanical Cause</th>
                  <th className="p-4">Prevention & Mitigation</th>
                  <th className="p-4">Targeted Microcycle Phase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE6F1] text-[#334155]">
                {INJURY_RISK_ANALYSIS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F4F8FD]/50 transition-colors">
                    <td className="p-4 font-bold text-[#123B65] whitespace-nowrap">
                      {item.injuryRisk}
                    </td>
                    <td className="p-4 leading-relaxed max-w-xs">
                      {item.biomechanicalCause}
                    </td>
                    <td className="p-4 leading-relaxed max-w-xs font-medium text-[#172B45]">
                      {item.preventionAndMitigation}
                    </td>
                    <td className="p-4 text-[11px] text-[#2563EB] whitespace-nowrap">
                      {item.targetedPhases}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ACADEMIC REFERENCES SECTION */}
        <section className="bg-white rounded-2xl border border-[#DCE6F1] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B65]">
            <BookOpen className="w-4 h-4 text-[#2563EB]" />
            <span>Academic References & Milestone Citations</span>
          </div>

          <div className="space-y-3 text-xs text-[#475569]">
            {ACADEMIC_REFERENCES.map((ref) => (
              <div key={ref.id} className="p-3 rounded-lg bg-[#F8FAFD] border border-[#DCE6F1]">
                <p className="font-semibold text-[#123B65]">
                  {ref.authors} ({ref.year}). <span className="italic">{ref.title}</span> ({ref.edition}). {ref.publisher}.
                </p>
                <p className="text-[11px] text-[#64748B] mt-1">
                  <strong>Relevance: </strong>{ref.relevance}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#DCE6F1]">
            <span className="text-xs text-[#64748B]">
              Ready to explore the microcycle schedules?
            </span>
            <button
              onClick={() => onNavigate('preparation')}
              className="px-4 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>GO TO PHASE 01: PREPARATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
