import React from "react";
import { Container } from "semantic-ui-react";
import { UnderConstruction } from "../../App/Layout/UnderConstruction";
import Login from "../../App/Auth/Login";
import Logout from "../../App/Auth/Logout";

export const CareerAdvice = () => {
  return (
    <Container>
      <Login />
      <Logout />
      <UnderConstruction />
    </Container>
  );
};
