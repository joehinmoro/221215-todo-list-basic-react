import { Link } from "react-router-dom";

const TodosIndexContent = ({ todos, title, handleDelete }) => {
    return (
        <div className="container mt-3 p-3">
            <h2 className="text-center">{title}</h2>
            <div className="row justify-content-center mt-3">
                <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                    <div className="list-group">
                        {todos.map((todo) => {
                            return (
                                <Link
                                    to={`/${todo.id}`}
                                    // onClick={() => handleTodosDelete(todo.id)}
                                    key={todo.id}
                                    className={`list-group-item list-group-item-action ${
                                        todo.isCompleted
                                            ? "list-group-item-danger text-decoration-line-through"
                                            : ""
                                    }`}
                                >
                                    <div className="d-flex justify-content-between">
                                        {todo.title}
                                        <div className="d-flex justify-content-between ms-auto">
                                            <button className="btn btn-outline-light btn-sm">
                                                hhh
                                            </button>
                                            <button
                                                onClick={(e) => handleDelete(todo.id, e)}
                                                className="btn btn-outline-light btn-sm"
                                            >
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodosIndexContent;
