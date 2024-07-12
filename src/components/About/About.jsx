import React from 'react'
import "./about.css"
import design from "./../../assets/tags/design.png"
import mobile from "./../../assets/tags/mobile.png"
import software from "./../../assets/tags/software.png"
import web from "./../../assets/tags/web.png"

export default function About() {

  const content = [
    {
      boldText: 'Hi Im Abdelrhman Khalifa',
      text: 'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.'
    },
    {
      boldText: '',
      text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    },
  ]

  const tags = [
    {
      color: "#706A74",
      title: "Graphic Design",
      icon: design
    },
    {
      color: "#0097F1",
      title: "Web Design",
      icon: web
    },
    {
      color: "#9BC9FF",
      title: "Software",
      icon: software
    },
    {
      color: "#FFC843",
      title: "Application",
      icon: mobile
    }
  ]

  return (
    <React.Fragment>
      <div
        className='p-6 sm:p-12 md:p-24 lg:p-32 flex justify-center items-center h-full relative about'
        id='about'
      >
        <div className='grow text-center md:text-left'>
          <h6 className='text-text text-[12px] tracking-[5px] mb-4'>{String("ABOUT  US")}</h6>
          <h1 className='mb-8 playfair-font text-xl font-extrabold tracking-[6px]'>WHO AM I?</h1>
          <div className='flex flex-col gap-7 quicsand-font mb-8'>
            {content.map((t, i) => {
              return <p key={i} className='text-[15px]'>
                <span className='text-black font-bold '>{t.boldText} </span>
                <span className='mb-4 '>{t.text}</span>
              </p>
            })}
          </div>
          <div className='grid gap-6 grid-cols1 sm:grid-cols-2 lg:grid-cols-4 tags'>
            {
              tags.map((tag, idx) => {
                return <div key={idx} className='bg-base pt-3 rounded-t-sm relative '>
                  <div className='flex gap-3 items-center px-3 mb-3'>
                    <img src={tag.icon} alt="" width={40} />
                  </div>
                  <h6 className='px-3 mb-8'><span className='font-semibold'>{tag.title}</span></h6>
                  <span
                    className=' absolute bottom-0 left-0 w-full block h-[3px] '
                    style={{ backgroundColor: tag.color }}>
                  </span>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
