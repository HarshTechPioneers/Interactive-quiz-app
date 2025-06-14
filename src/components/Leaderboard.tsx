import React, { useState, useEffect } from 'react';
import { Trophy, Clock, Target, Calendar, ArrowUpDown, Medal, Crown } from 'lucide-react';
import { getQuizAttempts } from '../utils/localStorage';
import { QuizAttempt } from '../types';

type SortBy = 'score' | 'time' | 'date';
type SortOrder = 'asc' | 'desc';

const Leaderboard: React.FC = () => {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>('score');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  useEffect(() => {
    const storedAttempts = getQuizAttempts();
    setAttempts(storedAttempts);
  }, []);

  const handleSort = (field: SortBy) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder(field === 'time' ? 'asc' : 'desc');
    }
  };

  const filteredAndSortedAttempts = React.useMemo(() => {
    let filtered = attempts.filter(attempt => {
      const categoryMatch = filterCategory === 'all' || attempt.category === filterCategory;
      const difficultyMatch = filterDifficulty === 'all' || attempt.difficulty === filterDifficulty;
      return categoryMatch && difficultyMatch;
    });

    return filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'score':
          const aPercentage = (a.score / a.totalQuestions) * 100;
          const bPercentage = (b.score / b.totalQuestions) * 100;
          comparison = aPercentage - bPercentage;
          break;
        case 'time':
          comparison = a.totalTime - b.totalTime;
          break;
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [attempts, sortBy, sortOrder, filterCategory, filterDifficulty]);

  const getPositionIcon = (index: number) => {
    if (index === 0) return <Crown className="h-5 w-5 text-yellow-500" />;
    if (index === 1) return <Medal className="h-5 w-5 text-gray-400" />;
    if (index === 2) return <Medal className="h-5 w-5 text-amber-600" />;
    return <span className="w-5 text-center font-bold text-gray-500">#{index + 1}</span>;
  };

  const getRowColor = (index: number) => {
    if (index === 0) return 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200';
    if (index === 1) return 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200';
    if (index === 2) return 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200';
    return 'bg-white border-gray-100';
  };

  const categories = ['all', ...new Set(attempts.map(a => a.category))];
  const difficulties = ['all', ...new Set(attempts.map(a => a.difficulty))];

  if (attempts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Quiz Results Yet</h2>
            <p className="text-gray-600 mb-8">Take your first quiz to see your results here!</p>
            <a
              href="/quiz"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your First Quiz
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Leaderboard</h1>
          <p className="text-xl text-gray-600">Track your progress and compete with others</p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'All Difficulties' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Results</label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 font-medium">
                {filteredAndSortedAttempts.length} result{filteredAndSortedAttempts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="grid grid-cols-12 gap-4 items-center font-semibold text-gray-700">
              <div className="col-span-1 text-center">Rank</div>
              <div className="col-span-3">Player</div>
              <div className="col-span-2 flex items-center cursor-pointer hover:text-blue-600" onClick={() => handleSort('score')}>
                <Target className="h-4 w-4 mr-1" />
                Score
                <ArrowUpDown className="h-3 w-3 ml-1" />
              </div>
              <div className="col-span-2 flex items-center cursor-pointer hover:text-blue-600" onClick={() => handleSort('time')}>
                <Clock className="h-4 w-4 mr-1" />
                Time
                <ArrowUpDown className="h-3 w-3 ml-1" />
              </div>
              <div className="col-span-2">Category</div>
              <div className="col-span-2 flex items-center cursor-pointer hover:text-blue-600" onClick={() => handleSort('date')}>
                <Calendar className="h-4 w-4 mr-1" />
                Date
                <ArrowUpDown className="h-3 w-3 ml-1" />
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {filteredAndSortedAttempts.map((attempt, index) => {
              const percentage = Math.round((attempt.score / attempt.totalQuestions) * 100);
              const averageTime = Math.round(attempt.questionTimes.reduce((sum, time) => sum + time, 0) / attempt.questionTimes.length);
              
              return (
                <div
                  key={attempt.id}
                  className={`grid grid-cols-12 gap-4 items-center p-4 hover:bg-gray-50 transition-colors border-l-4 ${getRowColor(index)}`}
                >
                  <div className="col-span-1 flex justify-center">
                    {getPositionIcon(index)}
                  </div>
                  
                  <div className="col-span-3">
                    <div className="font-semibold text-gray-900">{attempt.playerName}</div>
                    <div className="text-sm text-gray-500 capitalize">
                      {attempt.difficulty} • {attempt.category}
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="font-bold text-lg text-blue-600">
                      {attempt.score}/{attempt.totalQuestions}
                    </div>
                    <div className="text-sm text-gray-500">{percentage}%</div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="font-semibold text-gray-900">{attempt.totalTime}s</div>
                    <div className="text-sm text-gray-500">~{averageTime}s avg</div>
                  </div>
                  
                  <div className="col-span-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full capitalize">
                      {attempt.category}
                    </span>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(attempt.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(attempt.date).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{attempts.length}</div>
            <div className="text-sm text-gray-600">Total Attempts</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 text-center">
            <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(attempts.reduce((sum, a) => sum + (a.score / a.totalQuestions) * 100, 0) / attempts.length) || 0}%
            </div>
            <div className="text-sm text-gray-600">Average Score</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 text-center">
            <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(attempts.reduce((sum, a) => sum + a.totalTime, 0) / attempts.length) || 0}s
            </div>
            <div className="text-sm text-gray-600">Average Time</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 text-center">
            <Medal className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {Math.max(...attempts.map(a => (a.score / a.totalQuestions) * 100)) || 0}%
            </div>
            <div className="text-sm text-gray-600">Best Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;