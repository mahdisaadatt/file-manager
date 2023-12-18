'use client';
import { useEffect, useState, useContext } from 'react';
import FilterBar from '@/components/FilterBar/FilterBar';
import PropertyList from '@/components/PropertyList';
import { getProperties } from './api';
import { UserContext } from '@/context/UserContext';
import LoginButton from '@/components/LoginButton';

export default function Home() {
  const [filters, setFilters] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useContext(UserContext);

  const getData = async () => {
    getProperties()
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

  return (
    <div className="mobile:p-6">
      {loading ? (
        <p>لطفا صبر کنید...</p>
      ) : (
        <>
          <FilterBar setFilters={setFilters} filters={filters} />
          <PropertyList properties={properties} filters={filters} />
        </>
      )}
    </div>
  );
}
