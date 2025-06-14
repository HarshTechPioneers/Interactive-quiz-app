import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-200 animate-bounce">404</div>
          <div className="relative -mt-8">
            <Search className="h-16 w-16 text-blue-600 mx-auto animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into cyberspace. 
            Don't worry though, even the best developers get lost sometimes! 🚀
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Home className="h-5 w-5" />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Fun Message */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Pro Tip:</strong> While you're here, why not test your knowledge with our interactive quizzes? 🧠
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🤔</div>
        <div className="absolute top-40 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: '1s' }}>❓</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float opacity-20" style={{ animationDelay: '2s' }}>🔍</div>
      </div>
    </div>
  );
};

export default NotFoundPage;