import { useState, useContext, useEffect } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css';
import * as themeService from '../../services/themeService'

export default function Navbar() {
  const { currentTheme, toggleTheme, isDarkMode } = useContext(ThemeContext);
  themeService.setTheme(currentTheme);
  const theme = themeService.getTheme();

  console.log(theme);
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);



  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="nav-link">
          Home
        </a>
      </div>
      <div className="nav-center">
        <a href="/projects" className="nav-link">
          Projects
        </a>
        <a href="/about" className="nav-link">
          About Me
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
      <div className="nav-right">
        <button className="nav-link toggle-mode" onClick={toggleTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
}
