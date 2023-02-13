import { Link } from "react-router-dom";

const TodosShowContent = ({ todo, handleDelete, handleStatus }) => {
    // color mode based on todo completed status
    const colorMode = todo.isCompleted ? "danger" : "light";
    console.log(todo);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-9 col-lg-6 col-xl-5">
                    <div className={`card border-${colorMode} mb-3`}>
                        <div
                            className={`card-header d-flex justify-content-between border-${colorMode}-subtle text-capitalize bg-dark-subtle text-${colorMode}`}
                        >
                            <span>{todo.priority}</span>
                            <span>{todo.isCompleted ? "Completed" : "Pending"}</span>
                        </div>
                        <div className="card-body bg-dark-subtle">
                            <h5 className={`card-title text-${colorMode}`}>{todo.title}</h5>
                        </div>
                        <div
                            className={`card-footer border-${colorMode}-subtle bg-dark-subtle d-flex  justify-content-around`}
                        >
                            <button
                                onClick={(e) => handleStatus(todo._id, todo.isCompleted)}
                                className={`btn btn-outline-${colorMode}`}
                            >
                                {todo.isCompleted ? "Undo" : "Done"}
                            </button>
                            <Link
                                to={`/${todo._id}/edit`}
                                className={`btn btn-outline-${colorMode}`}
                            >
                                Edit
                            </Link>
                            <button
                                onClick={(e) => handleDelete(todo._id)}
                                className={`btn btn-outline-${colorMode}`}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodosShowContent;
