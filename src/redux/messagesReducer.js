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
    {
      id: 44,
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    { id: 55, message: "Yo" },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.body;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (body) => ({ type: SEND_MESSAGE, body });

export default messagesReducer;
