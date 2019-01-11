import React from 'react'
import './Main.css'
import Empty from './Empty'
import ChatWindow from './ChatWindow'

const Main = ({ user, activeUserId }) => {
  if (!activeUserId) {
    return <Empty user={user} activeUserId={activeUserId} />
  } else {
    return <ChatWindow activeUserId={activeUserId} />
  }
}

export default Main
