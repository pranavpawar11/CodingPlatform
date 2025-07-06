import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProblemList from './pages/ProblemList';
import ProblemPage from './pages/ProblemPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<ProblemList />} />
        <Route path="/problems/:id" element={<ProblemPage />} />
      </Routes>
    </div>
  );
}

export default App;