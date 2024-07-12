

import React from 'react';
import { FaPencilAlt } from "react-icons/fa";
import "./experince.css";

export default function Experience() {


  const expWorks = [
    {
      title: "FullStack Developer",
      date: "2017 - 2018",
      desc: "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
      color: "#2C98F0"
    },
    {
      title: "Front End Developer at Google Company",
      date: "2018 - 2019",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      color: "#D9534F"
    },
    {
      title: "System Analyst",
      date: "2019 - 2020",
      desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      color: "#F0AD4E"
    },
  ]

  return (
    <React.Fragment>
      <div
        className='px-6  sm:px-12 md:px-24 lg:px-32  py-6 sm:py-8 md:py-16 lg:py-20 flex flex-col justify-center items-center h-full relative about'
        id='experince'
      >
        <div className='grow text-center md:text-left'>
          <h6 className='text-text text-[12px] tracking-[5px] mb-4'>{String("EXPERIENCE")}</h6>
          <h1 className='mb-8 playfair-font text-xl font-extrabold tracking-[6px]'>WORK EXPERIENCE </h1>
          {
            expWorks.map((item, idx) => {
              return <div className='flex flex-col' key={idx}>
                <div className=' flex '>
                  <span className='block min-w-[50px] relative '>
                    <i className='bg-[#EEEEEE] block w-[3px] h-full absolute top-0 left-[50%] translate-x-[-50%]'></i>
                    <i
                      style={{ backgroundColor: item.color }}
                      className=' w-[50px] aspect-square absolute top-[32px] left-0 rounded-full flex justify-center items-center border-[4px] border-[#EEEEEE]'>
                      <FaPencilAlt size={22} className='text-base' />
                    </i>
                  </span>
                  <div className='pt-[14px]  grow '>
                    <div className='h-full flex items-start'>
                      <i className='arrow min-w-[26px] min-h-[36px] block bg-[#eeeeee] relative top-[25px] left-[4px]'></i>
                      <div className='bg-[#EEEEEE] grow rounded-[4px] p-4'>
                        <h1 className='text-[18px] font-medium mb-8'>
                          {item.title} <span className='text-text text-[17px]'>{item.date}</span>
                        </h1>
                        <p className='max-w-full text-text mb-8'>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
          <div className='flex flex-col w-full' >
            <div className=' flex h-[80px]'>
              <span className='block min-w-[50px] relative h-full '>
                <i className='bg-[#EEEEEE] block w-[3px] h-full absolute top-0 left-[50%] translate-x-[-50%]'></i>
                <i className='bg-white w-[50px] aspect-square absolute top-[32px] left-0 rounded-full  border-[4px] border-[#EEEEEE]'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
