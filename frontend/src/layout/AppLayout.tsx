import React from 'react'
import AppWrapper from '@/components/AppWrapper'
import { Outlet } from 'react-router-dom'
import ChatList from '@/components/chat/ChatList'

function AppLayout() {
  return (
    <AppWrapper>
      <div>
          <ChatList />
        </div>
        <div className="h-full">
            <Outlet />
        </div>
    </AppWrapper>
  )
}

export default AppLayout