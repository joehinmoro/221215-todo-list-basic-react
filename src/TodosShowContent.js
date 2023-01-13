const TodosShowContent = ({ todo }) => {
    console.log(todo);
    return (
        <div className="container mt-3">
            <h2 className="text-center">{todo.title}</h2>
        </div>
    );
};

export default TodosShowContent;
