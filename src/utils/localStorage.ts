import { QuizAttempt, Player } from '../types';

const STORAGE_KEYS = {
  PLAYER: 'quiz_player',
  ATTEMPTS: 'quiz_attempts'
};

export const savePlayer = (player: Player): void => {
  localStorage.setItem(STORAGE_KEYS.PLAYER, JSON.stringify(player));
};

export const getPlayer = (): Player | null => {
  const stored = localStorage.getItem(STORAGE_KEYS.PLAYER);
  return stored ? JSON.parse(stored) : null;
};

export const saveQuizAttempt = (attempt: QuizAttempt): void => {
  const attempts = getQuizAttempts();
  attempts.push(attempt);
  localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
};

export const getQuizAttempts = (): QuizAttempt[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
  return stored ? JSON.parse(stored) : [];
};

export const clearPlayerData = (): void => {
  localStorage.removeItem(STORAGE_KEYS.PLAYER);
};

export const generateAttemptId = (): string => {
  return `attempt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};