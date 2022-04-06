import { useEffect, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import '../../App.css'
import ColorButton from '../../components/ColorButton';
import CatFact from '../../components/CatFact';
import ButtonPassword from '../../components/ButtonPassword';
import logo from '../../logo.svg'
import FormTest from '../../components/FormTest';
import Page from '../../components/Page';
import AppBar from '../../components/AppBar';
import CustomHooks from '../../components/CustomHooks';
import AddTodoItemButton from './AddTodoItemButton';
import TodoList from './TodoList';
import api from '../../api'

const PAGE_SIZE = 2;

export default function HomePage() {
    const [search, setSaarch] = useState('');
    const [sort, setSort] = useState('asc');
    const [page, setPage] = useState(1);
    const [todos, setTodos] = useState([]);

    const loadTodos = (description, currentSort, carrentPage) => {
        api
            .get(`/todos`, {
                params: {
                    description,
                    sort: currentSort,
                    page: carrentPage,
                    pageSize: PAGE_SIZE

                },
            })
            .then(({ data }) => setTodos(data))
    }


    useEffect(() => {
        loadTodos(search, sort, page)
    }, [search, sort, page]);


    return (
        <Page>
            <AppBar />
            <TextField value={search} onChange={e => setSaarch(e.target.value)} />
            <Button onClick={() => setSort(prevSort => prevSort === 'asc' ? 'desc' : 'asc')}>
                {sort}
            </Button>
            <TodoList {...{ todos, loadTodos }} />
            <Stack direction='row' sx={{ justifyContent: 'center', width: 1, p: 3 }}>
                <Stack direction='row' spacing={1}>
                    {[1, 2, 3, 4, 5].map((p) => <Button key={p} variant={p === page ? 'contained' : 'outlined'}
                        onClick={() => setPage(p)}
                    >
                        {p}
                    </Button>
                    )}
                </Stack>
            </Stack>
            <AddTodoItemButton onAfterSubmit={loadTodos} />
            <div className="App">
                <header className="App-header">
                    {/* {prop1} */}
                    <img src={logo} className="App-logo" alt="logo" />
                    <ButtonPassword />
                    <CatFact />
                    <ColorButton />
                    <FormTest />
                    <CustomHooks />
                </header>
            </div>
        </Page>
    )
}