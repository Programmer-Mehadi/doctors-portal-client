import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            icon: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        },
        {
            id: 2,
            icon: cavity,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        }
        ,
        {
            id: 3,
            icon: whitening,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',

        }
    ]
    return (
        <div className='py-12'>
            <h2 className="text-center text-secondary font-bold text-xl">OUR SERVICES</h2>
            <p className='text-center text-3xl font-semibold'>Services We Provide</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;