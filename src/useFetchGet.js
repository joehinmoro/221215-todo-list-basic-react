import { useState, useEffect } from "react";

const useFetchGet = (url, options) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchRequest = async () => {
            try {
                const res = await fetch(url, { signal: abortController.signal, ...options });
                console.log(options);
                console.log(res);
                if (!res.ok) throw Error("error fetching resource");
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.log(`${error}`);
                console.log(`${error}\n${error.message}\n${error.name}`);

                if (error.name === "AbortError") console.log("abort");
                setError(error.message);
            } finally {
                setIsPending(false);
            }
        };
        setTimeout(() => {
            fetchRequest();
        }, 500);

        return () => abortController.abort();
    }, [url, options]);
    // return [data, isPending, error];
    return [isPending, error, data];
};

export default useFetchGet;
