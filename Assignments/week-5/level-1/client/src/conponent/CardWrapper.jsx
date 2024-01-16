import { useEffect, useState } from 'react'
import BusinessCard from './BusinessCard'
import axios from 'axios'

function CardWrapper() {
    const [details, setDetails] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/card/get-cards')
            .then((res) => {
                setDetails(res.data.cards)
            })
    }, [])
    return (
        <div className="flex border border-black p-6 m-6 w-full h-[90%] rounded-lg bg-gray-500">
            {details.map((data) => {
                return (
                    < BusinessCard key={data._id} name={data.name} description={data.description} interests={data['intrests']} />
                )
            })}
        </div>
    )
}

export default CardWrapper