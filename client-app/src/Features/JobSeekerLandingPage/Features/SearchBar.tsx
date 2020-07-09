import React, { useContext } from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import { JobStore } from "../../../App/Store/jobsStore";
import { IQueryRequest } from "../../../App/Models/Models";
import { observer } from "mobx-react-lite";

const SearchBar = () => {
  const jobsStore = useContext(JobStore);
  const { query, getListJobs, setSearchParams } = jobsStore;
  const onSubmit = async (data: IQueryRequest) => {
    await setSearchParams(data);
    await getListJobs(data);
  };
  return (
    <Container style={{ width: "100%" }}>
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Form className="searchFormLanding" onSubmit={handleSubmit}>
            <Form.Group className="searchFormStyleLanding">
              <Form.Field style={{ width: "20%" }}>
                <Field
                  placeholder="e.g. nurse"
                  name="jobTitle"
                  value={query?.jobTitle}
                  component="input"
                />{" "}
              </Form.Field>
              <Form.Field style={{ width: "20%" }}>
                <Field
                  placeholder="location or postcode"
                  value={query?.locationName}
                  name="locationName"
                  component="input"
                />
              </Form.Field>
              <Form.Field>
                <Button primary>Search</Button>
              </Form.Field>
            </Form.Group>
          </Form>
        )}
      ></FinalForm>
    </Container>
  );
};
export default observer(SearchBar);
