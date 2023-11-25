import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

const Badge = ({ star }) => {
  return (
    <span
      className={`p-2 rounded-md text-xs w-9 h-2 flex items-center text-center justify-between ${
        star >= 0 && star <= 2
          ? 'bg-red-400'
          : star === 3
          ? 'bg-green-400'
          : 'bg-yellow-400'
      }`}
    >
      {star}
      <StarIcon className="w-3" />
    </span>
  );
};

export default Badge;
