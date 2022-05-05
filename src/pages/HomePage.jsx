import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import ColorButton from '../components/ColorButton';
import CatFact from '../components/CatFact';
import ButtonPassword from '../components/ButtonPassword';
import logo from '../logo.svg'
import FormTest from '../components/FormTest';

export default function HomePage() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    const navigateToLogin = () => navigate('/login', { replace: true });

    useEffect(() => {
        if (!sessionStorage.token) {
            navigateToLogin();
            return
        }

        fetch('https://tms-js-pro-back-end.herokuapp.com/api/todos', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Token ${sessionStorage.token}`,
            },
        })
            .then((response) => response.json())
            .then(setTodos);

    }, []);



    return (

        <div className="App">
            <div style={{
                display: 'flex',
                // width: '100%',
                height: 40,
                background: 'grey',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 6
            }}
            >
                <h1>Home Page</h1>
                <button type="button"
                    onClick={() => {
                        sessionStorage.token = ''
                    }}
                >
                    sign out
                </button>
            </div>
            <ul style={{ paddingInlineStart: '8px', padding: 8 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ listStyleType: 'none', height: 40 }}>
                        <input
                            type="checkbox"
                            id='vehicle1'
                            name='vehicle1'
                            value='Bike'
                            checked={todo.done}
                            readOnly
                        />
                        <label htmlFor="vehicle1">{todo.description}</label>
                    </li>
                ))}

            </ul>
            <header className="App-header">
                {/* {prop1} */}
                <img src={logo} className="App-logo" alt="logo" />

                <ButtonPassword />
                <CatFact />
                <ColorButton />
                <FormTest />
            </header>

        </div>
    )
}