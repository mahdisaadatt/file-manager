'use client';
import React, { useEffect, useState } from 'react';
import Item from '@/components/Item';
import { getPropertyDetail } from '@/app/api';

const DetailPage = ({ params }) => {
  const [property, setProperty] = useState({});

  const getData = async () => {
    getPropertyDetail(params.item, params.id)
      .then(res => res.json())
      .then(res => setProperty(res[0]));
  };
  useEffect(() => {
    getData();
  }, []);

  return <Item data={property} />;
};

export default DetailPage;
