import React from 'react'
import personalPhoto from "./../../assets/photo1.jpg"
import { Link } from 'react-router-dom'
import "./sidebar.css"

export default function Sidebar() {

 const devName = "Abdelrhman Khalifa"

 const routesArr = [
  {
   title: "Home",
   path: null,
  },
  {
   title: "About",
   path: null
  },
  {
   title: "Skills",
   path: null
  },
  {
   title: "Experince",
   path: null
  },
  {
   title: "Work",
   path: null
  }
 ]

 return (
  <React.Fragment>
   <div
    className='px-8 py-14  flex flex-col gap-5  items-center quicsand-font h-full sidebar'
   >
    <div >
     <img
      src={personalPhoto}
      alt="personal photo"
      width={160}
      className='rounded-full object-cover object-center aspect-square'
     />
    </div>
    <h1 className='text-xl playfair-font font-bold text-center'>{devName}</h1>
    <div className='text-center text-sm'>
     <span>
      <span className=' text-blue'>UI/UX/DESIGNER</span> IN EGYPT
     </span>
    </div>
    <div>
     <ul className='flex flex-col gap-1 justify-center items-center'>
      {routesArr.map(r => {
       return <li key={r.path + r.title} className='text-center grow relative route cursor-pointer'>
        <Link className='text-text text-[12px]'>
         {r.title.toUpperCase()}
        </Link>
        <span className='block w-[0px] h-[1px] bg-blue absolute bottom-0 left-0 duration-fast'></span>
       </li>
      })}
     </ul>
    </div>
   </div>
  </React.Fragment>
 )
}
