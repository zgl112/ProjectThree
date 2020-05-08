import React from "react";
import {
  Button,
  Container,
  Header,
  Form,
  Grid,
  GridColumn,
} from "semantic-ui-react";

export const SearchBar = () => {
  return (
    <Container
      fluid
      className="searchContainer"
      style={{ backgroundImage: "url(/assets/searchBar.png)" }}
    >
      <Grid centered>
        <GridColumn className="phcounter">
          <Header style={{ textAlign: "center", color: "white" }}>
            Search 87,776 new jobs - 4,112 added in the last 24 hours
          </Header>
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
