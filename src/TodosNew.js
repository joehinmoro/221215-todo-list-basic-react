import { useEffect, useState } from "react";
import TodosForm from "./TodosForm";
import TodosCreate from "./TodosCreate";

const TodosNew = () => {
    // Define State
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("normal");
    const [payload, setPayload] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [disableSubmitButton, setDisableSubmitButton] = useState(true);
    const [submitButtonText, setSubmitButtonText] = useState("Create");
    const [formSubmitData, setFormSubmitData] = useState(null);

    // disable or enable form submit button if (title)
    useEffect(() => {
        title && setDisableSubmitButton(false);
        !title && setDisableSubmitButton(true);
    }, [title]);

    // set form submit button text based on create request status
    useEffect(() => {
        !isPending && !error && setSubmitButtonText("Create");
        if (isPending) {
            setSubmitButtonText("Creating");
            setDisableSubmitButton(true);
        }
        if (!isPending && error) {
            setSubmitButtonText("Error. Try Again");
            setDisableSubmitButton(false);
        }
    }, [isPending, error]);

    // set payload to be created
    useEffect(() => {
        if (formSubmitData) {
            setPayload({ ...formSubmitData, isCompleted: false });
        }
    }, [formSubmitData]);

    // if request success, reset payload, success status and form fields for next new todo
    useEffect(() => {
        if (success) {
            setPayload(null);
            setTitle("");
            setPriority("normal");
            setFormSubmitData(null);
            setSuccess(false);
        }
    }, [success]);

    return (
        <div>
            {/* mount todo input form component */}
            <TodosForm
                header={"New Form"}
                title={title}
                setTitle={setTitle}
                priority={priority}
                setPriority={setPriority}
                setFormSubmitData={setFormSubmitData}
                disableSubmitButton={disableSubmitButton}
                submitButtonText={submitButtonText}
            />
            {/* if payload is set mount create todo component */}
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
