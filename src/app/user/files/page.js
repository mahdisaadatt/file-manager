'use client';
import { useEffect, useState, useContext } from 'react';
import PropertyList from '@/components/PropertyList';
import { getUserProperties } from '@/app/api';
import { UserContext } from '@/context/UserContext';
import LoginButton from '@/components/LoginButton';

const MyFilesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useContext(UserContext);

  const getData = async () => {
    getUserProperties()
      .then(res => res.json())
      .then(res => setProperties(res))
      .then(() => setLoading(false));
  };
  useEffect(() => {
    getData();
  }, []);
  if (!loading && !isLoggedIn) {
    return <LoginButton />;
  }
  return loading ? (
    <p>لطفا صبر کنید...</p>
  ) : (
    <PropertyList properties={properties} />
  );
};

export default MyFilesPage;
