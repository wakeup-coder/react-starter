import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <main>
    <Outlet />
  </main>
);

export default React.memo(MainLayout);
