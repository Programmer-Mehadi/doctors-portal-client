import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 am to 5:00 pm',
            icon: clock,
            bgClass: "bg-primary"
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Open 9:00 am to 5:00 pm',
            icon: marker,
            bgClass: "bg-accent"
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9:00 am to 5:00 pm',
            icon: phone,
            bgClass: "bg-primary"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;