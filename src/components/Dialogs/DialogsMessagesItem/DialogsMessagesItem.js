import React from 'react';

import classes from './../Dialogs.module.css'

const DialogsMessagesItem = props => {

    return (
        <div className={classes.dialogsItem}>
            {/* <div className={classes.left}>
                <div className={classes.avaWrapper}>
                    <img src="" alt="" />
                </div>
                <div className={classes.name}>Dmitriy</div>
            </div> */}
            <div className={classes.right}>
                <div className={classes.message}>{props.message}</div>
            </div>
        </div>
    );
}

export default DialogsMessagesItem;