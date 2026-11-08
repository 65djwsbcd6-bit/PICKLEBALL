/**
 * Asset Reference Registry
 * Documents every image and video placeholder required across the 6 pages
 * Designed so Alexies Jean Ballesteros can upload media directly into /images/...
 */

import { AssetRecord } from '../types/training';

export const ASSET_INVENTORY: AssetRecord[] = [
  // --- HOME PAGE ---
  {
    id: 'asset-home-hero',
    folder: '/images/home/',
    filename: '/images/home/hero-pickleball.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 px',
    pageContext: 'Home Page - Section A (Hero)',
    description: 'High-impact athletic shot of pickleball player in dynamic ready stance or mid-drive on an outdoor tournament court with crisp blue lines.'
  },
  {
    id: 'asset-home-overview',
    folder: '/images/home/',
    filename: '/images/home/program-overview.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1600 × 900 px',
    pageContext: 'Home Page - Section B (Program Overview)',
    description: 'Editorial wide angle showing athlete setting up at the kitchen line with paddle focused forward.'
  },
  {
    id: 'asset-home-phase-1',
    folder: '/images/phases/',
    filename: '/images/phases/preparation-banner.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1200 × 675 px',
    pageContext: 'Home Page & Preparation Navigation Card',
    description: 'Athlete performing foundational core and shoulder rotational conditioning with mat and court gear.'
  },
  {
    id: 'asset-home-phase-2',
    folder: '/images/phases/',
    filename: '/images/phases/pre-competition-banner.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1200 × 675 px',
    pageContext: 'Home Page & Pre-Competition Navigation Card',
    description: 'Dynamic athletic capture of high-velocity plyometric jump smash or lateral change of direction.'
  },
  {
    id: 'asset-home-phase-3',
    folder: '/images/phases/',
    filename: '/images/phases/competition-banner.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1200 × 675 px',
    pageContext: 'Home Page & Competition Navigation Card',
    description: 'Athlete in competitive tournament match play at the Kitchen line executing a precise touch dink.'
  },

  // --- BIOMECHANICS PAGE ---
  {
    id: 'asset-bio-forehand',
    folder: '/images/biomechanics/',
    filename: '/images/biomechanics/forehand-drive.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1600 × 900 px',
    pageContext: 'Athlete Profile & Biomechanics - Forehand Drive Analysis',
    description: 'Full-body photo illustrating the forehand drive unit turn, hip-to-shoulder kinetic sequence, and low-to-high paddle follow-through.'
  },
  {
    id: 'asset-bio-smash',
    folder: '/images/biomechanics/',
    filename: '/images/biomechanics/overhead-smash.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1600 × 900 px',
    pageContext: 'Athlete Profile & Biomechanics - Overhead Smash Analysis',
    description: 'Overhead smash capture demonstrating trophy position, shoulder elevation (160°–180°), and downward wrist snap.'
  },
  {
    id: 'asset-bio-dink',
    folder: '/images/biomechanics/',
    filename: '/images/biomechanics/dink-split-step.jpg',
    type: 'image',
    aspectRatio: '16:9',
    recommendedResolution: '1600 × 900 px',
    pageContext: 'Athlete Profile & Biomechanics - Dink Shot & Split Step Analysis',
    description: 'Close-up sports science view of low-crouch Kitchen line positioning (60°–90° knee flexion), wide base of support, and locked wrist.'
  },

  // --- PHASE BANNERS ---
  {
    id: 'asset-phase-banner-1',
    folder: '/images/phases/preparation/',
    filename: '/images/phases/preparation/banner-preparation.jpg',
    type: 'image',
    aspectRatio: '21:9',
    recommendedResolution: '2560 × 1080 px',
    pageContext: 'Preparation Phase Header Banner',
    description: 'Wide cinematic panoramic view of pickleball courts in morning light with training equipment laid out neatly.'
  },
  {
    id: 'asset-phase-banner-2',
    folder: '/images/phases/pre-competition/',
    filename: '/images/phases/pre-competition/banner-pre-competition.jpg',
    type: 'image',
    aspectRatio: '21:9',
    recommendedResolution: '2560 × 1080 px',
    pageContext: 'Pre-Competition Phase Header Banner',
    description: 'High-contrast wide panoramic of high-velocity court drills, agility cones, and explosive footwork.'
  },
  {
    id: 'asset-phase-banner-3',
    folder: '/images/phases/competition/',
    filename: '/images/phases/competition/banner-competition.jpg',
    type: 'image',
    aspectRatio: '21:9',
    recommendedResolution: '2560 × 1080 px',
    pageContext: 'Competition Phase Header Banner',
    description: 'Tournament arena view showing high-stakes net duel and pristine championship court lines.'
  },

  // --- MILESTONE 2 FOUNDATIONAL EXERCISE VIDEOS ---
  {
    id: 'video-m2-windmill',
    folder: '/images/videos/',
    filename: '/images/videos/bodyweight-rotational-windmill.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 01 & Milestone 2 - Bodyweight Rotational Windmill Drive',
    description: 'Demonstration video of standing athletic stance, rear foot pivot, low-to-high dynamic arm sweep simulating forehand kinetic chain.'
  },
  {
    id: 'video-m2-lunge',
    folder: '/images/videos/',
    filename: '/images/videos/lateral-lunge-rotation.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 01 & Milestone 2 - Bodyweight Lateral Lunge with Rotational Reach',
    description: 'Demonstration video of wide lateral step, deep hip load on trail leg, cross-torso rotational reach, and explosive heel push-off to center.'
  },
  {
    id: 'video-m2-slams',
    folder: '/images/videos/',
    filename: '/images/videos/overhead-bodyweight-slams.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 01 & Milestone 2 - Plyometric Overhead Bodyweight Slams',
    description: 'Demonstration video of staggered stance with full overhead pre-stretch, vertical hop, and explosive downward trunk flexion with arm slam.'
  },
  {
    id: 'video-m2-cobra',
    folder: '/images/videos/',
    filename: '/images/videos/prone-cobra-retraction.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 01 & Milestone 2 - Prone Cobra Shoulder Retractions',
    description: 'Demonstration video of prone floor positioning, scapular retraction, external shoulder rotation thumbs-to-ceiling, and 3-second isometric hold.'
  },
  {
    id: 'video-m2-shuttle',
    folder: '/images/videos/',
    filename: '/images/videos/low-crouch-shuttle-shuffle.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 01 & Milestone 2 - Low-Crouch Lateral Shuttle Shuffle',
    description: 'Demonstration video of half-squat Kitchen stance, rapid 3-step lateral shuffle without crossover, balance pause with shadow dink stroke.'
  },
  {
    id: 'video-m2-squat-hold',
    folder: '/images/videos/',
    filename: '/images/videos/isometric-squat-hold.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 01 & Milestone 2 - Isometric Squat Hold',
    description: 'Demonstration video of lowering to 60-90 degree knee bend simulating Kitchen ready stance, 5-second isometric hold, reset and repeat.'
  },

  // --- PRE-COMPETITION PROGRESSION EXERCISE VIDEOS ---
  {
    id: 'video-pc-windmill',
    folder: '/images/videos/',
    filename: '/images/videos/explosive-rotational-windmill.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 02 - Explosive Rotational Windmill Drive with Dynamic Pivot',
    description: 'High-speed video demonstrating explosive back foot drive, maximal rotational acceleration through torso, and snappy finish.'
  },
  {
    id: 'video-pc-bound',
    folder: '/images/videos/',
    filename: '/images/videos/plyometric-lateral-bound-rotation.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 02 - Plyometric Lateral Bound with Deceleration Stick & Rotational Reach',
    description: 'Video showing 4-foot lateral plyometric bound, single-leg force absorption stick, cross-body reach, and explosive return bound.'
  },
  {
    id: 'video-pc-jump-slams',
    folder: '/images/videos/',
    filename: '/images/videos/dynamic-overhead-jump-slams.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 02 - Dynamic Plyometric Overhead Jump Slams',
    description: 'Video demonstrating two-foot vertical jump into trophy pre-stretch, downward crunch snap at jump apex, and soft landing.'
  },
  {
    id: 'video-pc-cobra-flutter',
    folder: '/images/videos/',
    filename: '/images/videos/prone-cobra-tempo-flutter.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 02 - Prone Cobra Shoulder Retractions with Tempo Flutter',
    description: 'Video of prone elevated chest with thumbs to ceiling performing 10-second rhythmic scapular pulses under fatigue.'
  },
  {
    id: 'video-pc-reactive-shuttle',
    folder: '/images/videos/',
    filename: '/images/videos/reactive-lateral-shuttle-cue.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 02 - Reactive Lateral Shuttle Shuffle with Directional Split-Step Cue',
    description: 'Video showing athlete responding to visual stimulus, dropping into synchronous split-step, and shuffling rapidly laterally.'
  },
  {
    id: 'video-pc-drop-squat',
    folder: '/images/videos/',
    filename: '/images/videos/drop-squat-reactive-bounce.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 02 - Dynamic-to-Isometric Drop Squat Hold with Reactive Split-Step Bounce',
    description: 'Video of rapid drop-catch into 70° squat, 4-second solid isometric hold, and explosive reactive hop recoil.'
  },

  // --- COMPETITION MAINTENANCE EXERCISE VIDEOS ---
  {
    id: 'video-comp-drives',
    folder: '/images/videos/',
    filename: '/images/videos/competition-rotational-shadow-drives.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 03 - Speed-Optimized Rotational Shadow Drives',
    description: 'Crisp shadow swings showing effortless kinetic chain fluid timing with zero lingering muscle fatigue.'
  },
  {
    id: 'video-comp-timing',
    folder: '/images/videos/',
    filename: '/images/videos/competition-trophy-timing.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 03 - Trophy Position Timing & Controlled Overhead Deceleration',
    description: 'Video demonstrating submaximal jump, clean overhead contact plane alignment, and smooth lead-leg landing.'
  },
  {
    id: 'video-comp-rotator',
    folder: '/images/videos/',
    filename: '/images/videos/competition-rotator-activation.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 03 - Scapular & Rotator Activation Flutters',
    description: 'Gentle standing or prone rotator activation for shoulder joint lubrication prior to match play.'
  },
  {
    id: 'video-comp-split-step',
    folder: '/images/videos/',
    filename: '/images/videos/competition-split-step-priming.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 03 - Rapid Split-Step Priming Drop-Hops',
    description: 'Snappy 15-second intervals of light rhythmic split-step hops with quick 2-step directional pushes.'
  },
  {
    id: 'video-comp-kitchen-hold',
    folder: '/images/videos/',
    filename: '/images/videos/competition-kitchen-stance-hold.mp4',
    type: 'video',
    aspectRatio: '16:9',
    recommendedResolution: '1920 × 1080 @ 60fps',
    pageContext: 'Phase 03 - Brief Isometric Kitchen Stance Hold',
    description: 'Short 4-second low-crouch hold with paddle forward, maintaining neural posture without lactic fatigue.'
  }
];
