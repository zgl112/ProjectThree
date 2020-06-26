import React, { useContext, useEffect } from "react";
import SearchBar from "./Features/SearchBar";
import { Segment, Divider } from "semantic-ui-react";
import FiltersAndCards from "./Features/FiltersAndCards";
import { JobStore } from "../../App/Store/jobsStore";
import { LoadingComponent } from "../../App/Layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { IQueryRequest } from "../../App/Models/Models";
import { withRouter, useParams } from "react-router-dom";
import { toJS } from "mobx";
const SearchResults = () => {
  const jobsStore = useContext(JobStore);
  const { loadingInitial, jobs, getListJobs, getQuery } = jobsStore;

  useEffect(() => {
    const query = getQuery();

    getListJobs(query!);
  }, []);
  console.log(toJS(getQuery()));
  if (loadingInitial)
    return <LoadingComponent content="Getting job results..." />;
  return (
    <Segment>
      <SearchBar />
      <Divider section />
      <FiltersAndCards jobs={jobs!} />
    </Segment>
  );
};
export default withRouter(observer(SearchResults));
