import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    messagesPage: {
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
      newMessageBody: "",
    },
    profilePage: {
      postsData: [
        { id: 1, message: "Hello world!", likesCount: 12 },
        { id: 2, message: "Hello world!2", likesCount: 5 },
        { id: 3, message: "Hello world!2", likesCount: 11 },
        { id: 4, message: "Hello world!2", likesCount: 4 },
        { id: 5, message: "Hello world!2", likesCount: 8 },
      ],
      newPostText: "it-kamasutra.com",
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("state was changed");
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
