import { useState } from 'react'

function Todo({id, title, description }) {
    return (
        <div>
            <h1>This is Name : {title}</h1>
            <h2>This is Description : {description}</h2>
            <h3>This is id: {id}</h3>
        </div>
    )
}

export default Todo