import React from "react"
import store from '../store'
import Header from './Header'
import './ChatWindow.css'
import Chats from './Chats'
import _ from 'lodash'
import MessageInput from '../containers/MessageInput'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState()
  const activeUser = state.contacts[activeUserId]
  const activeMsgs = state.messages[activeUserId]
  const { typing } = state

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)}/>
      <MessageInput value={typing} />
    </div>
  )
}

export default ChatWindow
