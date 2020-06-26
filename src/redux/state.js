import { rerenderEntireTree } from '../render';

let state = {
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
        ]
    }
}

export let addPost = postMessage => {
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;