import '../styles/Home.css'
import FirstCard from "../assets/first card.png"
import React from 'react'



const Home = () => {
  return (
   <>
   <main className=' container d-flex justify-content-center  align-items-center justify-items-center'>
<div>
   <h2>Manage your Tasks on TaskDuty</h2>
   <h3 className='h-h3'>TaskDuty</h3>

   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>

   <button>Go To My Tasks</button>
</div>
<img src={FirstCard} alt="" />
<div>

</div>
   </main>
   
   </>
  )
}

export default Home