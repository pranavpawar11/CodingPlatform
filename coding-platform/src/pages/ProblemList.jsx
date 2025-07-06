import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import ProblemCard from "../components/ProblemCard";
import problems from "../data/problems";

const ProblemList = () => {
  const [filters, setFilters] = useState({
    status: [],
    skills: [],
    difficulty: [],
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      // Status filter
      if (filters.status.length > 0) {
        const isSolved = problem.solved;
        const statusMatch = filters.status.some((status) => {
          if (status === "solved") return isSolved;
          if (status === "unsolved") return !isSolved;
          return false;
        });
        if (!statusMatch) return false;
      }

      // Skills filter
      if (filters.skills.length > 0) {
        const skillsMatch = filters.skills.includes(problem.category);
        if (!skillsMatch) return false;
      }

      // Difficulty filter
      if (filters.difficulty.length > 0) {
        const difficultyMatch = filters.difficulty.includes(problem.difficulty);
        if (!difficultyMatch) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#121418]">
      {/* Header Section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header with Points and Rank */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Prepare</span>
              <span>›</span>
              <span>Problem Solving</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-orange-400 font-medium">
                30 more points to get your first star!
              </span>
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <span>Rank: 6011335</span>
                <span>|</span>
                <span>Points: 0/30</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="pb-4">
            <h1 className="text-3xl font-bold text-white mb-4">
              Problem Solving
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Main Content Area */}
          <div className="flex-1">
          
            <div className="py-3">
              <nav className="flex items-center space-x-2 text-sm text-gray-400">
                <span className="text-blue-500">
                  Algorithms
                </span>
                <span>|</span>
                <span className="text-gray-500">Data Structures</span>
              </nav>
            </div>

            <div className="space-y-4 py-5">
              {filteredProblems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>

            {filteredProblems.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-xl font-medium mb-2">No problems found</p>
                  <p className="text-gray-500">
                    Try adjusting your filters to see more problems
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <Sidebar filters={filters} onFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemList;
