import { useEffect, useState } from "react";

const useFetchPost = (url, payload) => {
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setIsPending(true);
        // define func
        const handleFetch = async () => {
            try {
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) throw Error("Error Posting Data");
                setSuccess(true);
            } catch (error) {
                setError(error.name);
                setSuccess(false);
            } finally {
                setIsPending(false);
            }
        };
        // simulate func
        setTimeout(() => {
            handleFetch();
        }, 2000);
    }, [url, payload]);

    return [isPending, error, success];
};

export default useFetchPost;
