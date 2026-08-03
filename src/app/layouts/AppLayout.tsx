import '@/styles/index.css'

import { Outlet } from 'react-router-dom'
import SideBar from '@/components/sidebar/Sidebar'

export default function AppLayout() {
  return (
    <div className="h-screen overflow-hidden persona-background p-6">
      <div className="flex h-full rounded-2xl border border-border-strong">
        <SideBar />

        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}