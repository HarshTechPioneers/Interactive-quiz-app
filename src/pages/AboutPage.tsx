import React from 'react';
import { Code, Heart, Zap, Users, Github, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About QuizMaster</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern, interactive quiz platform built with passion and cutting-edge technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>React 18</strong> - Modern UI library with hooks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>TypeScript</strong> - Type-safe development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Tailwind CSS</strong> - Utility-first styling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>React Router</strong> - Client-side routing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Vite</strong> - Lightning-fast build tool</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Lucide React</strong> - Beautiful icons</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Real-time timer with visual countdown</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Interactive answer highlighting and feedback</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Persistent data storage with localStorage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Comprehensive leaderboard with sorting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Performance analytics and insights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What I Learned</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Building QuizMaster taught me advanced React patterns, including custom hooks for timer management 
                  and complex state handling across multiple components.
                </p>
                <p>
                  I mastered TypeScript integration, creating robust type definitions that improved code reliability 
                  and developer experience throughout the application.
                </p>
                <p>
                  The project enhanced my skills in responsive design, CSS animations, and creating smooth user 
                  interactions that work seamlessly across different devices.
                </p>
                <p>
                  LocalStorage integration taught me about data persistence patterns and how to build applications 
                  that maintain state across browser sessions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center mb-4">
                <Coffee className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Fun Facts</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 font-medium">
                    🎯 This project was built in record time using modern development practices and component reusability!
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-medium">
                    🚀 The quiz engine processes answers in real-time with zero lag, thanks to optimized React patterns!
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-purple-800 font-medium">
                    💡 Every animation and transition was hand-crafted with CSS for that perfect user experience!
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    📱 Mobile-first design means it looks amazing on any device, from phones to desktops!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meme Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl text-white p-8 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Developer's Corner 😄</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-4xl mb-2">☕</div>
              <p className="text-lg font-medium mb-2">Coffee Consumed</p>
              <p className="text-3xl font-bold">∞</p>
              <p className="text-sm opacity-80">Still counting...</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-4xl mb-2">🐛</div>
              <p className="text-lg font-medium mb-2">Bugs Fixed</p>
              <p className="text-3xl font-bold">42</p>
              <p className="text-sm opacity-80">The answer to everything!</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl italic opacity-90">
              "There are only 10 types of people in the world: those who understand binary and those who don't!" 
            </p>
            <p className="text-sm opacity-70 mt-2">- Every developer ever</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">Created By HARSH</span>
            <span className="text-2xl font-bold text-gray-900">by a passionate developer</span>
          </div>
          <p className="text-gray-600 mb-6">
            QuizMaster represents the perfect blend of functionality, design, and user experience. 
            Every feature was carefully crafted to provide an engaging and educational experience.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              React Expert
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              TypeScript Enthusiast
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              UI/UX Focused
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;