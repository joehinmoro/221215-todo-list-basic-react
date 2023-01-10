import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await fetch(url);
                console.log(res);
                if (!res.ok) throw Error("error fetching resource");
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setIsPending(false);
            }
        };
        setTimeout(() => getTodos(), 2000);
    }, [url]);
    return [data, isPending, error];
};

export default useFetch;
