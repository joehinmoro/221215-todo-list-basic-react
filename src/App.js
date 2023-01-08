import Navbar from "./Navbar";
import Fundamentals from "./Fundamentals";
import { useState, useEffect } from "react";

const App = () => {
    const [todos, setTodos] = useState(null);
    const [todosIsPending, setTodosIsPending] = useState(true);

    useEffect(() => {
        const url = `http://localhost:8080/todos`;
        const getTodos = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setTodos(data);
                setTodosIsPending(false);
                console.log(
                    `todos is ${Boolean(todos)} and ispending is ${Boolean(todosIsPending)}`
                );
            } catch (error) {
                console.log(error);
            } finally {
                setTodosIsPending(false);
                console.log(
                    `todos is ${Boolean(todos)} and ispending is ${Boolean(todosIsPending)}`
                );
            }
        };
        setTimeout(() => getTodos(), 2000);
    }, []);

    const handleTodosDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    return (
        <div>
            <Navbar />
            {todosIsPending && <div className="container mt-5 text-center">Loading</div>}
            {todos && <Fundamentals todos={todos} handleTodosDelete={handleTodosDelete} />}
        </div>
    );
};

export default App;
