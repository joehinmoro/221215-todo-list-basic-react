import { useEffect } from "react";

import useFetchPost from "./useFetchPost";

const TodosCreate = ({ payload, setIsPending, setError, setSuccess }) => {
    const [isPending, error, success] = useFetchPost("http://localhost:8080/todos", payload);

    useEffect(() => {
        console.log(
            "TodoCreate: ",
            "\nerror is " + error + "\nisPending " + isPending + "\nsuccess " + success
        );
        setIsPending(isPending);
        setError(error);
        setSuccess(success);
    }, [isPending, error, success, setIsPending, setError, setSuccess]);

    return "";
};

export default TodosCreate;
