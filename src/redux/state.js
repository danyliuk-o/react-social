
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        messagesPage: {
            usersData: [
                { id: 111, name: 'Dmitriy' },
                { id: 222, name: 'Elena' },
                { id: 333, name: 'Sasha' },
                { id: 444, name: 'Evgenia' },
                { id: 555, name: 'Anatoliy' },
                { id: 666, name: 'Ivan' }
            ],
            messagesData: [
                { id: 11, message: 'hello!' },
                { id: 22, message: 'ReactJS' },
                { id: 33, message: 'Whats your problem?' },
                { id: 44, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
                { id: 55, message: 'Yo' }
            ],
            newMessageBody: ''
        },
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello world!', likesCount: 12 },
                { id: 2, message: 'Hello world!2', likesCount: 5 },
                { id: 3, message: 'Hello world!2', likesCount: 11 },
                { id: 4, message: 'Hello world!2', likesCount: 4 },
                { id: 5, message: 'Hello world!2', likesCount: 8 },
            ],
            newPostText: "it-kamasutra.com"
        },
        sidebar: {}
    },
    getState() {
        // debugger;
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state)

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;