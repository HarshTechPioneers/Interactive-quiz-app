export interface Player {
  name: string;
  category: string;
  difficulty: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
}

export interface QuizAttempt {
  id: string;
  playerName: string;
  category: string;
  difficulty: string;
  score: number;
  totalQuestions: number;
  totalTime: number;
  date: string;
  questionTimes: number[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  timeRemaining: number;
  isActive: boolean;
  startTime: number;
  questionStartTime: number;
  questionTimes: number[];
}