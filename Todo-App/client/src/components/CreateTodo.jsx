import { useState } from "react";

export default function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="flex flex-col m-4">
            <input type="text" placeholder='Title' className="p-2 border-[2px] border-black mb-2  rounded-lg" onChange={function (e) {
                // const value = e.target.value
                setTitle(e.target.value)
            }} />

            <input type="text" placeholder='Description' className="p-2 border-[2px] border-black mb-2 rounded-lg" onChange={function (e) {
                // const value = e.target.value;
                setDescription(e.target.value)
            }} />

            <button className="border-[2px] border-black p-2 rounded-lg bg-blue-300 hover:bg-blue-400"
                onClick={
                    fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(async function (res) {
                            const json = await res.json()
                            console.log(json.todos)
                            alert("Todo Added!")
                        })
                }
            >Add Todo</button>
        </div>
    )
}
