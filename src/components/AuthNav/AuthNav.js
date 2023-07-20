import { NavLink } from 'react-router-dom';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <>
      <Button component={NavLink} to="/register" sx={{ color: '#fff' }}>
        Register
      </Button>
      <Button component={NavLink} to="/login" sx={{ color: '#fff' }}>
        Log In
      </Button>
    </>        
    
  );
};
