'use client';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import Login from '@/components/Login';
import Link from 'next/link';

export default function LoginPage() {
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    setLoading(false);
  });
  if (!loading && isLoggedIn) {
    return (
      <Link
        href="/"
        className="px-8 py-3 bg-slate-500 hover:bg-slate-600 rounded-lg transition text-white"
      >
        صفحه اصلی
      </Link>
    );
  }
  return <Login />;
}
