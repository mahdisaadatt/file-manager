'use client';
import { useEffect, useState, useContext } from 'react';
import FilterBar from '@/components/FilterBar';
import PropertyList from '@/components/PropertyList';
import { getProperties } from './api';
import { UserContext } from '@/context/UserContext';
import LoginButton from '@/components/LoginButton';

export default function Home() {
  const [filters, setFilters] = useState(null);
  const [properties, setProperties] = useState([]);
  const { isLoggedIn } = useContext(UserContext);

  const getData = async () => {
    getProperties()
      .then(res => res.json())
      .then(res => setProperties(res));
  };
  useEffect(() => {
    getData();
  }, []);

  if (!isLoggedIn) {
    return <LoginButton />;
  }

  return (
    <div className="mobile:p-6">
      <FilterBar setFilters={setFilters} filters={filters} />
      <PropertyList properties={properties} filters={filters} />
    </div>
  );
}
