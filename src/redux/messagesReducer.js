const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  usersData: [
    { id: 111, name: "Dmitriy" },
    { id: 222, name: "Elena" },
    { id: 333, name: "Sasha" },
    { id: 444, name: "Evgenia" },
    { id: 555, name: "Anatoliy" },
    { id: 666, name: "Ivan" },
  ],
  messagesData: [
    { id: 11, message: "hello!" },
    { id: 22, message: "ReactJS" },
    { id: 33, message: "Whats your problem?" },
    { id: 44, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 55, message: "Yo" },
  ],
  newMessageBody: '',
};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messagesReducer;
