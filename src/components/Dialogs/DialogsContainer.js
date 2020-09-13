import React from 'react';

// import DialogsUsersItem from './DialogsUsersItem/DialogsUsersItem'
// import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesReducer';

import Dialogs from './Dialogs';


const DialogsContainer = props => {

  let state = props.store.getState().messagesPage

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = body => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagesPage={state} />

}

export default DialogsContainer;