import { useEffect, useState } from "react";

const useFetchPost = (url, payload, method) => {
    // create states
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // reset state during subsequent requests
        setError(null);
        setIsPending(true);
        // define func
        const handleFetch = async () => {
            try {
                // make posty request
                const res = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                // throw message on error
                if (!res.ok) throw Error("Error Posting Data");
                // set success state to truthy on success
                setSuccess(true);
            } catch (error) {
                // handle error
                setError(error.name);
                setSuccess(false);
            } finally {
                // reset pending state at end of request
                setIsPending(false);
            }
        };

        handleFetch();
    }, [url, payload, method]);

    // return request status
    return [isPending, error, success];
};

export default useFetchPost;
