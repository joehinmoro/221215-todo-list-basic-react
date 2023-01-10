import Navbar from "./Navbar";
import Fundamentals from "./Fundamentals";
import { useEffect } from "react";
import useFetch from "./useFetch";

const App = () => {
    const [todos, isPending, error] = useFetch("http://localhost:8080/todos");
    useEffect(() => {
        console.log(`
todos is ${Boolean(todos)}
ispending is ${Boolean(isPending)}
error is ${Boolean(error)}`);
    }, [todos, isPending, error]);
    // const handleTodosDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    const handleTodosDelete = (id) => console.log(todos.filter((todo) => todo.id !== id));
    return (
        <div>
            <Navbar />
            {error && <div className="container mt-5 text-center">{error}</div>}
            {isPending && <div className="container mt-5 text-center">Loading</div>}
            {todos && <Fundamentals todos={todos} handleTodosDelete={handleTodosDelete} />}
        </div>
    );
};

export default App;
