import { useEffect, useState } from "react";
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
export default Todo;