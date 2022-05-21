import React from "react";

import DialogsUsersItem from "./DialogsUsersItem/DialogsUsersItem";
import DialogsMessagesItem from "./DialogsMessagesItem/DialogsMessagesItem";

import classes from "./Dialogs.module.css";
// import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
const maxLength50 = maxLengthCreator(50);
const Dialogs = (props) => {
  let state = props.messagesPage;

  let usersElements = state.usersData.map((user) => (
    <DialogsUsersItem key={user.id} name={user.name} id={user.id} />
  ));
  let messagesElements = state.messagesData.map((message) => (
    <DialogsMessagesItem key={message.id} message={message.message} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.message);
    values.message = "";
  };

  // if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div>
      <h1 className={classes.title}>Dialogs</h1>
      <div className={classes.mainWrapper}>
        <ul className={classes.usersList}>{usersElements}</ul>
        <div className={classes.dialogsList}>
          <div>{messagesElements}</div>
          <div>
            <DialogFormMessageRedux onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};
const DialogFormMessage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name={"message"}
          component={Textarea}
          placeholder="Enter your message"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const DialogFormMessageRedux = reduxForm({ form: "dialogFormMessage" })(
  DialogFormMessage
);

export default Dialogs;
