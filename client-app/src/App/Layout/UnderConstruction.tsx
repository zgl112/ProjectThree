import React from "react";
import { Container } from "semantic-ui-react";
export const UnderConstruction = () => {
  return (
    <Container
      style={{
        backgroundImage: "url(/assets/UnderConstruction.png)",
        backgroundRepeat: "no-repeat",
        paddingTop: "780px",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    ></Container>
  );
};
