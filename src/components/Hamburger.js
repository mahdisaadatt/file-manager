'use client';
import React, { useEffect, useRef } from 'react';

const Hamburger = ({ isMenuOpen, setMenuOpen }) => {
  const ref = useRef();
  useEffect(() => {
    const onHamburClick = e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setMenuOpen(false);
    };
    document.body.addEventListener('click', onHamburClick);
    return () => {
      document.body.removeEventListener('click', onHamburClick);
    };
  }, []);
  return (
    <button
      className="w-5 h-10"
      ref={ref}
      onClick={() => setMenuOpen(!isMenuOpen)}
    >
      <span
        className={`burger before:bg-light-0 after:bg-light-0 ${
          isMenuOpen ? 'active-burger' : ''
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
