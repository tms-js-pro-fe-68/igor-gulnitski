import { useState, useEffect } from "react";

export default function CatFact() {

    const [count, setCount] = useState(0);

    const [catFacts, setCatFacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch("https://cat-fact.herokuapp.com/facts")
            .then((response) => response.json())
            .then(data => {
                setCatFacts(data)
                setIsLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <p>{isLoading && "Loading...."}</p>
            <div style={{ margin: 16 }}>

                {catFacts.map((fact) =>
                    <div key={fact._id}
                        style={{
                            listStyleType: 'none',
                            padding: 16,
                            marginBottom: 16,
                            border: '1px solid  white',
                        }}
                    >{fact.text}</div>
                )}

            </div>
            <button type="button" onClick={() => setCount(c => c + 1)}>
                count is:{count}
            </button>

        </>

    )
}