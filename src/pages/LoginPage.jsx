/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
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
                navigate('/', { replace: true });
                setSubmitting(false);
            })

    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit,
        validationSchema: object().shape({
            email: string().required(),
            password: string().required(),
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
                <TextField
                    label='Email Address'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && !!formik.errors.email && formik.errors.email}
                />

                <TextField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.touched.password && !!formik.errors.password && formik.errors.password}
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