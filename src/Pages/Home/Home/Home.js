import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import TreatmentBanner from '../TreatmentBanner/TreatmentBanner';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <TreatmentBanner></TreatmentBanner>
    </div>
  );
};

export default Home;