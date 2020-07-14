import React, { useContext, useEffect } from "react";
import { SegmentGroup, Segment, Container, Header } from "semantic-ui-react";
import { IListSearchResult } from "../../../App/Models/Models";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const SimilarJobs: React.FC<{ jobs: IListSearchResult }> = ({ jobs }) => {
  return (
    <Container>
      <SegmentGroup>
        <Segment style={{ borderTop: "3px rgb(169,169,169) solid" }}>
          <Header content="Similar jobs" size="medium" />
        </Segment>
        {jobs?.lists.slice(0 - 7).map((job, index) => (
          <Segment key={index}>
            <Header
              style={{ color: "#00487f", fontSize: "16px" }}
              content={job.jobTitle}
              as={Link}
              to={`/jobs/result/${job.jobId}`}
            />
            <p style={{ color: "#8fa2bf" }}>
              {job.yearlyMaximumSalary === 0
                ? "Salary dependent on experience"
                : `£ ${job.yearlyMaximumSalary}`}
            </p>
            <p style={{ marginTop: "-15px", color: "#8fa2bf" }}>
              {job.locationName}
            </p>
          </Segment>
        ))}
      </SegmentGroup>
    </Container>
  );
};
export default observer(SimilarJobs);
