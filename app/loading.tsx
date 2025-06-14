import React from 'react';
import Image from 'next/image';
import loader from '@/assets/loader.gif';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <Image src={loader} alt="loader" height={150} width={150} />
    </div>
  );
};

export default LoadingPage;
