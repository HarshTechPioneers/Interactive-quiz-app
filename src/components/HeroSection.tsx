import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Trophy, Timer, BookOpen, Users, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg">
                  🧠 Challenge Your Mind
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Become a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient-x">
                  {" "}Quiz{" "}
                </span>
                Champion
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Dive into our interactive quiz platform with hundreds of questions across multiple categories. 
                Test your knowledge, track your progress, and compete with others in real-time challenges.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Timer className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Real-time Timer</span>
                  <p className="text-sm text-gray-600">15s per question</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Leaderboards</span>
                  <p className="text-sm text-gray-600">Compete globally</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-800">300+ Questions</span>
                  <p className="text-sm text-gray-600">5 categories</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Instant Results</span>
                  <p className="text-sm text-gray-600">Real-time feedback</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">300+</div>
                <div className="text-sm text-gray-600">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Difficulty Levels</div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-6">
              <Link
                to="/quiz"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="relative z-10 ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              
              <p className="text-sm text-gray-500 mt-3">
                ✨ No registration required • Start immediately
              </p>
            </div>
          </div>

          {/* Right Content - Enhanced Animated Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <svg
                width="600"
                height="500"
                viewBox="0 0 600 500"
                className="w-full max-w-lg lg:max-w-xl"
              >
                {/* Background Glow */}
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8fafc" />
                  </linearGradient>
                  <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>

                {/* Background Glow Effect */}
                <circle cx="300" cy="250" r="200" fill="url(#glow)" className="animate-pulse-slow" />
                
                {/* Main Quiz Card */}
                <rect
                  x="150"
                  y="150"
                  width="300"
                  height="200"
                  rx="20"
                  fill="url(#cardGradient)"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                  className="animate-bounce-subtle drop-shadow-2xl"
                />
                
                {/* Question Header */}
                <rect x="170" y="170" width="260" height="30" rx="15" fill="#f1f5f9" />
                <text x="300" y="190" textAnchor="middle" className="fill-gray-600 text-sm font-medium">
                  Question 5 of 10
                </text>
                
                {/* Question Text */}
                <text x="300" y="220" textAnchor="middle" className="fill-gray-800 text-lg font-bold">
                  What is React?
                </text>
                
                {/* Answer Options with Hover Effects */}
                <g className="answer-options">
                  <rect x="170" y="240" width="120" height="25" rx="12" fill="#dbeafe" className="animate-pulse" />
                  <text x="230" y="257" textAnchor="middle" className="fill-blue-700 text-sm font-medium">A) Library</text>
                  
                  <rect x="310" y="240" width="120" height="25" rx="12" fill="#dcfce7" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <text x="370" y="257" textAnchor="middle" className="fill-green-700 text-sm font-medium">B) Framework</text>
                  
                  <rect x="170" y="275" width="120" height="25" rx="12" fill="#fef3c7" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <text x="230" y="292" textAnchor="middle" className="fill-yellow-700 text-sm font-medium">C) Language</text>
                  
                  <rect x="310" y="275" width="120" height="25" rx="12" fill="#fce7f3" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <text x="370" y="292" textAnchor="middle" className="fill-pink-700 text-sm font-medium">D) Database</text>
                </g>
                
                {/* Progress Bar */}
                <rect x="170" y="320" width="260" height="8" rx="4" fill="#f1f5f9" />
                <rect x="170" y="320" width="130" height="8" rx="4" fill="url(#buttonGradient)" className="animate-pulse" />
                
                {/* Timer Circle */}
                <circle cx="480" cy="120" r="35" fill="#ef4444" className="animate-spin-slow" />
                <circle cx="480" cy="120" r="25" fill="#ffffff" />
                <text x="480" y="127" textAnchor="middle" className="fill-red-600 text-lg font-bold">12</text>
                
                {/* Floating Elements */}
                <g className="floating-elements">
                  {/* Trophy */}
                  <g className="animate-bounce" style={{ animationDelay: '1s' }}>
                    <path d="M100 380 L110 360 L120 380 L130 360 L140 380 L125 400 L115 400 Z" fill="#fbbf24" />
                    <circle cx="120" cy="405" r="8" fill="#f59e0b" />
                  </g>
                  
                  {/* Stars */}
                  {[...Array(8)].map((_, i) => (
                    <g key={i} className="animate-twinkle" style={{ animationDelay: `${i * 0.3}s` }}>
                      <path
                        d={`M${80 + i * 60} ${60 + Math.sin(i) * 30} L${82 + i * 60} ${65 + Math.sin(i) * 30} L${87 + i * 60} ${65 + Math.sin(i) * 30} L${84 + i * 60} ${68 + Math.sin(i) * 30} L${85 + i * 60} ${73 + Math.sin(i) * 30} L${80 + i * 60} ${70 + Math.sin(i) * 30} L${75 + i * 60} ${73 + Math.sin(i) * 30} L${76 + i * 60} ${68 + Math.sin(i) * 30} L${73 + i * 60} ${65 + Math.sin(i) * 30} L${78 + i * 60} ${65 + Math.sin(i) * 30} Z`}
                        fill="#fbbf24"
                      />
                    </g>
                  ))}
                  
                  {/* Achievement Badges */}
                  <circle cx="520" cy="380" r="20" fill="#10b981" className="animate-bounce" style={{ animationDelay: '2s' }} />
                  <text x="520" y="385" textAnchor="middle" className="fill-white text-sm font-bold">✓</text>
                  
                  <circle cx="80" cy="280" r="15" fill="#8b5cf6" className="animate-bounce" style={{ animationDelay: '1.5s' }} />
                  <text x="80" y="285" textAnchor="middle" className="fill-white text-xs font-bold">!</text>
                </g>
                
                {/* Particle Effects */}
                <g className="particles">
                  {[...Array(12)].map((_, i) => (
                    <circle
                      key={i}
                      cx={100 + (i * 40) + Math.sin(i) * 20}
                      cy={100 + (i * 30) + Math.cos(i) * 20}
                      r="2"
                      fill="#3b82f6"
                      className="animate-twinkle"
                      style={{ animationDelay: `${i * 0.2}s` }}
                      opacity="0.6"
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-8 mb-8">
            
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span className="text-sm">Join thousands of learners</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Award className="h-5 w-5" />
              <span className="text-sm">Earn achievements</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Instant feedback</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Ready to test your knowledge? Our quiz platform offers an engaging way to learn and improve your skills 
            across multiple programming languages and technologies. Start your journey today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;