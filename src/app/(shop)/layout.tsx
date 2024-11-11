import Header from '@/components/Header'
import React from 'react'

type layoutProps = {
  children: React.ReactNode
}
const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default layout
