import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { getPlayer, saveQuizAttempt, generateAttemptId } from '../utils/localStorage';
import { getQuestionsByCategory } from '../data/questions';
import { Question, QuizState, QuizAttempt } from '../types';

const QUESTION_TIME_LIMIT = 15; // seconds

const QuizEngine: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    timeRemaining: QUESTION_TIME_LIMIT,
    isActive: true,
    startTime: Date.now(),
    questionStartTime: Date.now(),
    questionTimes: []
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [playerData, setPlayerData] = useState<any>(null);

  // Initialize quiz
  useEffect(() => {
    const player = getPlayer();
    if (!player) {
      navigate('/quiz');
      return;
    }

    setPlayerData(player);
    const quizQuestions = getQuestionsByCategory(player.category, player.difficulty);
    
    if (quizQuestions.length === 0) {
      alert('No questions available for this category/difficulty combination.');
      navigate('/quiz');
      return;
    }

    // Shuffle questions and take first 10
    const shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffledQuestions);
    
    setQuizState(prev => ({
      ...prev,
      answers: new Array(shuffledQuestions.length).fill(null),
      questionTimes: new Array(shuffledQuestions.length).fill(0)
    }));
  }, [navigate]);

  // Timer effect
  useEffect(() => {
    if (!quizState.isActive || showResult) return;

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          // Time's up, auto-move to next question
          handleTimeUp();
          return prev;
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.isActive, quizState.currentQuestionIndex, showResult]);

  const handleTimeUp = useCallback(() => {
    const timeSpent = QUESTION_TIME_LIMIT - quizState.timeRemaining;
    const newQuestionTimes = [...quizState.questionTimes];
    newQuestionTimes[quizState.currentQuestionIndex] = timeSpent;

    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        timeRemaining: QUESTION_TIME_LIMIT,
        questionStartTime: Date.now(),
        questionTimes: newQuestionTimes
      }));
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      finishQuiz(newQuestionTimes);
    }
  }, [quizState, questions.length]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;

    setSelectedAnswer(answerIndex);
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = answerIndex;
    
    const timeSpent = QUESTION_TIME_LIMIT - quizState.timeRemaining;
    const newQuestionTimes = [...quizState.questionTimes];
    newQuestionTimes[quizState.currentQuestionIndex] = timeSpent;

    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      questionTimes: newQuestionTimes
    }));

    setShowResult(true);

    // Auto-advance after 2 seconds
    setTimeout(() => {
      if (quizState.currentQuestionIndex < questions.length - 1) {
        setQuizState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          timeRemaining: QUESTION_TIME_LIMIT,
          questionStartTime: Date.now()
        }));
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        finishQuiz(newQuestionTimes);
      }
    }, 2000);
  };

  const finishQuiz = (finalQuestionTimes: number[]) => {
    const score = quizState.answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index]?.correctAnswer ? 1 : 0);
    }, 0);

    const totalTime = Math.floor((Date.now() - quizState.startTime) / 1000);

    const attempt: QuizAttempt = {
      id: generateAttemptId(),
      playerName: playerData.name,
      category: playerData.category,
      difficulty: playerData.difficulty,
      score,
      totalQuestions: questions.length,
      totalTime,
      date: new Date().toISOString(),
      questionTimes: finalQuestionTimes
    };

    saveQuizAttempt(attempt);
    navigate('/quiz/results', { state: { attempt } });
  };

  const goToPreviousQuestion = () => {
    if (quizState.currentQuestionIndex > 0 && !showResult) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        timeRemaining: QUESTION_TIME_LIMIT
      }));
      setSelectedAnswer(quizState.answers[quizState.currentQuestionIndex - 1]);
    }
  };

  const goToNextQuestion = () => {
    if (quizState.currentQuestionIndex < questions.length - 1 && selectedAnswer !== null) {
      handleAnswerSelect(selectedAnswer);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-600">
                Question {quizState.currentQuestionIndex + 1} of {questions.length}
              </span>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-red-500" />
                <span className={`font-bold ${quizState.timeRemaining <= 5 ? 'text-red-600 animate-pulse' : 'text-gray-700'}`}>
                  {quizState.timeRemaining}s
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {playerData?.name} • {playerData?.category} • {playerData?.difficulty}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white shadow-lg border-l border-r border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const isWrong = showResult && isSelected && !isCorrect;

              let buttonClass = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
              
              if (showResult) {
                if (isCorrect) {
                  buttonClass += 'border-green-500 bg-green-50 text-green-800';
                } else if (isWrong) {
                  buttonClass += 'border-red-500 bg-red-50 text-red-800';
                } else {
                  buttonClass += 'border-gray-200 bg-gray-50 text-gray-500';
                }
              } else if (isSelected) {
                buttonClass += 'border-blue-500 bg-blue-50 text-blue-800';
              } else {
                buttonClass += 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 cursor-pointer';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showResult && (
                      <span className="ml-2">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : isWrong ? (
                          <XCircle className="h-5 w-5 text-red-600" />
                        ) : null}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex justify-between">
            <button
              onClick={goToPreviousQuestion}
              disabled={quizState.currentQuestionIndex === 0 || showResult}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={goToNextQuestion}
              disabled={selectedAnswer === null || quizState.currentQuestionIndex === questions.length - 1}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;