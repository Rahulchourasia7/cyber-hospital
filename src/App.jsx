import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Appointment from './Appointment'
import MainHeader from './MainHeader'


import './App.css'

function App() {
 
 
  return ( 
    <> 
    
   <BrowserRouter>  
     
     <Routes>
<Route  path='/' element={<MainHeader />}>
  <Route index element={<Home />}/>
<Route path='about' element={<About />} />
<Route path='Appointment' element={<Appointment />} />
<Route path='*' element={<Error />} />
</Route>
     </Routes> 
     </BrowserRouter>   
 
    </> 
  )
} 

export default App
