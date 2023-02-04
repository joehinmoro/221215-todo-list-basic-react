import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import TodosShowContent from "./TodosShowContent";

import useFetchGet from "./useFetchGet";

const TodosShow = () => {
    // set todo state
    const [todo, setTodo] = useState(null);
    // access nav history and destruct todo id from url params
    const history = useHistory();
    const { id } = useParams();

    // func to handle delete request
    const handleDelete = async (id) => {
        try {
            // make delete request
            const res = await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
            // throw message on error
            if (!res.ok) throw Error("Error Deleting...");
            // redirect to index on success
            history.push("/");
        } catch (error) {
            // handle error
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    // func to toggle todo completed status
    const handleStatus = async (id, isCompleted) => {
        try {
            // make request to toggle sompleted status
            const res = await fetch(`http://localhost:8080/todos/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isCompleted: !isCompleted }),
            });
            // throw message on error
            if (!res.ok) throw Error("Error Updating");
            // toggle status in todo state
            todo.isCompleted = !isCompleted;
            setTodo({ ...todo });
        } catch (error) {
            // handle error
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    // fetch todo using id from url
    const [isPending, error, getTodo] = useFetchGet(`http://localhost:8080/todos/${id}`);

    // set todo state using data from todo get fetch request
    useEffect(() => {
        getTodo && setTodo(getTodo);
    }, [getTodo]);

    return (
        // render todo content component
        <div className="container">
            {isPending && <Loading />}
            {todo && (
                <div className="container">
                    <TodosShowContent
                        todo={todo}
                        handleDelete={handleDelete}
                        handleStatus={handleStatus}
                    />
                </div>
            )}
            {error && <Error error={error} />}
        </div>
    );
};

export default TodosShow;
