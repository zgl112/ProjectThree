import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  Button,
  Container,
  Header,
  Form,
  Grid,
  GridColumn,
} from "semantic-ui-react";
import { JobStore } from "../../../App/Store/jobsStore";
import { LoadingComponent } from "../../../App/Layout/LoadingComponent";

const SearchBar = () => {
  const jobsStore = useContext(JobStore);
  const { jobsCounter, counter, loadingInitial } = jobsStore;

  useEffect(() => {
    jobsCounter();
  }, [jobsCounter]);

  return (
    <Container
      fluid
      className="searchContainer"
      style={{ backgroundImage: "url(/assets/searchBar.png)" }}
    >
      <Grid centered>
        <GridColumn className="phcounter">
          {counter?.totalJobs === 0 ? (
            <Header style={{ textAlign: "center", color: "white" }} />
          ) : (
            <Header style={{ textAlign: "center", color: "white" }}>
              Search {counter?.totalJobs} new jobs - {counter?.addedToday} added
              in the last 24 hours!
            </Header>
          )}
        </GridColumn>{" "}
      </Grid>

      <Container>
        <Grid centered>
          <Form className="searchForm">
            <Form.Group className="searchFormStyle">
              <Form.Field>
                <label style={{ color: "white", textAlign: "left" }}>
                  What
                </label>
                <Form.Input placeholder="e.g. nurse" />
              </Form.Field>
              <Form.Field>
                <label style={{ color: "white", textAlign: "left" }}>
                  Where
                </label>
                <Form.Input placeholder="location or postcode" />
              </Form.Field>
              <Form.Field>
                <Button primary>Search</Button>
              </Form.Field>
            </Form.Group>
          </Form>
        </Grid>
      </Container>
    </Container>
  );
};
export default observer(SearchBar);
