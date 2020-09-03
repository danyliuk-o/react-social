
import React from "react";
import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

let rerenderEntireTree = (state) => {
  // debugger
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});