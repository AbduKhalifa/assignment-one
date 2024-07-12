

import React, { useEffect, useRef, useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { FaPager } from "react-icons/fa6";

import bgOne from "./../../assets/bg1.jfif"
import bgTwo from "./../../assets/bg2.jfif"

export default function Home() {

  const [reRender, setReRender] = useState(true)
  const headElement = useRef()
  const backgroundOverlayElement = useRef()
  const buttonElement = useRef()

  let currentLayout = useRef(0);
  const interfaceLayout = [
    {
      head: ["Hi!", "Im Abdelrhman"],
      buttonContent: "DOWNLOAD CV",
      buttonIcon: <FaDownload />,
      bg: bgOne,
    },
    {
      head: ["I am", " a Developer"],
      buttonContent: "VIEW PORTFOLITO",
      buttonIcon: <FaPager />,
      bg: bgTwo,
    }
  ];

  /**
   * It is necessary to enter a value if you want to change the color of the sidebar .
   * If you want to return the sidebar to its normal form, you must not enter a value
   * @param {*} v 
   * @returns {undefined}
   */
  function handleSidebarBgColor(v) {
    const sidebarElement = document.getElementById("sidebar");
    if (!sidebarElement) return
    if (!v) return sidebarElement.classList.remove("base", "helper")

    if (currentLayout.current == 0) {
      sidebarElement.classList.remove("helper")
      sidebarElement.classList.add("base")
    } else {
      sidebarElement.classList.remove("base")
      sidebarElement.classList.add("helper")
    }
  }



  // This function is responsible for the disappearance and appearance of elements and the timing of each element
  function handleLayout() {
    const durationTime = 200;

    function displayElements(opacityValue = 1) {
      opacityValue > 1 ? opacityValue = 1 : undefined
      backgroundOverlayElement.current.style.opacity = String(opacityValue);
      headElement.current.style.opacity = String(opacityValue);
      buttonElement.current.style.opacity = String(opacityValue);
    }

    displayElements(0)
    if (currentLayout.current == 0) {
      setTimeout(() => {
        currentLayout.current = 1
        displayElements()
        setReRender(!reRender)
      }, durationTime);
    } else {
      setTimeout(() => {
        currentLayout.current = 0
        displayElements()
        setReRender(!reRender)
      }, durationTime);
    }
  }

  useEffect(() => {
    handleSidebarBgColor(99)
    const interval = setInterval(() => {
      handleLayout()
    }, 2400);
    return () => {
      clearInterval(interval)
      handleSidebarBgColor()
    }
  }, [reRender])

  return (
    <React.Fragment>
      <div
        className='p-6 sm:p-12 md:p-24 lg:p-32 flex justify-center items-center h-full relative'
      >
        <div
          ref={backgroundOverlayElement}
          style={{ backgroundImage: `url('${interfaceLayout[currentLayout.current].bg}')`, }}
          className=' absolute top-0 left-0 h-full w-full bg-cover bg-center -z-10 duration-medium'>
        </div>
        <div className='grow text-center md:text-left'>
          <h1 className='text-[44px] playfair-font font-extrabold mb-5 duration-medium' ref={headElement}>
            {interfaceLayout[currentLayout.current].head[0]}
            <br />
            {interfaceLayout[currentLayout.current].head[1]}
          </h1>
          <p className='quicsand-font text-[18px] font-thin mb-5'>
            100% html5 bootstrap templates Made <br />
            By <span className=' text-blue underline cursor-pointer'>Colorlib.com</span>
          </p>
          <button
            ref={buttonElement}
            className='px-5 py-2 border-[1px] border-black flex gap-3 items-center font-thin text-[14px] m-auto md:m-0 duration-medium'>
            {interfaceLayout[currentLayout.current].buttonContent} {interfaceLayout[currentLayout.current].buttonIcon}
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
