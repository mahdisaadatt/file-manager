'use client';
import React, { useState, useContext, useEffect } from 'react';
import Input from '@/components/Input';
import { UserContext } from '@/context/UserContext';
import toast from 'react-hot-toast';
import ImageSelector from '@/components/ImageSelector';
import LoginButton from '@/components/LoginButton';

const EditUserPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const { isLoggedIn, editUser } = useContext(UserContext);
  const onEditClick = data => {
    if (data.email === '') {
      toast.error('پر کردن ایمیل اجباری است!');
    } else {
      editUser(data);
    }
  };
  useEffect(() => {
    setLoading(false);
  });
  if (!loading && !isLoggedIn) {
    return <LoginButton />;
  }
  return loading ? (
    <p>لطفا صبر کنید...</p>
  ) : (
    <form
      className="flex tablet:items-start items-center justify-center flex-wrap w-full py-8 px-2 bg-zinc-200 rounded-xl"
      onSubmit={e => e.preventDefault()}
    >
      {/* <ImageSelector /> */}
      <div className="flex flex-col items-center gap-4 mobile:w-96 w-full p-6">
        <Input
          id="firstName"
          title="نام"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <Input
          id="lastName"
          title="نام خانوادگی"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <Input
          id="email"
          title="ایمیل"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          id="phoneNumber"
          title="شماره تلفن"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <button
          className="px-10 py-3 text-lg my-6 bg-green-400 rounded-lg hover:bg-green-500 transition"
          type="submit"
          onClick={() =>
            onEditClick({
              first_name: firstName,
              last_name: lastName,
              phone_number: phoneNumber,
              email,
            })
          }
        >
          ویرایش
        </button>
      </div>
    </form>
  );
};

export default EditUserPage;
