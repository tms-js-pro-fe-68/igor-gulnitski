/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Paper, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import api from '../api';
import TextFieldFormik from '../components/FormikTextField';
import Page from '../components/Page';


export default function LoginPage() {
    const navigate = useNavigate();
    const handleSubmit = (values, { setSubmitting }) => {

        const { email, password } = values;


        fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => {
                if (!response.ok) throw Error();
                return response.json();
            })
            .then((data) => {
                sessionStorage.token = data.token;
                api.setup(data.token)
                navigate('/', { replace: true });
                setSubmitting(false);
            })
        // .cath((err) => setErrors([err.message]));
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit,
        validationSchema: object().shape({
            email: string().required(),
            password: string().min(2).required(),
        }),
        validateOnMount: true,
    });



    return (
        <Page
            sx={{
                background: 'gray',
                backgroundColor: 'rgba(190, 150, 150, 0.5)',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <Paper component='form'
                sx={{
                    background: 'gray',
                    backgroundColor: 'rgba(190, 150, 150, 0.5)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 6,
                    p: 6,
                    width: '300px'
                }}
                elevation={20}
                onSubmit={formik.handleSubmit}
            >
                <Typography variant='h5'>Please sign in</Typography>
                <TextFieldFormik
                    label='Email Address'
                    name="email"
                    type="email"
                    formik={formik}
                />

                <TextFieldFormik
                    label="Password"
                    name="password"
                    type="password"
                    formik={formik}
                />
                <Button
                    type="submit"
                    variant='contained'
                    color='primary'
                    disabled={!formik.isValid && !formik.isSubmitting}>
                    sign in
                </Button>
            </Paper>
        </Page>
    );
}