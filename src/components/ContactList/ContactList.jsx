import { useSelector } from 'react-redux';
import { selectVisibleContacts } from "redux/contacts/selectors";
import { ContactItem } from './ContactItem';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ContactList = () => {
    // Отримання даних контактів для відображення
    const contactsToMarkup = useSelector(selectVisibleContacts);
    const matches = useMediaQuery('(max-width:750px)');
    return (
        <>
            {!contactsToMarkup.length && <b>This contact is not found</b>}
            <List sx={{ width: '100%', maxWidth: matches ? 'sm' : 'xl', bgcolor: 'background.paper' }}>
                {contactsToMarkup.map((contact) => {

                    return (
                        <ContactItem key={contact.id} contact={contact} />
                    )
                })}
            </List>
        </>
    );
};




