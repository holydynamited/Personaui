import '@/styles/index.css'

import { Outlet } from 'react-router-dom'
import SideBar from '../../components/Sidebar'

export default function AppLayout (){
    return <div className='relative overflow-hidden bg-[(--persona-background)] p-6 '>

        <div className='flex flex-row  color-border-strong border-2 rounded-2xl  '>
        <SideBar/>
        <main className='w-full'>
            <Outlet/>
        </main>
        </div>

    </div>
}