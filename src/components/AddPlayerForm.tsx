import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, BookOpen, BarChart3, Play, Sparkles, Target, Clock } from 'lucide-react';
import { categories, difficulties } from '../data/questions';
import { savePlayer } from '../utils/localStorage';

const AddPlayerForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Player name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a quiz category';
    }

    if (!formData.difficulty) {
      newErrors.difficulty = 'Please select a difficulty level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Save player data to localStorage
      savePlayer(formData);
      
      // Navigate to quiz start
      navigate('/quiz/start');
    }
  };

  const isFormValid = formData.name.trim() && formData.category && formData.difficulty;

  const getDifficultyInfo = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return { questions: '15-20', time: '5-7 min', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
      case 'medium':
        return { questions: '20-25', time: '7-10 min', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
      case 'hard':
        return { questions: '25+', time: '10-15 min', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
      default:
        return { questions: '', time: '', color: '', bg: '', border: '' };
    }
  };

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'javascript':
        return { icon: '🟨', description: 'Core JavaScript concepts, ES6+, and modern features' };
      case 'react':
        return { icon: '⚛️', description: 'React hooks, components, state management, and best practices' };
      case 'css':
        return { icon: '🎨', description: 'Styling, layouts, animations, and responsive design' };
      case 'html':
        return { icon: '📄', description: 'Semantic HTML, accessibility, and web standards' };
      case 'general':
        return { icon: '💻', description: 'Programming fundamentals, algorithms, and computer science' };
      default:
        return { icon: '', description: '' };
    }
  };

  const difficultyInfo = getDifficultyInfo(formData.difficulty);
  const categoryInfo = getCategoryInfo(formData.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-24 pb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce-subtle">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">Ready for the Challenge?</h1>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Customize your quiz experience and embark on an exciting journey of knowledge discovery
              </p>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Player Name Section */}
            <div className="space-y-3">
              <label htmlFor="name" className="block text-lg font-bold text-gray-800 flex items-center">
                <User className="h-5 w-5 mr-3 text-blue-600" />
                What should we call you?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name or nickname"
                className={`w-full px-6 py-4 border-2 rounded-xl text-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 ${
                  errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-sm flex items-center animate-fade-in">
                  <span className="mr-2">⚠️</span>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Category Selection */}
            <div className="space-y-4">
              <label htmlFor="category" className="block text-lg font-bold text-gray-800 flex items-center">
                <BookOpen className="h-5 w-5 mr-3 text-purple-600" />
                Choose Your Arena
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 border-2 rounded-xl text-lg focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 ${
                  errors.category ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <option value="">Select your preferred category</option>
                {categories.filter(cat => cat.value !== 'all').map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              
              {/* Category Info Card */}
              {formData.category && categoryInfo.description && (
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 animate-fade-in">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{categoryInfo.icon}</span>
                    <div>
                      <h4 className="font-semibold text-purple-800 capitalize">{formData.category}</h4>
                      <p className="text-purple-600 text-sm">{categoryInfo.description}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {errors.category && (
                <p className="text-red-600 text-sm flex items-center animate-fade-in">
                  <span className="mr-2">⚠️</span>
                  {errors.category}
                </p>
              )}
            </div>

            {/* Difficulty Selection */}
            <div className="space-y-4">
              <label htmlFor="difficulty" className="block text-lg font-bold text-gray-800 flex items-center">
                <BarChart3 className="h-5 w-5 mr-3 text-green-600" />
                Select Your Challenge Level
              </label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 border-2 rounded-xl text-lg focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 ${
                  errors.difficulty ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <option value="">Choose difficulty level</option>
                {difficulties.filter(diff => diff.value !== 'all').map((difficulty) => (
                  <option key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </option>
                ))}
              </select>
              
              {/* Difficulty Info Card */}
              {formData.difficulty && difficultyInfo.questions && (
                <div className={`${difficultyInfo.bg} border ${difficultyInfo.border} rounded-xl p-4 animate-fade-in`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Target className={`h-5 w-5 ${difficultyInfo.color}`} />
                      <div>
                        <p className="text-sm text-gray-600">Questions</p>
                        <p className={`font-semibold ${difficultyInfo.color}`}>{difficultyInfo.questions}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className={`h-5 w-5 ${difficultyInfo.color}`} />
                      <div>
                        <p className="text-sm text-gray-600">Est. Time</p>
                        <p className={`font-semibold ${difficultyInfo.color}`}>{difficultyInfo.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className={`h-5 w-5 ${difficultyInfo.color}`} />
                      <div>
                        <p className="text-sm text-gray-600">Level</p>
                        <p className={`font-semibold ${difficultyInfo.color} capitalize`}>{formData.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {errors.difficulty && (
                <p className="text-red-600 text-sm flex items-center animate-fade-in">
                  <span className="mr-2">⚠️</span>
                  {errors.difficulty}
                </p>
              )}
            </div>

            {/* Enhanced Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`group w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden ${
                  isFormValid
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isFormValid && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <Play className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Begin Quiz Adventure</span>
                {isFormValid && (
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                )}
              </button>

              {!isFormValid && (
                <p className="text-center text-gray-500 mt-4 animate-fade-in">
                  Please complete all fields to start your quiz journey
                </p>
              )}
            </div>
          </form>

          {/* Enhanced Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Target className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Real-time scoring</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5 text-purple-500" />
                <span className="text-sm">15 seconds per question</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Sparkles className="h-5 w-5 text-cyan-500" />
                <span className="text-sm">Instant feedback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlayerForm;