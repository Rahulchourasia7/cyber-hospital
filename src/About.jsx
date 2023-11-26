import React from 'react'
import aboutimg from './image/aboutimg.jpg'
import mri from './image/mri.jpg'
import bp from './image/bp.jpg'
import baby from './image/baby.jpg'
import eye from './image/eye.jpg'
import Lab from './image/Lab.jpg'
import ladylab from './image/ladylab.jpg'
import seat from './image/seat.jpg'
import surgen from './image/surgen.jpg'
import medicine from './image/medicine.jpg'
import patient from './image/patient.jpg'
import chair from './image/chair.jpg'
import room from './image/room.jpg'
import nurse from './image/nurse.jpg'
import contactcard from './image/contactcard.jpg'
const About = () => {
  return (
    <>
    
        <p className='text-amber-500 lg:text-5xl md:text-2xl absolute top-40 left-20 '>Every Life Matters.</p>
      <img className= ' lg:text-center sm:text-left lg:bg-fixed' src={aboutimg} alt="" />
      <div>
        <p className=' lg:text-4xl md:text-2xl  justify-center align-middle flex pt-8 hover:text-amber-700'>We are equipped with best Technology</p>
        </div>
        

{/* first img */}
        <div className='flex bg-sky-100 xl:gap-96 md:gap-10 sm:gap-20'>
         
          <div className=' gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={mri} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Mri</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>MRI is a type of diagnostic test that can create detailed images of nearly every structure and organ inside the body</p>
</div>

</div>
          </div>



{/* second img */}

<div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={baby} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Baby</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Their main focus is on pregnancy and female health concerns</p>
</div>

</div>
          </div>





{/* third img */}


<div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={eye} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Eye</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>They carry out eye examinations and vision tests and use the results to diagnose and treat eye infections, diseases and disorders</p>
</div>

</div>
          </div>
        </div>
{/*  */}
{/* 

Break



*/}
        {/* fourth img */}
        <div className='flex bg-sky-100 xl:gap-96 md:gap-10 sm:gap-20 mt-10'>
        
        <div className=' gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={Lab} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-4 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Lab</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>A laboratory technologist is responsible for the day-to-day operations of a laboratory</p>
</div>

</div>
          </div>




{/* fifth img */}
        
<div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={ladylab} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Technician</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Analytical and ethical laboratory professional with knowledge in waste disposal, specimen storage, and equipment maintenance.</p>
</div>

</div>
          
        </div>


        {/* sixth img */}
        <div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={seat} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Equipments</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>He is certified in a number of laboratory equipment and has the ability to multitask in a fast-paced environment. </p>
</div>

</div>
          
        </div>


 
        

</div>





{/* 7th image */}

<div className='flex bg-sky-100 xl:gap-96 md:gap-10 sm:gap-20 mt-10'>
         
          <div className=' gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={surgen} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-4 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Surgen</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Successfully performed hundreds of surgeries on patients with various illnesses.</p>
</div>

</div>
          </div>


          {/* 8th image */}
          
          <div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={medicine} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Medicine</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>high-quality drugs are available when using rational buying procedures and when suppliers are reliable</p>
</div>

</div>
          </div>
{/* 9th img */}
<div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={patient} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Patients</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Patient feedback is the information of patients' opinions, evaluations clinic, or any healthcare centre</p>
</div>

</div>

</div>
</div>




{/* 10img */}

<div className='flex bg-sky-100 xl:gap-96 md:gap-10 sm:gap-20 mt-10'>
         
          <div className=' gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={chair} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-8 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Chairs</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Adjustable hospital chairs</p>
</div>

</div>
          </div>
          {/* 11img */}

          <div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={room} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Rooms</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Depending on your need, you may choose between a Twin Sharing Room, Deluxe Room, Premium Deluxe, Suite.</p>
</div>

</div>
          </div>

{/* 12img */}
<div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={nurse} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Nurse</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Patient, empathetic, and driven certified nursing assistant with CNA certification and 3 years' experience</p>
</div>

</div>

</div>

 

</div>
{/* img end */} 

<footer className=' mt-9 bg-sky-300'>
   <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
<div className='justify-center sm:h-60 md:h-80 xl:h-auto'>
<img className=' blur-sm h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={contactcard} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-5xl font-bold text-white'>Contact</h1>
   <p className='mb-3  sm:text-xl md:text-2xl xl:text-4xl lg:text-5xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>phone- 8770349289 <br />Address- 4/22 <br />Emergency-0788222 <br />email- rahulc25198@gmail.com <br />Need Assistance -7773019064 <br />Ambulane- 222555</p>
</div>
   </div>
</footer>


    </>  

  )
}

export default About
  