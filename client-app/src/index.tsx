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
import { Auth0Provider } from "@auth0/auth0-react";
dateFnsLocalizer();

export const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
      redirectUri={window.location.origin}
    >
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Auth0Provider>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
