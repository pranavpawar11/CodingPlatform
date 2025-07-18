
const JUDGE0_API_URL = 'https://judge0-ce.p.rapidapi.com';
const API_KEY = 'f076b955c3mshd49838fb217cca4p135a67jsn4595e6b814d6';
const API_HOST = 'judge0-ce.p.rapidapi.com';

// Language IDs for Judge0
const LANGUAGE_IDS = {
  cpp: 54,            // C++ (GCC 9.2.0)
  java: 62,           // Java (OpenJDK 13.0.1)
  python: 71,         // Python (3.8.1)
};


class Judge0Service {
  constructor() {
    this.baseURL = JUDGE0_API_URL;
    this.headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    };
  }

  // Submit code for execution
  async submitCode(language, sourceCode, stdin = '') {
    const languageId = LANGUAGE_IDS[language];
    
    if (!languageId) {
      throw new Error(`Unsupported language: ${language}`);
    }

    const submission = {
      language_id: languageId,
      source_code: btoa(sourceCode), // Base64 encode
      stdin: stdin ? btoa(stdin) : null,
      expected_output: null
    };

    try {
      const response = await fetch(`${this.baseURL}/submissions?base64_encoded=true&wait=false`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(submission)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.token;
    } catch (error) {
      console.error('Error submitting code:', error);
      throw error;
    }
  }

  // Get execution result
  async getResult(token) {
    try {
      const response = await fetch(`${this.baseURL}/submissions/${token}?base64_encoded=true`, {
        method: 'GET',
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Decode base64 encoded fields
      if (result.stdout) {
        result.stdout = atob(result.stdout);
      }
      if (result.stderr) {
        result.stderr = atob(result.stderr);
      }
      if (result.compile_output) {
        result.compile_output = atob(result.compile_output);
      }

      return result;
    } catch (error) {
      console.error('Error getting result:', error);
      throw error;
    }
  }

  // Execute code with polling
  async executeCode(language, sourceCode, stdin = '', maxWaitTime = 10000) {
    try {
      // Submit code
      const token = await this.submitCode(language, sourceCode, stdin);
      
      // Poll for result
      const startTime = Date.now();
      while (Date.now() - startTime < maxWaitTime) {
        const result = await this.getResult(token);
        
        // Check if execution is complete
        if (result.status && result.status.id > 2) {
          return this.formatResult(result);
        }
        
        // Wait before next poll
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      throw new Error('Execution timeout');
    } catch (error) {
      console.error('Error executing code:', error);
      throw error;
    }
  }

  // Format the result for display
  formatResult(result) {
    const status = result.status;
    
    return {
      status: status.description,
      statusId: status.id,
      stdout: result.stdout || '',
      stderr: result.stderr || '',
      compileOutput: result.compile_output || '',
      time: result.time || 0,
      memory: result.memory || 0,
      exitCode: result.exit_code || 0,
      isSuccess: status.id === 3, // Accepted
      isError: status.id > 3,
      message: this.getStatusMessage(status.id)
    };
  }

  // Get human-readable status message
  getStatusMessage(statusId) {
    const statusMessages = {
      1: 'In Queue',
      2: 'Processing',
      3: 'Accepted',
      4: 'Wrong Answer',
      5: 'Time Limit Exceeded',
      6: 'Compilation Error',
      7: 'Runtime Error (SIGSEGV)',
      8: 'Runtime Error (SIGXFSZ)',
      9: 'Runtime Error (SIGFPE)',
      10: 'Runtime Error (SIGABRT)',
      11: 'Runtime Error (NZEC)',
      12: 'Runtime Error (Other)',
      13: 'Internal Error',
      14: 'Exec Format Error'
    };
    
    return statusMessages[statusId] || 'Unknown Status';
  }
}

export default new Judge0Service();