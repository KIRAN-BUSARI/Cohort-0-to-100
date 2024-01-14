import { memo, useCallback, useState } from 'react'

function Callback() {
    const [counter, setCounter] = useState(0);
    const inputfunction = useCallback(() => {
        console.log("Clicked");
    }, [])
    return (
        <div>
            <Value inputfunction={inputfunction} />
            <button
                onClick={() => { setCounter(counter + 1) }}
            >Counter{counter}
            </button>
        </div>
    )
}

const Value = memo(function ({ inputfunction }) {
    console.log("Render");
    return (
        <div>
            <button>Button Clicked !</button>
        </div>
    )
})

export default Callback;