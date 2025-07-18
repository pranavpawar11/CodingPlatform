// hooks/useCodeExecution.js

import { useState, useCallback } from 'react';
import judge0Service from '../services/judge0Service';

const useCodeExecution = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [error, setError] = useState(null);

  const runCode = useCallback(async (language, code, input = '') => {
    setIsRunning(true);
    setError(null);
    setExecutionResult(null);

    try {
      const result = await judge0Service.executeCode(language, code, input);
      setExecutionResult(result);
      return result;
    } catch (err) {
      setError(err.message);
      console.error('Code execution error:', err);
      return null;
    } finally {
      setIsRunning(false);
    }
  }, []);

  const submitCode = useCallback(async (language, code, testCases = []) => {
    setIsSubmitting(true);
    setError(null);
    setExecutionResult(null);

    try {
      const results = [];
      
      // Run code against all test cases
      for (const testCase of testCases) {
        const result = await judge0Service.executeCode(language, code, testCase.input);
        results.push({
          ...result,
          expectedOutput: testCase.expectedOutput,
          passed: result.isSuccess && result.stdout.trim() === testCase.expectedOutput.trim()
        });
      }

      // Calculate overall result
      const passedTests = results.filter(r => r.passed).length;
      const totalTests = results.length;
      const allPassed = passedTests === totalTests;

      const submissionResult = {
        status: allPassed ? 'accepted' : 'failed',
        message: allPassed 
          ? 'Congratulations! All test cases passed.' 
          : `${passedTests}/${totalTests} test cases passed.`,
        testResults: results,
        passedTests,
        totalTests,
        score: allPassed ? 100 : Math.round((passedTests / totalTests) * 100)
      };

      setExecutionResult(submissionResult);
      return submissionResult;
    } catch (err) {
      setError(err.message);
      console.error('Code submission error:', err);
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setExecutionResult(null);
    setError(null);
  }, []);

  return {
    isRunning,
    isSubmitting,
    executionResult,
    error,
    runCode,
    submitCode,
    clearResults
  };
};

export default useCodeExecution;
