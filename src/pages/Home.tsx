import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>首页</title>
      </Helmet>
      <div>Home</div>
    </>
  );
};

export default React.memo(HomePage);
