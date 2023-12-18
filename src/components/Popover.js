'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  UserCircleIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Modal from './Modal';
import { useGlobalState } from '@/store';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

const Popover = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const { isModalOpen, setModalOpen } = useGlobalState();
  const { user, logoutUser } = useContext(UserContext);
  const router = useRouter();
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
  // const onSignOutClick = () => {
  //   setPopoverOpen(false);
  //   setModalOpen(true);
  // };
  const signOutAction = () => {
    logoutUser();
    // setPopoverOpen(false);
    // setModalOpen(false);
  };
  return (
    <>
      {/* <Modal
        action="خروج"
        message="آیا مطمعن هستید که میخواهید خارج شوید؟!"
        onClick={signOutAction}
      /> */}
      <div className="relative inline-block">
        <div
          className="flex justify-around gap-4 items-center group h-12 mobile:px-6 px-2 bg-gray-300 rounded-lg cursor-pointer"
          onClick={() => setPopoverOpen(!isPopoverOpen)}
          ref={ref}
        >
          <div className="flex items-center gap-1 px-2">
            <UserCircleIcon className="w-8" />
            <span className="font-semibold">{user.first_name}</span>
          </div>
          <ChevronDownIcon
            className={`w-4 font-bold ${
              isPopoverOpen ? '-rotate-180' : ''
            } transition-all`}
          />
        </div>
        <ul
          className={`bg-gray-300 p-4 w-full text-lg absolute mt-2 z-50 rounded-lg shadow-xl ${
            isPopoverOpen
              ? 'opacity-100 translate-y-0 scale-100 visible'
              : 'opacity-0 translate-y-2 scale-105 invisible'
          } transition-all`}
          onClick={e => e.stopPropagation()}
        >
          <li
            className="hover:bg-gray-200 text-center rounded-lg transition-all"
            onClick={() => setPopoverOpen(false)}
          >
            <Link className="w-full flex items-center" href="/user">
              <RectangleGroupIcon className="w-6 m-2 mobile:block hidden" />
              <p className="mobile:p-0 p-1">پنل کاربری</p>
            </Link>
          </li>
          <li
            className="hover:bg-gray-200 transition-all rounded-lg"
            onClick={signOutAction}
          >
            <button className="w-full flex items-center">
              <ArrowRightOnRectangleIcon className="w-6 m-2 mobile:block hidden" />
              <p className="mobile:p-0 p-1">خروج</p>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Popover;
