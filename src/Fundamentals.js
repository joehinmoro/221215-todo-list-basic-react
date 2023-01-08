import { useState, useEffect } from "react";

const Fundamentals = ({ todos, handleTodosDelete }) => {
    const string = "Random component";
    const number = 69;

    const arr = [1, 2, 3, 4, "five"];
    const check = (num) => (num & 1 ? "odd" : "even");
    const generate = () => Math.floor(Math.random() * 16) + 1;

    const [value, newValue] = useState(generate());
    const [randNum, newRandNum] = useState(value);
    const [randNumStat, newRandNumStat] = useState(check(randNum));
    let x = 1;
    useEffect(() => {
        console.log(`state change number ${x}`);
        x += 1;
    });

    const clickFunc = (e) => {
        newValue(generate());
        newRandNum(value);
        newRandNumStat(check(value));
    };

    const clickFunc2 = (t, e) => {
        console.log(e.target.textContent, "was clicked");
        console.log(t);
    };

    return (
        <div className="container">
            <p>{string}</p>
            <p>{number}</p>
            <p>{arr}</p>
            <p>
                random number is: {randNum} which is {randNumStat}
            </p>

            <div>
                <button className="btn btn-outline-light" onClick={clickFunc}>
                    click me
                </button>
                <button className="btn btn-outline-light" onClick={(e) => clickFunc2("lala", e)}>
                    click me
                </button>
            </div>

            <div className="list-group">
                {todos.map((todo) => {
                    return (
                        <button
                            onClick={() => handleTodosDelete(todo.id)}
                            key={todo.id}
                            className={`list-group-item list-group-item-action ${
                                todo.isCompleted
                                    ? "list-group-item-danger text-decoration-line-through"
                                    : ""
                            }`}
                        >
                            {todo.title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Fundamentals;
