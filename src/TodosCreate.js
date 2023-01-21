import { useEffect } from "react";

import useFetchPost from "./useFetchPost";

const TodosCreate = ({ payload, setIsPending, setError, setSuccess }) => {
    // make create request using data from parent component
    const [isPending, error, success] = useFetchPost("http://localhost:8080/todos", payload);

    // set request status states using props functions from parent component
    useEffect(() => {
        setIsPending(isPending);
        setError(error);
        setSuccess(success);
    });
};

export default TodosCreate;
