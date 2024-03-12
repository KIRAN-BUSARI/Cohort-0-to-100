import { useState } from "react";

function Memo() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    // useEffect(() => {
    //     let sum = 0;
    //     for (let i = 0; i < inputValue; i++) {
    //         sum = sum + i;
    //     }
    // },[inputValue])

    let sum = 0;
    for (let i = 0; i <= inputValue; i++) {
        sum = sum + i;
    }

    return (
        <div>
            <input
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
                type="number"
            />
            <h2>The sum is : {sum}</h2>
            <button onClick={setCounter(counter + 1)}>Counter({counter})</button>
        </div>
    )
}

export default Memo;