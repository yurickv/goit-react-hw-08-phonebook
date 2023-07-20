import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filtrSlice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
    const dipatch = useDispatch();

    return (
        <Box display="flex" flexDirection="column" width="300px">
            <TextField
                name="search"
                variant="standard"
                label="Find contacts by name"
                onChange={e => dipatch(setFilter(e.target.value))}
            />
        </Box>
    );
};

