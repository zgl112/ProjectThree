import React, { Fragment } from "react";
import NotFound from "./NotFound";
import { Container } from "semantic-ui-react";
import { NavBar } from "../../Features/nav/NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Homepage } from "../../Features/Homepage/Homepage";
import Jobs from "../../Features/Jobs/Jobs";
import { Courses } from "../../Features/Courses/Courses";
import { CareerAdvice } from "../../Features/CareerAdvice/CareerAdvice";
import { Recruiting } from "../../Features/Recruiting/Recruiting";
import { RegisterCV } from "../../Features/Users/RegisterCV";
import { SignIn } from "../../Features/Users/SignIn";
import { Shortlistedjobs } from "../../Features/Users/Shortlistedjobs";
import { Footer } from "../../Features/Footer/Footer";
import SearchResults from "../../Features/JobSeekerLandingPage/SearchResults";
import DetailedView from "../../Features/JobSeekerLandingPage/DetailedView";
import "mobx-react-lite/batchingForReactDom";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <ToastContainer position="bottom-right" />
        <Route exact path="/" component={Homepage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <Fragment>
              <NavBar />
              <Container
                fluid
                style={{
                  width: "100%",
                  backgroundColor: "	rgb(176,176,176)",
                }}
              >
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/jobs" component={Jobs} />
                  <Route path="/jobs/results/" component={SearchResults} />
                  <Route path="/jobs/results/:slug" component={SearchResults} />
                  <Route exact path="/courses" component={Courses} />
                  <Route
                    exact
                    path="/jobs/result/:id"
                    component={DetailedView}
                  />
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
