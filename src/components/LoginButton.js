import React from 'react';
import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link
      href="/user/login"
      className="px-8 py-3 bg-slate-500 hover:bg-slate-600 rounded-lg transition text-white"
    >
      لاگین کن
    </Link>
  );
};

export default LoginButton;
