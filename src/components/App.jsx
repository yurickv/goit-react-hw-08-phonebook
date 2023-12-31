import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hook/useAuth';
import Typography from '@mui/material/Typography';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();
  console.log(isRefreshing)
  useEffect(() => {
    const refresh = dispatch(refreshUser());

    return () => {
      refresh.abort();
    };
  }, [dispatch]);

  return isRefreshing ? (<Typography component="p" sx={{ m: 15, zIndex: 100 }}>Refreshing user...</Typography>

  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
        <Route path="*" index element={<HomePage />} />
      </Route>
    </Routes>
  );
};














// const appSlyle = {
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: 20,

//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }