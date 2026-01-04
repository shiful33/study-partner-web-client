import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed z-50 bottom-8 right-2 md:right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 md:p-3 bg-yellow-400 text-[#001F46] rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 animate-pulse group cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;