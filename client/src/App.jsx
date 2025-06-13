
import './App.css'
import FetchData from './Components/FetchData.jsx'
import HomePage from './Pages/HomePage.jsx'
import { Routes, Route } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Routes>
    <Route path = "/" element = {<HomePage/>} ></Route>
    
   </Routes>
   <FetchData />
    </>
  )
}

export default App 
