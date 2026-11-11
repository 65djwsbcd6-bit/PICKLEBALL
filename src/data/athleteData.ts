/**
 * Athlete and Academic Data from Milestones 1 & 2
 * Student: Alexies Jean Ballesteros | Section: H2101
 * Course: MO-PE014 PE4 - Mapúa Malayan Digital College (MMDC) & Arizona State University
 */

import { ExerciseItem, PickleballMovement } from '../types/training';

export const ATHLETE_INFO = {
  studentName: 'Alexies Jean Ballesteros',
  section: 'H2101',
  courseCode: 'MO-PE014 PE4',
  institution: 'Mapúa Malayan Digital College (MMDC) in collaboration with Arizona State University',
  assessmentTitle: 'Terminal Assessment: Pickleball Microcycle Training Program',
  sport: 'Pickleball',
  
  // Specific fitness goal from Milestone 2
  fitnessGoal:
    'Increase continuous pickleball aerobic & court agility capacity from 20 to 45 minutes at a moderate-to-vigorous intensity (65–75% of Heart Rate Max) within 8 weeks, through 5 structured paddle-based workout sessions per week.',
  
  // Exact baseline & current metrics as documented in Milestone 2
  baselineMetrics: {
    restingHeartRate: '78 bpm',
    kitchenCrouchEndurance: '20 minutes before lower-body fatigue sets in',
    status: 'Baseline Assessment (Milestone 2 Start)'
  },
  
  currentMetrics: {
    restingHeartRate: '< 73 bpm',
    courtAgilityEndurance: '< 17 minutes continuous lateral shuffle & split-step endurance',
    status: 'Interim Evaluation (Milestone 2 Documented)'
  },
  
  targetMetrics: {
    restingHeartRate: '68–70 bpm',
    kitchenCrouchEndurance: '45 minutes continuous aerobic/court agility',
    trainingHeartRateZone: '65–75% HRmax (Moderate-to-Vigorous Intensity)',
    status: '8-Week Microcycle Program Goal'
  },
  
  // Training schedule as originally documented in Milestone 2
  originalProgram: {
    frequency: '4 sessions per week',
    targetFrequency: '5 structured paddle-based sessions per week (8-week goal)',
    workoutDays: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
    restDays: ['Wednesday', 'Friday', 'Sunday'],
    totalDuration: '30 minutes total',
    structure: '20 minutes dynamic bodyweight pickleball exercises with 5-minute warm-up and 5-minute cool-down'
  }
};

export interface BiomechanicalMovementDetail {
  id: string;
  name: PickleballMovement;
  shortTag: string;
  actionSummary: string;
  movementPhases: { phase: string; description: string }[];
  biomechanicalCore: string[];
  leverClassAndKinematics: {
    leverClassification: string;
    kinematicChain: string;
    keyKinematicMeasures: string[];
  };
  muscleActivation: {
    agonists: string[];
    synergistsAndStabilizers: string[];
  };
  physiologicalDemands: string[];
  relatedFitnessComponents: string[];
  mediaPlaceholder: {
    filename: string;
    aspectRatio: string;
    description: string;
  };
}

export const BIOMECHANICAL_MOVEMENTS: BiomechanicalMovementDetail[] = [
  {
    id: 'forehand-drive',
    name: 'Forehand Drive',
    shortTag: 'ACTION 01',
    actionSummary:
      'Low-to-high groundstroke utilizing kinetic chain sequencing, hip-torso rotation, and lead hip weight transfer.',
    movementPhases: [
      {
        phase: 'Preparation / Backswing',
        description: 'Unit turn, shoulder rotation, and weight transfer onto the back foot with paddle set low.'
      },
      {
        phase: 'Acceleration Phase',
        description: 'Hips and torso uncoil sequentially; paddle swings on an upward low-to-high trajectory.'
      },
      {
        phase: 'Impact Point',
        description: 'Contact made cleanly in front of the lead hip with a dynamically stabilized, neutral wrist.'
      },
      {
        phase: 'Follow-Through',
        description: 'Paddle sweeps fluidly across the torso with full kinetic weight transfer to the front foot.'
      }
    ],
    biomechanicalCore: [
      'Operates as a 3rd class lever system with fulcrum at the glenohumeral joint, effort from pectoralis/deltoid, and load at paddle contact point.',
      'Sequenced bottom-up kinetic chain: Ground Reaction Forces (GRF) → knee extension → pelvic rotation → torso uncoiling → shoulder/arm horizontal adduction.',
      'Torso rotational torque transferred efficiently through deep core stabilizers to generate linear ball velocity without overloading the elbow.'
    ],
    leverClassAndKinematics: {
      leverClassification: '3rd Class Lever (Fulcrum: shoulder joint; Effort: pectoralis major & deltoid; Load: paddle-to-ball impact)',
      kinematicChain: 'GRF → Knee Extension → Pelvic Rotation → Torso Rotation → Shoulder Horizontal Adduction → Arm Extension',
      keyKinematicMeasures: [
        'Wrist extension at backswing: ~20°–30°',
        'Peak angular paddle speed: ~15–20 m/s',
        'Peak Ground Reaction Force (GRF): ~1.5×–2.0× body weight during plant-and-drive',
        'Torso rotational torque transferred through core stabilizers'
      ]
    },
    muscleActivation: {
      agonists: ['Pectoralis Major (sternal & clavicular heads)', 'Anterior Deltoid', 'Rectus Femoris (lead leg ground drive)'],
      synergistsAndStabilizers: [
        'Rotator Cuff (Supraspinatus, Infraspinatus for joint centering)',
        'Rectus Abdominis & External/Internal Obliques (rotational torque transfer)',
        'Forearm Flexors (wrist stabilization)'
      ]
    },
    physiologicalDemands: [
      'Glycolytic and ATP-PCr energy contribution during repeated baseline groundstroke drives.',
      'High eccentric deceleration load on core and shoulder stabilizers following maximal velocity swings.',
      'Frontal-plane force absorption through lead adductors and quadriceps.'
    ],
    relatedFitnessComponents: [
      'Rotational power and core stiffness',
      'Lower-body unilateral strength and braking force',
      'Dynamic shoulder stability'
    ],
    mediaPlaceholder: {
      filename: '/images/biomechanics/forehand-drive.jpg',
      aspectRatio: '16:9',
      description: 'Cinematic court-level photography demonstrating the forehand drive unit turn, hip rotation, and low-to-high paddle follow-through.'
    }
  },
  {
    id: 'overhead-smash',
    name: 'The Overhead Smash',
    shortTag: 'ACTION 02',
    actionSummary:
      'Explosive downward strike involving trunk stretch-shortening cycle (SSC), rapid shoulder internal rotation, and eccentric landing deceleration.',
    movementPhases: [
      {
        phase: 'Preparation & Tracking',
        description: 'Rapid backward court tracking, split-step setup, and arm cocking into the classical athletic "trophy position".'
      },
      {
        phase: 'Drive & Launch',
        description: 'Explosive vertical leg push-off, hip-shoulder separation, upward chest extension, and elastic torso coil.'
      },
      {
        phase: 'Impact & Pronation',
        description: 'Full overhead extension with rapid internal rotation (>1000°/s) and forceful downward wrist snap at peak height.'
      },
      {
        phase: 'Landing & Deceleration',
        description: 'Controlled eccentric deceleration landing safely onto the lead foot with posterior rotator cuff braking.'
      }
    ],
    biomechanicalCore: [
      'Stretch-Shortening Cycle (SSC): Rapid pre-stretch of pectoralis major and internal rotators yields explosive elastic recoil.',
      'High internal shoulder rotational velocity (>1000°/sec) produces downward ball trajectory while demanding immense eccentric braking strength.',
      'Significant shoulder joint shear forces generated during high-speed deceleration require strong posterior rotator cuff conditioning.'
    ],
    leverClassAndKinematics: {
      leverClassification: 'Complex Overhead Kinetic Whip (3rd Class Lever with multi-joint rotational acceleration)',
      kinematicChain: 'Vertical GRF → Ankle Plantarflexion → Knee/Hip Extension → Thoracolumbar Hyperextension → Rapid Torso Flexion → Shoulder Internal Rotation',
      keyKinematicMeasures: [
        'Shoulder elevation angle at contact: 160°–180°',
        'Peak internal shoulder rotational velocity: >1000°/sec',
        'High vertical ground impulse during leg drive',
        'High eccentric shear force absorbed by posterior cuff during post-impact braking'
      ]
    },
    muscleActivation: {
      agonists: ['Latissimus Dorsi', 'Pectoralis Major', 'Triceps Brachii', 'Gastrocnemius & Soleus (jump push-off)'],
      synergistsAndStabilizers: [
        'Rotator Cuff (Infraspinatus, Teres Minor - decelerate arm and prevent anterior humeral dislocation)',
        'Core Abdominis & Rectus Abdominis (limit lumbar hyperextension and whip torso forward)',
        'Trapezius & Rhomboids (scapular retraction/upward rotation)'
      ]
    },
    physiologicalDemands: [
      'ATP-PCr alactic system dominance for maximal instantaneous power output (0–5 seconds).',
      'Eccentric landing control absorbing 2.5×–3.5× bodyweight impact.',
      'Posterior shoulder muscular endurance to prevent overuse tendinopathy across multi-set matches.'
    ],
    relatedFitnessComponents: [
      'Vertical plyometric power',
      'Rotator cuff eccentric deceleration capacity',
      'Trunk flexion velocity and spinal stability'
    ],
    mediaPlaceholder: {
      filename: '/images/biomechanics/overhead-smash.jpg',
      aspectRatio: '16:9',
      description: 'Side and rear angle capture of the overhead smash trophy position transitioning into explosive downward wrist snap and lead-foot landing.'
    }
  },
  {
    id: 'dink-shot-split-step',
    name: 'Dink Shot & Split Step',
    shortTag: 'ACTION 03',
    actionSummary:
      'Low-crouch Kitchen line positioning with isometric lower-body control, reactive split-step readiness, and soft paddle touch.',
    movementPhases: [
      {
        phase: 'Split-Step Execution',
        description: 'Low-amplitude synchronous hop timed precisely as the opponent strikes, landing with a wide, stable base of support.'
      },
      {
        phase: 'Low-Crouch Positioning',
        description: 'Deep hip and knee flexion (60°–90°) dropping the athlete\'s center of gravity close to the non-volley line.'
      },
      {
        phase: 'Dink Stroke Execution',
        description: 'Controlled low-to-high pendulum stroke initiated purely from the shoulder joint with a locked, stable wrist.'
      },
      {
        phase: 'Kinetic Recovery',
        description: 'Instantaneous return to athletic stance at the Kitchen line (<0.4s reaction window ready for next exchange).'
      }
    ],
    biomechanicalCore: [
      'Center of Gravity (COG): Lowered and positioned squarely inside the Base of Support (BOS) for rapid omnidirectional reaction.',
      'Impulse-Momentum Relationship: A soft paddle touch absorbs incoming ball momentum rather than imparting excessive speed.',
      'Continuous isometric and eccentric quadriceps/gluteal loading during protracted multi-shot Kitchen dink exchanges.'
    ],
    leverClassAndKinematics: {
      leverClassification: 'Stabilized Pendulum Lever (Controlled 3rd Class Lever with minimal rotational excursion)',
      kinematicChain: 'Isometric Lower Base → Hip/Core Stabilization → Compact Glenohumeral Pendulum → Fixed Wrist Orientation',
      keyKinematicMeasures: [
        'Deep knee and hip flexion angle: 60°–90° knee bend during low kitchen retrieval',
        'Minimal paddle acceleration: <5 m/s (fine motor touch control)',
        'Reaction time threshold: <0.4 second response window in rapid net exchanges',
        'Wide Base of Support: ~1.3× shoulder width for lateral stability'
      ]
    },
    muscleActivation: {
      agonists: ['Quadriceps (vastus lateralis, vastus medialis, rectus femoris under isometric load)', 'Gluteus Medius (lateral pelvic stabilization)'],
      synergistsAndStabilizers: [
        'Soleus and Gastrocnemius (ankle stiffness and reactive split-step recoil)',
        'Forearm Extensors and Flexors (firm wrist isometric stabilization)',
        'Core flexors and erector spinae (upright posture in low stance)'
      ]
    },
    physiologicalDemands: [
      'High reliance on glycolytic and local muscular endurance in quadriceps during sustained rallies (>20–45s).',
      'Aerobic base for rapid lactate clearance and intra-point recovery.',
      'Fast-twitch motor unit recruitment for reactive split-step hops.'
    ],
    relatedFitnessComponents: [
      'Isometric quadriceps and gluteal endurance',
      'Reactive agility and plantarflexor stiffness',
      'Fine neuromuscular paddle control under fatigue'
    ],
    mediaPlaceholder: {
      filename: '/images/biomechanics/dink-split-step.jpg',
      aspectRatio: '16:9',
      description: 'Close-up sports science view of low-crouch Kitchen line positioning, 70-degree knee bend, and soft paddle face touch.'
    }
  }
];

export interface InjuryRiskItem {
  injuryRisk: string;
  biomechanicalCause: string;
  preventionAndMitigation: string;
  targetedPhases: string;
}

export const INJURY_RISK_ANALYSIS: InjuryRiskItem[] = [
  {
    injuryRisk: 'Lateral Epicondylitis ("Pickleball Elbow")',
    biomechanicalCause: 'Repetitive wrist-extension overload, off-center paddle impacts, and wrist "flicking" instead of shoulder-driven stroke.',
    preventionAndMitigation: 'Maintain a stiff wrist during dinks; hit in front of the body using the full arm/shoulder unit as a single lever; train forearm stabilizers.',
    targetedPhases: 'Preparation (isometric holds) & Pre-Competition (controlled kinetic acceleration)'
  },
  {
    injuryRisk: 'Achilles Tendon Strain / Tear',
    biomechanicalCause: 'Sudden backward tracking without turning or forceful plant-and-cut acceleration without adequate ankle tendon warm-up.',
    preventionAndMitigation: 'Adopt turn-and-run footwork instead of backpedaling; perform dynamic calf warm-ups and progressive plyometric loading.',
    targetedPhases: 'All Microcycles (Warm-up protocol & shuttle agility)'
  },
  {
    injuryRisk: 'Rotator Cuff Tendinopathy',
    biomechanicalCause: 'High-velocity repetitive overhead smashes without adequate leg drive, forcing the glenohumeral joint to absorb all deceleration torque.',
    preventionAndMitigation: 'Engage the full kinetic chain (legs + pelvic rotation) to relieve shoulder joint overload; condition posterior cuff with prone cobras.',
    targetedPhases: 'Preparation (Prone Cobra) & Competition (Rotator maintenance)'
  },
  {
    injuryRisk: 'Ankle Sprains',
    biomechanicalCause: 'Rapid lateral shuffling and catching a shoe edge on non-marking court surfaces during rapid lateral direction changes.',
    preventionAndMitigation: 'Practice proper split-step landings with wide base of support; wear court-specific lateral-support footwear; strengthen peroneals.',
    targetedPhases: 'All Phases (Lateral shuttle progression)'
  }
];

/**
 * The 6 Original Milestone 2 Exercises
 * Student's exact exercise selection, instructions, muscles, and purpose.
 */
export const MILESTONE_2_EXERCISES: ExerciseItem[] = [
  {
    id: 'm2-rotational-windmill',
    name: 'Bodyweight Rotational Windmill Drive',
    originalName: 'Bodyweight Rotational Windmill Drive',
    movementTarget: 'Forehand Drive',
    phase: 'pre-competition',
    isMilestoneOriginal: true,
    mediaPlaceholder: {
      type: 'video',
      filename: '/videos/exercises/bodyweight-rotational-windmill.mp4',
      aspectRatio: '9:16',
      description: 'Demonstration of athletic ready stance, pivot off back foot, and low-to-high dynamic arm sweep simulating forehand kinetic chain.',
      originalMilestoneLink: 'https://www.youtube.com/shorts/utEsGAg6UJU'
    },
    movementDescription:
      'Dynamic standing rotational movement simulating the low-to-high forehand groundstroke kinetic chain from rear foot pivot to shoulder sweep.',
    stepByStepInstructions: [
      'Stand in an athletic ready stance with feet positioned wider than shoulder-width.',
      'Pivot dynamically off the back foot, drive hips forward, and sweep arms low-to-high across the torso.',
      'Perform 12–15 dynamic rotational shadow drive repetitions per side.',
      'Focus on continuous, smooth kinetic chain rotation initiating from the hips up to the shoulders.'
    ],
    equipmentNeeded: 'None (Bodyweight / Athletic court shoes)',
    primaryMuscles: ['External and Internal Obliques', 'Rectus Abdominis', 'Gluteus Medius', 'Anterior Deltoids'],
    secondaryMuscles: ['Gastrocnemius', 'Quadriceps', 'Forearm flexors'],
    setsAndReps: '3 sets × 12–15 reps per side',
    trainingIntensity: 'Moderate (RPE 6/10, 60–70% HRmax)',
    restInterval: '45–60 seconds between sets',
    trainingBenefits: 'Trains kinetic chain rotation and energy transfer from legs to torso without needing external equipment.',
    biomechanicalRationale:
      'Replicates the 3rd class lever rotation and Ground Reaction Force transmission vital for generating paddle velocity on forehand drives.'
  },
  {
    id: 'm2-lateral-lunge-rotation',
    name: 'Bodyweight Lateral Lunge with Rotational Reach',
    originalName: 'Bodyweight Lateral Lunge with Rotational Reach',
    movementTarget: 'Forehand Drive',
    phase: 'pre-competition',
    isMilestoneOriginal: true,
    mediaPlaceholder: {
      type: 'video',
      filename: '/videos/exercises/lateral-lunge-rotation.mp4',
      aspectRatio: '9:16',
      description: 'Execution of wide lateral step, deep hip load on trail leg, cross-torso rotational reach, and explosive heel push-off to center.',
      originalMilestoneLink: 'https://www.youtube.com/shorts/VaJOo2Kb1OU'
    },
    movementDescription:
      'Frontal-plane unilateral lunge combined with transverse-plane torso rotation, training deceleration and groundstroke loading in wide stances.',
    stepByStepInstructions: [
      'Stand tall with feet hip-width apart and arms relaxed in front of the body.',
      'Step wide to the right, loading deeply into the right hip while keeping the left leg completely straight.',
      'Reach both arms diagonally across the lunging thigh to simulate wide groundstroke loading.',
      'Push forcefully off the heel to return explosively to center; repeat for 10–12 controlled reps per side.'
    ],
    equipmentNeeded: 'None (Bodyweight)',
    primaryMuscles: ['Quadriceps', 'Gluteus Maximus', 'Hip Adductors', 'Obliques', 'Core Stabilizers'],
    secondaryMuscles: ['Hamstrings', 'Gastrocnemius', 'Erector Spinae'],
    setsAndReps: '3 sets × 10–12 reps per side',
    trainingIntensity: 'Moderate (RPE 6–7/10)',
    restInterval: '60 seconds between sets',
    trainingBenefits: 'Replicates weight transfer and frontal-plane force absorption required during wide forehand setups.',
    biomechanicalRationale:
      'Conditions the eccentric braking capacity of the lead hip and adductors during abrupt lateral court decelerations.'
  },
  {
    id: 'm2-overhead-slams',
    name: 'Plyometric Overhead Bodyweight Slams',
    originalName: 'Plyometric Overhead Bodyweight Slams',
    movementTarget: 'The Overhead Smash',
    phase: 'pre-competition',
    isMilestoneOriginal: true,
    mediaPlaceholder: {
      type: 'video',
      filename: '/videos/exercises/overhead-bodyweight-slams.mp4',
      aspectRatio: '9:16',
      description: 'Staggered stance with full overhead pre-stretch, vertical hop, and explosive downward trunk flexion with arm slam.',
      originalMilestoneLink: 'https://www.youtube.com/shorts/v911k2pRgzc'
    },
    movementDescription:
      'High-velocity plyometric core and lat drill utilizing the stretch-shortening cycle to simulate maximal overhead smash velocity.',
    stepByStepInstructions: [
      'Stand in a staggered athletic stance, reaching both arms high overhead into a full pre-stretch position.',
      'Drive aggressively off the back foot and forcefully snap arms down past the hips while flexing the core explosively.',
      'Include a slight vertical hop at peak stretch to train plyometric ground reaction power and vertical impulse.',
      'Perform 10–12 maximum speed repetitions per set, focusing on explosive acceleration.'
    ],
    equipmentNeeded: 'None (Bodyweight)',
    primaryMuscles: ['Latissimus Dorsi', 'Pectoralis Major', 'Rectus Abdominis', 'Triceps Brachii'],
    secondaryMuscles: ['Gastrocnemius', 'Soleus', 'Anterior Core'],
    setsAndReps: '3 sets × 10–12 maximal speed reps',
    trainingIntensity: 'High (RPE 8/10, maximal velocity)',
    restInterval: '60–75 seconds between sets',
    trainingBenefits: 'Develops stretch-shortening cycle (SSC) power and explosive core flexion required for winning overhead smashes.',
    biomechanicalRationale:
      'Trains fast-twitch motor unit recruitment and rapid shoulder internal rotation deceleration mechanics without ball impact stress.'
  },
  {
    id: 'm2-prone-cobra',
    name: 'Prone Cobra Shoulder Retractions',
    originalName: 'Prone Cobra Shoulder Retractions',
    movementTarget: 'The Overhead Smash',
    phase: 'pre-competition',
    isMilestoneOriginal: true,
    mediaPlaceholder: {
      type: 'video',
      filename: '/videos/exercises/prone-cobra-retraction.mp4',
      aspectRatio: '9:16',
      description: 'Prone floor positioning, scapular retraction, external shoulder rotation thumbs-to-ceiling, and 3-second isometric hold.',
      originalMilestoneLink: 'https://www.youtube.com/shorts/v911k2pRgzc'
    },
    movementDescription:
      'Posterior shoulder and scapular conditioning exercise targeting the external rotators to protect against shoulder impingement.',
    stepByStepInstructions: [
      'Lie face down (prone) on the floor with legs fully extended and forehead rested gently on an exercise mat.',
      'Squeeze shoulder blades firmly together, lifting chest and hands slightly off the mat.',
      'Rotate thumbs toward the ceiling to fully engage external shoulder rotators (infraspinatus & teres minor).',
      'Hold the peak contraction steadily for 3 seconds; perform 12–15 controlled reps.'
    ],
    equipmentNeeded: 'Exercise mat',
    primaryMuscles: ['Infraspinatus', 'Teres Minor', 'Rhomboids', 'Middle & Lower Trapezius', 'Erector Spinae'],
    secondaryMuscles: ['Posterior Deltoid', 'Gluteals'],
    setsAndReps: '3 sets × 12–15 reps (with 3s hold)',
    trainingIntensity: 'Moderate / Endurance focus (RPE 6/10)',
    restInterval: '45 seconds between sets',
    trainingBenefits: 'Strengthens posterior rotator cuff muscles to safely decelerate high-speed overhead strikes and prevent joint impingement.',
    biomechanicalRationale:
      'Directly mitigates the extreme shear forces experienced in the posterior shoulder during decelerating overhead smashes.'
  },
  {
    id: 'm2-lateral-shuttle-shuffle',
    name: 'Low-Crouch Lateral Shuttle Shuffle',
    originalName: 'Low-Crouch Lateral Shuttle Shuffle',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'pre-competition',
    isMilestoneOriginal: true,
    mediaPlaceholder: {
      type: 'video',
      filename: '/videos/exercises/low-crouch-shuttle-shuffle.mp4',
      aspectRatio: '9:16',
      description: 'Half-squat Kitchen stance, rapid 3-step lateral shuffle without crossover, balance pause with shadow dink stroke.',
      originalMilestoneLink: 'https://www.youtube.com/shorts/nqLsCj7pgbw'
    },
    movementDescription:
      'Sport-specific lateral agility drill keeping a low center of gravity while executing simulated kitchen dink strokes.',
    stepByStepInstructions: [
      'Sink into a half-squat athletic ready stance holding hands and simulated paddle out in front.',
      'Shuffle dynamically 3 steps laterally along a 10-foot line without allowing feet to cross over.',
      'Pause briefly in dynamic balance, execute a shadow soft dink push stroke with steady wrist, then shuffle back.',
      'Maintain a continuous low center of gravity throughout for 30–45 seconds per set.'
    ],
    equipmentNeeded: 'Court markers / 10-foot floor space',
    primaryMuscles: ['Quadriceps', 'Gluteus Medius', 'Gastrocnemius', 'Soleus', 'Hip Abductors'],
    secondaryMuscles: ['Core stabilizers', 'Peroneals', 'Tibialis anterior'],
    setsAndReps: '3–4 sets × 30–45 seconds continuous',
    trainingIntensity: 'Moderate-High (RPE 7/10, 65–75% HRmax)',
    restInterval: '45–60 seconds between sets',
    trainingBenefits: 'Builds lateral hip stability and lower-body endurance for sustained Kitchen-line dink exchanges.',
    biomechanicalRationale:
      'Develops anaerobic lactic buffering and isometric thigh stamina required for long rallies at the non-volley zone.'
  },
  {
    id: 'm2-isometric-squat-hold',
    name: 'Isometric Squat Hold',
    originalName: 'Isometric Squat Hold',
    movementTarget: 'Dink Shot & Split Step',
    phase: 'pre-competition',
    isMilestoneOriginal: true,
    mediaPlaceholder: {
      type: 'video',
      filename: '/videos/exercises/isometric-squat-hold.mp4',
      aspectRatio: '9:16',
      description: 'Lowering to 60-90 degree knee bend simulating Kitchen ready stance, 5-second isometric hold, reset and repeat for cycles.',
      originalMilestoneLink: 'https://www.youtube.com/shorts/X5RfG8u8oQU'
    },
    movementDescription:
      'Sustained static quad and glute contraction simulating prolonged non-volley zone crouch positioning.',
    stepByStepInstructions: [
      'Lower smoothly into a low crouch hold (60°–90° knee bend) simulating the ideal Kitchen ready stance.',
      'Hold the isometric squat stance for 5 seconds keeping the chest upright, spine neutral, and knees aligned over midfoot.',
      'Immediately reset into the squat hold; complete 8–10 continuous cycles per set.'
    ],
    equipmentNeeded: 'None (Bodyweight / Wall optional)',
    primaryMuscles: ['Quadriceps (vastii complex)', 'Gluteal Complex', 'Calves (soleus)', 'Core Flexors'],
    secondaryMuscles: ['Hamstrings', 'Adductors', 'Spinal erectors'],
    setsAndReps: '3 sets × 8–10 cycles (5 seconds hold per cycle = 40–50s total hold)',
    trainingIntensity: 'Moderate (RPE 6–7/10)',
    restInterval: '60 seconds between sets',
    trainingBenefits: 'Increases isometric thigh stamina and reactive calf/ankle stiffness for rapid split-step timing.',
    biomechanicalRationale:
      'Improves motor unit rate-coding and tendon stiffness for instant reactive force production during opponent shot retrieval.'
  }
];

export const ACADEMIC_REFERENCES = [
  {
    id: 'ref-1',
    authors: 'Baechle, T. R., & Earle, R. W.',
    year: '2008',
    title: 'Essentials of Strength Training and Conditioning',
    edition: '3rd ed.',
    publisher: 'Human Kinetics',
    relevance: 'Foundational framework for microcycle periodization, stretch-shortening cycle (SSC) mechanics, and work-to-rest ratio prescriptions.'
  },
  {
    id: 'ref-2',
    authors: 'Lees, A.',
    year: '2003',
    title: 'Science and the major racket sports: a review',
    edition: 'Journal of Sports Sciences, 21(9), 707–732',
    publisher: 'Taylor & Francis',
    relevance: 'Biomechanical principles of kinetic chain sequencing, third-class lever arm acceleration, and impact shock absorption in court sports.'
  },
  {
    id: 'ref-3',
    authors: 'Strohacker, K., et al.',
    year: '2020',
    title: 'Physiological and biomechanical demands of racket sports and court movement patterns',
    edition: 'International Journal of Sports Physiology and Performance',
    publisher: 'Human Kinetics',
    relevance: 'Quantification of heart rate zones (65–75% HRmax), lateral agility demands, and eccentric deceleration loads during prolonged net play.'
  }
];
