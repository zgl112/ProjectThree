import React from "react";
import { Button, Container, Header, Form, Grid } from "semantic-ui-react";

export const SearchBar = () => {
  return (
    <Container
      fluid
      className="searchContainer"
      style={{ backgroundImage: "url(/assets/searchBar.png)" }}
    >
      <Header
        className="searchHeader"
        as="h2"
        content="Jobs count placeholder"
        inverted
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.4em",
          textAlign: "center",
          paddingTop: "100px",
          
          
        }}
      />
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
