import useFetchPost from "./useFetchPost";

const TodosCreate = (url, payload) => {
    const [data, isPending, error] = useFetchPost(url, payload);

    return <div className="container"></div>;
};

export default TodosCreate;
