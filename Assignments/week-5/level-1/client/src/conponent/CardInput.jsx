import React, { useState } from 'react'

function CardInput() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [intrests, setIntrests] = useState([]);

    return (
        <div className='h-screen flex justify-center'>
            <div className="w-1/2">
                <label htmlFor="name">Name :<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='border rounded-md border-blue-400 p-1 m-1' /></label><br />
                <label htmlFor="description">Description : <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className='border rounded-md border-blue-400 p-1 m-1' /></label><br />
                <label htmlFor="intrests">Intrests : <input type="text" placeholder="Interests" value={intrests} onChange={(e) => setIntrests(e.target.value)} className='border rounded-md border-blue-400 p-1 m-1' /></label>
            </div>
        </div>
    )
}

export default CardInput