const TodosForm = ({
    header,
    title,
    setTitle,
    priority,
    setPriority,

    setFormSubmitData,
    disableSubmitButton,
    submitButtonText,
}) => {
    // handle form submit
    const handleSubmit = async (e) => {
        // prevent default submit behaviour

        e.preventDefault();
        // validate todo title then create request body
        if (title)
            setFormSubmitData({
                title,
                priority,
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">{header}</h2>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center mt-3">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="form-control text-capitalize"
                                        id="title"
                                        placeholder="Title"
                                    />
                                    <label htmlFor="title">Title</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <div className="row mb-3">
                                    <label htmlFor="priority" className="col-sm-2 col-form-label">
                                        Priority:
                                    </label>
                                    <div className="col-sm-10">
                                        <select
                                            value={priority}
                                            onChange={(e) => setPriority(e.target.value)}
                                            className="form-select "
                                            aria-label="Default select example"
                                            id="priority"
                                        >
                                            <option value="low">Low</option>
                                            <option value="normal">Normal</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="d-grid gap-2">
                                    <button
                                        className="btn btn-block btn-outline-light h-100"
                                        disabled={disableSubmitButton}
                                    >
                                        {submitButtonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TodosForm;
