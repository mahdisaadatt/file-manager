'use client';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const UserContext = createContext({});

const ENDPOINT = 'https://file-manager-django.up.railway.app';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const getUser = async () => {
    const res = await fetch(`${ENDPOINT}/user/me/`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('auth_token')}`,
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      setUser(data);
      setLoggedIn(true);
    } else {
      toast.error('مشکلی به وجود اومده!');
    }
  };

  const loginUser = async data => {
    const res = await fetch(`${ENDPOINT}/user/token/login/`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const finalRes = await res.json();
    if (res.status === 200) {
      localStorage.setItem('auth_token', finalRes.auth_token);
      getUser();
      toast.success('وارد شدید');
      router.push('/');
    } else {
      toast.error('اطلاعات وارد شده اشتباه هست!');
    }
  };

  const logoutUser = async () => {
    const res = await fetch(`${ENDPOINT}/user/token/logout/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('auth_token')}`,
      },
    });
    if (res.status === 204) {
      localStorage.removeItem('auth_token');
      setUser({});
      setLoggedIn(false);
      toast.success('با موفقیت خارج شدید');
      router.push('/');
    }
  };

  const editUser = async data => {
    const res = await fetch(`${ENDPOINT}/user/edit/`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('auth_token')}`,
      },
    });
    if (res.status === 200) {
      getUser();
      toast.success('حساب کاربری شما با موفقیت ویرایش شد');
      router.push('/user');
    } else {
      toast.error('مشکلی به وجود آمده است!');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('auth_token')) {
      getUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, loginUser, logoutUser, editUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
