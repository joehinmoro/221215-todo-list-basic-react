const TodosFormButton = ({ innerText, disabled = false }) => {
    return (
        <button className="btn btn-block btn-outline-light h-100" disabled={disabled}>
            {innerText}
        </button>
    );
};

export default TodosFormButton;
