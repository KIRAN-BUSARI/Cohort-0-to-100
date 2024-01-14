import { useEffect, useState, React } from "react";
import axios from "axios";

function Todo({ id }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then(function (res) {
                setTodos(res.data.todo)
            })
    }, [id])

    return (
        <>
            <div>
                {todos.title}
            </div>
            <div>
                {todos.description}
            </div>
        </>
    )
}

function TodoFetch() {
    const [ids, setIds] = useState(1);
    return (
        <div>
            <Todo id={ids} />
            <br />
            <div>
                <button onClick={() => { setIds(1) }}>1</button>
                <button onClick={() => { setIds(2) }}>2</button>
                <button onClick={() => { setIds(3) }}>3</button>
                <button onClick={() => { setIds(4) }}>4</button>
            </div>
        </div>
    )
}

export default TodoFetch;