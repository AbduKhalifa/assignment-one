import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Layout() {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <React.Fragment>
            <main>
                <div className='grid grid-cols-3 lg:grid-cols-5'>
                    <aside
                        style={{ left: showMenu ? "0%" : "-300px" }}
                        className=' z-10 fixed top-0  w-[300px] md:w-auto md:block md:col-span-1 lg:col-span-1 bg-helper h-screen md:overflow-auto md:sticky md:top-[0px] duration-medium'
                    >
                        <Sidebar />
                        <span
                            onClick={() => setShowMenu(!showMenu)}
                            style={{ transform: showMenu ? "translateX(0px)" : "translateX(34px)" }}
                            className='md:hidden absolute top-[20px] right-0 w-[34px] aspect-square bg-blue flex items-center justify-center duration-medium cursor-pointer ease-out'
                        >
                            {showMenu ? <IoMdClose color='white' /> : <RiMenu3Line color='white' />}

                        </span>
                    </aside>
                    <article className='col-span-3 md:col-span-2 lg:col-span-4 min-h-screen overflow-auto'>
                        <Outlet />
                    </article>
                </div>
            </main>
        </React.Fragment>
    )
}
