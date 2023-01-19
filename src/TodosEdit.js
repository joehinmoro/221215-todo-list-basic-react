import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodosForm from "./TodosForm";
import useFetchGet from "./useFetchGet";

const TodosEdit = () => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("normal");
    const [payload, setPayload] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // extract todo id from url params
    const { id } = useParams();
    // fetch todo record using params
    const [isPendingGET, errorGET, todo] = useFetchGet(`http://localhost:8080/todos/${id}`);
    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setPriority(todo.priority);
        }
    }, [todo]);
    return (
        <div className="container">
            {errorGET && <div className="container mt-5 text-center">{error}</div>}
            {isPendingGET && <div className="container mt-5 text-center">Loading</div>}
            {todo && (
                <TodosForm
                    header={"Edit Todo"}
                    title={title}
                    setTitle={setTitle}
                    priority={priority}
                    setPriority={setPriority}
                    isPending={isPending}
                    setIsPending={setIsPending}
                    error={error}
                    setError={setError}
                    // handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default TodosEdit;
