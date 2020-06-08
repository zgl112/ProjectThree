import React from "react";
import { SegmentGroup, Segment, Container, Header } from "semantic-ui-react";

export const SimilarJobs = () => {
  return (
    <Container>
      <SegmentGroup>
        <Segment style={{ borderTop: "3px rgb(169,169,169) solid" }}>
          <Header content="Similar jobs" size="medium" />
        </Segment>
        <Segment>
          <Header content="Job Title Placeholdeer" size="tiny" />
          <p>Salary Placeholder</p>
          <p>Location Placeholder</p>
        </Segment>
        <Segment>
          <Header content="Job Title Placeholdeer" size="tiny" />
          <p>Salary Placeholder</p>
          <p>Location Placeholder</p>
        </Segment>
        <Segment>
          <Header content="Job Title Placeholdeer" size="tiny" />
          <p>Salary Placeholder</p>
          <p>Location Placeholder</p>
        </Segment>
        <Segment>
          <Header content="Job Title Placeholdeer" size="tiny" />
          <p>Salary Placeholder</p>
          <p>Location Placeholder</p>
        </Segment>
        <Segment>
          <Header content="Job Title Placeholdeer" size="tiny" />
          <p>Salary Placeholder</p>
          <p>Location Placeholder</p>
        </Segment>
        <Segment>
          <Header content="Job Title Placeholdeer" size="tiny" />
          <p>Salary Placeholder</p>
          <p>Location Placeholder</p>
        </Segment>
      </SegmentGroup>
    </Container>
  );
};
