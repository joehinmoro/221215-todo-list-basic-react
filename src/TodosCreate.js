import { useEffect } from "react";
import TodosCreateButton from "./TodosCreateButton";
import useFetchPost from "./useFetchPost";

const TodosCreate = ({ payload, setPayload, setTitle, setPriority }) => {
    const [success, isPending, error] = useFetchPost("http://localhost:8080/todos", payload);

    useEffect(() => {
        console.log(success);
        if (success === true) {
            setPayload(null);
            // reset todos form
            setTitle("");
            setPriority("normal");
        }
    }, [success]);

    return (
        <div className="d-grid gap-2">
            {!error && <TodosCreateButton disabled innerText={"Creating Todo"} />}
            {error && <TodosCreateButton innerText={"Error. Try Again"} />}
        </div>
    );
};

export default TodosCreate;
