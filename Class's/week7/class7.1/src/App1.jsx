import React from 'react'
import { useState } from 'react'

function App1() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Count count={count} />
            <Buttons count={count} setCount={setCount} />
        </div>
    )
}

function Count({ count }) {
    return (
        <div className="">
            {count}
        </div>
    )
}

function Buttons({ count, setCount }) {
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
export default App1