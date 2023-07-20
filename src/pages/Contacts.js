import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/operation';
import { selectIsLoading, selectError, selectContacts } from 'redux/contacts/selectors';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';




export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const matches = useMediaQuery('(max-width:750px)');
  
  useEffect(() => {
    const fetch = dispatch(fetchContacts());

    return () => {
      fetch.abort();
    };
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Box display="flex"
        flexDirection="column"        
        sx={{
          maxWidth: matches ? 'sm' : 'xl',
          gap: 3,
          mt: 10,
          alignItems: 'center',
        }}
      >
        <Typography component="h1"sx={{fontSize: 50,fontWeight:600,}}>
          Phonebook
        </Typography>

        <ContactForm />

        <Typography component="h2"sx={{fontSize: 40,fontWeight:600, }}>
          Contacts
        </Typography>

        {isLoading && <Typography component="h4">Request in progress...</Typography>} 
        
        {contacts.length ? <Filter /> :<Typography component="h4">'No contacts yet'</Typography> }
        {error && <b>{error}</b>}

        {!!contacts.length && <ContactList />}
        
      </Box>
    </>
  );
}

