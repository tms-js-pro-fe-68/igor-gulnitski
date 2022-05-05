/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-undef */
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import TextField from "../components/TextField";


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
            password: string().required(),
        }),
        validateOnMount: true,
    });

    return (

        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <form style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 16,
            }}
                onSubmit={formik.handleSubmit}
            >
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
                {/* <label htmlFor="email">Password</label> */}
                <button type="submit" disabled={!formik.isValid && !formik.isSubmitting}>sign in</button>
            </form>
        </div>
    );
}