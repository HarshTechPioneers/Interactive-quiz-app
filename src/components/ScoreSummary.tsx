import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Trophy, Clock, Target, RefreshCw, BarChart3, Home } from 'lucide-react';
import { getMotivationalMessage, getScoreColor } from '../utils/motivationalMessages';
import { clearPlayerData } from '../utils/localStorage';

const ScoreSummary: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { attempt } = location.state || {};

  const handlePlayAgain = () => {
    clearPlayerData();
    navigate('/quiz');
  };

  if (!attempt) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No quiz results found.</p>
          <Link to="/quiz" className="text-blue-600 hover:text-blue-800">
            Start a new quiz
          </Link>
        </div>
      </div>
    );
  }

  const percentage = Math.round((attempt.score / attempt.totalQuestions) * 100);
  const motivationalMessage = getMotivationalMessage(attempt.score, attempt.totalQuestions);
  const scoreColor = getScoreColor(attempt.score, attempt.totalQuestions);

  const averageTimePerQuestion = attempt.questionTimes.reduce((sum, time) => sum + time, 0) / attempt.questionTimes.length;
  const fastestQuestion = Math.min(...attempt.questionTimes);
  const slowestQuestion = Math.max(...attempt.questionTimes);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Results Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-4">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h1>
            <p className="text-blue-100">Here's how you performed, {attempt.playerName}</p>
          </div>

          {/* Score Display */}
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className={`text-6xl font-bold ${scoreColor} mb-2`}>
                {attempt.score}/{attempt.totalQuestions}
              </div>
              <div className="text-2xl text-gray-600 mb-4">
                {percentage}% Correct
              </div>
              <div className="text-xl text-gray-800 font-medium bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                {motivationalMessage}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-800">{attempt.totalTime}s</div>
                <div className="text-sm text-blue-600">Total Time</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-800">{Math.round(averageTimePerQuestion)}s</div>
                <div className="text-sm text-green-600">Avg. per Question</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-800">{attempt.category}</div>
                <div className="text-sm text-purple-600">{attempt.difficulty} level</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Performance Breakdown */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
              Performance Breakdown
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Correct Answers:</span>
                <span className="font-semibold text-green-600">{attempt.score}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Incorrect Answers:</span>
                <span className="font-semibold text-red-600">{attempt.totalQuestions - attempt.score}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Accuracy Rate:</span>
                <span className="font-semibold text-blue-600">{percentage}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Fastest Answer:</span>
                <span className="font-semibold text-green-600">{fastestQuestion}s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Slowest Answer:</span>
                <span className="font-semibold text-orange-600">{slowestQuestion}s</span>
              </div>
            </div>
          </div>

          {/* Quiz Info */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-purple-600" />
              Quiz Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold text-gray-900 capitalize">{attempt.category}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Difficulty:</span>
                <span className="font-semibold text-gray-900 capitalize">{attempt.difficulty}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Questions:</span>
                <span className="font-semibold text-gray-900">{attempt.totalQuestions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold text-gray-900">
                  {new Date(attempt.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold text-gray-900">
                  {new Date(attempt.date).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handlePlayAgain}
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Play Again</span>
          </button>
          
          <Link
            to="/leaderboard"
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200"
          >
            <Trophy className="h-5 w-5" />
            <span>View Leaderboard</span>
          </Link>
          
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-200"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;