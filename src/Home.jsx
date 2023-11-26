import React from 'react'
import ReactTyped from 'react-typed'

import hospital from './image/hospital.jpg'
import logo from './image/hospitallogo.png' 
import mainimg from './image/main.jpg'
import docimage from './image/docimage.webp'

const Home = () => { 
  return (
    <div>
      <h1 className=' lg:text-align: center text-center text-5xl absolute left-40 top-14 sm:text-center 
      md:text-center'>Cyber Hospital</h1>
      <h2 className='lg:text-4xl md:2xl sm:base absolute top-48 left-5 font-semibold '>
<ReactTyped 
strings={[

  "The hospital that cares",
  "We are here to hear and heal your health problems",
  "We collaborate for better healthcare",
  "We work for complete healing",
  "call us 8770349289"
]} 
typeSpeed={100}
backSpeed={50} 
loop  
/> 
      </h2>
    
      <img className='  lg:text-center sm:text-left' src={hospital} alt="" />
    
      <h2 className='lg:flex justify-center lg:text-2xl absolute top-40 pt-20 pl-5 font-semibold hover:text-red-900  cursor-pointer 
     md:text-xl flex flex-auto   ' >
Welcome to the forefront of healthcare innovation, where cutting-edge technology <br />converges with compassionate care to create a revolutionary concept:  <br /> the Cyber Hospital. In this digital age, the healthcare landscape is undergoing a transformative shift,<br /> and the Cyber Hospital stands as a beacon of progress, seamlessly blending the precision of advanced <br /> artificial intelligence with the warmth of human touch.</h2>

  

      <img className=' lg:mix-blend-mode: normal h-32 absolute left-10 top-5' src={logo} alt="" />
     <h4 className='  lg:flex justify-center lg:text-xl pt-4 font-semibold text-blue-500 md:text-xl md:text sm:text-center md:text-center'> Welcome to the Cyber Hospital, where the future of healthcare unfolds before your eyes.</h4>
    
        <div className=' mt-10 p-30 bg-blue-200'>
   <img className='h-60' src={mainimg} alt="" />
<h1 className='lg:text-xl flex flex-auto sm:text-sm md:text-xl  '>
A cyber hospital integrates advanced technologies and digital solutions into traditional healthcare practices, transforming the way medical services are delivered and managed. It leverages innovations like telemedicine, electronic health records (EHRs), artificial intelligence, and remote monitoring to enhance patient care, streamline operations, and improve overall efficiency. Through virtual consultations, real-time data analysis, and interconnected systems, a cyber hospital aims to provide personalized and accessible healthcare while ensuring the security and privacy of patient information. This digital approach facilitates quicker decision-making, enables remote patient monitoring, and enhances communication among healthcare providers. The concept of a cyber hospital represents a progressive shift toward a technologically-driven, interconnected healthcare ecosystem.
</h1>


<div className='mt-5 p-40 bg-blue-100'>  
<img className='' src={docimage} alt="" />

<p className=' lg:text-3xl  md:text-xl sm:text-xs  text-blue-800  md:text-justify sm:text-center'>
<ReactTyped
strings={[
  "We are Covid-19 Free " 
]}
typeSpeed={100} 
backSpeed={50} 
backDelay={50}
loop
/>
</p>
   

<div className=' mt-9'>
  <ul className='  justify-around flex flex-row  md:text-xs lg:text-xl flex-wrap'>
    <li className=' hover:text-red-600'>Contact - <a href="tel:8770349289">8770349289</a></li>
    <li className=' hover:text-red-600'>Address - <a href="https://www.google.com/maps/place/4%2F22,+opposite+titan+showroom,+Dakshin+Gangotri,+Supela,+Bhilai,+Chhattisgarh+490023/@21.2051023,81.3465432,17z/data=!3m1!4b1!4m6!3m5!1s0x3a29232824414f51:0x1d47102d1a5418a!8m2!3d21.2050973!4d81.3491181!16s%2Fg%2F11v0ytl__c?entry=ttu">4/22 Dakshin gangotri</a></li>
    
    <li className=' hover:text-red-600'>Email - <a href="mailto:rahulc25198@gmail.com">rahulc25198@gmail.com</a></li>
    <li className=' hover:text-red-600'>Multiple Chain</li>
  </ul>
</div>
  

</div>
        </div>
        <p className='flex justify-center text-center text-xl font-mono '>For More Details Checkout About Section</p>
        
    </div> 
  
 
  
 
  )  
}  
  
export default Home        