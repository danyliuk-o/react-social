import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

export const rerenderEntireTree = state => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost} updateNewPostText={store.updateNewPostText} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);