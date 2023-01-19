import * as React from 'react';
import styled from '@emotion/styled';
import {
    Container,
    Grid,
    IconButton,
    Button,
    Box,
    TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = styled((theme) => ({
    container: {
        marginTop: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    check: {
        userSelect: "none"
    }
}));

export default function Form({ handleClose, mode, values, onSubmit }) {
    const classes = useStyles();

    const [formValues, setFormValues] = React.useState({});

    const handleTextFieldChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        let payload = {};

        if (mode === 'create') {
            payload = {
                ...formValues,
                userId: 1
            }
        } else {
            payload = {
                ...formValues,
                id: values.id,
                userId: 1
            }
        }

        console.log(payload);
        onSubmit(payload);
    }

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton color="secondary" onClick={handleClose} aria-label="close-icon" component="label">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        id="standard-basic"
                        variant='standard'
                        label="Title"
                        name="title"
                        type="text"
                        fullWidth
                        placeholder='Enter the title here ...'
                        defaultValue={values?.title}
                        onChange={handleTextFieldChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        id="standard-basic"
                        variant='standard'
                        label="Body"
                        name="body"
                        type="text"
                        placeholder='Enter the content here ...'
                        fullWidth
                        multiline
                        rows={4}
                        defaultValue={values?.title}
                        onChange={handleTextFieldChange}
                    />
                </Grid>
                {/* <Grid item xs={12} padding={2}>
                    <TextField
                        autoFocus
                        id="standard-basic"
                        variant='standard'
                        label="Address"
                        name="address"
                        type="text"
                        fullWidth
                        multiline
                        rows={2}
                    // defaultValue={values?.description}
                    // onChange={handleTextFieldChange}
                    />
                </Grid> */}
                {/* <Grid item xs={6} padding={2}>
                    <TextField
                        autoFocus
                        id="standard-basic"
                        variant='standard'
                        label="Longitude"
                        name="longitude"
                        type="number"
                        fullWidth
                    // disabled={mode === 'edit'}
                    // defaultValue={values?.id}
                    // onChange={handleTextFieldChange}
                    />
                </Grid> */}
                {/* <Grid item xs={6} padding={2}>
                    <TextField
                        autoFocus
                        id="standard-basic"
                        variant='standard'
                        label="Latitude"
                        type="number"
                        name="latitude"
                        fullWidth
                    // fullWidth
                    // defaultValue={values?.price}
                    // onChange={handleTextFieldChange}
                    />
                </Grid> */}
                {/* <Grid item xs={12} padding={2}>
                    <TextField
                        autoFocus
                        id="standard-basic"
                        variant='standard'
                        label="Image URL"
                        name="imageURL"
                        type="image"
                        fullWidth
                        multiline
                        rows={2}
                    // defaultValue={values?.description}
                    // onChange={handleTextFieldChange}
                    />
                </Grid> */}
                {/* <Grid item xs={6} padding={2}>
                    <Select />
                </Grid>
                <Grid item xs={6} padding={2}>
                    <Date />
                </Grid> */}
                <Grid container display="inline-flex">
                    {/* <Grid item xs={6}>
                        <Button variant="outlined">Cancel</Button>
                    </Grid> */}
                    <Grid item xs={6} padding={2}>
                        <Button variant="contained" color="secondary" onClick={handleSubmit}>{mode === 'create' ? 'Create' : 'Update'}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
