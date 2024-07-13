

import React, { useState } from 'react'

import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import workImageGraphic1 from "./../../assets/works/g1.jpg";
import workImageGraphic2 from "./../../assets/works/g2.jpg";
import workImageGraphic3 from "./../../assets/works/g3.jpg";
import workImageGraphic4 from "./../../assets/works/g4.jpg";
import workImageGraphic5 from "./../../assets/works/g5.jpg";
import workImageGraphic6 from "./../../assets/works/g6.jpg";
import workImageGraphic7 from "./../../assets/works/g7.jpg";
import workImageGraphic8 from "./../../assets/works/g8.jpg";
import workImageGraphic9 from "./../../assets/works/g9.jpg";
import workImageGraphic10 from "./../../assets/works/g10.jpg";

import workImageSoftware1 from "./../../assets/works/s1.jpg";
import workImageSoftware2 from "./../../assets/works/s2.jpg";
import workImageSoftware3 from "./../../assets/works/s3.jpg";
import workImageSoftware4 from "./../../assets/works/s4.jpg";
import workImageSoftware5 from "./../../assets/works/s5.jpg";

import workImageApp1 from "./../../assets/works/a1.jpg";
import workImageApp2 from "./../../assets/works/a2.jpg";
import workImageApp3 from "./../../assets/works/a3.jpg";
import workImageApp4 from "./../../assets/works/a4.jpg";
import workImageApp5 from "./../../assets/works/a5.jpg";
import workImageApp6 from "./../../assets/works/a6.jpg";

export default function Work() {

  const [acitveButton, setActiveButton] = useState(0);
  const [more, setMore] = useState(1);

  const imagesList = [
    [workImageGraphic1, workImageGraphic2, workImageGraphic3, workImageGraphic4, workImageGraphic5, workImageGraphic6, workImageGraphic7, workImageGraphic8, workImageGraphic9, workImageGraphic10],
    [workImageApp1, workImageApp2, workImageApp3, workImageApp4, workImageApp5, workImageApp6],
    [workImageSoftware1, workImageSoftware2, workImageSoftware3, workImageSoftware4, workImageSoftware5],
  ]


  // A function that returns the number of works that should be displayed to the user
  function getCountForDisplay() {
    const shouldDisplay = more * 4
    return shouldDisplay
  }

  /**
   * 
   * @param {DOM ELEMENT} parentDiv 
   * They are two functions that work in an integrated manner
   * and are responsible for displaying options with which the user can interact
   */
  function showReactionOptions(parentDiv) {
    const options = parentDiv.children[0]
    options.style.top = "85%"
  }
  function hideReactionOptions(parentDiv) {
    const options = parentDiv.children[0]
    options.style.top = "120%"
  }

  /**
   * @param {Number} categoryIndex 
   * @returns {undefined}
   * 
   * It is a function that controls the display of works
   *  in terms of hiding and appearing, and specifying the category that is displayed
   */
  function handleDisplayCategory(categoryIndex) {
    if (categoryIndex == acitveButton) return
    setMore(1)
    const container = document.getElementById("works_container");
    container.style.opacity = "0";
    setTimeout(() => {
      setActiveButton(categoryIndex)
      setTimeout(() => {
        container.style.opacity = "1";
      }, 50)
    }, 600)
  }

  return (
    <React.Fragment>
      <div
        className='px-6  sm:px-12 md:px-24 lg:px-32  py-6 sm:py-8 md:py-16 lg:py-20 flex flex-col justify-center items-center h-full relative about'
        id='experince'
      >
        <div className='grow text-center md:text-left w-full'>
          <h6 className='text-text text-[12px] tracking-[5px] mb-4'>{String("MY  WORK")}</h6>
          <h1 className='mb-8 playfair-font text-xl font-extrabold tracking-[6px]'>RECENT WORK</h1>
          <div>
            <div className='flex gap-4 text-[15px] mb-4'>
              <button onClick={() => handleDisplayCategory(0)} className={acitveButton === 0 ? "text-blue" : undefined}>Graphic Design</button>
              <button onClick={() => handleDisplayCategory(1)} className={acitveButton === 1 ? "text-blue" : undefined}>Apps</button>
              <button onClick={() => handleDisplayCategory(2)} className={acitveButton === 2 ? "text-blue" : undefined}>Software</button>
            </div>
            <div id='works_container' className='duration-[600ms]'>
              <div className='grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-1 min-[1024px]:grid-cols-2  gap-8 ' >
                {
                  imagesList[acitveButton].map((img, i) => {
                    if (i >= getCountForDisplay()) return undefined
                    return <div
                      key={i}
                      onMouseEnter={({ target }) => showReactionOptions(target)}
                      onMouseLeave={({ target }) => hideReactionOptions(target)}
                      className=' aspect-square overflow-hidden relative'
                    >
                      <img src={img} alt="work photo" className='w-full min-h-full object-cover object-center ' />
                      <div className=' absolute top-0 left-0 h-full w-full bg-blue opacity-[0.2] hover:opacity-[0.8] duration-medium'>
                        <div className='absolute top-[120%] left-[20px] flex gap-2 duration-medium'>
                          <span className='p-1 rounded-sm bg-[#96CCF8] block cursor-pointer'> <FaShareAlt size={16} /> </span>
                          <span className='p-1 rounded-sm bg-[#96CCF8] cursor-pointer flex gap-2 text-[12px] items-center'> <FaEye size={16} /> 85</span>
                          <span className='p-1 rounded-sm bg-[#96CCF8] cursor-pointer flex gap-2 text-[12px] items-center'> <IoIosHeart size={16} /> 90</span>
                        </div>
                      </div>
                    </div>
                  })
                }

              </div>
              <div className='mt-6'>
                <button
                  onClick={() => { setMore(more + 1) }}
                  className='px-4 py-2 bg-[#0D6EFD] hover:bg-[#0B5ED7] rounded-md duration-medium text-white'>Show More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
