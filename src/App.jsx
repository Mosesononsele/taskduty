import Home from './pages/Home'
import NewTasks from './pages/NewTasks'
import AllTasks from './pages/AllTasks'
import EditTask from './pages/EditTask'
import NavBar from './layouts/NavBar'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/newtasks' element={<NewTasks/>} />
    <Route path='/alltasks' element={<AllTasks/>} />
    <Route path='/edittask' element={<EditTask/>
} />
   </Routes>
   </BrowserRouter>
   

   
   
   
   
   

   </>
  )
}

export default App