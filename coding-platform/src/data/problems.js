const problems = [
  {
    id: "simple-array-sum",
    title: "Simple Array Sum",
    difficulty: "Easy",
    category: "Problem Solving (Basic)",
    maxScore: 10,
    successRate: 95.4,
    solved: false,
    tags: ["Array"],
    description: "Given an array of integers, find the sum of its elements.",
    inputFormat: "First line contains n (size of array). Second line contains array elements.",
    outputFormat: "Print the sum as a single integer.",
    sampleInput: "6\n1 2 3 4 10 11",
    sampleOutput: "31",
    constraints: "0 < n, ar[i] ≤ 1000",
    starterCode: {
      python: `def simpleArraySum(ar):\n    # Write your code here`,
      java: `public static int simpleArraySum(List<Integer> ar) {\n    // Write your code here\n}`,
      javascript: `function simpleArraySum(ar) {\n    // Write your code here\n}`,
      cpp: `int simpleArraySum(vector<int> ar) {\n    // Write your code here\n}`,
      csharp: `public static int SimpleArraySum(List<int> ar)\n{\n    // Write your code here\n}`
    }
  },
  {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    category: "Problem Solving (Intermediate)",
    maxScore: 20,
    successRate: 78.2,
    solved: true,
    tags: ["Array", "Hash Table"],
    description: "Determine if a 9x9 Sudoku board is valid.",
    inputFormat: "9x9 grid of characters (1-9 or '.')",
    outputFormat: "Return true if valid, false otherwise",
    sampleInput: `[["5","3",".",".","7",".",".",".","."],\n["6",".",".","1","9","5",".",".","."],\n[".","9","8",".",".",".",".","6","."],\n["8",".",".",".","6",".",".",".","3"],\n["4",".",".","8",".","3",".",".","1"],\n["7",".",".",".","2",".",".",".","6"],\n[".","6",".",".",".",".","2","8","."],\n[".",".",".","4","1","9",".",".","5"],\n[".",".",".",".","8",".",".","7","9"]]`,
    sampleOutput: "true",
    constraints: "board.length == 9\nboard[i].length == 9",
    starterCode: {
      python: `def isValidSudoku(board):\n    # Write your code here`,
      java: `public boolean isValidSudoku(char[][] board) {\n    // Write your code here\n}`,
      javascript: `function isValidSudoku(board) {\n    // Write your code here\n}`,
      cpp: `bool isValidSudoku(vector<vector<char>>& board) {\n    // Write your code here\n}`,
      csharp: `public bool IsValidSudoku(char[][] board)\n{\n    // Write your code here\n}`
    }
  },
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Problem Solving (Advanced)",
    maxScore: 30,
    successRate: 62.5,
    solved: false,
    tags: ["Linked List", "Heap"],
    description: "Merge k sorted linked lists into one sorted list.",
    inputFormat: "Array of linked lists",
    outputFormat: "Return merged linked list",
    sampleInput: "[[1,4,5],[1,3,4],[2,6]]",
    sampleOutput: "[1,1,2,3,4,4,5,6]",
    constraints: "k == lists.length\n0 <= k <= 10^4",
    starterCode: {
      python: `def mergeKLists(lists):\n    # Write your code here`,
      java: `public ListNode mergeKLists(ListNode[] lists) {\n    // Write your code here\n}`,
      javascript: `function mergeKLists(lists) {\n    // Write your code here\n}`,
      cpp: `ListNode* mergeKLists(vector<ListNode*>& lists) {\n    // Write your code here\n}`,
      csharp: `public ListNode MergeKLists(ListNode[] lists)\n{\n    // Write your code here\n}`
    }
  },
  {
    id: "palindrome-check",
    title: "Palindrome Check",
    difficulty: "Easy",
    category: "Problem Solving (Basic)",
    maxScore: 10,
    successRate: 91.3,
    solved: true,
    tags: ["String"],
    description: "Check if a string is a palindrome.",
    inputFormat: "A string",
    outputFormat: "Return true if palindrome, false otherwise",
    sampleInput: `"racecar"`,
    sampleOutput: "true",
    constraints: "1 <= s.length <= 10^5",
    starterCode: {
      python: `def isPalindrome(s):\n    # Write your code here`,
      java: `public boolean isPalindrome(String s) {\n    // Write your code here\n}`,
      javascript: `function isPalindrome(s) {\n    // Write your code here\n}`,
      cpp: `bool isPalindrome(string s) {\n    // Write your code here\n}`,
      csharp: `public bool IsPalindrome(string s)\n{\n    // Write your code here\n}`
    }
  },

  {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Problem Solving (Intermediate)",
    maxScore: 25,
    successRate: 45.7,
    solved: false,
    tags: ["String", "Dynamic Programming"],
    description: "Find the longest palindromic substring in a string.",
    inputFormat: "A string s",
    outputFormat: "Return the longest palindromic substring",
    sampleInput: `"babad"`,
    sampleOutput: `"bab"`,
    constraints: "1 <= s.length <= 1000",
    starterCode: {
      python: `def longestPalindrome(s):\n    # Write your code here`,
      java: `public String longestPalindrome(String s) {\n    // Write your code here\n}`,
      javascript: `function longestPalindrome(s) {\n    // Write your code here\n}`,
      cpp: `string longestPalindrome(string s) {\n    // Write your code here\n}`,
      csharp: `public string LongestPalindrome(string s)\n{\n    // Write your code here\n}`
    }
  }
];

export default problems;