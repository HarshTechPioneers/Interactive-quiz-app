export const getMotivationalMessage = (score: number, totalQuestions: number): string => {
  const percentage = (score / totalQuestions) * 100;
  
  if (percentage >= 90) {
    return "🏆 Quiz Champion! You're absolutely brilliant!";
  } else if (percentage >= 80) {
    return "🌟 Excellent work! You're a true knowledge master!";
  } else if (percentage >= 70) {
    return "👏 Great job! You really know your stuff!";
  } else if (percentage >= 60) {
    return "👍 Good effort! You're on the right track!";
  } else if (percentage >= 50) {
    return "💪 Not bad! Keep studying and you'll improve!";
  } else if (percentage >= 30) {
    return "📚 Room for improvement! More practice makes perfect!";
  } else {
    return "☕ More caffeine, maybe? Don't give up, try again!";
  }
};

export const getScoreColor = (score: number, totalQuestions: number): string => {
  const percentage = (score / totalQuestions) * 100;
  
  if (percentage >= 80) return 'text-green-600';
  if (percentage >= 60) return 'text-blue-600';
  if (percentage >= 40) return 'text-yellow-600';
  return 'text-red-600';
};