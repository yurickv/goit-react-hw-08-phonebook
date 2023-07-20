import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operation';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from "yup";
import {
    ListItem,
    Typography,
    Box,
    Button,
    TextField,
    InputAdornment,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const ContactItem = ({ contact }) => {
    const { id, name, number } = contact;
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const matches = useMediaQuery('(max-width:750px)');

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const editContactSchema = Yup.object().shape({
        name: Yup.string().required("Name can't be empty").min(4),
        number: Yup.string()
            .required("Phone number can't be empty")
            .matches(phoneRegExp, 'Phone number is not valid'),
    });

    const formik = useFormik({
        initialValues: { name, number },
        validationSchema: editContactSchema,
        onSubmit: ({ name, number }, { resetForm }) => {
            dispatch(editContact({ id, name, number }));
            setIsEdit(false);
            resetForm();
        },
        validateOnChange: false,
        validateOnBlur: false,
    });
    const nameError = formik.errors.name;
    const numberError = formik.errors.number;
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <ListItem
            sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
            key={id}
        >
            <Box sx={matches ? {} : { display: 'flex', alignItems: 'center' }}>
                {isEdit ? (
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        sx={matches ? {} : { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}
                        noValidate
                    >
                        <TextField
                            error={Boolean(nameError)}
                            helperText={nameError}
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            variant="standard"
                            size="small"
                            sx={matches ? { width: '100%' } : {}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ContactPhoneIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: <InputAdornment position="end">:</InputAdornment>,
                            }}
                            required
                        />

                        <TextField
                            type="tel"
                            name="number"
                            error={Boolean(numberError)}
                            helperText={numberError}
                            sx={matches ? { width: '100%', mt: 1 } : { ml: 1 }}
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            variant="standard"
                            size="small"
                            required
                        />
                        <Button
                            sx={matches ? { display: 'block', width: '100%' } : { ml: 1 }}
                            type="submit"
                            onClick={() => setIsEdit(true)}
                        >
                            Confirm
                        </Button>
                        <Button
                            type="button"
                            sx={
                                matches
                                    ? { display: 'block', width: '100%', color: 'red' }
                                    : { color: 'red' }
                            }
                            onClick={() => setIsEdit(false)}
                        >
                            Cancel
                        </Button>
                    </Box>
                ) : (
                    <>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ContactPhoneIcon />
                            <Typography component="p" sx={{ ml: 1 }}>
                                {name}:
                            </Typography>

                            <Typography component="p" sx={{ ml: 1 }}>
                                {number}
                            </Typography>
                        </Box>
                        <Button
                            sx={matches ? { ml: 1, width: '45%' } : { ml: 1 }}
                            onClick={() => setIsEdit(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            sx={matches ? { color: 'red', width: '45%' } : { color: 'red' }}
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </>
                )}
            </Box>
        </ListItem>
    );
}



