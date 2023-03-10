import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import TodosForm from "./TodosForm";
import TodosUpdate from "./TodosUpdate";
import useFetchGet from "./useFetchGet";

const TodosEdit = () => {
    // create states
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("normal");
    const [payload, setPayload] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [disableSubmitButton, setDisableSubmitButton] = useState(true);
    const [submitButtonText, setSubmitButtonText] = useState("Update");
    const [formSubmitData, setFormSubmitData] = useState(null);
    const history = useHistory();

    // extract todo id from url params
    const { id } = useParams();
    // fetch todo record using params
    const [isPendingGET, errorGET, todo] = useFetchGet(`/api/todos/${id}`);
    // set update form fields to current todos data
    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setPriority(todo.priority);
        }
    }, [todo]);

    // handle edit form submit button disabled status (mitigating redundant update request)
    useEffect(() => {
        if (todo) {
            // if (todo.title === title && todo.priority === priority) setDisableSubmitButton(true);
            // if (todo.title !== title || todo.priority !== priority) setDisableSubmitButton(false);
            todo.title === title && todo.priority === priority && setDisableSubmitButton(true);
            (todo.title !== title || todo.priority !== priority) && setDisableSubmitButton(false);
        }
    }, [todo, title, priority]);

    // set form submit button text based on update request status
    useEffect(() => {
        !isPending && !error && setSubmitButtonText("Update");
        if (isPending) {
            setSubmitButtonText("Updating");
            setDisableSubmitButton(true);
        }
        if (!isPending && error) {
            setSubmitButtonText("Error. Try Again");
            setDisableSubmitButton(false);
        }
    }, [isPending, error]);

    // set payload from form data ensuring no redundant field
    useEffect(() => {
        if (formSubmitData) {
            const payload = {};
            if (title !== todo.title) payload.title = title;
            if (priority !== todo.priority) payload.priority = priority;
            console.log(payload);
            setPayload(payload);
        }
    }, [formSubmitData]);

    // if update request is successful:
    useEffect(() => {
        if (success) {
            // unload payload
            setPayload(null);
            // redirect to show route
            history.push(`/${id}`);
        }
    }, [success]);

    return (
        <div className="container">
            {/* render form component on load */}
            {errorGET && <Error error={"Something went wrong"} />}
            {isPendingGET && <Loading />}
            {todo && (
                <TodosForm
                    header={"Edit Todo"}
                    title={title}
                    setTitle={setTitle}
                    priority={priority}
                    setPriority={setPriority}
                    isPending={isPending}
                    setFormSubmitData={setFormSubmitData}
                    disableSubmitButton={disableSubmitButton}
                    submitButtonText={submitButtonText}
                />
            )}
            {/* if update payload is set, render update component */}
            {payload && (
                <TodosUpdate
                    payload={payload}
                    setIsPending={setIsPending}
                    setError={setError}
                    setSuccess={setSuccess}
                    id={id}
                />
            )}
        </div>
    );
};

export default TodosEdit;
