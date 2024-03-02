import { useState, useEffect } from "react";

export function useFetch(url, type) {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (type) setData(data.results);
                else setData(data)
            })
    }, [url]);

    return { data };
}