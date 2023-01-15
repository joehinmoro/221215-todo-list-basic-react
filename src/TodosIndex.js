import { useEffect } from "react";
import useFetchGet from "./useFetchGet";
import TodosIndexContent from "./TodosIndexContent";

const Home = () => {
    const [todos, isPending, error] = useFetchGet("http://localhost:8080/todos");

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
            {todos && <TodosIndexContent todos={todos} title={"All Todos"} />}
        </div>
    );
};

export default Home;
