import React from 'react';
import Header from '../component/header'; // Adjust the path as needed

const LayoutWithHeader = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default LayoutWithHeader;
