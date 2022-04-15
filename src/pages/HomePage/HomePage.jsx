import { useCallback, useEffect, useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import { debounce } from 'lodash';
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
import api from '../../api';
import StylesComponents from '../../components/StylesComponents';



const PAGE_SIZE = 10;

export default function HomePage() {
    const [search, setSaarch] = useState('');
    const [sort, setSort] = useState('asc');
    const [page, setPage] = useState(1);
    const [todos, setTodos] = useState([]);

    const loadTodos = (currentSearch, currentSort, currentPage) => {
        api
            .get(`/todos`, {
                params: {
                    search: currentSearch,
                    sort: currentSort,
                    offset: (currentPage - 1) * PAGE_SIZE,
                    limit: PAGE_SIZE,

                },
            })
            .then(({ data }) => setTodos(data))
    }

    const debouncedLoad = useCallback(debounce(loadTodos, 1000), [])

    useEffect(() => {
        debouncedLoad(search, sort, page)
    }, [search, sort, page]);


    return (
        <Page>
            <AppBar />
            <Box sx={{ p: 2, display: 'grid', gap: 2, gridTemplateColumns: '4fr 2fr' }}>
                <TextField
                    inputProps={{
                        startAdorment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    value={search} onChange={e => setSaarch(e.target.value)} />
                <Button onClick={() => setSort(prevSort => prevSort === 'asc' ? 'desc' : 'asc')}>
                    {sort}
                </Button>
            </Box>
            <TodoList {...{ todos, loadTodos }} />
            <Stack direction='row' sx={{ justifyContent: 'center', width: 1, p: 2 }}>
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
                    <StylesComponents />
                </header>
            </div>
        </Page>
    )
}