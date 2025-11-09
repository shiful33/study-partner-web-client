import React, { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import themes from 'daisyui/theme/object';

const Header = () => {

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="navbar bg-base-100 shadow-md"> 
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Study Partner</a>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Partners</a></li>
        </ul>
        
        <ThemeToggle /> 
        
      </div>
    </header>
  );
};

export default Header;