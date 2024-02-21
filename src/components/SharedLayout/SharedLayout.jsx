import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
