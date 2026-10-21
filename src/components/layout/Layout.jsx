// The shared frame of the app: sidebar + top bar + page content.
// <Outlet /> is the empty slot where the current screen (Inbox, etc.) appears.
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-page">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        {/* pb-20 leaves room so the phone bottom bar does not cover content */}
        <main className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </main>
      </div>
      <BottomBar />
    </div>
  )
}