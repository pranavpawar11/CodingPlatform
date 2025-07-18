# CodingPlatform

## 🎯 Project Overview

CodingPlatform is a web-based coding challenge platform that allows users to solve DSA problems and execute their code in real-time. The platform runs user-submitted code against hardcoded test cases and provides immediate feedback on correctness.

## 📷 Screenshots

### Problem List Page
![Problem List](./screenshots/problem-list.png)
*Browse through available DSA problems with clean card-based layout*

### Problem Solving Interface
![Problem Page](./screenshots/problem-page.png)
*Interactive code editor with problem description and real-time execution*

### Code Execution Results
![Code Execution](./screenshots/code-execution.png)
*Real-time code execution with test case validation and output display*

### Responsive Design
![Mobile View](./screenshots/mobile-view.png)
*Fully responsive design optimized for mobile and tablet devices*

## ✨ Features

- **Problem Browser**: View a list of available DSA problems
- **Code Editor**: Interactive code editor for writing solutions
- **Real-time Execution**: Execute code and view output instantly
- **Test Case Validation**: Automatic testing against predefined test cases
- **Clean UI**: Modern, responsive design built with Tailwind CSS
- **Problem Navigation**: Seamless navigation between problem list and individual problems

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Code Execution**: Judge0 API integration
- **Build Tool**: Create React App (assumed)

## 📁 Project Structure

```
src/
├── components/
│   ├── CodeEditor.jsx      # Interactive code editor component
│   ├── Header.jsx          # Navigation header component
│   ├── ProblemCard.jsx     # Problem display card component
│   └── Sidebar.jsx         # Sidebar navigation component
├── data/
│   └── problems.js         # Static problem data and test cases
├── hooks/
│   └── useCodeExecution.js # Custom hook for code execution logic
├── pages/
│   ├── ProblemList.jsx     # Problems listing page
│   └── ProblemPage.jsx     # Individual problem solving page
└── services/
    └── judge0Service.js    # Judge0 API integration service
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/CodingPlatform.git
cd CodingPlatform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📸 Adding Screenshots

To add screenshots to your README:

1. Create a `screenshots` folder in your project root
2. Take screenshots of your application:
   - `problem-list.png` - Your problems listing page
   - `problem-page.png` - Individual problem with code editor
   - `code-execution.png` - Code execution results
   - `mobile-view.png` - Mobile responsive view
3. Save the images in the `screenshots` folder
4. The README will automatically display them using the paths shown above

## 🔧 Configuration

### Judge0 API Setup

The project uses Judge0 API for code execution. Make sure to:

1. Configure your Judge0 API endpoint in `services/judge0Service.js`
2. Set up proper API keys if required
3. Ensure CORS is properly configured for your domain

## 📋 Current Implementation

### Completed Features

- ✅ Problem listing page with problem cards
- ✅ Individual problem page with code editor
- ✅ Code execution with real-time output
- ✅ Test case validation against hardcoded cases
- ✅ Responsive UI with Tailwind CSS
- ✅ Navigation between pages

### Architecture Highlights

- **Component-based**: Modular React components for reusability
- **Custom Hooks**: Centralized code execution logic
- **Service Layer**: Abstracted API communication
- **Static Data**: Problem definitions stored in JavaScript objects

## 🎯 Use Cases

This platform is ideal for:

- Coding interview preparation
- Algorithm practice
- Educational purposes
- Technical assessment platforms
- Coding bootcamps and courses

## 🔮 Future Enhancements

- User authentication and profiles
- Dynamic problem loading from database
- Multiple programming language support
- Performance metrics and analytics
- Social features (leaderboards, discussions)
- Advanced test case management
- Code submission history

## 🤝 Contributing

This is a proof-of-concept project developed for an internship task. For any suggestions or improvements, please feel free to open an issue or submit a pull request.

## 📄 License

This project is created for educational and demonstration purposes.

## 🙏 Acknowledgments

- Inspired by HackerRank's coding platform
- Built as part of an internship technical assessment
- Uses Judge0 API for secure code execution

---

**Note**: This is a proof-of-concept implementation focusing on core functionality. The platform demonstrates the fundamental features of a coding challenge website with emphasis on code execution and problem solving workflow.
