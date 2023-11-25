'use client';
import React, { useEffect, useState } from 'react';
import PropertyList from '@/components/PropertyList';
import { getSelectedPropertyType } from '@/app/api';

const ItemPage = ({ params }) => {
  const [properties, setProperties] = useState([]);

  const getData = async () => {
    getSelectedPropertyType(params.item)
      .then(res => res.json())
      .then(res => setProperties(res));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">
        {params.item === 'home'
          ? 'دسته خانه ها'
          : params.item === 'car'
          ? 'دسته ماشین ها'
          : 'دسته متفرقه'}
      </h1>
      <PropertyList properties={properties} />
    </div>
  );
};

export default ItemPage;
