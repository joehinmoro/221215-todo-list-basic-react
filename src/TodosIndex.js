import useFetchGet from "./useFetchGet";
import TodosIndexContent from "./TodosIndexContent";
import { useEffect, useState } from "react";

const TodosIndex = () => {
    const [todos, setTodos] = useState(null);

    const [isPending, error, GetTodos] = useFetchGet("http://localhost:8080/todos");

    useEffect(() => {
        setTodos(GetTodos);
    }, [GetTodos]);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
            if (!res.ok) throw Error("Error Deleting...");
            // window.location.reload();
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    const handleStatus = async (_id, isCompleted) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${_id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isCompleted: !isCompleted }),
            });
            if (!res.ok) throw Error("Error Updating...");
            // const newTodos = todos.filter((todo) => todo.id !== id);

            // const currTodo = todos.filter((todo) => todo.id === id);

            // currTodo[0].isCompleted = !isCompleted;

            // setTodos(newTodos.concat(...currTodo));

            todos[todos.indexOf(todos.find(({ id }) => id === _id))].isCompleted = !isCompleted;
            setTodos([...todos]);
            // return idx;
        } catch (error) {
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    return (
        <div>
            {error && <div className="container mt-5 text-center">{error}</div>}
            {isPending && <div className="container mt-5 text-center">Loading</div>}
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
