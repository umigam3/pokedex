import { useState, useEffect } from "react";

export function getPokemonData(url) {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [url]);

    return { data };
}