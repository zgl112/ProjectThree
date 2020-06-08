import React from "react";
import ReactDOM from "react-dom";
import "./App/Layout/styles.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import "react-widgets/dist/css/react-widgets.css";
import App from "./App/Layout/App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./App/Layout/ScrollToTop";
import "react-toastify/dist/ReactToastify.min.css";
import dateFnsLocalizer from "react-widgets-date-fns";

dateFnsLocalizer();

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// or add a new declaration (.d.ts) file containing `declare module 'react-widgets-date-fns';`
