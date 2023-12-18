import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white rounded-lg px-8 py-3 text-base tablet:text-md font-semibold leading-snug bg-accent-0 text-dark-0 transition-shadow uppercase outline-1 outline-offset-2 outline-accent-0 ring-2 ring-accent-0/30 hover:ring-[4px] hover:ring-accent-0/40 focus:outline"
    >
      {children}
    </button>
  );
};

export default Button;
