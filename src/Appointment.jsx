import React from 'react'
import anesth from './image/anesthesiology.jpg'
import cardio from './image/cardiology.webp'
import dentist from './image/dentist.png'
import derma from './image/derma.jpeg'
import endo from './image/endo.png'
import gyno from './image/gyno.webp'
import nephro from './image/nephrlogy.jpeg'
import neuro from './image/neuro.png'
import oncology from './image/oncology.png'
import physician from './image/physician.jpg'
import ENT from './image/ENT.png'
import ortho from './image/orthopedics.jpg'
import contactcard from './image/contactcard.jpg'
const Appointment = () => {
  return ( 
  
    <>
<div>
        <p className=' mt-20 lg:text-4xl md:text-2xl  justify-center align-middle flex  hover:text-lime-500'>Just One call Book Your Appointment</p>
        </div>
      

{/*  */}
{/* first img */}


<div className='  grid grid-cols-4 gap-4 mt-10'>
  

  

{/*1  */}

<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={anesth} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Anesthesiologist <br />Dr Harish Dhaka</h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>a Renowned Anesthesiologist with 15 Years of Expertise in Ensuring Safe and Comfortable Procedures!</p>
</div>

</div>
{/* 2 */}

<div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={dentist} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Dentist <br />Dr somya Hella</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '> Introducing a dentist with 15 years of experience involves emphasizing their extensive expertise in oral health,</p>
</div>

</div>
          </div>
          {/* 3 */}
          <div className='md:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 gap-2'>
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-60 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={cardio} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-4 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Cardiology <br />Dr Batra</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '> an Esteemed Cardiologist with Over Three Decades of Pioneering Expertise in Cardiovascular Health! </p>
</div>

</div>
          </div>




{/* 4 */}
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={derma} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Dermatalogist <br />Dr Skyla verma</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>a Respected Dermatologist with Two Decades of Expertise in Skin Health! </p>
</div>

</div>
{/* 5 */}
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={endo} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-xl font-bold text-white'>Endoscopy <br />Dr Bhim jj</h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '> Introducing an endoscopy doctor with 20 years of experience involves emphasizing their extensive expertise in endoscopic procedures</p>
</div>
</div>
{/* 6*/}
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={gyno} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Gynocologist <br />Dr Yuvika wood</h1>
   <p className='mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '> Introducing a gynecologist with 20 years of experience involves emphasizing their wealth of expertise in women's health</p>
</div>

</div>



{/* 7 */}
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={nephro} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-4 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Nephrology <br />Dr Yan chi</h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>, a Distinguished Nephrologist with 25 Years of Oceanic Expertise in Kidney Care</p>
</div>

</div>


{/* 8 */}
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={neuro} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Neurology <br /> Dr Honey Edward</h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '> a Renowned Neurologist with 25 Years of Pioneering Expertise</p>
</div>
</div>
{/* 9 */}
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={oncology} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-3 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Oncology <br />Dr Ella devi </h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>an oncology doctor with 5 years of experience involves emphasizing their dedication to cancer care, their specialized knowledge</p>
</div>
</div>
{/* 10 */}

<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={physician} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Physician <br />Dr Nova Hayden </h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '> an accomplished physician whose illustrious 20-year journey is a testament to unwavering commitment, medical acumen, and a passion for patient well-being</p>
</div>
</div>
{/* 11 */}

<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={ENT} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
   
</div>
<div className='absolute inset-2 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>ENT <br />DR Britney Agarwal</h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>a stalwart in the realm of Ear, Nose, and Throat (ENT) medicine, whose illustrious 15-year journey has been marked by a relentless commitment</p>
</div>
</div> 
{/* 12 */}
<div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>

<div className=' sm:h-40 w-40 md:w-40 xl:h-96'>
<img className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={ortho} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-3xl font-bold text-white'>Orthopedics <br />DR Lisa Singh</h1>
   <p className='mb-3  text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '> Boasting an impressive 15-year journey dedicated to musculoskeletal health</p>
</div>
</div>


</div>


{/* footer */}
<footer className=' mt-9 bg-sky-300'>
   <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
<div className='justify-center sm:h-60 md:h-80 xl:h-auto'>
<img className=' blur-sm h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={contactcard} alt="" />
</div>
<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
  
</div>
<div className='absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
   <h1 className='font-dmserif text-5xl font-bold text-white'>Contact</h1>
   <p className='mb-3  sm:text-xl md:text-2xl xl:text-4xl lg:text-5xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>Avaliable - 24/7  <br /> For Appointment- 8770349289</p>
</div>
   </div>
</footer>

  








</>



  )
}

export default Appointment
 