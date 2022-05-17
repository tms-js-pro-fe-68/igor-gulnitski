import { useCallback, useEffect, useState } from 'react';
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
import HomePageListActions from './HomePageListActions';
import PagesIndex from './PagesIndex';
import CustomHookQuery from '../../components/CustomHookQuery';
import HomePageContextProvider from '../../components/HomePageContext';



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
        <HomePageContextProvider>
            <Page>
                <AppBar tittle='Home Page1' />
                <HomePageListActions {...{ search, setSort, sort, setSaarch }} />
                <TodoList {...{ todos, loadTodos }} />
                <PagesIndex {...{ page, setPage }} />
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
                        <CustomHookQuery />
                    </header>
                </div>
            </Page>
        </HomePageContextProvider>
    )
}