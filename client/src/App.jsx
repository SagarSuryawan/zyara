
import './App.css'

import HomePage from './Pages/HomePage.jsx'
import { Routes, Route } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Routes>
    <Route path = "/" element = {<HomePage/>} ></Route>
    
   </Routes>
   
    </>
  )
}

export default App 
