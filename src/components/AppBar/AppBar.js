import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hook/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export const AppBarMark = (props) => {
  const { isLoggedIn } = useAuth();
  const matches = useMediaQuery('(max-width:750px)');
 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar >
        <Toolbar 
          sx={{maxWidth: matches ? 'sm' : 'xl',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', }}
        >
          <Box display="flex">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#F4D160' }}
            >
              Phonebook📝
            </Typography>
            <Navigation />
          </Box>         
          <Box display="flex">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </AppBar>
      
      
    </Box>
  );
};

