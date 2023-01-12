const ListTodo = ({ todos, title }) => {
    return (
        <div className="container mt-3 p-3">
            <h2 className="text-center">{title}</h2>
            <div className="row justify-content-center mt-3">
                <div className="col-sm-12 col-md-9 col-lg-6">
                    <div className="list-group">
                        {todos.map((todo) => {
                            return (
                                <button
                                    // onClick={() => handleTodosDelete(todo.id)}
                                    key={todo.id}
                                    className={`list-group-item list-group-item-action ${
                                        todo.isCompleted
                                            ? "list-group-item-danger text-decoration-line-through"
                                            : ""
                                    }`}
                                >
                                    {todo.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListTodo;
