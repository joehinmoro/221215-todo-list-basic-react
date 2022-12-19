const Random = () => {
    const string = "Random component";
    const number = 69;
    const nullValue = null;
    const undefinedValue = undefined;
    const boolean = true;
    const arr = [1, 2, 3, 4, "five"];
    const obj = {
        fname: "Josh",
        age: 45,
    };

    return (
        <div className="container">
            <p>{string}</p>
            <p>{number}</p>
            <p>{nullValue}</p>
            <p>{undefinedValue}</p>
            <p>{boolean}</p>
            <p>{arr}</p>
            {/* <p>{obj}</p> */}
        </div>
    );
};

export default Random;
