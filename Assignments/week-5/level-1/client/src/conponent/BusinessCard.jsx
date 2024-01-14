import React from 'react';

function Card({ name, description, interests }) {
    const intrests = ["Artificial Intelligence", "Machine Learning", "Data Science"];
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                {/* <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src="card-image.jpg" alt="Card" />
                </div> */}
                <div className="p-8">
                    <h2 className="text-2xl font-semibold text-indigo-500">{name}</h2>
                    <p className="mt-2 text-gray-600">{description}</p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-700">Interests:</h3>
                        <ul className="mt-2 leading-relaxed text-gray-600">
                            {intrests.map((interest, index) => (
                                <li key={index}>{interest}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4 space-x-2 flex">
                        <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">LinkedIn</a>
                        <a href="#" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;