import { useEffect } from "react";

const useFetchDelete = (url) => {
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setError(null);
        setIsPending(true);
        const handleDelete = async () => {
            try {
                const res = fetch(url, { method: "DELETE" });
                if (!res.ok) throw Error("Error Posting Data");
                setSuccess(true);
            } catch (error) {
                setError(error.name);
                setSuccess(false);
            } finally {
                setIsPending(false);
            }
        };
    }, [url]);
};

export default useFetchDelete;
