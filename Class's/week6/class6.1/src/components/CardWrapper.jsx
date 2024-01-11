import React from 'react'

function CardWrapper({ children }) {
    return (
        <div style={{
            border: "2px solid black",
            padding: "20px",
            margin: "20px"
        }}>
            {children}
        </div>
    )
}

export default CardWrapper;