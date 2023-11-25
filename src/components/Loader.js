'use client';
import React, { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Loader = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.continuousStart();
    ref.current.complete();
  });
  return <LoadingBar color="#45b9d6" ref={ref} height={4} />;
};

export default Loader;
