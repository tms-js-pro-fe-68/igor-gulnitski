import { useState, useEffect } from "react";

function useGetRequest(api) {
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setErrorMessage(null);
        setIsLoading(true);
        fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => setItems(data))
            .catch((error) => setErrorMessage(error))
            .finally(() => setIsLoading(false));
        return () => {
            console.log('Nothing found...');
        };
    }, []);

    return [isLoading, errorMessage, items];
}

export default function CustomHooks() {
    const [isLoading, errorMessage, items] = useGetRequest('https://cat-fact.herokuapp.com/facts');

    return (
        <div style={{ background: 'white', width: '800px', margin: '5px auto', border: '3px solid green' }}>
            <h2 style={{ fontSize: '25px', color: 'black', textAlign: 'center' }}>
                ГРЕБАНЫЕ ХУКИ
            </h2>
            <p>{isLoading && 'Loading..'}</p>
            <p>{errorMessage}</p>
            <ul>
                {items.map(({ _id, text }) => (
                    <li style={{ color: 'black', fontSize: '17px' }} key={_id}>
                        <i>{text}</i>
                    </li>
                ))}
            </ul>
        </div>
    )
} 