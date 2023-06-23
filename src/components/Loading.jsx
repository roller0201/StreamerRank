import React from 'react';

const Loading = ({ route }) => {
  return (
    <section className={route ? 'route-loader' : 'app-loader'}>
      <div className='bouncing-loader'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
