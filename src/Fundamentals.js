import { useState } from "react";

const Random = () => {
    const [dummy, updateDummy] = useState([
        { id: 1, title: "kill the haters", isCompleted: false },
        { id: 2, title: "paint the town red", isCompleted: false },
        { id: 3, title: "vote peter obi", isCompleted: true },
        { id: 4, title: "stream cruel santino", isCompleted: false },
    ]);

    const string = "Random component";
    const number = 69;

    const arr = [1, 2, 3, 4, "five"];
    const check = (num) => (num & 1 ? "odd" : "even");
    const generate = () => Math.floor(Math.random() * 16) + 1;

    const [value, newValue] = useState(generate());
    const [randNum, newRandNum] = useState(value);
    const [randNumStat, newRandNumStat] = useState(check(randNum));

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

            <ul className="list-group">
                {dummy.map((dumm) => {
                    return (
                        <li
                            key={dumm.id}
                            className="list-group-item list-group-item-action list-group-item-dark"
                        >
                            <input
                                className="form-check-input me-1"
                                type="checkbox"
                                value={dumm.isCompleted}
                                id={`${dumm.id}`}
                            />
                            <label className="form-check-label stretched-link" for={`${dumm.id}`}>
                                {dumm.title}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Random;
