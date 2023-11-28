'use client';
import React, { useState, useContext, useEffect } from 'react';
import Input from '@/components/Input';
import { UserContext } from '@/context/UserContext';
import toast from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const onLoginClick = (username, password) => {
    if (username === '' || password === '') {
      toast.error('همه ی فیلد هارو پر کن !');
    } else {
      loginUser({ username, password });
      setUsername('');
      setPassword('');
    }
  };
  if (loading) {
    <p>لطفا صبر کنید...</p>;
  }
  return (
    <form
      className="flex items-center justify-center p-2"
      onSubmit={e => e.preventDefault()}
    >
      <div className="flex flex-col items-center gap-4 mobile:w-96 w-full bg-slate-600 text-white rounded-xl p-6">
        <Input
          id="username"
          title="نام کاربری"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          id="password"
          title="رمز عبور"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="px-10 py-3 text-lg my-6 bg-green-600 rounded-lg hover:bg-green-500 transition"
          type="submit"
          onClick={() => onLoginClick(username, password)}
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default Login;
