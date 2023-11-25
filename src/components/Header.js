'use client';
import { useContext } from 'react';
import Popover from './Popover';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';

const Header = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <header className="bg-white border-b sticky top-0 z-50 border-gray-300 bg-opacity-60 p-4 backdrop-filter backdrop-blur-2xl">
      <nav className="max-w-screen-wide mx-auto flex items-center justify-between flex-wrap gap-2">
        <Link
          href="/"
          className="text-2xl font-bold hover:scale-110 transition"
        >
          فایل ها
        </Link>
        {isLoggedIn ? (
          <div className="flex flex-row justify-center items-center gap-2">
            <Popover />
            <Link
              href="/properties/add"
              className="p-3 bg-green-300 rounded-lg hover:scale-110 transition"
            >
              ایجاد فایل جدید
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
