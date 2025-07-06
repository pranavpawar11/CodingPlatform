import React from 'react';

const Sidebar = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  return (
    <div className="w-80 bg-[#121418] text-white p-6 min-h-screen">

      <div className="space-y-6">
        {/* STATUS Filter */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-200">STATUS</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.status.includes('solved')}
                onChange={(e) => handleCheckboxChange('status', 'solved')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Solved</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.status.includes('unsolved')}
                onChange={(e) => handleCheckboxChange('status', 'unsolved')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Unsolved</span>
            </label>
          </div>
        </div>

        {/* SKILLS Filter */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-200">SKILLS</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.skills.includes('Problem Solving (Advanced)')}
                onChange={(e) => handleCheckboxChange('skills', 'Problem Solving (Advanced)')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Problem Solving (Advanced)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.skills.includes('Problem Solving (Basic)')}
                onChange={(e) => handleCheckboxChange('skills', 'Problem Solving (Basic)')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Problem Solving (Basic)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.skills.includes('Problem Solving (Intermediate)')}
                onChange={(e) => handleCheckboxChange('skills', 'Problem Solving (Intermediate)')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Problem Solving (Intermediate)</span>
            </label>
          </div>
        </div>

        {/* DIFFICULTY Filter */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-200">DIFFICULTY</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.difficulty.includes('Easy')}
                onChange={(e) => handleCheckboxChange('difficulty', 'Easy')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Easy</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.difficulty.includes('Medium')}
                onChange={(e) => handleCheckboxChange('difficulty', 'Medium')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Medium</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.difficulty.includes('Hard')}
                onChange={(e) => handleCheckboxChange('difficulty', 'Hard')}
                className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-gray-300">Hard</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;