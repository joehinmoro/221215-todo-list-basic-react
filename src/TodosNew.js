import { useEffect, useState } from "react";
import useFetchPost from "./useFetchPost";

const TodosNew = () => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("normal");

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const HandleSubmit = async (e) => {
        // prevent default submit behaviour
        e.preventDefault();
        // console.log(e, e.target, e.target.priority.value);
        // create newTodo object
        setIsPending(true);
        const res = await fetch("http://localhost:8080/todos", {
            method: "POST",
            body: JSON.stringify({
                title,
                priority,
                isCompleted: false,
            }),
            headers: { "Content-Type": "application/json" },
        });
        setIsPending(false);
        // setTimeout(()=>{},1000)
        console.log(res);
    };

    return (
        <div className="container ">
            <h2 className="text-center">New Todo</h2>
            <form onSubmit={HandleSubmit}>
                <div className="row justify-content-center mt-3">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        {/* <div className="container"> */}
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="form-control"
                                        id="title"
                                        placeholder="Title"
                                    />
                                    <label htmlFor="title">Title</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                {/* <div className="container"> */}
                                <div className="row mb-3">
                                    <label htmlFor="priority" className="col-sm-2 col-form-label">
                                        Priority:
                                    </label>
                                    <div className="col-sm-10">
                                        {/* <input type="email" class="form-control" id="inputEmail3" /> */}
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
                                {/* </div> */}
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="d-grid gap-2">
                                    {!isPending && (
                                        <button className="btn btn-block btn-outline-light h-100">
                                            Create Todo
                                        </button>
                                    )}
                                    {isPending && (
                                        <button
                                            className="btn btn-block btn-outline-light h-100"
                                            disabled
                                        >
                                            Creating Todo
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </form>
        </div>

        // <div className="container mt-3">
        //     <h2 className="text-center">New Todo</h2>
        //     <form action="">
        //         <div className="form-floating mb-3">
        //             <input
        //                 type="text"
        //                 value={title}
        //                 onChange={(e) => setTitle(e.target.value)}
        //                 className="form-control"
        //                 id="title"
        //                 placeholder="Title"
        //             />
        //             <label htmlFor="title">Title</label>
        //         </div>
        //         <div className="row mb-3">
        //             <div className="col-sm-12 col-md-8">
        //                 {/* <div className=""> */}
        //                 <label htmlFor="priority" className="col-sm-2 col-form-label">
        //                     Priority:
        //                 </label>
        //                 <div class="col-sm-10">
        //                     <select
        //                         value={priority}
        //                         onChange={(e) => setPriority(e.target.value)}
        //                         className="form-select "
        //                         aria-label="Default select example"
        //                         id="priority"
        //                     >
        //                         <option value="low">Low</option>
        //                         <option value="normal">Normal</option>
        //                         <option value="high">High</option>
        //                     </select>
        //                 </div>
        //                 {/* </div> */}
        //             </div>
        //             <div className="col-sm-12 col-md-4 text-center">
        //                 <div className="d-grid gap-2">
        //                     <button className="btn btn-block btn-outline-light h-100">
        //                         Create Todo
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div class="row mb-3">
        //             <label for="inputEmail3" className="col-sm-2 col-form-label">
        //                 Email
        //             </label>
        //             <div class="col-sm-10">
        //                 <input type="email" class="form-control" id="inputEmail3" />
        //             </div>
        //         </div>
        //     </form>

        //     <div className="container mt-5">
        //         <p>{title}</p>
        //         <p>{priority}</p>
        //     </div>
        // </div>
    );
};

export default TodosNew;
