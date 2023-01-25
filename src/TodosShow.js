import { useHistory, useParams } from "react-router-dom";
import TodosShowContent from "./TodosShowContent";
import useFetchGet from "./useFetchGet";

const TodosShow = () => {
    const history = useHistory();
    const { id } = useParams();
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${id}`, { method: "DELETE" });
            if (!res.ok) throw Error("Error Deleting...");
            history.push("/");
        } catch (error) {
            console.log(error.message, error.name);
            alert(error.message, error.name);
        }
    };

    const [isPending, error, todo] = useFetchGet(`http://localhost:8080/todos/${id}`);

    return (
        <div className="container">
            {isPending && <h4>loading</h4>}
            {todo && <TodosShowContent todo={todo} handleDelete={handleDelete} />}
            {error && <h4>{error}</h4>}
        </div>
    );
};

export default TodosShow;
