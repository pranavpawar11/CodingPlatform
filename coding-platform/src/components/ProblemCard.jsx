import React from 'react';
import { Link } from 'react-router-dom';

const ProblemCard = ({ problem }) => {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-[#1f202a] rounded-lg p-6 mb-4 hover:bg-[#35363f] transition-colors cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-medium text-white mb-2">{problem.title}</h3>
          <div className="flex items-center space-x-4 text-sm mb-4">
            <span className={`${getDifficultyColor(problem.difficulty)} font-medium`}>
              {problem.difficulty}
            </span>
            <span className="text-gray-400">
              {problem.category}
            </span>
            <span className="text-gray-400">
              Max Score: {problem.maxScore}
            </span>
            <span className="text-gray-400">
              Success Rate: {problem.successRate}%
            </span>
          </div>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {problem.description}
          </p>
          <div className="flex items-center space-x-2">
            {problem.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-6">
          <button className="text-gray-400 hover:text-yellow-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
          <Link 
            to={`/problems/${problem.id}`}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Solve Challenge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;