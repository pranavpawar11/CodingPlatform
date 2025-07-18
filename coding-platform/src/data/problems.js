
// data/problems.js

const problems = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    maxScore: 100,
    successRate: 75,
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    inputFormat: 'First line contains the array size n.\nSecond line contains n integers.\nThird line contains the target integer.',
    outputFormat: 'Two integers representing the indices of the two numbers.',
    sampleInput: '4\n2 7 11 15\n9',
    sampleOutput: '0 1',
    constraints: '2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9',
    testCases: [
      {
        input: '4\n2 7 11 15\n9',
        expectedOutput: '0 1'
      },
      {
        input: '3\n3 2 4\n6',
        expectedOutput: '1 2'
      },
      {
        input: '2\n3 3\n6',
        expectedOutput: '0 1'
      }
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Your code here
    
}

int main() {
    int n;
    cin >> n;
    
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    
    int target;
    cin >> target;
    
    vector<int> result = twoSum(nums, target);
    cout << result[0] << " " << result[1] << endl;
    
    return 0;
}`,
      python: `def two_sum(nums, target):
    # Your code here
    pass

n = int(input())
nums = list(map(int, input().split()))
target = int(input())

result = two_sum(nums, target)
print(result[0], result[1])`,
      java: `import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Your code here
        return new int[]{};
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] nums = new int[n];
        
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }
        
        int target = scanner.nextInt();
        
        int[] result = twoSum(nums, target);
        System.out.println(result[0] + " " + result[1]);
        
        scanner.close();
    }
}`
    }
  },
  {
    id: 'reverse-string',
    title: 'Reverse String',
    difficulty: 'Easy',
    category: 'Strings',
    maxScore: 50,
    successRate: 85,
    description: 'Write a function that reverses a string. The input string is given as an array of characters.',
    inputFormat: 'A string to be reversed.',
    outputFormat: 'The reversed string.',
    sampleInput: 'hello',
    sampleOutput: 'olleh',
    constraints: '1 <= s.length <= 10^5',
    testCases: [
      {
        input: 'hello',
        expectedOutput: 'olleh'
      },
      {
        input: 'world',
        expectedOutput: 'dlrow'
      }
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

string reverseString(string s) {
    // Your code here
    
}

int main() {
    string s;
    cin >> s;
    
    string result = reverseString(s);
    cout << result << endl;
    
    return 0;
}`,
      python: `def reverse_string(s):
    # Your code here
    pass

s = input().strip()
result = reverse_string(s)
print(result)`,
      java: `import java.util.*;

public class Main {
    public static String reverseString(String s) {
        // Your code here
        return "";
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.next();
        
        String result = reverseString(s);
        System.out.println(result);
        
        scanner.close();
    }
}`
    }
  }
];

export default problems;
