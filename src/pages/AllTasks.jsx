
import "../styles/AllTasks.css"
import React from 'react'
const AllTasks = () => {
  return (
    <main className="container">
    <div className='d-flex justify-content-around '>
      <h2>My Tasks</h2> 
      <p className="NTF-ptag">+ Add New Task</p>
    </div>

      <div className=" section-firstdiv d-flex justify-content-between ">
        <h5>Urgent</h5>
        <div className='d-flex gap-2'>
        <button >Edit</button>
        <button>Delete</button>
        </div>
      </div>
    
   </main>
  )
}

export default AllTasks