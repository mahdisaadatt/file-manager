import React from 'react';
import Link from 'next/link';

const LinkButton = ({ href, text, textLink }) => {
  return (
    <div className="flex items-center gap-1">
      <p>{text}</p>
      <Link
        href={href}
        className="px-4 py-1 bg-cyan-500 text-white rounded-lg hover:scale-110 transition"
      >
        {textLink}
      </Link>
    </div>
  );
};

export default LinkButton;
