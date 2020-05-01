import React, { Fragment } from "react";
import { NavBar } from "../nav/NavBar";
import { Jobs } from "../Jobs/Jobs";
import { Container } from "semantic-ui-react";

export const Homepage = () => {
  return (
    <Fragment>
      <Container style={{ marginTop: "7em" }}>
        <NavBar />
        <Jobs />
      </Container>
    </Fragment>
  );
};
