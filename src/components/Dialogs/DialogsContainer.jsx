
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: () => { dispatch(updateNewMessageBodyCreator()) },
    sendMessage: body => { dispatch(sendMessageCreator(body)) },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
