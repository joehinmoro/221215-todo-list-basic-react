import useFetchGet from "./useFetchGet";
import TodosIndexContent from "./TodosIndexContent";
import { useHistory } from "react-router-dom";

const TodosIndex = () => {
    const [isPending, error, todos] = useFetchGet("http://localhost:8080/todos");
    const history = useHistory();

    const handleDelete = async (id, e) => {
        // try {
        //     const res = await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
        //     if (!res.ok) throw Error("Error Deleting...");
        //     console.log(res.redirected);
        //     history.push("/");
        // } catch (error) {
        //     console.log(error.message, error.name);
        //     alert(error.message, error.name);
        // }
        console.log(e);
        // e.preventDefault();
        // await e.stopPropagation();
        e.stopPropagation();
        fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE", redirect: "manual" })
            .then((res) => {
                if (!res.ok) throw Error("Error Deleting...");
                history.push("/");
            })
            .catch((error) => {
                console.log(error.message, error.name);
                alert(error.message, error.name);
            });
    };

    return (
        <div>
            {error && <div className="container mt-5 text-center">{error}</div>}
            {isPending && <div className="container mt-5 text-center">Loading</div>}
            {todos && (
                <TodosIndexContent todos={todos} title={"All Todos"} handleDelete={handleDelete} />
            )}
        </div>
    );
};

export default TodosIndex;
