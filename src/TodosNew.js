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
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [formSubmitData, setFormSubmitData] = useState(null);

    useEffect(() => {
        if (title) setDisableSubmit(false);
        if (!title) setDisableSubmit(true);
    }, [title]);

    useEffect(() => {
        if (formSubmitData) {
            setPayload({ ...formSubmitData, isCompleted: false });
            console.log(payload);
        }
    }, [formSubmitData]);

    useEffect(() => {
        if (success) {
            console.log("i am herer");
            setPayload(null);
            // reset todos form
            setTitle("");
            setPriority("normal");
            setFormSubmitData(null);
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
                error={error}
                setFormSubmitData={setFormSubmitData}
                disableSubmit={disableSubmit}
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
