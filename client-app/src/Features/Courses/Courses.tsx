import React, { useContext, useEffect } from "react";
import { Container, Button } from "semantic-ui-react";
import { UnderConstruction } from "../../App/Layout/UnderConstruction";
import { JobStore } from "../../App/Store/jobsStore";

export const Courses = () => {
  const jobsStore = useContext(JobStore);
  const { createIndex, indexButton } = jobsStore;

  return (
    <Container>
      <UnderConstruction />
      <Container>
        <Button
          primary
          fluid
          onClick={() => createIndex()}
          loading={indexButton}
        >
          Import Jobs
        </Button>
      </Container>
    </Container>
  );
};
