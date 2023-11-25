'use client';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import LoginButton from '@/components/LoginButton';

export default function PropertyLayout({ children }) {
  const { isLoggedIn } = useContext(UserContext);
  if (!isLoggedIn) {
    return <LoginButton />;
  }
  return (
    <div className="mobile:p-6 bg-white rounded-xl flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
