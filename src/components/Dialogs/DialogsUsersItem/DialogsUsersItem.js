import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './../Dialogs.module.css'

const DialogsUsersItem = props => {
  let path = '/dialogs/' + props.id;
  return (
    <li className={classes.usersItem + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )

}

export default DialogsUsersItem;