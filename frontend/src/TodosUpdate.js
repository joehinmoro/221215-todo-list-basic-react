import { useEffect } from "react";
import useFetchPost from "./useFetchPost";

const TodosUpdate = ({ id, payload, setIsPending, setError, setSuccess }) => {
    // make update request using payload from parent component
    const [isPending, error, success] = useFetchPost(
        `http://localhost:8080/todos/${id}`,
        payload,
        "PATCH"
    ); // set request status states using props functions from parent component
    useEffect(() => {
        setIsPending(isPending);
        setError(error);
        setSuccess(success);
    });
};

export default TodosUpdate;
