import React from 'react';
import { Formik, Form, useField } from 'formik';

function MyTextInput({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}

function MyCheckbox({ children, ...props }) {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label htmlFor={props.id || props.name} className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

function MySelect({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}

function MyRadio({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <>
            <input type="radio" id="html" {...field} {...props} />
            <label htmlFor="html">{label ?? field.name}</label>
            <br />
        </>
    );
}

export default function FormTest() {
    return (
        <div style={{ width: '800px', margin: '5px auto', border: '3px solid green' }}>
            <h1>
                Add your product <br /> so that millions of people can buy it!
            </h1>
            <Formik style={{
                display: 'flex',
                flexDirection: 'column',
            }}
                initialValues={{
                    name: '',
                    description: '',
                    email: '',
                    acceptedTerms: false,
                    price: '',
                    type: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 300);
                }}
            >
                <Form >
                    <div className="form_div">
                        <MyTextInput style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 16,
                            width: 500,
                            height: 30,
                        }}
                            label="Product Name:"
                            name="name"
                            type="text"
                            placeholder="Adidas Hoodie"
                            className="label_style"
                        />

                        <MyTextInput style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 16,
                            width: 500,
                            height: 30
                        }}
                            label="Product brief description:"
                            name="description"
                            type="text"
                            className="label_style"
                            placeholder="It is red, ... hoodie"
                        />

                        <MyTextInput style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 16,
                            width: 500,
                            height: 30
                        }}
                            label="Contacts: email"
                            name="email"
                            type="email"
                            className="label_style"
                            placeholder="igorg@mail.com"
                        />

                        <MySelect style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 16,
                            width: 500,
                            height: 30
                        }}
                            className="label_style"
                            label="Cost of goods:  "
                            name="price"
                        >
                            <option value="">-</option>
                            <option value="10$">10$</option>
                            <option value="20$">20$</option>
                            <option value="30$">30$</option>
                            <option value="40$">40$</option>
                            <option value="50$">50$</option>
                        </MySelect>

                        <MySelect style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 16,
                            width: 500,
                            height: 30
                        }}
                            className="label_style"
                            label="Product category:  "
                            name="type"
                        >
                            <option value="">-</option>
                            <option value="Bags, backpacks">Bags, backpacks</option>
                            <option value="Dress, sundress$">Dress, sundress</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Shirts">Shirts</option>
                            <option value="Rings, pendants, earrings">
                                Rings, pendants, earrings
                            </option>
                            <option value="Hoodie, sweaters">Hoodie, sweaters</option>
                            <option value="Trousers, jeans">Trousers, jeans</option>
                        </MySelect>

                        <MyCheckbox name="acceptedTerms">
                            I accept the terms and conditions
                        </MyCheckbox>

                        <MyCheckbox name="acceptedTerms1">
                            I accept the terms and conditions
                        </MyCheckbox>

                        <MyRadio name="html1" label="radio 1" value="html1" />
                        <MyRadio name="html2" label="radio 2" value="html2" />

                        <MyRadio name="html3" label="radio 3" value="html3" />
                        <MyRadio name="html4" label="radio 4" value="html4" />

                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik >
        </div>
    );
}