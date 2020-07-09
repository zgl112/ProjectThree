import React from "react";
import { Grid, Container, GridColumn } from "semantic-ui-react";
import JobCard from "./JobCard";
import SimilarJobs from "./SimilarJobs";
import { observer } from "mobx-react-lite";
import { IJobResult, IListSearchResult } from "../../../App/Models/Models";
const JobDetails: React.FC<{ job: IJobResult; jobs: IListSearchResult }> = ({
  job,
  jobs,
}) => {
  return (
    <Container>
      <Grid>
        <GridColumn width={12}>
          <JobCard job={job!} />
        </GridColumn>
        <GridColumn width={4}>
          <SimilarJobs jobs={jobs!} />
        </GridColumn>
      </Grid>
    </Container>
  );
};
export default observer(JobDetails);
