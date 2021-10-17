import React from 'react';

import DialogsUsersItem from './DialogsUsersItem/DialogsUsersItem'
import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem'
//import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messagesReducer';

import classes from './Dialogs.module.css'


const Dialogs = props => {

  let state = props.messagesPage

  let usersElements = state.usersData.map(user => <DialogsUsersItem key={user.id} name={user.name} id={user.id} />);
  let messagesElements = state.messagesData.map(message => <DialogsMessagesItem key={message.id} message={message.message} />)
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    //console.log('props ->', props.sendMessage())
    props.sendMessage();
  }

  const onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
            <div><textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange}/></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;