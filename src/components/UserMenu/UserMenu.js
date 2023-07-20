import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hook/useAuth';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Typography
        variant="h6"
        component="p"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#F4D160' }}
      >
        Welcome, {user.name}
      </Typography>
      
      <Button type="button" onClick={() => dispatch(logOut())} sx={{ color: '#fff' }}>
        Logout
      </Button>
    </Box>
  );
};
