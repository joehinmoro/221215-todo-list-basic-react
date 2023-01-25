import { Link } from "react-router-dom";

const TodosShowContent = ({ todo, handleDelete }) => {
    const colorMode = todo.isCompleted ? "danger" : "light";
    console.log(todo);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-9 col-lg-6 col-xl-5">
                    <div className={`card border-${colorMode} mb-3`}>
                        <div
                            className={`card-header   border-${colorMode}-subtle text-capitalize bg-dark-subtle text-${colorMode}`}
                        >
                            {todo.priority}
                        </div>
                        <div className="card-body bg-dark-subtle">
                            <h5 className={`card-title text-${colorMode}`}>{todo.title}</h5>
                        </div>
                        <div
                            className={`card-footer border-${colorMode}-subtle bg-dark-subtle d-flex  justify-content-around`}
                        >
                            <button className={`btn btn-outline-${colorMode}`}>
                                {todo.isCompleted ? "Undo" : "Done"}
                            </button>
                            <Link
                                to={`/${todo.id}/edit`}
                                className={`btn btn-outline-${colorMode}`}
                            >
                                Edit
                            </Link>
                            <button
                                onClick={(e) => handleDelete(todo.id)}
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
