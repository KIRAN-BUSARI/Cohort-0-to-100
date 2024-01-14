import React from 'react'
import BusinessCard from './BusinessCard'

function CardWrapper() {
    return (
        <div className="flex">
            <BusinessCard name={"Kiran Kumar"} description={"Software Engineer"} intrests={["Artificial Intelligence", "Machine Learning", "Data Science"]} />
        </div>
    )
}

export default CardWrapper