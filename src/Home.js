import Random from "./Random";
import { useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {
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
            {error && <div className="container mt-5 text-center">{error}</div>}
            {isPending && <div className="container mt-5 text-center">Loading</div>}
            {todos && <Random todos={todos} handleTodosDelete={handleTodosDelete} />}
        </div>
    );
};

export default Home;
