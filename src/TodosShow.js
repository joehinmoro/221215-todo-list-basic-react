import { useParams } from "react-router-dom";
import TodosShowContent from "./TodosShowContent";
import useFetchGet from "./useFetchGet";

const TodosShow = () => {
    const { id } = useParams();

    const [isPending, error, todo] = useFetchGet(`http://localhost:8080/todos/${id}`);

    console.log(todo);
    return (
        <div className="container">
            {isPending && <h4>loading</h4>}
            {todo && <TodosShowContent todo={todo} />}
            {error && <h4>{error}</h4>}
        </div>
    );
};

export default TodosShow;
