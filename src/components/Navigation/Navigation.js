import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Button component={NavLink} to="/" sx={{ color: '#fff' }}>
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" sx={{ color: '#fff' }}>
        Contacts
        </Button>
      )}
    </>
  );
};
