import React, { Fragment } from "react";
import NotFound from "./NotFound";
import { Container } from "semantic-ui-react";
import { NavBar } from "../../Features/nav/NavBar";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Homepage } from "../../Features/Homepage/Homepage";
import { Jobs } from "../../Features/Jobs/Jobs";
import { Courses } from "../../Features/Courses/Courses";
import { CareerAdvice } from "../../Features/CareerAdvice/CareerAdvice";
import { Recruiting } from "../../Features/Recruiting/Recruiting";
import { RegisterCV } from "../../Features/Users/RegisterCV";
import { SignIn } from "../../Features/Users/SignIn";
import { Shortlistedjobs } from "../../Features/Users/Shortlistedjobs";
import { Footer } from "../../Features/Footer/Footer";
const App = () => {
  return (
    <Fragment >
      <BrowserRouter>
        <ToastContainer position="bottom-right" />
        <Route exact path="/" component={Homepage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <Fragment>
              <NavBar />
              <Container fluid style={{ width: "100%" }}>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/jobs" component={Jobs} />
                  <Route exact path="/courses" component={Courses} />
                  <Route
                    exact
                    path={"/careeradvice"}
                    component={CareerAdvice}
                  />
                  <Route exact path="/recruiting" component={Recruiting} />
                  <Route exact path="/registercv" component={RegisterCV} />
                  <Route exact path="/signin/" component={SignIn} />
                  <Route
                    exact
                    path="/shortlistedjobs"
                    component={Shortlistedjobs}
                  />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
