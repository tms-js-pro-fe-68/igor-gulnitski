import { List, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import Page from './Page';

export default function CustomHookQuery() {
    const { isLoading, data, error } = useQuery('items', () =>
        fetch('https://cat-fact.herokuapp.com/facts')
            .then((response) => response.json())
            .then((items) => items),
    );

    if (isLoading) return <p>Please wait, data is loading...</p>;
    if (error) return <p>ERROR: {error.message}</p>;

    return (
        <Page>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
                ГРЕБАНЫЕ ХУКИ: Query
            </Typography>
            <List
                sx={{ margin: '0 auto', border: '5px solid white', padding: '20px' }}
            >
                {data.map(({ _id, text }) => (
                    <li key={_id}>
                        <Typography variant="h6">{text}</Typography>
                    </li>
                ))}
            </List>
        </Page>
    );
} 