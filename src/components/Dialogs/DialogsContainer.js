import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';



const DialogsContainer = () => {

  return <StoreContext.Consumer>
    {
      store => {

        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator())
        }
        const onNewMessageChange = body => {
          store.dispatch(updateNewMessageBodyCreator(body));
        }
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={store.getState().dialogsPage}
          />
        )
      }
    }
  </StoreContext.Consumer>
}

export default DialogsContainer;