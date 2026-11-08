/**
 * Complete Microcycle Training Programs for 3 Phases
 * Phase 01: Preparation ("BUILD THE FOUNDATION")
 * Phase 02: Pre-Competition ("TURN STRENGTH INTO POWER")
 * Phase 03: Competition ("PERFORM WHEN IT MATTERS")
 * Student: Alexies Jean Ballesteros | Section: H2101 | MO-PE014 PE4
 */

import { MicrocyclePhase, ExerciseItem } from '../types/training';
import { MILESTONE_2_EXERCISES } from './athleteData';

// --- PHASE 01: PREPARATION EXERCISES (Foundational Volume & Mechanics) ---
export const PREPARATION_EXERCISES: ExerciseItem[] = [
  ...MILESTONE_2_EXERCISES.map((ex) => ({
    ...ex,
    phase: 'preparation' as const,
    progressionNote: 'Phase 01 baseline: High focus on movement quality, higher volume (12–15 reps / 35–45s), moderate intensity (60–70% HRmax) to build tissue tolerance and motor sequencing.'
  }))
];

// --- PHASE 02: PRE-COMPETITION EXERCISES (Power, Velocity & Reactive Agility) ---
export const PRE_COMPETITION_EXERCISES: ExerciseItem[] = [
  {
    id: 'pc-rotational-windmill-elastic',
    name: 'Explosive Rotational Windmill Drive with Dynamic Pivot',
    originalName: 'Bodyweight Rotational Windmill Drive',
    movementTarget: 'Forehand Drive',
    phase: 'pre-competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/explosive-rotational-windmill.mp4',
      aspectRatio: '16:9',
      description: 'Progressed drill showing rapid hip-torso uncoiling, high-velocity arm sweep, and aggressive trail-foot pivot simulating match-speed forehands.'
    },
    movementDescription:
      'High-velocity progression of the windmill drive designed to convert foundational rotational mobility into explosive kinetic chain power at game tempo.',
    stepByStepInstructions: [
      'Assume a dynamic, slightly lowered athletic ready stance with active ball-of-foot engagement.',
      'Initiate an aggressive back-foot drive and hip uncoiling, whipping arms low-to-high with maximal concentric speed.',
      'Emphasize a rapid whip of the torso while maintaining a rigid core at the simulated point of impact.',
      'Perform 8–10 explosive reps per side at near-maximal effort, allowing 45 seconds of recovery between sides.'
    ],
    equipmentNeeded: 'None (Bodyweight / Court footwear)',
    primaryMuscles: ['Internal & External Obliques', 'Rectus Abdominis', 'Gluteus Medius', 'Anterior Deltoids'],
    secondaryMuscles: ['Transverse Abdominis', 'Lead Quadriceps', 'Pectoralis Major'],
    setsAndReps: '3–4 sets × 8–10 explosive reps per side',
    trainingIntensity: 'High / Power-velocity focus (RPE 8/10, 75–80% HRmax)',
    restInterval: '60–75 seconds between sets',
    trainingBenefits: 'Dramatically increases angular velocity of the paddle and explosive transverse-plane rotational power for offensive drives.',
    biomechanicalRationale:
      'Maximizes the rate of force development (RFD) across the pelvic-lumbar-thoracic kinetic chain, decreasing ground-to-paddle energy dissipation.',
    progressionNote: 'Progressed from 12–15 moderate reps to 8–10 maximal acceleration reps with shortened contact transition.'
  },
  {
    id: 'pc-lateral-bound-rotation',
    name: 'Plyometric Lateral Bound with Deceleration Stick & Rotational Reach',
    originalName: 'Bodyweight Lateral Lunge with Rotational Reach',
    movementTarget: 'Forehand Drive',
    phase: 'pre-competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/plyometric-lateral-bound-rotation.mp4',
      aspectRatio: '16:9',
      description: 'Explosive lateral bound off left leg, landing and sticking on right single leg into deep rotational reach, followed by explosive pushback.'
    },
    movementDescription:
      'Plyometric progression replacing the static lateral step with a dynamic lateral bound, absorbing 2.5× bodyweight ground reaction force before torso loading.',
    stepByStepInstructions: [
      'Begin on one leg in a loaded athletic hinge.',
      'Explosively bound laterally across 4–5 feet, landing softly onto the outside leg while absorbing force through the hip and knee.',
      'Instantly execute a low rotational reach across the lunging knee, simulating an extreme wide forehand retrieval.',
      'Pause for a crisp 1-second "stick" in dynamic balance, then bound explosively back to starting position; repeat 6–8 bounds per side.'
    ],
    equipmentNeeded: 'None (Court space)',
    primaryMuscles: ['Gluteus Medius & Maximus', 'Quadriceps', 'Hip Adductors', 'Contralateral Obliques'],
    secondaryMuscles: ['Hamstrings', 'Ankle Stabilizers / Peroneals'],
    setsAndReps: '3 sets × 6–8 bounds per side',
    trainingIntensity: 'High (RPE 8/10)',
    restInterval: '75 seconds between sets',
    trainingBenefits: 'Develops supreme frontal-plane eccentric deceleration and single-leg stability for retrieving deep wide corner shots.',
    biomechanicalRationale:
      'Trains the stretch-shortening cycle in the abductor-adductor complex and enhances neuromuscular control to prevent knee valgus and ankle rollover.',
    progressionNote: 'Progressed from stationary lateral lunge to high-impulse lateral plyometric bound with eccentric deceleration stick.'
  },
  {
    id: 'pc-overhead-jump-slams',
    name: 'Dynamic Plyometric Overhead Jump Slams',
    originalName: 'Plyometric Overhead Bodyweight Slams',
    movementTarget: 'The Overhead Smash',
    phase: 'pre-competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/dynamic-overhead-jump-slams.mp4',
      aspectRatio: '16:9',
      description: 'Full vertical jump off two feet into trophy position pre-stretch, explosive overhead arm snap at apex, and soft landing on balls of feet.'
    },
    movementDescription:
      'Sport-specific jumping smash progression integrating vertical ground impulse, aerial trunk coiling, and maximal downward whip.',
    stepByStepInstructions: [
      'Begin in a loaded semi-squat; aggressively swing arms back and jump vertically with maximal upward impulse.',
      'At peak jump height, cock dominant arm into the full trophy position with chest open in thoracic extension.',
      'Snap arms and torso downward with maximal velocity past hips as feet begin descent.',
      'Land softly on the balls of both feet, absorbing impact through knees and hips, and immediately reset into ready stance; 6–8 reps per set.'
    ],
    equipmentNeeded: 'None (High ceiling / Outdoor court)',
    primaryMuscles: ['Latissimus Dorsi', 'Pectoralis Major', 'Rectus Abdominis', 'Triceps Brachii', 'Calves'],
    secondaryMuscles: ['Rotator cuff', 'Deltoids', 'Quadriceps'],
    setsAndReps: '3–4 sets × 6–8 maximal jump reps',
    trainingIntensity: 'Very High / Peak Power (RPE 8.5/10, ATP-PCr dominance)',
    restInterval: '90 seconds between sets (full ATP resynthesis)',
    trainingBenefits: 'Maximizes vertical launch power, airborne timing, and high-velocity downward stroke power for match-winning smashes.',
    biomechanicalRationale:
      'Optimizes vertical ground reaction impulse (GRF) and pairs it with explosive abdominal crunch mechanics to maximize overhead strike velocity.',
    progressionNote: 'Progressed from ground-based staggered hops to maximal vertical jump smashes with complete arm-speed acceleration.'
  },
  {
    id: 'pc-prone-cobra-flutter',
    name: 'Prone Cobra Shoulder Retractions with Tempo Flutter',
    originalName: 'Prone Cobra Shoulder Retractions',
    movementTarget: 'The Overhead Smash',
    phase: 'pre-competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/prone-cobra-tempo-flutter.mp4',
      aspectRatio: '16:9',
      description: 'Prone position with chest elevated, thumbs to ceiling, performing rhythmic 10-second pulses/flutters at peak scapular retraction.'
    },
    movementDescription:
      'Dynamic endurance progression of the prone cobra adding rapid micro-contractions to train the posterior cuff under neuromuscular fatigue.',
    stepByStepInstructions: [
      'Lie face down on mat, legs extended, glutes lightly engaged.',
      'Retract scapulae and elevate chest, rotating thumbs externally toward ceiling.',
      'Hold the peak retraction while executing 10 seconds of rhythmic, controlled 2-inch pulses/flutters.',
      'Lower for 2 seconds and repeat for 6–8 continuous cycles per set.'
    ],
    equipmentNeeded: 'Exercise mat',
    primaryMuscles: ['Infraspinatus', 'Teres Minor', 'Rhomboids', 'Middle & Lower Trapezius'],
    secondaryMuscles: ['Erector Spinae', 'Posterior Deltoids'],
    setsAndReps: '3 sets × 6–8 cycles (each cycle: 10s flutter + 2s reset)',
    trainingIntensity: 'Moderate-High muscular burn (RPE 7.5/10)',
    restInterval: '60 seconds between sets',
    trainingBenefits: 'Builds robust endurance in external rotators to maintain humeral head stability across 3-set competitive matches.',
    biomechanicalRationale:
      'Enhances co-contraction of the glenohumeral stabilizers during repetitive deceleration of high-speed overhead swings.',
    progressionNote: 'Progressed from static 3-second holds to prolonged rhythmic tempo flutter endurance under muscular tension.'
  },
  {
    id: 'pc-reactive-shuttle-cue',
    name: 'Reactive Lateral Shuttle Shuffle with Directional Split-Step Cue',
    originalName: 'Low-Crouch Lateral Shuttle Shuffle',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'pre-competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/reactive-lateral-shuttle-cue.mp4',
      aspectRatio: '16:9',
      description: 'Athlete in low Kitchen stance reacting to quick visual or audio directional signals, dropping into split-step and accelerating laterally.'
    },
    movementDescription:
      'Sport-specific cognitive-motor agility progression requiring rapid split-step synchronization and explosive direction changes under <0.4s reaction demands.',
    stepByStepInstructions: [
      'Establish a low-crouch ready position at the center mark (Kitchen line simulation).',
      'On external cue (or visual indicator), immediately perform a low-amplitude split-step hop landing wide.',
      'Instantly drive off the plant foot and shuffle 4 steps in the cued direction (left or right) keeping hips level.',
      'Execute a shadow dink push with zero wrist wobble, brake hard, and shuffle back to center; continue for 40 seconds.'
    ],
    equipmentNeeded: 'Court markers / Audio or visual cue app / Partner',
    primaryMuscles: ['Quadriceps', 'Gluteus Medius', 'Soleus', 'Gastrocnemius', 'Hip Abductors'],
    secondaryMuscles: ['Peroneals', 'Deep core rotators'],
    setsAndReps: '4 sets × 40 seconds continuous work',
    trainingIntensity: 'High Agility / Anaerobic Lactic (RPE 8/10, 70–80% HRmax)',
    restInterval: '60 seconds between sets',
    trainingBenefits: 'Sharpen reactive court agility, reduces cognitive reaction lag, and trains the quadriceps to resist burning under fast Kitchen battles.',
    biomechanicalRationale:
      'Conditions the plantarflexors and gluteal medius for rapid lateral ground reaction force generation while maintaining center of gravity stability.',
    progressionNote: 'Progressed from fixed-pattern linear shuffling to open-loop reactive split-step changes of direction.'
  },
  {
    id: 'pc-drop-squat-bounce',
    name: 'Dynamic-to-Isometric Drop Squat Hold with Reactive Split-Step Bounce',
    originalName: 'Isometric Squat Hold',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'pre-competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/drop-squat-reactive-bounce.mp4',
      aspectRatio: '16:9',
      description: 'Quick drop from standing into a 70-degree squat catch, 4-second hold, followed by an immediate reactive split-step hop and reset.'
    },
    movementDescription:
      'Combines rapid eccentric drop-absorption with static isometric strength and an explosive reactive rebound, mimicking net defense.',
    stepByStepInstructions: [
      'Stand upright on toes; suddenly drop hips into a 70° knee flexion squat, catching momentum instantly.',
      'Lock into a rock-solid isometric crouch for 4 seconds without any knee drift.',
      'On count 4, immediately explode into a light, reactive split-step hop, landing light on the balls of the feet.',
      'Repeat consecutively for 8 continuous reps per set.'
    ],
    equipmentNeeded: 'None (Bodyweight)',
    primaryMuscles: ['Quadriceps', 'Gluteus Complex', 'Calf Complex (Soleus/Gastroc)', 'Core Stabilizers'],
    secondaryMuscles: ['Tibialis Anterior', 'Hip Rotators'],
    setsAndReps: '3–4 sets × 8 reps (4s isometric catch + reactive bounce)',
    trainingIntensity: 'Moderate-High (RPE 7.5/10)',
    restInterval: '60 seconds between sets',
    trainingBenefits: 'Trains fast-twitch rate of force development and reactive stiffness needed to absorb opponent body-shots at the Kitchen.',
    biomechanicalRationale:
      'Improves tendon stiffness and pre-activation of the quadriceps and plantarflexors before foot strike, shortening reactive ground contact times.',
    progressionNote: 'Progressed from passive isometric holds to high-speed drop deceleration and immediate reactive split-step recoil.'
  }
];

// --- PHASE 03: COMPETITION EXERCISES (Maintenance, Neuromuscular Sharpness & Fatigue Management) ---
export const COMPETITION_EXERCISES: ExerciseItem[] = [
  {
    id: 'comp-rotational-velocity-taper',
    name: 'Speed-Optimized Rotational Shadow Drives',
    originalName: 'Bodyweight Rotational Windmill Drive',
    movementTarget: 'Forehand Drive',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/competition-rotational-shadow-drives.mp4',
      aspectRatio: '16:9',
      description: 'Crisp, low-volume forehand shadow swings focusing on pure kinetic chain timing, perfect balance, and zero residual fatigue.'
    },
    movementDescription:
      'High-quality, low-volume rotational activation drill maintaining neuromuscular motor sequencing without causing peripheral muscle fatigue.',
    stepByStepInstructions: [
      'Take ready stance at the court baseline or open area with paddle in hand (or shadow grip).',
      'Execute crisp, rhythmic forehand drives focusing on effortless kinetic sequencing: leg drive → hip turn → smooth follow-through.',
      'Perform only 6–8 crisp repetitions per side at high technical precision.',
      'Prioritize fluidity and elastic rebound over muscular strain.'
    ],
    equipmentNeeded: 'Paddle (or bodyweight shadow)',
    primaryMuscles: ['Core Obliques', 'Anterior Deltoids', 'Gluteus Medius'],
    secondaryMuscles: ['Forearm flexors', 'Rectus Abdominis'],
    setsAndReps: '2 sets × 6–8 reps per side (crisp & pristine)',
    trainingIntensity: 'Low-to-Moderate (RPE 5–6/10, 60–65% HRmax)',
    restInterval: '60 seconds between sets (full recovery)',
    trainingBenefits: 'Keeps neural pathways primed for match play while preserving energy stores for tournament weekends.',
    biomechanicalRationale:
      'Maintains motor pattern fidelity and timing of the 3rd class lever system without inducing muscle damage or soreness.',
    progressionNote: 'Volume reduced by 50% from preparation; intensity tuned for clean neural sharpness and zero post-session soreness.'
  },
  {
    id: 'comp-smash-priming',
    name: 'Trophy Position Timing & Controlled Overhead Deceleration',
    originalName: 'Plyometric Overhead Bodyweight Slams',
    movementTarget: 'The Overhead Smash',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/competition-trophy-timing.mp4',
      aspectRatio: '16:9',
      description: 'Submaximal jump to trophy position, clean rhythmic overhead swing through contact plane, soft balanced landing.'
    },
    movementDescription:
      'Technical timing drill sharpening the overhead smash mechanics and soft-landing deceleration with minimal joint stress.',
    stepByStepInstructions: [
      'Take a light backward tracking step and spring into a comfortable, submaximal vertical hop.',
      'Align paddle overhead in optimal strike zone (160°–180° shoulder elevation).',
      'Execute a smooth, fluid overhead stroke snapping cleanly downward through the ball line.',
      'Decelerate softly onto the lead foot with posture upright and balanced; 6 reps per set.'
    ],
    equipmentNeeded: 'Pickleball paddle',
    primaryMuscles: ['Latissimus Dorsi', 'Pectoralis Major', 'Rotator Cuff', 'Triceps'],
    secondaryMuscles: ['Anterior Core', 'Calf complex'],
    setsAndReps: '2 sets × 6 reps',
    trainingIntensity: 'Moderate technical intent (RPE 6/10)',
    restInterval: '60 seconds between sets',
    trainingBenefits: 'Fine-tunes smash timing and overhead contact consistency without fatiguing shoulder rotators before tournament matches.',
    biomechanicalRationale:
      'Re-establishes optimal scapulohumeral rhythm and reinforces lead-leg deceleration mechanics.',
    progressionNote: 'Tapered from high-force jump slams to refined technical timing and eccentric landing stability.'
  },
  {
    id: 'comp-rotator-activation',
    name: 'Scapular & Rotator Activation Flutters',
    originalName: 'Prone Cobra Shoulder Retractions',
    movementTarget: 'The Overhead Smash',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/competition-rotator-activation.mp4',
      aspectRatio: '16:9',
      description: 'Standing or light prone band activation with micro-contractions to warm and protect the infraspinatus and teres minor.'
    },
    movementDescription:
      'Non-fatiguing rotator cuff neural activation drill to ensure glenohumeral stability prior to court warm-up.',
    stepByStepInstructions: [
      'Position in prone or standing hinge with spine neutral and elbows at 90° or extended.',
      'Retract scapulae lightly and rotate thumbs backward to activate external rotators.',
      'Perform 10 gentle micro-flutters, hold for 2 seconds, and release smoothly.',
      'Repeat for 6 controlled repetitions.'
    ],
    equipmentNeeded: 'Mat or light resistance mini-band (optional)',
    primaryMuscles: ['Infraspinatus', 'Teres Minor', 'Rhomboids', 'Mid Trapezius'],
    secondaryMuscles: ['Posterior Deltoid'],
    setsAndReps: '2 sets × 6 reps with 2s hold',
    trainingIntensity: 'Low / Activation focus (RPE 4–5/10)',
    restInterval: '45 seconds',
    trainingBenefits: 'Pre-activates the shoulder cuff to prevent impingement during tournament matches while inducing zero fatigue.',
    biomechanicalRationale:
      'Ensures centering of the humeral head in the glenoid fossa prior to high-speed match impacts.',
    progressionNote: 'Gentle activation protocol strictly designed for joint lubrication and neural readiness.'
  },
  {
    id: 'comp-split-step-priming',
    name: 'Rapid Split-Step Priming Drop-Hops',
    originalName: 'Low-Crouch Lateral Shuttle Shuffle',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/competition-split-step-priming.mp4',
      aspectRatio: '16:9',
      description: 'Quick 15-second intervals of light rhythmic split-steps with instantaneous 2-step lateral bursts and instant recovery.'
    },
    movementDescription:
      'Neuromuscular priming drill stimulating fast-twitch motor units in calves and quadriceps for immediate match readiness.',
    stepByStepInstructions: [
      'Bounce lightly on balls of feet at the Kitchen line.',
      'Drop synchronously into a crisp split-step landing wide with knees bent (~70°).',
      'Instantly push 2 steps laterally, pause 1 count in balanced dink stance, and spring back to center.',
      'Execute for short 15–20 second bursts at snappy speed with full recovery between sets.'
    ],
    equipmentNeeded: 'Court or flat surface',
    primaryMuscles: ['Gastrocnemius', 'Soleus', 'Quadriceps', 'Gluteus Medius'],
    secondaryMuscles: ['Peroneals', 'Core stabilizers'],
    setsAndReps: '3 sets × 20 seconds (burst tempo)',
    trainingIntensity: 'Snappy Speed / Low Volume (RPE 6.5/10)',
    restInterval: '60 seconds full recovery',
    trainingBenefits: 'Primes fast-twitch reflex arcs and reactive court footwork without depleting glycogen stores.',
    biomechanicalRationale:
      'Maximizes stretch-reflex potentiation in the Achilles and patellar tendons for fast reaction off the mark.',
    progressionNote: 'Shortened duration from 45s endurance grinds to 20s explosive neuromuscular primes.'
  },
  {
    id: 'comp-isometric-crouch-refresh',
    name: 'Brief Isometric Kitchen Stance Hold',
    originalName: 'Isometric Squat Hold',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'competition',
    isMilestoneOriginal: false,
    mediaPlaceholder: {
      type: 'video',
      filename: '/images/videos/competition-kitchen-stance-hold.mp4',
      aspectRatio: '16:9',
      description: 'Short 4-second low-crouch hold with paddle in ready position, simulating dink battle positioning without lactic accumulation.'
    },
    movementDescription:
      'Tapered isometric hold to maintain quad motor unit firing patterns and court stance posture.',
    stepByStepInstructions: [
      'Lower into Kitchen low-crouch ready position with paddle extended forward.',
      'Hold the posture solidly for exactly 4 seconds, maintaining relaxed breathing and upright chest.',
      'Stand up smoothly, shake out legs for 5 seconds, and repeat for 4–5 short cycles.'
    ],
    equipmentNeeded: 'Paddle (optional)',
    primaryMuscles: ['Quadriceps', 'Gluteal complex', 'Calves'],
    secondaryMuscles: ['Core erectors'],
    setsAndReps: '2 sets × 4 cycles (4 seconds hold per cycle)',
    trainingIntensity: 'Low-Moderate (RPE 5/10)',
    restInterval: '45 seconds',
    trainingBenefits: 'Reinforces the neuromuscular feel of the Kitchen crouch without creating heavy leg fatigue.',
    biomechanicalRationale:
      'Maintains isometric rate coding of knee extensors without inducing metabolic fatigue before competition.',
    progressionNote: 'Reduced from 8–10 continuous cycles to 4 short cycles, focusing on postural precision.'
  }
];

// --- 7-DAY MICROCYCLE SCHEDULES FOR EACH PHASE ---

export const PREPARATION_PHASE_DATA: MicrocyclePhase = {
  id: 'preparation',
  phaseNumber: '01',
  title: 'Preparation Phase',
  headline: 'BUILD THE FOUNDATION.',
  bannerPlaceholder: {
    filename: '/images/phases/preparation/banner-preparation.jpg',
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
        PREPARATION_EXERCISES[0], // Bodyweight Rotational Windmill Drive
        PREPARATION_EXERCISES[1], // Bodyweight Lateral Lunge with Rotational Reach
        PREPARATION_EXERCISES[5]  // Isometric Squat Hold
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Standing quadriceps and hip flexor static stretch (2 mins)',
          'Child\'s pose with side reach for lats and obliques (2 mins)',
          'Diaphragmatic box breathing to restore resting HR (1 min)'
        ]
      },
      coachingNotes: 'Emphasize smooth weight transfer from back foot to lead foot. Do not muscle through with the arm alone; let the hips initiate the sweep.'
    },
    {
      dayName: 'Tuesday',
      shortDay: 'TUE',
      title: 'Shoulder Integrity & Lateral Kitchen Base',
      focus: 'Overhead Deceleration Decoupling & Dink Stance Stability',
      status: 'Training',
      intensity: 'Moderate',
      durationMinutes: 30,
      shortDescription: 'Strengthening the posterior rotator cuff and building low center-of-gravity quad stamina.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Shoulder dislocations with broomstick/band (1.5 mins)',
          'Inchworms with scapular push-ups (1.5 mins)',
          'Ankle circles and calf raises (2 mins)'
        ]
      },
      exercises: [
        PREPARATION_EXERCISES[3], // Prone Cobra Shoulder Retractions
        PREPARATION_EXERCISES[4], // Low-Crouch Lateral Shuttle Shuffle
        PREPARATION_EXERCISES[5]  // Isometric Squat Hold
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Cross-body shoulder stretch for posterior capsule (2 mins)',
          'Pigeon pose for gluteus medius and piriformis (2 mins)',
          'Deep seated forward fold (1 min)'
        ]
      },
      coachingNotes: 'Ensure thumbs point firmly toward the ceiling in the Prone Cobra to engage the infraspinatus and teres minor, not just upper traps.'
    },
    {
      dayName: 'Wednesday',
      shortDay: 'WED',
      title: 'Active Recovery & Mobility Restoration',
      focus: 'Joint Decompression & Soft Tissue Flush',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 25,
      shortDescription: 'Gentle mobility flow, thoracic spine opening, and hydration to promote tissue repair.',
      warmupProtocol: {
        duration: '3 minutes',
        drills: ['Gentle neck rolls and wrist circles', 'Cat-cow pelvic tilts', 'Ankle dorsiflexion rocks']
      },
      exercises: [
        PREPARATION_EXERCISES[3] // Prone Cobra (performed lightly for postural reset)
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
      title: 'Kitchen Agility & Aerobic Stamina',
      focus: 'Sustained Dink Exchange Conditioning (65–70% HRmax)',
      status: 'Training',
      intensity: 'Moderate-High',
      durationMinutes: 30,
      shortDescription: 'Prolonged low-crouch drills to increase fatigue threshold at the non-volley zone line.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Lateral band walks or wide side-steps (2 mins)',
          'Bodyweight squats with reach (1.5 mins)',
          'Shadow split-step hops with quiet landings (1.5 mins)'
        ]
      },
      exercises: [
        PREPARATION_EXERCISES[4], // Low-Crouch Lateral Shuttle Shuffle
        PREPARATION_EXERCISES[1], // Bodyweight Lateral Lunge with Rotational Reach
        PREPARATION_EXERCISES[5]  // Isometric Squat Hold
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Standing calf wall stretch (gastrocnemius & soleus) (2 mins)',
          'Butterfly groin stretch for adductors (2 mins)',
          'Supine hamstring stretch (1 min)'
        ]
      },
      coachingNotes: 'Keep the hips below shoulder height throughout the shuttle shuffle. Measure resting HR recovery at the end of session.'
    },
    {
      dayName: 'Friday',
      shortDay: 'FRI',
      title: 'Aerobic Flush & Dynamic Balance',
      focus: 'Low-Intensity Aerobic Conditioning & Postural Precision',
      status: 'Active Recovery',
      intensity: 'Low',
      durationMinutes: 25,
      shortDescription: 'Continuous light court movement and paddle coordination keeping heart rate in Zone 1-2.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: ['Light brisk walking/jogging', 'High knee hugs', 'Arm cross-body swings']
      },
      exercises: [
        PREPARATION_EXERCISES[0] // Rotational Windmill Drive (performed at 50% tempo for coordination)
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
      title: 'Full Kinetic Chain Integration Circuit',
      focus: 'Full-Court Movement Sequencing & Submaximal Power',
      status: 'Training',
      intensity: 'Moderate-High',
      durationMinutes: 30,
      shortDescription: 'Integrating all 3 primary movements: forehand drives, controlled overhead smashes, and net dinks.',
      warmupProtocol: {
        duration: '5 minutes',
        drills: [
          'Full-body multi-planar warm-up (jumping jacks, torso twists, lunges with reach) (3 mins)',
          'Paddle shadow swings covering baseline to kitchen (2 mins)'
        ]
      },
      exercises: [
        PREPARATION_EXERCISES[0], // Rotational Windmill
        PREPARATION_EXERCISES[2], // Plyometric Overhead Bodyweight Slams (controlled mechanics)
        PREPARATION_EXERCISES[3], // Prone Cobra Retractions
        PREPARATION_EXERCISES[4]  // Low-Crouch Lateral Shuttle Shuffle
      ],
      cooldownProtocol: {
        duration: '5 minutes',
        drills: [
          'Full-body static cool-down (quads, lats, chest, calves) (3.5 mins)',
          'Heart rate assessment (log recovery toward resting <73 bpm) (1.5 mins)'
        ]
      },
      coachingNotes: 'Saturday serves as the weekly fitness checkpoint. Notice how the kinetic chain naturally uncoils from ground to paddle.'
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
    filename: '/images/phases/pre-competition/banner-pre-competition.jpg',
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
    filename: '/images/phases/competition/banner-competition.jpg',
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
        COMPETITION_EXERCISES[2] // Scapular activation flutters (unloaded)
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
        COMPETITION_EXERCISES[0], // Speed-Optimized Rotational Shadow Drives
        COMPETITION_EXERCISES[3], // Rapid Split-Step Priming Drop-Hops
        COMPETITION_EXERCISES[2]  // Scapular & Rotator Activation
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
        COMPETITION_EXERCISES[4], // Brief Isometric Kitchen Stance Hold
        COMPETITION_EXERCISES[3], // Rapid Split-Step Priming Drop-Hops
        COMPETITION_EXERCISES[0]  // Speed-Optimized Shadow Drives
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
      title: 'Power Maintenance & Rotator Cuff Protection',
      focus: 'Submaximal Overhead Timing & Shoulder Lubrication',
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
        COMPETITION_EXERCISES[1], // Trophy Position Timing & Controlled Deceleration
        COMPETITION_EXERCISES[2]  // Scapular & Rotator Activation Flutters
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
        COMPETITION_EXERCISES[3] // Rapid Split-Step Priming Drop-Hops (2 quick sets of 15 seconds)
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
        COMPETITION_EXERCISES[0],
        COMPETITION_EXERCISES[1],
        COMPETITION_EXERCISES[3]
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
