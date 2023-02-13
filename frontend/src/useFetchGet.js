import { useState, useEffect } from "react";

const useFetchGet = (url, options) => {
    // create states
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        // initialize fetch request abort controller
        const abortController = new AbortController();
        const fetchRequest = async () => {
            try {
                // make fetch request
                const res = await fetch(url, { signal: abortController.signal, ...options });
                console.log(options);
                console.log(res);
                // throw message on eroor
                if (!res.ok) throw Error("error fetching resource");
                // parse data from response and set data state
                const data = await res.json();
                setData(data);
            } catch (error) {
                // handle error
                console.log(`${error}`);
                console.log(`${error}\n${error.message}\n${error.name}`);

                if (error.name === "AbortError") console.log("abort");
                setError(error.message);
            } finally {
                setIsPending(false);
            }
        };

        fetchRequest();

        // abort request if parent component in unmounted during request
        return () => abortController.abort();
    }, [url, options]);
    // return request data and status [data, isPending, error];
    return [isPending, error, data];
};

export default useFetchGet;
