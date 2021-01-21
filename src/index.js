import React from "react";
import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import "./index.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// serviceWorker.unregister();