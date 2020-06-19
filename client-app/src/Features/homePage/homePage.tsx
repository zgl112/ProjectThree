import React from "react";
import { NavBar } from "../nav/NavBar";
import Jobs from "../Jobs/Jobs";
import { Container } from "semantic-ui-react";
//import { JobStore } from "../../App/Store/jobsStore";
//import { LoadingComponent } from "../../App/Layout/LoadingComponent";

export const Homepage = () => {
  // const store = useContext(JobStore);
  // const { setAppLoaded, appLoaded } = store;

  // useEffect(() => {
  //   setAppLoaded();
  // }, [setAppLoaded]);
  // if (appLoaded) return <LoadingComponent content="Loading app..." />;
  return (
    <Container fluid>
      <NavBar />
      <Jobs />
    </Container>
  );
};
