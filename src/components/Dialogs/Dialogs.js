import React from 'react';

import DialogsUsersItem from './DialogsUsersItem/DialogsUsersItem'
import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesReducer';

import classes from './Dialogs.module.css'


const Dialogs = props => {

  let state = props.store.getState().messagesPage

  let usersElements = state.usersData.map(user => <DialogsUsersItem name={user.name} id={user.id} />);
  let messagesElements = state.messagesData.map(message => <DialogsMessagesItem message={message.message} />)
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = e => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div>
      <h1 className={classes.title}>Dialogs</h1>
      <div className={classes.mainWrapper}>
        <ul className={classes.usersList}>
          {usersElements}
        </ul>
        <div className={classes.dialogsList}>
          <div>{messagesElements}</div>
          <div>
            <div><textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;