import React from 'react';

function BusinessCard({ name, description, interests }) {
    return (
        <div className="text-white shadow-lg rounded-lg ml-2 h-auto max-h-80 w-auto max-w-[40vw] bg-slate-900">
            <div className="p-8 m-2 mr-2">
                <h2 className="text-2xl font-bold mb-4 uppercase">{name}</h2>
                <p className="text-gray-400 mb-4">{description}</p>
                <p className="text-gray-400 mb-4">{interests}</p>
            </div>
        </div>
    );
}

export default BusinessCard;