import React from 'react';

const SecondaryButton = ({ children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="rounded-lg p-3 text-sm font-semibold leading-snug bg-light-0 text-dark-0 transition-shadow uppercase hover:ring-[2px] hover:ring-light-1 focus:outline focus:outline-light-1"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
