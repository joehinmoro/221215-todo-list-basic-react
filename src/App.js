import Navbar from "./Navbar";
import Fundamentals from "./Fundamentals";
import { useState, useEffect } from "react";

const App = () => {
    const [todos, setTodos] = useState(null);
    const [todosIsPending, setTodosIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = `http://localhost:808d0/todos`;
        const getTodos = async () => {
            try {
                const res = await fetch(url);
                console.log(res);
                if (!res.ok) throw Error("Error encountered");
                const data = await res.json();
                setTodos(data);
                setTodosIsPending(false);
            } catch (error) {
                console.log(error);
                setTodosIsPending(false);
                setError(error.message);
            } finally {
            }
        };
        setTimeout(() => getTodos(), 2000);
    }, []);
    useEffect(() => {
        console.log(
            `todos is ${Boolean(todos)}\nispending is ${Boolean(
                todosIsPending
            )}\nerror is ${Boolean(error)}`
        );
    }, [todos, todosIsPending, error]);
    const handleTodosDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    return (
        <div>
            <Navbar />
            {error && <div className="container mt-5 text-center">{error}</div>}
            {todosIsPending && <div className="container mt-5 text-center">Loading</div>}
            {todos && <Fundamentals todos={todos} handleTodosDelete={handleTodosDelete} />}
        </div>
    );
};

export default App;
