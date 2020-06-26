import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, useHistory } from "react-router-dom";
import { history } from "../../../index";
import {
  Button,
  Container,
  Header,
  Form,
  Grid,
  GridColumn,
} from "semantic-ui-react";
import { JobStore } from "../../../App/Store/jobsStore";
import { IQueryRequest } from "../../../App/Models/Models";
import { Form as FinalForm, Field } from "react-final-form";
const SearchBar = () => {
  const jobsStore = useContext(JobStore);
  const { jobsCounter, counter, setSearchParams, query } = jobsStore;
  const onSubmit = async (query: IQueryRequest) => {
    await setSearchParams(query);
  };
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
          <FinalForm
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <Form className="searchForm" onSubmit={handleSubmit}>
                <Form.Group className="searchFormStyle">
                  <Form.Field>
                    <label style={{ color: "white", textAlign: "left" }}>
                      What
                    </label>
                    <Field
                      placeholder="e.g. nurse"
                      name="jobTitle"
                      value={query?.jobTitle}
                      component="input"
                    />{" "}
                  </Form.Field>
                  <Form.Field>
                    <label style={{ color: "white", textAlign: "left" }}>
                      Where
                    </label>
                    <Field
                      placeholder="location or postcode"
                      value={query?.locationName}
                      name="locationName"
                      component="input"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Button primary>
                      {/* primary as={Link} to="jobs/results" */}
                      Search
                    </Button>
                  </Form.Field>
                </Form.Group>
              </Form>
            )}
          ></FinalForm>
        </Grid>
      </Container>
    </Container>
  );
};
export default observer(SearchBar);
