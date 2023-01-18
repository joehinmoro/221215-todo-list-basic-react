import { useEffect, useState } from "react";

import TodosForm from "./TodosForm";
import TodosCreate from "./TodosCreate";

const TodosNew = () => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("normal");
    const [payload, setPayload] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
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

    useEffect(() => {
        if (success) {
            console.log("i am herer");
            setPayload(null);
            // reset todos form
            setTitle("");
            setPriority("normal");
            setSuccess(false);
        }
    }, [success]);

    return (
        <div>
            <TodosForm
                header={"New Form"}
                title={title}
                setTitle={setTitle}
                priority={priority}
                setPriority={setPriority}
                isPending={isPending}
                setIsPending={setIsPending}
                error={error}
                setError={setError}
                handleSubmit={handleSubmit}
            />
            {payload && (
                <TodosCreate
                    payload={payload}
                    setIsPending={setIsPending}
                    setError={setError}
                    setSuccess={setSuccess}
                />
            )}
        </div>
    );
};

export default TodosNew;
