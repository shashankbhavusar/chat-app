import React from 'react'
import AppWrapper from '@/components/AppWrapper'
import { Outlet } from 'react-router-dom'
import ChatList from '@/components/chat/ChatList'
import useGetChatId from '@/hooks/useGetChatId';
import { cn } from '@/lib/utils';

function AppLayout() {
  const chatId = useGetChatId();
  return (
    <AppWrapper>
      <div className="h-full">
        {/* ChatList */}
        <div className={cn(chatId ? "hidden lg:block" : "block")}>
          <ChatList />
        </div>
        <div
          className={cn(
            "lg:!pl-95 pl-7",
            !chatId ? "hidden lg:block" : "block"
          )}
        >
          <Outlet />
        </div>
      </div>
    </AppWrapper>
  )
}

export default AppLayout