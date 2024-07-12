import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <React.Fragment>
            <main>
                <div className='grid grid-cols-3 lg:grid-cols-5'>
                    <aside
                        className=' hidden md:block md:col-span-1 lg:col-span-1 bg-red-200 min-h-screen overflow-auto'
                    >
                        <Sidebar />
                    </aside>
                    <article className='col-span-3 md:col-span-2 lg:col-span-4'>
                        <Outlet />
                    </article>
                </div>
            </main>
        </React.Fragment>
    )
}
