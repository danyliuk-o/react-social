
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
                { id: 22, name: 'ReactJS' },
                { id: 33, name: 'Whats your problem?' },
                { id: 44, name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
                { id: 55, name: 'Yo' }
            ]
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
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this.callSubscriber = observer
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    _addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newPostText)
        }
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default store;
window.store = store;