'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Filter = ({ options, dropdownTitle, selected, setSelectedChange }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onAvatarClick = e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setPopoverOpen(false);
    };
    document.body.addEventListener('click', onAvatarClick);
    return () => {
      document.body.removeEventListener('click', onAvatarClick);
    };
  }, []);
  const renderedOptions = options.map(option => {
    const onBtnClick = () => {
      setSelectedChange(option);
      setPopoverOpen(false);
    };
    return (
      <li
        key={option.value}
        onClick={onBtnClick}
        className="hover:bg-gray-200 text-center rounded-lg transition-all p-1"
      >
        <button className="w-full flex items-center">{option.label}</button>
      </li>
    );
  });
  return (
    <div className="relative inline-block">
      <div
        className="flex justify-around gap-4 w-48 items-center group h-12 px-6 bg-gray-300 rounded-lg cursor-pointer"
        onClick={() => setPopoverOpen(!isPopoverOpen)}
        ref={ref}
      >
        <div className="flex items-center gap-1">
          <span className="font-semibold">
            {selected.label ? selected.label : dropdownTitle}
          </span>
        </div>
        <ChevronDownIcon
          className={`w-4 font-bold ${
            isPopoverOpen ? '-rotate-180' : ''
          } transition-all`}
        />
      </div>
      <ul
        className={`bg-gray-300 p-4 backdrop-blur absolute mt-2 origin-top-right w-full z-50 text-lg rounded-lg ${
          isPopoverOpen
            ? 'opacity-100 translate-y-0 scale-100 visible'
            : 'opacity-0 translate-y-2 scale-105 invisible'
        } transition-all`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
        onClick={e => e.stopPropagation()}
      >
        {renderedOptions}
      </ul>
    </div>
  );
};

export default Filter;
