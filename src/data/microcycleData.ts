/**
 * Complete Microcycle Training Programs for 3 Phases
 * Phase 01: Preparation ("BUILD THE FOUNDATION")
 * Phase 02: Pre-Competition ("TURN STRENGTH INTO POWER")
 * Phase 03: Competition ("PERFORM WHEN IT MATTERS")
 * Student: Alexies Jean Ballesteros | Section: H2101 | MO-PE014 PE4
 */

import { MicrocyclePhase, ExerciseItem } from '../types/training';
import { MILESTONE_2_EXERCISES } from './athleteData';

// --- PHASE 01: PREPARATION EXERCISES (4 Core Foundational Exercises - Static Images Only, 9:16 Portrait) ---
export const PREPARATION_EXERCISES: ExerciseItem[] = [
  {
    id: 'p1-bodyweight-squat',
    name: 'Bodyweight Squat',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'preparation',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'image',
      filename: '/images/exercises/bodyweight-squat.jpg',
      aspectRatio: '9:16',
      description: 'Vertical portrait (9:16) image of proper squat mechanics, parallel thigh depth, upright torso, and neutral spine.'
    },
    movementDescription:
      'Foundational closed-chain bilateral lower-body movement establishing quadriceps, gluteal, and hip endurance necessary for sustained Kitchen-line crouch postures and split-step force absorption.',
    stepByStepInstructions: [
      'Stand upright with feet positioned shoulder-width apart and toes angled slightly outward (5°–10°).',
      'Brace core firmly and initiate the descent by hinging simultaneously at the hips and knees.',
      'Lower under control until thighs are parallel to the floor (approx. 90° knee flexion), keeping chest proud and heels planted.',
      'Drive forcefully through the midfoot and heels to return to standing; complete 12–15 controlled reps.'
    ],
    equipmentNeeded: 'None (Bodyweight / Exercise Mat)',
    primaryMuscles: ['Quadriceps (Vastus Medialis, Vastus Lateralis, Rectus Femoris)', 'Gluteus Maximus', 'Hamstrings'],
    secondaryMuscles: ['Core Stabilizers', 'Gastrocnemius & Soleus', 'Erector Spinae'],
    setsAndReps: '3–4 sets × 12–15 reps',
    trainingIntensity: 'Moderate (RPE 6/10, 60–70% HRmax)',
    restInterval: '45–60 seconds between sets',
    trainingBenefits:
      'Builds muscular endurance in knee extensors and hip stabilizers to maintain low-crouch dink stances without premature thigh burning.',
    biomechanicalRationale:
      'Develops bilateral ground reaction force distribution and enhances eccentric-to-isometric control required for split-step deceleration.',
    progressionNote: 'Phase 01 Foundational Image: Emphasizes movement mechanics, depth control, and knee stability before high-speed lateral agility.'
  },
  {
    id: 'p1-forearm-plank',
    name: 'Forearm Plank',
    movementTarget: 'Forehand Drive',
    phase: 'preparation',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'image',
      filename: '/images/exercises/forearm-plank.jpg',
      aspectRatio: '9:16',
      description: 'Vertical portrait (9:16) image showing straight-line head-to-heel alignment, active core bracing, elbows under shoulders, and neutral pelvis.'
    },
    movementDescription:
      'Isometric anti-extension core stabilization drill that strengthens the pelvic-lumbar cylinder, preventing energy leakage during rotational kinetic chain groundstrokes.',
    stepByStepInstructions: [
      'Place forearms on an exercise mat with elbows positioned directly beneath the shoulder joints.',
      'Extend legs back with balls of feet on the floor, lifting hips so body forms a straight line from ears to ankles.',
      'Draw navel inward to activate the transverse abdominis, squeeze glutes, and avoid sagging or piking hips.',
      'Maintain steady diaphragmatic breathing and hold rigidly for 35–45 seconds per set.'
    ],
    equipmentNeeded: 'Exercise Mat',
    primaryMuscles: ['Rectus Abdominis', 'Transverse Abdominis', 'Internal & External Obliques'],
    secondaryMuscles: ['Serratus Anterior', 'Gluteus Complex', 'Quadriceps'],
    setsAndReps: '3 sets × 35–45 seconds isometric hold',
    trainingIntensity: 'Moderate (RPE 6–7/10)',
    restInterval: '45 seconds between sets',
    trainingBenefits:
      'Prevents lumbar hyperextension and strengthens the core cylinder to effectively transfer ground reaction forces into upper-body paddle swings.',
    biomechanicalRationale:
      'Solidifies pelvic-lumbar stability so that rotational torque from the lower extremities translates into paddle velocity without spine strain.',
    progressionNote: 'Phase 01 Foundational Image: Establishes isometric anti-extension core endurance before explosive rotational whip drills.'
  },
  {
    id: 'p1-walking-lunges',
    name: 'Walking Lunges',
    movementTarget: 'Forehand Drive',
    phase: 'preparation',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'image',
      filename: '/images/exercises/walking-lunges.jpg',
      aspectRatio: '9:16',
      description: 'Vertical portrait (9:16) view of forward walking lunge step, front knee aligned at 90 degrees, back knee hovering above court surface.'
    },
    movementDescription:
      'Dynamic unilateral lower-body conditioning exercise developing single-leg braking capacity, hip stability, and deceleration control for aggressive baseline transitions.',
    stepByStepInstructions: [
      'Stand tall with feet hip-width apart and hands resting on hips or in athletic ready position.',
      'Step forward with right foot, lowering hips until right thigh is parallel to the ground and left knee hovers 1–2 inches off the floor.',
      'Ensure the front knee stays aligned over the midfoot without collapsing inward (valgus collapse).',
      'Push smoothly off the front heel, stepping the rear foot forward directly into the next lunge; alternate for 10–12 reps per leg.'
    ],
    equipmentNeeded: 'None (Bodyweight / 15-foot court space)',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus & Medius', 'Hamstrings'],
    secondaryMuscles: ['Adductors', 'Soleus & Gastrocnemius', 'Core Obliques'],
    setsAndReps: '3 sets × 10–12 reps per leg (20–24 steps total)',
    trainingIntensity: 'Moderate (RPE 6–7/10)',
    restInterval: '60 seconds between sets',
    trainingBenefits:
      'Eliminates bilateral limb strength asymmetries and prepares knees and hips for eccentric deceleration during sudden court stops.',
    biomechanicalRationale:
      'Replicates the unilateral weight transfer and forward ground reaction force absorption experienced when stepping into deep forehand drives.',
    progressionNote: 'Phase 01 Foundational Image: Develops unilateral eccentric brake control and single-leg stability.'
  },
  {
    id: 'p1-standard-push-ups',
    name: 'Standard Push-Ups',
    movementTarget: 'The Overhead Smash',
    phase: 'preparation',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'image',
      filename: '/images/exercises/standard-push-ups.jpg',
      aspectRatio: '9:16',
      description: 'Vertical portrait (9:16) image showing full push-up lockout, 45-degree elbow path, chest lowering within 2 inches of mat, and rigid trunk.'
    },
    movementDescription:
      'Closed-chain upper-body horizontal pressing movement building anterior shoulder strength, chest power, and scapulothoracic rhythm for overhead pickleball shots.',
    stepByStepInstructions: [
      'Begin in a high plank position with hands placed slightly wider than shoulder-width, fingers spread forward.',
      'Maintain a rigid core and glute brace; lower chest smoothly until it is 1–2 inches from the floor, elbows flaring back at ~45°.',
      'Keep neck neutral and prevent hips from sagging below torso level.',
      'Press firmly through whole palms to return to full elbow lockout; repeat for 10–12 crisp repetitions.'
    ],
    equipmentNeeded: 'Exercise Mat',
    primaryMuscles: ['Pectoralis Major (Sternal & Clavicular)', 'Anterior Deltoid', 'Triceps Brachii'],
    secondaryMuscles: ['Serratus Anterior (scapular protraction)', 'Rectus Abdominis'],
    setsAndReps: '3 sets × 10–12 reps',
    trainingIntensity: 'Moderate (RPE 6–7/10)',
    restInterval: '45–60 seconds between sets',
    trainingBenefits:
      'Reinforces anterior upper-body pushing power, protects the shoulder anterior capsule, and trains serratus anterior for scapular mobility.',
    biomechanicalRationale:
      'Conditions the horizontal adductors and triceps to withstand the high eccentric and concentric forces required during overhead smash propulsion.',
    progressionNote: 'Phase 01 Foundational Image: Establishes upper-body pressing strength and scapular stabilizer control.'
  }
];

// --- PHASE 02: PRE-COMPETITION EXERCISES (Original 6 Milestone 2 Video Demonstrations, 9:16 Portrait) ---
export const PRE_COMPETITION_EXERCISES: ExerciseItem[] = [
  ...MILESTONE_2_EXERCISES.map((ex) => ({
    ...ex,
    phase: 'pre-competition' as const,
    isMilestoneOriginal: true,
    progressionNote: 'Phase 02 Pre-Competition: Executed at high intent and sport-specific speed (70–80% HRmax) to convert foundational strength into explosive court power.'
  }))
];

// --- PHASE 03: COMPETITION EXERCISES (Strictly 3 Images Only for Core Foundational Pickleball Movements, 9:16 Portrait) ---
export const COMPETITION_EXERCISES: ExerciseItem[] = [
  {
    id: 'p3-forehand-drive',
    name: 'Forehand Drive Maintenance & Kinetic Sequencing',
    movementTarget: 'Forehand Drive',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'image',
      filename: '/images/exercises/forehand-drive-maintenance.jpg',
      aspectRatio: '9:16',
      description: 'Vertical portrait (9:16) image of athlete at contact point of the forehand drive with neutral wrist and lead-foot weight transfer.'
    },
    movementDescription:
      'Sport-specific technical timing drill maintaining neuromuscular motor sequencing of the 3rd class lever stroke without inducing peripheral muscular fatigue.',
    stepByStepInstructions: [
      'Take athletic ready stance at the court baseline with paddle in hand (or shadow grip).',
      'Execute crisp, rhythmic forehand drives focusing on effortless kinetic sequencing: leg drive → hip turn → smooth follow-through.',
      'Perform 6–8 pristine repetitions per side at high technical precision with complete focus on form.',
      'Prioritize fluidity, elastic recoil, and clean balance over muscular straining.'
    ],
    equipmentNeeded: 'Pickleball Paddle',
    primaryMuscles: ['Internal & External Obliques', 'Anterior Deltoids', 'Gluteus Medius'],
    secondaryMuscles: ['Forearm Flexors', 'Rectus Abdominis'],
    setsAndReps: '2 sets × 6–8 reps per side (crisp & pristine)',
    trainingIntensity: 'Low-to-Moderate (RPE 5–6/10, 60–65% HRmax)',
    restInterval: '60 seconds between sets (full recovery)',
    trainingBenefits:
      'Keeps neural pathways primed for tournament play while completely preserving energy stores and joint health.',
    biomechanicalRationale:
      'Maintains motor pattern fidelity and timing of the 3rd class lever system without inducing muscle damage or soreness before tournament play.',
    progressionNote: 'Phase 03 Movement Image: Tapered volume maintaining pristine motor pattern fidelity for competition.'
  },
  {
    id: 'p3-overhead-smash',
    name: 'Overhead Smash Timing & Deceleration Posture',
    movementTarget: 'The Overhead Smash',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'image',
      filename: '/images/exercises/overhead-smash-maintenance.jpg',
      aspectRatio: '9:16',
      description: 'Vertical portrait (9:16) view of overhead smash apex contact and trophy position with balanced landing mechanics.'
    },
    movementDescription:
      'Refined technical timing drill sharpening the overhead smash kinetic whip and soft-landing deceleration with minimal joint stress.',
    stepByStepInstructions: [
      'Take a light backward tracking step and spring into a comfortable, submaximal vertical hop.',
      'Align paddle overhead in optimal strike zone (160°–180° shoulder elevation) in the classical trophy position.',
      'Execute a smooth, fluid overhead stroke snapping cleanly downward through the ball line.',
      'Decelerate softly onto the lead foot with posture upright and balanced; perform 6 controlled repetitions per set.'
    ],
    equipmentNeeded: 'Pickleball Paddle',
    primaryMuscles: ['Latissimus Dorsi', 'Pectoralis Major', 'Rotator Cuff (Infraspinatus/Teres Minor)', 'Triceps Brachii'],
    secondaryMuscles: ['Anterior Core', 'Calf Complex'],
    setsAndReps: '2 sets × 6 reps',
    trainingIntensity: 'Moderate technical intent (RPE 6/10)',
    restInterval: '60 seconds between sets',
    trainingBenefits:
      'Fine-tunes smash timing and overhead contact consistency without fatiguing shoulder rotators before tournament matches.',
    biomechanicalRationale:
      'Re-establishes optimal scapulohumeral rhythm and reinforces lead-leg eccentric deceleration mechanics.',
    progressionNote: 'Phase 03 Movement Image: Focuses on precision trophy positioning and safe soft landing mechanics.'
  },
  {
    id: 'p3-dink-split-step',
    name: 'Dink Shot Precision & Split-Step Stance',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'image',
      filename: '/images/exercises/dink-split-step-maintenance.jpg',
      aspectRatio: '9:16',
      description: 'Vertical portrait (9:16) action shot of low-crouch Kitchen line positioning, stable base of support, and locked wrist dink execution.'
    },
    movementDescription:
      'Targeted tournament-priming exercise focusing on rapid split-step synchronization, Kitchen line court stance, and soft paddle face control.',
    stepByStepInstructions: [
      'Assume a light, rhythmic bounce on the balls of the feet at the Kitchen (non-volley zone) line.',
      'Drop synchronously into a low-crouch split-step landing with wide base of support and ~70° knee flexion.',
      'Execute a soft, shoulder-driven shadow dink push with an immovable neutral wrist and upright chest.',
      'Hold the posture for 3 seconds, reset smoothly, and repeat for 6–8 crisp repetitions.'
    ],
    equipmentNeeded: 'Pickleball Paddle',
    primaryMuscles: ['Quadriceps', 'Gluteus Medius', 'Soleus & Gastrocnemius', 'Forearm Stabilizers'],
    secondaryMuscles: ['Peroneals', 'Core Stabilizers'],
    setsAndReps: '2–3 sets × 6–8 reps (with 3s hold)',
    trainingIntensity: 'Moderate (RPE 6/10, snappy reactive tempo)',
    restInterval: '60 seconds between sets',
    trainingBenefits:
      'Primes fast-twitch reflex arcs and reactive court footwork without depleting glycogen stores ahead of match day.',
    biomechanicalRationale:
      'Maintains isometric rate coding of knee extensors and tendon stiffness for rapid Kitchen retrieval without inducing metabolic fatigue.',
    progressionNote: 'Phase 03 Movement Image: Reinforces low center-of-gravity dink defense and instant split-step readiness.'
  }
];

// --- 7-DAY MICROCYCLE SCHEDULES FOR EACH PHASE ---

export const PREPARATION_PHASE_DATA: MicrocyclePhase = {
  id: 'preparation',
  phaseNumber: '01',
  title: 'Preparation Phase',
  headline: 'BUILD THE FOUNDATION.',
  bannerPlaceholder: {
    filename: '/images/phases/preparation-banner.jpg',
    description: 'Athlete in court gear performing foundational stability work with paddle, morning sunlight, clean sports editorial aesthetic.'
  },
  mainFunction:
    'Develop the physical foundation required for pickleball through strength, muscular endurance, core stability, shoulder conditioning, lower-body control, and aerobic capacity.',
  trainingPriorities: [
    'Foundational muscular endurance & tissue resilience',
    'Core stability & rotational control mechanics',
    'Posterior shoulder rotator cuff conditioning',
    'Isometric lower-body stamina at the Kitchen line',
    'Basic aerobic capacity (60–70% HRmax) for prolonged play',
    'Proper movement mechanics & injury prevention habits'
  ],
  targetVolume: 'Moderate Volume (3–4 sets, 12–15 reps or 35–45s work intervals)',
  targetIntensity: 'Moderate (RPE 6/10, 60–70% HRmax)',
  targetHeartRate: '60–70% HRmax (Aerobic base building)',
  restRecoveryFocus: '45–60s rest intervals; focus on motor learning and tissue conditioning without excessive central nervous fatigue.',
  equipmentRequirements: [
    'Exercise Mat',
    'Court shoes with lateral support',
    'Flat court line or 10-foot floor space',
    'Pickleball paddle for shadow swinging'
  ],
  phaseRationale:
    'Preparation establishes the kinetic chain pathways and builds the musculoskeletal baseline required to safely tolerate subsequent high-velocity power and plyometric loads. Without adequate quadriceps isometric endurance, shoulder rotator strength, and core rotational stiffness, athletes face heightened risk of lateral epicondylitis, rotator cuff impingement, and early fatigue at the Kitchen line.',
  progressionFromPrevious:
    'Translates the 4-day workout frequency from Milestone 2 into a structured 7-day microcycle, building continuous low-crouch endurance from the baseline 20 minutes toward the 45-minute fitness objective.',
  exercises: PREPARATION_EXERCISES,
  days: [
    {
      dayName: 'Monday',
      shortDay: 'MON',
      title: 'Rotational Control & Kinetic Chain Prep',
      focus: 'Forehand Drive Mechanics & Rotational Torso Strength',
      status: 'Training',
      intensity: 'Moderate',
      durationMinutes: 30,
      shortDescription: 'Focus on 3rd class lever rotation, rear foot ground drive, and core uncoiling mechanics.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Arm circles and thoracic spine openers (1 min)',
          'Leg swings: front-to-back and side-to-side (1 min)',
          'High knees and light lateral court jogging (2 mins)',
          'Submaximal torso twists with neutral pelvis (1 min)'
        ]
      },
      exercises: [
        PREPARATION_EXERCISES[0], // Bodyweight Squat
        PREPARATION_EXERCISES[1], // Forearm Plank
        PREPARATION_EXERCISES[2]  // Walking Lunges
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Standing quadriceps and hip flexor static stretch (2 mins)',
          'Child\'s pose with side reach for lats and obliques (2 mins)',
          'Diaphragmatic box breathing to restore resting HR (1 min)'
        ]
      },
      coachingNotes: 'Emphasize smooth, controlled eccentric descent. Maintain upright posture in squats and avoid pelvic sagging during planks.'
    },
    {
      dayName: 'Tuesday',
      shortDay: 'TUE',
      title: 'Upper Pressing Integrity & Core Stability',
      focus: 'Push-Up Scapular Control & Anti-Extension Cylinder',
      status: 'Training',
      intensity: 'Moderate',
      durationMinutes: 30,
      shortDescription: 'Strengthening the anterior shoulder girdle, serratus anterior, and pelvic-lumbar core cylinder.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Shoulder dislocations with broomstick/band (1.5 mins)',
          'Inchworms with scapular push-ups (1.5 mins)',
          'Ankle circles and calf raises (2 mins)'
        ]
      },
      exercises: [
        PREPARATION_EXERCISES[3], // Standard Push-Ups
        PREPARATION_EXERCISES[1], // Forearm Plank
        PREPARATION_EXERCISES[0]  // Bodyweight Squat
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Doorway pectoralis and anterior deltoid stretch (2 mins)',
          'Seated forward fold (2 mins)',
          'Deep nasal diaphragmatic breathing (1 min)'
        ]
      },
      coachingNotes: 'Maintain a 45-degree elbow path during push-ups to protect the glenohumeral joint and engage the serratus anterior.'
    },
    {
      dayName: 'Wednesday',
      shortDay: 'WED',
      title: 'Active Recovery & Core Mobility',
      focus: 'Joint Decompression & Soft Tissue Flush',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 25,
      shortDescription: 'Gentle mobility flow, thoracic spine opening, and light isometric core bracing to promote tissue repair.',
      warmupProtocol: {
        duration: '3 minutes',
        drills: ['Gentle neck rolls and wrist circles', 'Cat-cow pelvic tilts', 'Ankle dorsiflexion rocks']
      },
      exercises: [
        PREPARATION_EXERCISES[1] // Forearm Plank (performed gently with focus on deep diaphragmatic breathing)
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Supine spinal twist', 'Legs-up-the-wall relaxation', 'Hydration and heart rate check (target <75 bpm)']
      },
      coachingNotes: 'Today is designed to flush metabolic waste and allow connective tissues in knees and shoulders to adapt.'
    },
    {
      dayName: 'Thursday',
      shortDay: 'THU',
      title: 'Lower-Body Stamina & Pressing Conditioning',
      focus: 'Sustained Thigh Stamina & Unilateral Deceleration',
      status: 'Training',
      intensity: 'Moderate-High',
      durationMinutes: 30,
      shortDescription: 'Unilateral walking lunges paired with bodyweight squats and push-ups to build court endurance.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Lateral band walks or wide side-steps (2 mins)',
          'Bodyweight squats with reach (1.5 mins)',
          'Light stationary jogging with arm swings (1.5 mins)'
        ]
      },
      exercises: [
        PREPARATION_EXERCISES[0], // Bodyweight Squat
        PREPARATION_EXERCISES[2], // Walking Lunges
        PREPARATION_EXERCISES[3]  // Standard Push-Ups
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Standing calf wall stretch (gastrocnemius & soleus) (2 mins)',
          'Butterfly groin stretch for adductors (2 mins)',
          'Supine hamstring stretch (1 min)'
        ]
      },
      coachingNotes: 'Keep knees tracking over toes during walking lunges to prevent valgus stress on knee ligaments.'
    },
    {
      dayName: 'Friday',
      shortDay: 'FRI',
      title: 'Aerobic Flush & Dynamic Balance',
      focus: 'Low-Intensity Aerobic Conditioning & Postural Precision',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 25,
      shortDescription: 'Continuous light court walking, shadow movement, and gentle core alignment keeping heart rate in Zone 1-2.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: ['Light brisk walking/jogging', 'High knee hugs', 'Arm cross-body swings']
      },
      exercises: [
        PREPARATION_EXERCISES[1] // Forearm Plank (short 20-second activation sets)
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Total body foam rolling simulation or dynamic stretching', 'Deep breathing']
      },
      coachingNotes: 'Keep intensity relaxed; this builds aerobic baseline without overloading the legs ahead of Saturday\'s integrated circuit.'
    },
    {
      dayName: 'Saturday',
      shortDay: 'SAT',
      title: 'Full Foundational Conditioning Circuit',
      focus: 'Integration of all 4 Core Foundational Exercises',
      status: 'Training',
      intensity: 'Moderate-High',
      durationMinutes: 30,
      shortDescription: 'Full circuit integrating all 4 core foundational exercises: Squats, Planks, Walking Lunges, and Push-Ups.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Full-body multi-planar warm-up (jumping jacks, torso twists, lunges with reach) (3 mins)',
          'Paddle shadow swings covering baseline to kitchen (2 mins)'
        ]
      },
      exercises: [
        PREPARATION_EXERCISES[0], // Bodyweight Squat
        PREPARATION_EXERCISES[1], // Forearm Plank
        PREPARATION_EXERCISES[2], // Walking Lunges
        PREPARATION_EXERCISES[3]  // Standard Push-Ups
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Full-body static cool-down (quads, lats, chest, calves) (3.5 mins)',
          'Heart rate assessment (log recovery toward resting <73 bpm) (1.5 mins)'
        ]
      },
      coachingNotes: 'Saturday serves as the foundational fitness checkpoint. Notice the increased muscular endurance and stability across all 4 movements.'
    },
    {
      dayName: 'Sunday',
      shortDay: 'SUN',
      title: 'Complete Rest & Physiological Adaptation',
      focus: 'Systemic Recovery & Musculoskeletal Supercompensation',
      status: 'Complete Rest',
      intensity: 'Low',
      durationMinutes: 0,
      shortDescription: 'Zero structured workout load. Optimal sleep, balanced nutrition, and full central nervous system reset.',
      warmupProtocol: {
        duration: '0 minutes',
        drills: ['None (Complete Rest)']
      },
      exercises: [],
      cooldownProtocol: {
        duration: '0 minutes',
        drills: ['Rest, hydration, and nutritional recovery']
      },
      coachingNotes: 'Adaptation happens during recovery. Take full advantage of this rest day to prepare for the upcoming training block.'
    }
  ]
};

export const PRE_COMPETITION_PHASE_DATA: MicrocyclePhase = {
  id: 'pre-competition',
  phaseNumber: '02',
  title: 'Pre-Competition Phase',
  headline: 'TURN STRENGTH INTO POWER.',
  bannerPlaceholder: {
    filename: '/images/phases/pre-competition-banner.jpg',
    description: 'Dynamic athletic performance shot of player exploding into overhead smash with airborne vertical jump and high paddle speed.'
  },
  mainFunction:
    'Convert foundational physical fitness into explosive, reactive, and pickleball-specific performance.',
  trainingPriorities: [
    'Explosive rotational power & angular acceleration',
    'Plyometric stretch-shortening cycle (SSC) development',
    'Reactive court agility (<0.4s split-step decision speed)',
    'High-impulse lateral deceleration & direction change',
    'Sport-specific conditioning at 65–75% HRmax (intervals to 80%)',
    'Movement efficiency & high-velocity paddle mechanics'
  ],
  targetVolume: 'Moderate Volume, High Acceleration (3–4 sets, 6–10 explosive reps or 40s reactive intervals)',
  targetIntensity: 'High / Sport-Specific (RPE 7.5–8.5/10, 70–80% HRmax)',
  targetHeartRate: '70–80% HRmax (Conditioning for intense multi-shot rallies)',
  restRecoveryFocus: '60–90s rest intervals to allow complete phosphagen (ATP-PCr) replenishment between explosive bouts.',
  equipmentRequirements: [
    'Pickleball Paddle',
    'Court cones / agility markers',
    'Athletic court shoes with high lateral rigidity',
    'Stopwatch / interval timer'
  ],
  phaseRationale:
    'Pre-Competition shifts the stimulus from volume to rate of force development (RFD). While Preparation developed tissue capacity, Pre-Competition primes the nervous system for match realities: sudden split-step changes of direction, vertical smash explosions, and instantaneous lateral deceleration at the Kitchen line.',
  progressionFromPrevious:
    'Progresses each of the 6 original Milestone 2 exercises into dynamic, plyometric, or reactive variations. Repetitions decrease from 12–15 to 6–10 while movement velocity and ground reaction forces double.',
  exercises: PRE_COMPETITION_EXERCISES,
  days: [
    {
      dayName: 'Monday',
      shortDay: 'MON',
      title: 'Explosive Rotational Power & SSC Launch',
      focus: 'High-Velocity Forehand Drives & Kinetic Whip Acceleration',
      status: 'Training',
      intensity: 'High',
      durationMinutes: 35,
      shortDescription: 'Maximal rotational acceleration drills transferring ground reaction forces through the torso.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Dynamic multi-joint warm-up with torso swings (2 mins)',
          'Rotational medicine ball or bodyweight shadow uncoiling (2 mins)',
          'Progressive sprint-and-brake decelerations (1 min)'
        ]
      },
      exercises: [
        PRE_COMPETITION_EXERCISES[0], // Explosive Rotational Windmill Drive with Dynamic Pivot
        PRE_COMPETITION_EXERCISES[1], // Plyometric Lateral Bound with Deceleration Stick
        PRE_COMPETITION_EXERCISES[3]  // Prone Cobra with Tempo Flutter
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Lying trunk twist stretch for obliques and lumbar spine (2 mins)',
          'Standing cross-body posterior capsule stretch (2 mins)',
          'Deep nasal diaphragmatic breathing (1 min)'
        ]
      },
      coachingNotes: 'Perform every repetition with 100% intent of speed. If rotational velocity drops noticeably, increase rest interval.'
    },
    {
      dayName: 'Tuesday',
      shortDay: 'TUE',
      title: 'Reactive Agility & Rapid Split-Step Acceleration',
      focus: 'Cognitive-Motor Reaction Time & Kitchen Line Defense',
      status: 'Training',
      intensity: 'High',
      durationMinutes: 35,
      shortDescription: 'Reacting to unpredictable cues, dropping into split-step under 0.4s, and exploding laterally.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Light rope-skipping or ankle hops (2 mins)',
          'Carioca and lateral high knees (1.5 mins)',
          'Split-step synchronization hops on visual cues (1.5 mins)'
        ]
      },
      exercises: [
        PRE_COMPETITION_EXERCISES[4], // Reactive Lateral Shuttle Shuffle with Directional Cue
        PRE_COMPETITION_EXERCISES[5], // Dynamic-to-Isometric Drop Squat Hold with Reactive Bounce
        PRE_COMPETITION_EXERCISES[1]  // Lateral Bound with Stick
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Standing wall gastrocnemius & Achilles stretch (2.5 mins)',
          'Seated figure-4 piriformis and glute stretch (2.5 mins)'
        ]
      },
      coachingNotes: 'Focus on staying silent on split-step landings. Low impact sound indicates superior eccentric force absorption.'
    },
    {
      dayName: 'Wednesday',
      shortDay: 'WED',
      title: 'Neuromuscular Regeneration & Myofascial Care',
      focus: 'Central Nervous System Decompression & Shoulder Reset',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 25,
      shortDescription: 'Gentle mobility and restorative flow to release high eccentric muscle tension from Days 1 and 2.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: ['Gentle cat-cow, thoracic thread-the-needle, wrist flexor stretches']
      },
      exercises: [
        PRE_COMPETITION_EXERCISES[3] // Prone Cobra with light hold (scapular reset)
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Supine deep hamstring stretch with band', 'Full-body relaxation']
      },
      coachingNotes: 'Neuromuscular speed training taxes the CNS heavily. Today ensures the nervous system recovers its peak firing rate.'
    },
    {
      dayName: 'Thursday',
      shortDay: 'THU',
      title: 'Vertical Impulse & Overhead Smash Velocity',
      focus: 'Stretch-Shortening Cycle Overhead Slams & Posterior Braking',
      status: 'Training',
      intensity: 'High',
      durationMinutes: 35,
      shortDescription: 'Combining explosive vertical push-off, trophy position coil, and high-velocity downward snap.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Rotator cuff band warm-up / internal-external rotations (2 mins)',
          'Overhead lat stretches and thoracic extension rolls (1.5 mins)',
          'Submaximal vertical jump prep (1.5 mins)'
        ]
      },
      exercises: [
        PRE_COMPETITION_EXERCISES[2], // Dynamic Plyometric Overhead Jump Slams
        PRE_COMPETITION_EXERCISES[3], // Prone Cobra Shoulder Retractions with Tempo Flutter
        PRE_COMPETITION_EXERCISES[0]  // Explosive Rotational Windmill Drive
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Doorway pectoralis and anterior deltoid stretch (2 mins)',
          'Sleeper stretch for posterior shoulder capsule (2 mins)',
          'Diaphragmatic decompression (1 min)'
        ]
      },
      coachingNotes: 'Land softly on the lead foot to disperse vertical impulse through the ankle, knee, and hip joints symmetrically.'
    },
    {
      dayName: 'Friday',
      shortDay: 'FRI',
      title: 'Court Priming & Speed Coordination',
      focus: 'Submaximal Agility Flow & Tactile Paddle Precision',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 25,
      shortDescription: 'Light shadow-play across the court to reinforce movement economy without generating metabolic fatigue.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: ['Light court footwork', 'Side-to-side shuffle', 'Gentle shadow dinks']
      },
      exercises: [
        PRE_COMPETITION_EXERCISES[4] // Reactive Shuttle (performed at 60% cruise speed for spatial awareness)
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Calf stretching', 'Hydration monitoring']
      },
      coachingNotes: 'Focus on fluid footwork transitions from baseline drives to transition zone drops and kitchen dinking.'
    },
    {
      dayName: 'Saturday',
      shortDay: 'SAT',
      title: 'Simulated Match Play Conditioning (Peak Benchmark)',
      focus: 'Target Fitness Goal: Continuous Court Agility (65–75% HRmax)',
      status: 'Training',
      intensity: 'Moderate-High',
      durationMinutes: 40,
      shortDescription: 'Direct execution of the 8-week fitness objective: 40 minutes of continuous paddle-based athletic intervals.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Dynamic multi-joint pickleball warm-up (3 mins)',
          'Short rally shadow drill with progressive speed (2 mins)'
        ]
      },
      exercises: [
        PRE_COMPETITION_EXERCISES[0], // Explosive Rotational Windmill
        PRE_COMPETITION_EXERCISES[1], // Lateral Bound Stick
        PRE_COMPETITION_EXERCISES[2], // Overhead Jump Slams
        PRE_COMPETITION_EXERCISES[4], // Reactive Lateral Shuttle
        PRE_COMPETITION_EXERCISES[5]  // Drop Squat Reactive Bounce
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Comprehensive lower-body static cool-down (3 mins)',
          'Post-exercise heart rate logging (measuring endurance progression from 17 mins toward 45 mins) (2 mins)'
        ]
      },
      coachingNotes: 'This session tests the core Milestone 2 fitness goal. Maintain 65–75% of HRmax throughout the 40-minute window.'
    },
    {
      dayName: 'Sunday',
      shortDay: 'SUN',
      title: 'Complete Rest & Neural Regeneration',
      focus: 'Full Systemic Recovery & Glycogen Replenishment',
      status: 'Complete Rest',
      intensity: 'Low',
      durationMinutes: 0,
      shortDescription: 'Complete physiological rest. Muscle protein synthesis, sleep, and mental visualization.',
      warmupProtocol: {
        duration: '0 minutes',
        drills: ['None']
      },
      exercises: [],
      cooldownProtocol: {
        duration: '0 minutes',
        drills: ['Rest and recovery']
      },
      coachingNotes: 'Allow full restoration of energy stores to prevent overreaching before entering the Competition microcycle.'
    }
  ]
};

export const COMPETITION_PHASE_DATA: MicrocyclePhase = {
  id: 'competition',
  phaseNumber: '03',
  title: 'Competition Phase',
  headline: 'PERFORM WHEN IT MATTERS.',
  bannerPlaceholder: {
    filename: '/images/phases/competition-banner.jpg',
    description: 'Crisp court view showing intense kitchen dink exchange during tournament play, focused athletic gaze, clean blue court surface.'
  },
  mainFunction:
    'Maintain the physical qualities developed during the previous phases while prioritizing match readiness, recovery, and fatigue management.',
  trainingPriorities: [
    'Strength & explosive power maintenance with minimal volume',
    'Peak match readiness & crisp neuromuscular coordination',
    'Shorter, high-quality training sessions (20–25 minutes)',
    'Sport-specific movement precision & zero unnecessary fatigue',
    'Active recovery protocols & joint preservation',
    'Fatigue management between tournament rounds'
  ],
  targetVolume: 'Low / Tapered Volume (2 sets, 6–8 reps, 20s priming bursts)',
  targetIntensity: 'Moderate-High execution speed with low fatigue accumulation (RPE 6–7/10, quick bursts at match speed)',
  targetHeartRate: '60–70% HRmax during training; preserve 75–85% capacity for match day',
  restRecoveryFocus: 'Extended rest between sets (60s+); sessions are designed to stimulate, not annihilate. Post-match recovery prioritized.',
  equipmentRequirements: [
    'Pickleball Match Paddle',
    'Competition court footwear',
    'Tournament match balls',
    'Electrolyte hydration pack'
  ],
  phaseRationale:
    'The Competition microcycle is built around the taper concept from Baechle & Earle (2008). Physical fitness has already been forged in Phases 01 and 02; additional heavy fatigue now would impair reaction speed (<0.4s) and decrease fine paddle touch on critical dinks. Volume is reduced by 40–50% while movement quality remains pristine.',
  progressionFromPrevious:
    'Workouts are shortened from 35–40 minutes down to 20–25 minutes. Heavy eccentric loads are replaced with neural priming drop-hops, clean shadow drives, and shoulder activation to ensure zero lingering soreness on tournament day.',
  exercises: COMPETITION_EXERCISES,
  days: [
    {
      dayName: 'Monday',
      shortDay: 'MON',
      title: 'Post-Match Active Flush & Tissue Mobility',
      focus: 'Lactate Clearance & Joint Decompression',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 20,
      shortDescription: 'Gentle mobility routine designed to flush post-tournament stiffness without stressing joints.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: ['Gentle walking and arm swings', 'Deep diaphragmatic belly breathing']
      },
      exercises: [
        COMPETITION_EXERCISES[2] // Dink Shot Precision & Split-Step Stance (unloaded mobility)
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Gentle lower body passive stretching', 'Hydration and contrast shower']
      },
      coachingNotes: 'Keep movement effortless. Today is about promoting blood flow to speed up tissue regeneration.'
    },
    {
      dayName: 'Tuesday',
      shortDay: 'TUE',
      title: 'Neuromuscular Priming & Rotational Sharpness',
      focus: 'Short Burst Power Maintenance (Zero Soreness)',
      status: 'Training',
      intensity: 'Moderate',
      durationMinutes: 25,
      shortDescription: 'High-quality rotational shadow drives and split-step priming to keep motor pathways sharp.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Dynamic joint mobilization (2 mins)',
          'Paddle shadow footwork in the kitchen (2 mins)',
          'Submaximal split-step drops (1 min)'
        ]
      },
      exercises: [
        COMPETITION_EXERCISES[0], // Forehand Drive Maintenance & Kinetic Sequencing
        COMPETITION_EXERCISES[2]  // Dink Shot Precision & Split-Step Stance
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Hamstring and chest stretches (3 mins)', 'Quiet breathing (2 mins)']
      },
      coachingNotes: 'Perform only 2 crisp sets. Stop immediately once the movement feels sharp; do not chase exhaustion.'
    },
    {
      dayName: 'Wednesday',
      shortDay: 'WED',
      title: 'Tactical Footwork & Dinking Rhythm',
      focus: 'Kitchen Line Economy & Low Center-of-Gravity Maintenance',
      status: 'Training',
      intensity: 'Moderate',
      durationMinutes: 25,
      shortDescription: 'Fine-tuning low-crouch stability and soft paddle touch with short isometric hold resets.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: ['Lateral side shuffles (2 mins)', 'Calf and ankle prep (1.5 mins)', 'Shadow soft dinks (1.5 mins)']
      },
      exercises: [
        COMPETITION_EXERCISES[2], // Dink Shot Precision & Split-Step Stance
        COMPETITION_EXERCISES[0]  // Forehand Drive Maintenance & Kinetic Sequencing
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Adductor butterfly stretch (2.5 mins)', 'Quadriceps wall stretch (2.5 mins)']
      },
      coachingNotes: 'Feel the balance in the feet. Reinforce the concept of keeping the center of gravity squarely over the base of support.'
    },
    {
      dayName: 'Thursday',
      shortDay: 'THU',
      title: 'Power Maintenance & Overhead Timing',
      focus: 'Submaximal Overhead Timing & Deceleration Control',
      status: 'Training',
      intensity: 'Moderate',
      durationMinutes: 20,
      shortDescription: 'Short 20-minute maintenance session to maintain vertical impulse and overhead deceleration control.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Rotator cuff external rotation drills (2 mins)',
          'Thoracic extension against wall (1.5 mins)',
          'Light vertical hops (1.5 mins)'
        ]
      },
      exercises: [
        COMPETITION_EXERCISES[1], // Overhead Smash Timing & Deceleration Posture
        COMPETITION_EXERCISES[2]  // Dink Shot Precision & Split-Step Stance
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Posterior shoulder sleeper stretch (2.5 mins)', 'Full spine relaxing child\'s pose (2.5 mins)']
      },
      coachingNotes: 'This session keeps the shoulder rotators active without inducing microtrauma 48 hours before match play.'
    },
    {
      dayName: 'Friday',
      shortDay: 'FRI',
      title: 'Pre-Match Activation & Taper Priming',
      focus: 'Pre-Competition Neural Activation & Mental Readiness',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 15,
      shortDescription: 'Ultra-short 15-minute activation session designed to wake up the nervous system before Saturday\'s match.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: ['Brisk court walking and dynamic arm swings (3 mins)', 'Light split-step hops (2 mins)']
      },
      exercises: [
        COMPETITION_EXERCISES[2] // Dink Shot Precision & Split-Step Stance
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: ['Hydration check', 'Equipment check (paddle grip, shoes)', 'Mental game plan visualization']
      },
      coachingNotes: 'Leave the court feeling springy, fast, and completely energized. Rest early tonight.'
    },
    {
      dayName: 'Saturday',
      shortDay: 'SAT',
      title: 'MATCH DAY: TOURNAMENT COMPETITION',
      focus: 'Peak Athletic Performance & Tactical Execution',
      status: 'Match Play',
      intensity: 'Peak / Match',
      durationMinutes: 60,
      shortDescription: 'Application of all 3 microcycles: rotational drives, explosive smashes, and relentless Kitchen dinking endurance.',
      warmupProtocol: {
        duration: '10 minutes',
        drills: [
          'Dynamic multi-joint warm-up on court (3 mins)',
          'Progressive dinking rally with partner (3 mins)',
          'Baseline drive and third-shot drop warm-up (2 mins)',
          'Overhead smash & defensive lob drill (2 mins)'
        ]
      },
      exercises: [
        COMPETITION_EXERCISES[0], // Forehand Drive Maintenance & Kinetic Sequencing
        COMPETITION_EXERCISES[1], // Overhead Smash Timing & Deceleration Posture
        COMPETITION_EXERCISES[2]  // Dink Shot Precision & Split-Step Stance
      ],
      cooldownProtocol: {
        duration: '10 minutes',
        drills: [
          'Post-match light court walk (3 mins)',
          'Static stretching for calves, quads, and shoulders (5 mins)',
          'Electrolyte hydration and post-match recovery log (2 mins)'
        ]
      },
      coachingNotes: 'Trust the training. Power comes from the ground reaction forces; stay low at the Kitchen, and let the kinetic chain do the work!'
    },
    {
      dayName: 'Sunday',
      shortDay: 'SUN',
      title: 'Complete Rest & Post-Tournament Recovery',
      focus: 'Musculoskeletal Restoration & Program Reflection',
      status: 'Complete Rest',
      intensity: 'Low',
      durationMinutes: 0,
      shortDescription: 'Zero training load. Sleep, anti-inflammatory nutrition, and reflection on tournament performance.',
      warmupProtocol: {
        duration: '0 minutes',
        drills: ['None']
      },
      exercises: [],
      cooldownProtocol: {
        duration: '0 minutes',
        drills: ['Rest and recovery']
      },
      coachingNotes: 'Celebrate your performance. Reflect on physical markers (resting heart rate <73 bpm, low-crouch endurance) achieved throughout the program.'
    }
  ]
};

export const ALL_PHASES: Record<'preparation' | 'pre-competition' | 'competition', MicrocyclePhase> = {
  preparation: PREPARATION_PHASE_DATA,
  'pre-competition': PRE_COMPETITION_PHASE_DATA,
  competition: COMPETITION_PHASE_DATA
};
