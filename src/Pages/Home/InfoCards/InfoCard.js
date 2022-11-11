import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (

        <div className={`px-4 py-4 card ${bgClass} text-white flex card-side bg-base-100 shadow-xl`}>
            <figure><img className='' src={icon} alt="icon" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>

    );
};

export default InfoCard;