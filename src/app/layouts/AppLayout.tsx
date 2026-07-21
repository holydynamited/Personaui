import '@/styles/index.css'

import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'

export default function AppLayout (){
    return <div className='relative overflow-hidden bg-[(--persona-background)] p-6 '>

        <div className='flex flex-col   color-border-strong border-2 rounded-2xl  '>
        <SideBar/>
        <main>
            <Outlet/>
        </main>
        </div>

    </div>
}