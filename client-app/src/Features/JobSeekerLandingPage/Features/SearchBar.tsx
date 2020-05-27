import React from "react";
import { Container, Form, Button } from "semantic-ui-react";

export const SearchBar = () => {
  return (
    <Container style={{ width: "100%" }}>
      <Form className="searchFormLanding">
        <Form.Group className="searchFormStyleLanding">
          <Form.Field style={{ width: "20%" }}>
            <Form.Input placeholder="e.g. nurse" />
          </Form.Field>
          <Form.Field style={{ width: "20%" }}>
            <Form.Input placeholder="location or postcode" />
          </Form.Field>
          <Form.Field>
            <Button primary>Search</Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Container>
  );
};
