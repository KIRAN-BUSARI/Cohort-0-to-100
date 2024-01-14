import { useState } from "react"
import { CountContext } from "./context";
import { useContext } from "react";

function App2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={count}>
                <Count setCount={setCount} />
            </CountContext.Provider>
        </div>
    )
}

function Count({ setCount }) {
    return <div>
        <CountRenderer />
        <Buttons setCount={setCount} />
    </div>
}

function CountRenderer() {
    const count = useContext(CountContext)
    return <div className="m-2">
        {count}
    </div>
}

function Buttons({ setCount }) {
    const count = useContext(CountContext)
    return (
        <div className="m-2">
            <button className='border border-black rounded-md p-2 mr-2' onClick={() => {
                setCount(count + 1)
            }}>Increase</button>

            <button className='border border-black rounded-md p-2' onClick={() => {
                setCount(count - 1)
            }}>Decrease</button>
        </div>
    )
}

export default App2