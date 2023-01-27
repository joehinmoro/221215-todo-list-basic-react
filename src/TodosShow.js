import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import TodosShowContent from "./TodosShowContent";
import useFetchGet from "./useFetchGet";

const TodosShow = () => {
    const [todo, setTodo] = useState(null);
    const history = useHistory();
    const { id } = useParams();
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
            if (!res.ok) throw Error("Error Deleting...");
            history.push("/");
        } catch (error) {
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    const handleStatus = async (id, isCompleted) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isCompleted: !isCompleted }),
            });
            if (!res.ok) throw Error("Error Updating");
            todo.isCompleted = !isCompleted;
            setTodo({ ...todo });
        } catch (error) {
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    const [isPending, error, getTodo] = useFetchGet(`http://localhost:8080/todos/${id}`);

    useEffect(() => {
        getTodo && setTodo(getTodo);
    }, [getTodo]);

    return (
        <div className="container">
            {isPending && <Loading />}
            {todo && (
                <TodosShowContent
                    todo={todo}
                    handleDelete={handleDelete}
                    handleStatus={handleStatus}
                />
            )}
            {error && <Error error={error} />}
        </div>
    );
};

export default TodosShow;
