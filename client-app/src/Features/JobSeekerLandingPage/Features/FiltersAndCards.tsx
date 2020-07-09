import React, { useContext, useState, useEffect, SyntheticEvent } from "react";
import {
  Grid,
  GridColumn,
  Header,
  Container,
  Pagination,
  PaginationProps,
} from "semantic-ui-react";
import Filters from "./Filters";
import Cards from "./Cards";
import {
  IListSearchResult,
  ICounters,
  IJobResult,
} from "../../../App/Models/Models";
import { observer } from "mobx-react-lite";
import { JobStore } from "../../../App/Store/jobsStore";

const FiltersAndCards: React.FC<{
  jobs?: IListSearchResult;
  loadingInitial: boolean;
  counters: ICounters;
}> = ({ jobs, loadingInitial, counters }) => {
  const jobsStore = useContext(JobStore);
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(5);
  const indexOfLastJob = currentPage * postsPerPage;
  const indexOfFirstJob = indexOfLastJob - postsPerPage;
  const currentPosts = jobs?.lists.slice(indexOfFirstJob, indexOfLastJob);

  const clickon = (event: SyntheticEvent, data: any) => {
    setCurrentPage(data!.activePage);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Header size="large">
        {jobs?.count === undefined ? "" : `${jobs?.count} Jobs & Vacancies`}
      </Header>
      <Grid>
        <GridColumn width={4}>
          <Filters counters={counters!} />
        </GridColumn>
        <GridColumn width={12}>
          <Cards
            loadingInitial={loadingInitial!}
            jobs={jobs!}
            jobsPag={currentPosts!}
          />
          <Container style={{ textAlign: "center" }}>
            <br />
            {jobs?.lists === undefined || jobs?.count === 0 ? (
              ""
            ) : (
              <Pagination
                // ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={2}
                activePage={currentPage}
                totalPages={jobs?.count! / postsPerPage}
                onPageChange={clickon}
              />
            )}
          </Container>
        </GridColumn>
      </Grid>
    </Container>
  );
};
export default observer(FiltersAndCards);
