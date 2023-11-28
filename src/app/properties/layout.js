'use client';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '@/context/UserContext';
import LoginButton from '@/components/LoginButton';

export default function PropertyLayout({ children }) {
  const { isLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (!loading && !isLoggedIn) {
    return <LoginButton />;
  }
  return (
    <div className="mobile:p-6 bg-white rounded-xl flex flex-col items-center justify-center">
      {loading ? <p>لطفا صبر کنید...</p> : children}
    </div>
  );
}
