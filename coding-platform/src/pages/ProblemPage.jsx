import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CodeEditor from '../components/CodeEditor';
import problems from '../data/problems';

const ProblemPage = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('cpp');
  const [code, setCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    const foundProblem = problems.find(p => p.id === id);
    if (foundProblem) {
      setProblem(foundProblem);
      setCode(foundProblem.starterCode[selectedLanguage] || '');
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (problem && problem.starterCode[language]) {
      setCode(problem.starterCode[language]);
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setTestResults({
        status: 'success',
        message: 'Code executed successfully!',
        output: 'Sample output based on test case'
      });
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmitCode = async () => {
    setIsSubmitting(true);
    // Simulate code submission
    setTimeout(() => {
      setTestResults({
        status: 'accepted',
        message: 'Congratulations! All test cases passed.',
        score: problem?.maxScore || 0
      });
      setIsSubmitting(false);
    }, 3000);
  };

  if (!problem) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Problem Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Problem List
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
        <nav className="flex items-center space-x-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-white">Prepare</Link>
          <span>›</span>
          <span className="text-gray-500">Problem Solving</span>
          <span>›</span>
          <span className="text-gray-500">Data Structures</span>
          <span>›</span>
          <span className="text-gray-500">Arrays</span>
          <span>›</span>
          <span className="text-white">{problem.title}</span>
        </nav>
      </div>

      <div className="flex h-screen">
        {/* Problem Description */}
        <div className="w-1/2 bg-gray-900 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">{problem.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span className={`${getDifficultyColor(problem.difficulty)} font-medium`}>
                {problem.difficulty}
              </span>
              <span className="text-gray-400">{problem.category}</span>
              <span className="text-gray-400">Max Score: {problem.maxScore}</span>
              <span className="text-gray-400">Success Rate: {problem.successRate}%</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Input Format</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                  {problem.inputFormat}
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Output Format</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                  {problem.outputFormat}
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Sample Input</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                  {problem.sampleInput}
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Sample Output</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                  {problem.sampleOutput}
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Constraints</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                  {problem.constraints}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="w-1/2 bg-gray-800 flex flex-col">
          {/* Editor Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-4">
              <select 
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="cpp">C++</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
              <span className="text-gray-400 text-sm">
                Theme: Dark
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h1m4 0h1M9 8a6 6 0 016 6v1a2 2 0 01-2 2h-1a2 2 0 01-2-2V9a2 2 0 012-2h1zM9 8V7a2 2 0 012-2h1a2 2 0 012 2v1" />
                </svg>
                <span>{isRunning ? 'Running...' : 'Run Code'}</span>
              </button>
              <button
                onClick={handleSubmitCode}
                disabled={isSubmitting}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{isSubmitting ? 'Submitting...' : 'Submit Code'}</span>
              </button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1">
            <CodeEditor
              language={selectedLanguage}
              value={code}
              onChange={setCode}
            />
          </div>

          {/* Test Results */}
          {testResults && (
            <div className="p-4 border-t border-gray-700">
              <div className={`p-3 rounded-lg ${
                testResults.status === 'accepted' ? 'bg-green-900 text-green-300' :
                testResults.status === 'success' ? 'bg-blue-900 text-blue-300' :
                'bg-red-900 text-red-300'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {testResults.status === 'accepted' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <span className="font-medium">{testResults.message}</span>
                </div>
                {testResults.output && (
                  <pre className="text-sm mt-2 p-2 bg-gray-800 rounded">
                    {testResults.output}
                  </pre>
                )}
                {testResults.score && (
                  <div className="text-sm mt-2">
                    Score: {testResults.score} points
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;