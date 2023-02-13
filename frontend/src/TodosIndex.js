import useFetchGet from "./useFetchGet";
import TodosIndexContent from "./TodosIndexContent";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";

const TodosIndex = () => {
    // todo state
    const [todos, setTodos] = useState(null);
    // get all todos request
    const [isPending, error, GetTodos] = useFetchGet("/api/todos");

    // set todo state from fetched data
    useEffect(() => {
        setTodos(GetTodos);
    }, [GetTodos]);

    // delete todo function
    const handleDelete = async (id) => {
        try {
            // send delete request
            const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
            //    throw message on error
            if (!res.ok) throw Error("Error Deleting...");
            // window.location.reload();
            // filter out deleted todo from todos state on success
            setTodos(todos.filter(({ _id }) => _id !== id));
        } catch (error) {
            // handle error
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    // toggle todo completed status function
    const handleStatus = async (id, isCompleted) => {
        try {
            // send update request to toggle status
            const res = await fetch(`/api/todos/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isCompleted: !isCompleted }),
            });
            // throw message on error
            if (!res.ok) throw Error("Error Updating...");
            // const newTodos = todos.filter((todo) => todo.id !== id);

            // const currTodo = todos.filter((todo) => todo.id === id);

            // currTodo[0].isCompleted = !isCompleted;

            // setTodos(newTodos.concat(...currTodo));
            // toggle todo completed status in todos state on success
            todos[todos.indexOf(todos.find(({ _id }) => _id === id))].isCompleted = !isCompleted;
            setTodos([...todos]);
        } catch (error) {
            // handle error
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    return (
        <div>
            {/* render all todos */}
            {error && <Error error={error} />}
            {isPending && <Loading />}
            {todos && (
                <TodosIndexContent
                    todos={todos}
                    title={"All Todos"}
                    handleDelete={handleDelete}
                    handleStatus={handleStatus}
                />
            )}
        </div>
    );
};

export default TodosIndex;
