import React from 'react'

export default function Skills() {

  const skills = [
    {
      color: "#2C98F0",
      title: "Photoshop",
      percent: 75
    },
    {
      color: "#EC5453",
      title: "jQuery",
      percent: 60
    },
    {
      color: "#F9BF3F",
      title: "HTML5",
      percent: 90
    },
    {
      color: "#A84CB8",
      title: "CSS",
      percent: 90
    },
    {
      color: "#2FA499",
      title: "Word Press",
      percent: 70
    },
    {
      color: "#4054B2",
      title: "SEO",
      percent: 80
    },
  ]

  return (
    <React.Fragment>
      <div
        className='p-6 sm:p-12 md:p-24 lg:p-32 flex justify-center items-center h-full relative about'
        id='about'
      >
        <div className='grow text-center md:text-left'>
          <h6 className='text-text text-[12px] tracking-[5px] mb-4'>{String("MY  SPECIALTY")}</h6>
          <h1 className='mb-8 playfair-font text-xl font-extrabold tracking-[6px]'>MY SKILLS</h1>
          <div className='flex flex-col gap-7 quicsand-font mb-8'>
            <p className='text-[15px] mb-4 text-text' >
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli, but the Little Blind Text didn’t
              listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
            </p>
          </div>
          <div className='grid gap-6 grid-cols1 sm:grid-cols-2'>
            {
              skills.map((skill, i) => {
                return <div key={i}>
                  <h1 className='text-[16px] mb-2'>{skill.title}</h1>
                  <div className='h-[6px] bg-helper rounded-full  relative'>
                    <div
                      style={{ backgroundColor: skill.color, width: skill.percent + "%" }}
                      className='absolute top-0 left-0 h-full rounded-full'>
                      <span
                        style={{ backgroundColor: skill.color }}
                        className='block w-[10px] aspect-square bg-red absolute right-0 top-[50%] rounded-full translate-x-[5px] translate-y-[-5px] '
                      >
                      </span>
                      <span
                        style={{ color: skill.color }}
                        className='block w-[10px] aspect-square bg-red absolute right-0 top-[-360%] text-[12px] font-semibold translate-x-[-100%]'
                      >
                        {skill.percent}%
                      </span>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
