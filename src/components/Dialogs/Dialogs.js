import React from 'react';

import DialogsUsersItem from './DialogsUsersItem/DialogsUsersItem'
import DialogsMessagesItem from './DialogsMessagesItem/DialogsMessagesItem'

import classes from './Dialogs.module.css'




const Dialogs = props => {

  let usersElements = props.usersList.map(user => <DialogsUsersItem name={user.name} id={user.id} />);
  let messagesElements = props.messagesList.map(message => <DialogsMessagesItem message={message.message} />)

  return (
    <div>
      <h1 className={classes.title}>Dialogs</h1>
      <div className={classes.mainWrapper}>
        <ul className={classes.usersList}>
          {usersElements}
        </ul>
        <div className={classes.dialogsList}>
          {messagesElements}

        </div>
      </div>
    </div>
  );
}

export default Dialogs;