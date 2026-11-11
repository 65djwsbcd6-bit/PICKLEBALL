/**
 * Core type definitions for Pickleball Microcycle Training Program
 * Based on Milestone 1 (Biomechanics Breakdown) & Milestone 2 (Exercise Selection)
 * Student: Alexies Jean Ballesteros | Section: H2101 | MO-PE014 PE4
 */

export type PageId =
  | 'home'
  | 'athlete-biomechanics'
  | 'preparation'
  | 'pre-competition'
  | 'competition'
  | 'comparison';

export type PickleballMovement =
  | 'Forehand Drive'
  | 'The Overhead Smash'
  | 'Dink Shot & Split Step'
  | 'Foundational Strength'
  | 'Foundational Conditioning';

export interface ExerciseItem {
  id: string;
  name: string;
  movementTarget: PickleballMovement;
  phase: 'preparation' | 'pre-competition' | 'competition' | 'all';
  isMilestoneOriginal?: boolean;
  originalName?: string;
  mediaPlaceholder: {
    type: 'video' | 'image';
    filename: string;
    aspectRatio: string;
    description: string;
    originalMilestoneLink?: string;
  };
  movementDescription: string;
  stepByStepInstructions: string[];
  equipmentNeeded: string;
  primaryMuscles: string[];
  secondaryMuscles?: string[];
  setsAndReps: string;
  trainingIntensity: string;
  restInterval: string;
  trainingBenefits: string;
  biomechanicalRationale: string;
  progressionNote?: string;
}

export interface DayWorkout {
  dayName: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  shortDay: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
  title: string;
  focus: string;
  status: 'Training' | 'Active Recovery' | 'Complete Rest' | 'Match Play';
  intensity: 'Low' | 'Moderate' | 'Moderate-High' | 'High' | 'Peak / Match';
  durationMinutes: number;
  shortDescription: string;
  warmupProtocol: {
    duration: string;
    drills: string[];
  };
  exercises: ExerciseItem[];
  cooldownProtocol: {
    duration: string;
    drills: string[];
  };
  coachingNotes: string;
}

export interface MicrocyclePhase {
  id: 'preparation' | 'pre-competition' | 'competition';
  phaseNumber: '01' | '02' | '03';
  title: string;
  headline: string;
  bannerPlaceholder: {
    filename: string;
    description: string;
  };
  mainFunction: string;
  trainingPriorities: string[];
  targetVolume: string;
  targetIntensity: string;
  targetHeartRate: string;
  restRecoveryFocus: string;
  equipmentRequirements: string[];
  phaseRationale: string;
  progressionFromPrevious?: string;
  days: DayWorkout[];
  exercises: ExerciseItem[];
}

export interface AssetRecord {
  id: string;
  folder: string;
  filename: string;
  type: 'image' | 'video';
  aspectRatio: string;
  recommendedResolution: string;
  pageContext: string;
  description: string;
}
