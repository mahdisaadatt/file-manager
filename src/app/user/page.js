'use client';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import Link from 'next/link';
import LoginButton from '@/components/LoginButton';

export default function User() {
  const { user, isLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (!loading && !isLoggedIn) {
    return <LoginButton />;
  }
  return (
    <div className="p-6 flex flex-col gap-8 bg-zinc-200 rounded-xl items-center">
      {loading ? (
        <p>لطفا صبر کنید...</p>
      ) : (
        <>
          <h2 className="text-lg">
            به پنل کاربریت خوش اومدی{' '}
            <span className="font-bold">
              {user.first_name} {user.last_name}
            </span>
          </h2>
          <div className="flex gap-6 justify-center flex-wrap">
            <p>یوزرنیم : {user.username ? user.username : '-'}</p>
            <p>شماره تلفن : {user.phone_number ? user.phone_number : '-'}</p>
            <p>ایمیل : {user.email ? user.email : '-'}</p>
          </div>
          <div className="m-4 flex gap-4">
            <Link
              className="bg-gray-600 text-white hover:bg-gray-500 transition rounded-lg px-4 py-2"
              href="/user/edit"
            >
              ویرایش اطلاعات
            </Link>
            <Link
              className="bg-gray-600 text-white hover:bg-gray-500 transition rounded-lg px-4 py-2"
              href="/user/files"
            >
              فایل های من
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
