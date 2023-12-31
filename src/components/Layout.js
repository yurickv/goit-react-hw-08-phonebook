import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarMark } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBarMark />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
