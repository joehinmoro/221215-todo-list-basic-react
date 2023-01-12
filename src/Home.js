import { useEffect } from "react";
import useFetch from "./useFetch";
import ListTodo from "./ListTodo";

const Home = () => {
    const { data: todos, isPending, error } = useFetch("http://localhost:8080/todos");

    useEffect(() => {
        console.log(`
todos is ${Boolean(todos)}
ispending is ${Boolean(isPending)}
error is ${Boolean(error)}`);
    }, [todos, isPending, error]);

    return (
        <div>
            {error && <div className="container mt-5 text-center">{error}</div>}
            {isPending && <div className="container mt-5 text-center">Loading</div>}
            {todos && <ListTodo todos={todos} title={"All Todos"} />}
        </div>
    );
};

export default Home;
