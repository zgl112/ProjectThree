import React, { useEffect, useContext } from "react";
import { Segment, Divider } from "semantic-ui-react";
import SearchBar from "./Features/SearchBar";
import JobDetails from "./Features/JobDetails";
import { RouteComponentProps } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { JobStore } from "../../App/Store/jobsStore";
import { LoadingComponent } from "../../App/Layout/LoadingComponent";

interface DetailParams {
  id: string;
}
const DetailedView: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  // const jobsStore = useContext(JobStore);
  // const { loadJob, job, loadingInitial } = jobsStore;

  useEffect(() => {
    let id = parseInt(match.params.id);
    loadJob(id);
  }, [match.params.id, history]);

  const jobsStore = useContext(JobStore);
  const {
    loadingInitial,
    jobs,
    getListJobs,
    getQuery,
    loadJob,
    job,
  } = jobsStore;

  useEffect(() => {
    const query = getQuery();

    getListJobs(query!);
  }, []);

  if (loadingInitial)
    return <LoadingComponent content="Getting job details..." />;

  return (
    <Segment style={{ backgroundColor: "#f5f7fa" }}>
      <SearchBar />
      <Divider section />
      <JobDetails job={job!} jobs={jobs!} />
    </Segment>
  );
};
export default observer(DetailedView);
