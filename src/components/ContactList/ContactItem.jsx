import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operation';
import { Formik, Form, Field } from 'formik';
import css from './List-style.module.css';
import { useState } from 'react';
import * as Yup from "yup";

export const ContactItem = ({ contact }) => {
    const { id, name, number } = contact;
    const [isEdit, setIsEdit] = useState(false);


    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    const handleEdit = () => {
        setIsEdit(true);

    };
    const handleCancel = () => setIsEdit(false);
    const handleSubmit = (data) => {
        try {

            dispatch(editContact({ id, ...data }))
            setIsEdit(false);
        } catch (e) { console.log(e) }
    }

    return (
        <li className={css.contactItem}>
            <Formik
                initialValues={{ name, number }}
                onSubmit={handleSubmit}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required("Name Required")
                        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must Contain only letter"),
                    number: Yup.number()
                        .positive()
                        .required("Phone number Required")
                })}>
                <Form>
                    <Field
                        type="text"
                        name="name"
                        maxLength="20"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        disabled={!isEdit}

                    />
                    <Field
                        type="tel"
                        name="number"
                        minLength="10"
                        maxLength="11"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        disabled={!isEdit}

                    />
                    {isEdit &&
                        <><button className={css.deleteButton} type='submit'>Confirm</button>
                            <button onClick={handleCancel} className={css.deleteButton} type='button'>Cancel</button>
                        </>}

                </Form>


            </Formik>
            {!isEdit &&
                <>
                    <button onClick={handleEdit} className={css.deleteButton}>Edit</button>
                    <button onClick={handleDelete} className={css.deleteButton}>Delete</button>
                </>}
        </li>
    );
}



