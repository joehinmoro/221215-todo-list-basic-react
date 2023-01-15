import { useEffect, useState } from "react";

const useFetchPost = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(
        (url, payload, options) => {
            // define func
            const handleFetch = async () => {
                try {
                    setIsPending(true);
                    const res = await fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                        ...options,
                    });
                    if (!res.ok) throw Error("Error Posting Data");
                    setData(res);
                } catch (error) {
                    setError(error.name);
                } finally {
                    setIsPending(false);
                    console.log(`data:${data}\nisPending:${isPending}\nerror:${error}`);
                }
            };
            // simulate func
            setTimeout(() => {
                handleFetch();
            }, 1000);
        },
        [url, data, options]
    );

    return [data, isPending, error];
};

export default useFetchPost;
