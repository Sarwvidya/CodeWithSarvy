import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { LearningSection } from './components/LearningSection';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('sarvy_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sarvy_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      {/* Minimal Top Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main className="content-wrap">
        {/* 1. Simple About Me Section */}
        <About />

        {/* 2. Minimal Learning Section with Topic Cards */}
        <LearningSection />
      </main>

      {/* 3. Simple Footer with GitHub and LinkedIn */}
      <Footer />
    </div>
  );
}

export default App;
