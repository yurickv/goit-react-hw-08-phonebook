import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import css from './Contact-style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from "redux/selectors";
import { addContact } from 'redux/axiosOperation';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = ({ name, number }, { resetForm }) => {
        // Перевірка чи вже є контакт з таким іменем
        const AddedContactCheck = contacts.find(contact => {
            return contact.name.toLowerCase() === name.toLowerCase();
        });
        if (AddedContactCheck) {
            return alert(`${AddedContactCheck.name} is already in contacts`);
        };

        dispatch(addContact({ name, number }));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required("Name Required")
                    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must Contain only letter"),
                number: Yup.number()
                    .positive()
                    .required("Phone number Required")
            })}
        >
            <Form className={css.form}>
                <label htmlFor="name" className={css.inputLabel}> <span>Name</span>
                    <Field
                        type="text"
                        name="name"
                        maxLength="20"
                        placeholder="Add the name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label htmlFor="number" className={css.inputLabel}><span>Number</span>
                    <Field
                        type="tel"
                        name="number"
                        minLength="10"
                        maxLength="11"
                        placeholder="Add the phone number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )





}


