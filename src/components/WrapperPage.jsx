import React from 'react';

const WrapperPage = ({ children }) => {
  return (
    <section
      style={{
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingBottom: '20px',
      }}
    >
      {children}
    </section>
  );
};

export default WrapperPage;
