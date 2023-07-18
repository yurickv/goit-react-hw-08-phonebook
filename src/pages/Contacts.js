import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/operation';
import { selectIsLoading, selectError, selectContacts } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div style={appSlyle}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <div>{isLoading && 'Request in progress...'}</div>
        {contacts.length ? <Filter /> : <p>'No contacts yet'</p>}
        {error && <b>{error}</b>}
        {!!contacts.length && <ContactList />}
        
      </div>
    </>
  );
}


const appSlyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}