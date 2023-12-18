import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const DropDown = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onAvatarClick = e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onAvatarClick);
    return () => {
      document.body.removeEventListener('click', onAvatarClick);
    };
  }, []);
  return (
    <div
      className="relative inline-block w-full bg-gray-300 rounded-t-md"
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      <div className="flex justify-between items-center w-full cursor-pointer p-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <ChevronDownIcon
          className={`w-5 transition ${open ? '-rotate-180' : 'rotate-0'}`}
        />
      </div>
      <ul
        className={`bg-gray-300 w-full p-4 backdrop-blur absolute origin-top-right z-40 text-lg shadow-xl rounded-b-md ${
          open
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 translate-y-2 invisible'
        } transition-all`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
        onClick={e => e.stopPropagation()}
      >
        <div className='flex flex-col gap-4'>{children}</div>
      </ul>
    </div>
  );
};

export default DropDown;
