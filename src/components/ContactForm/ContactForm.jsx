import React from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from "redux/contacts/selectors";
import { addContact } from 'redux/contacts/operation';
import { Box, TextField, Button } from '@mui/material';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const validationSchema = Yup.object({
        name: Yup
            .string('Enter your email')
            .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Must Contain only letter')
            .required("Name Required"),
        number: Yup
            .string()
            .min(10)
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Must Contain only number')
            .required("Phone number Required"),
    });

    const formik = useFormik({
        initialValues: { name: '', number: '' },
        validationSchema: validationSchema,
        onSubmit: ({ name, number }, { resetForm }) => {
            const AddedContactCheck = contacts.find(contact => {
                return contact.name.toLowerCase() === name.toLowerCase();
            });
            if (AddedContactCheck) {
                return toast.error(`${AddedContactCheck.name} is already in contacts`);
            };

            dispatch(addContact({ name, number }));
            resetForm();
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    const nameError = formik.errors.name;
    const numberError = formik.errors.number;

    return (

        <Box component="form" onSubmit={formik.handleSubmit}
            noValidate
            sx={{ display: 'flex', alignItems: 'center' }}
        >
            <TextField
                type="text"
                error={Boolean(nameError)}
                helperText={nameError}
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
                variant="filled"
                size="medium"
                fullWidth
            />
            <TextField
                type="tel"
                error={Boolean(numberError)}
                helperText={numberError}
                label="Phone number"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                required
                sx={{ ml: 2 }}
                variant="filled"
                size="medium"
                fullWidth
            />
            <Button color="primary" variant="outlined"
                type="submit"
                size="medium"
                fullWidth
                sx={{ ml: 5, p: 2 }}
            >
                Add contacts
            </Button>
        </Box>

    )





}

