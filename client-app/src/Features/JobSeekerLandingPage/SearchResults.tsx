import React, { useContext, useEffect } from "react";
import SearchBar from "./Features/SearchBar";
import { Segment, Divider } from "semantic-ui-react";
import FiltersAndCards from "./Features/FiltersAndCards";
import { JobStore } from "../../App/Store/jobsStore";
import { observer } from "mobx-react-lite";
import { withRouter } from "react-router-dom";
import { toJS } from "mobx";

const SearchResults = () => {
  const jobsStore = useContext(JobStore);
  const {
    loadingInitial,
    jobs,
    getListJobs,
    getQuery,
    counters,
    getCounters,
  } = jobsStore;

  useEffect(() => {
    const query = getQuery();

    getListJobs(query!);
    getCounters(jobs!);
  }, []);
  return (
    <Segment style={{ backgroundColor: "#f5f7fa" }}>
      <SearchBar />
      <Divider section />
      <FiltersAndCards
        counters={counters!}
        loadingInitial={loadingInitial!}
        jobs={jobs!}
      />
    </Segment>
  );
};
export default withRouter(observer(SearchResults));
