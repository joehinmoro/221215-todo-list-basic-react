import { Link } from "react-router-dom";

const TodosIndexContent = ({ todos, title, handleDelete, handleStatus }) => {
    return (
        <div className="container mt-3 p-3">
            <h2 className="text-center">{title}</h2>
            <div className="row justify-content-center mt-3">
                <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                    <div className="list-group">
                        {todos.map((todo) => {
                            return (
                                <Link
                                    to={`/${todo._id}`}
                                    // onClick={() => handleTodosDelete(todo.id)}
                                    key={todo._id}
                                    className={`list-group-item list-group-item-action ${
                                        todo.isCompleted && "list-group-item-danger"
                                    }`}
                                >
                                    <div className="d-flex justify-content-between">
                                        <span
                                            className={`${
                                                todo.isCompleted && "text-decoration-line-through"
                                            }`}
                                        >
                                            {todo.title}
                                        </span>
                                        <div className="w-25 d-flex justify-content-between ">
                                            <button
                                                onClick={async (e) => {
                                                    e.preventDefault();
                                                    const status = await handleStatus(
                                                        todo._id,
                                                        todo.isCompleted
                                                    );
                                                    console.log(status);
                                                }}
                                                className="btn btn-outline-light btn-sm "
                                            >
                                                {todo.isCompleted ? "Undo" : "Done"}
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    handleDelete(todo._id);
                                                    // e.stopPropagation();
                                                    e.preventDefault();
                                                }}
                                                className="btn btn-outline-danger btn-sm "
                                            >
                                                Delete
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
