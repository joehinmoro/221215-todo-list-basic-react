import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodosForm from "./TodosForm";
import useFetchGet from "./useFetchGet";

const TodosEdit = () => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("normal");
    const [payload, setPayload] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [disableSubmitButton, setDisableSubmitButton] = useState(true);
    const [submitButtonText, setSubmitButtonText] = useState("Update");
    const [formSubmitData, setFormSubmitData] = useState(null);

    // extract todo id from url params
    const { id } = useParams();
    // fetch todo record using params
    const [isPendingGET, errorGET, todo] = useFetchGet(`http://localhost:8080/todos/${id}`);
    //    set update form fields to current todos data
    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setPriority(todo.priority);
        }
    }, [todo]);

    // handle edit form submit button disabled status (mitigating redundant update request)
    useEffect(() => {
        if (todo) {
            if (todo.title === title && todo.priority === priority) setDisableSubmitButton(true);
            if (todo.title !== title || todo.priority !== priority) setDisableSubmitButton(false);
        }
    }, [todo, title, priority]);

    // set form submit button text based on update request status
    useEffect(() => {
        // !isPending && !error && setSubmitButtonText("Update");
        if (isPending) {
            setSubmitButtonText("Updating");
            setDisableSubmitButton(true);
            console.log("lulul");
        }

        if (error && !isPending) {
            setSubmitButtonText("Error. Try Again");
            setDisableSubmitButton(false);
        }
    }, [isPending, error]);

    //
    useEffect(() => {
        if (formSubmitData) {
            console.log("lol");
            setTimeout(() => {
                setIsPending(true);
                const rand = Math.floor(Math.random() * 2);
                if (rand === 0) {
                    setSuccess(true);
                    setError(false);
                } else {
                    setSuccess(false);
                    setError(true);
                }
                setIsPending(false);
            }, 2000);
        }
    }, [formSubmitData]);

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
        <div className="container">
            {errorGET && <div className="container mt-5 text-center">{error}</div>}
            {isPendingGET && <div className="container mt-5 text-center">Loading</div>}
            {todo && (
                <TodosForm
                    header={"Edit Todo"}
                    title={title}
                    setTitle={setTitle}
                    priority={priority}
                    setPriority={setPriority}
                    isPending={isPending}
                    setPayload={setPayload}
                    setIsPending={setIsPending}
                    error={error}
                    setError={setError}
                    setFormSubmitData={setFormSubmitData}
                    disableSubmitButton={disableSubmitButton}
                    submitButtonText={submitButtonText}
                />
            )}
        </div>
    );
};

export default TodosEdit;
