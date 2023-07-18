import css from './List-style.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from "redux/contacts/selectors";
import { ContactItem } from './ContactItem';

export const ContactList = () => {
    // Отримання даних контактів для відображення
    const contactsToMarkup = useSelector(selectVisibleContacts);

    return (
        <>
            {!contactsToMarkup.length && <b>This contact is not found</b>}
            <ul className={css.contactList}>
                {contactsToMarkup.map((contact) => {

                    return (
                        <ContactItem key={contact.id} contact={contact} />
                    )
                })}
            </ul>
        </>
    );
};




