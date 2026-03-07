import React from 'react'
import AppWrapper from '@/components/AppWrapper'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <AppWrapper>
        <div className="h-full">
            <Outlet />
        </div>
    </AppWrapper>
  )
}

export default AppLayout