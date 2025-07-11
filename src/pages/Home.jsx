import React from 'react';
import Header from '../components/HomeComponents/Header';
import Blog from '../components/HomeComponents/Blog';
import Services from '../components/HomeComponents/Services';
import Offers from '../components/HomeComponents/Offers';
import OurStory from '../components/HomeComponents/ourStory';
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import service4 from '../assets/images/service-4.jpg';
import service5 from '../assets/images/service-5.jpg';
import service6 from '../assets/images/service-6.jpg';
import doc1 from '../assets/images/doctor-1.jpg';
import doc2 from '../assets/images/doctor-2.jpg';
import doc3 from '../assets/images/doctor-3.jpg';
import { Box } from '@mui/material';

export default function Home() {
  const services=[{name:'Face Treatment',img:service6},
      {name:'Manicure',img:service5},
      {name:'Lips Treatment',img:service4},
      {name:'Padicure',img:service3},
      {name:'Filler & Botox',img:service2},
     {name:'Body Care',img:service1}
  ];
  const serviceSubTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    const doctors=[
      {name:'Amanda',img:doc1},
      {name:'Jessica',img:doc2},
      {name:'Sara',img:doc3},
  ];
  return <>
  <Header/>
  <Blog/>
  <Services title='Our Services' subTitle={serviceSubTitle} data={services} btnText='Learn More' />
  <Offers/>
  <OurStory/>
  <Box id='doctors'>
      <Services title='Meet Our Doctors' btnText='Book Now' data={doctors} />

  </Box>
  </>;
}
