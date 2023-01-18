import { useState } from "react";
import TodosCreate from "./TodosCreate";
import TodosFormButton from "./TodosFormButton";

const TodosNew = () => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("normal");
    const [payload, setPayload] = useState(null);
    const [error, setError] = useState(null);

    const HandleSubmit = async (e) => {
        // prevent default submit behaviour

        e.preventDefault();
        // validate todo title then create request body
        if (title)
            setPayload({
                title,
                priority,
                isCompleted: false,
            });
    };

    return (
        <div className="container ">
            <h2 className="text-center">New Todo</h2>
            <form onSubmit={HandleSubmit}>
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
                                    {!payload && !error && <TodosFormButton innerText={"Create"} />}
                                    {payload && !error && (
                                        <TodosFormButton
                                            innerText={"Creating..."}
                                            disabled={true}
                                        />
                                    )}
                                    {error && <TodosFormButton innerText={"Error. Try Again"} />}

                                    {payload && (
                                        <TodosCreate
                                            payload={payload}
                                            setPayload={setPayload}
                                            setTitle={setTitle}
                                            setPriority={setPriority}
                                            setError={setError}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TodosNew;
