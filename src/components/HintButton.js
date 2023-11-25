import Link from 'next/link';
import React from 'react';

const HintButton = ({ text, href }) => {
  return (
    <Link
      className="text-blue-600 text-xsm font-semibold hover:text-opacity-80 transition-colors"
      href={href}
    >
      {text}
    </Link>
  );
};

export default HintButton;
