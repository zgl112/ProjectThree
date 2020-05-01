import React from "react";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
export const TrendingJob = () => {
  return (
    <Segment vertical>
      <Container>
        <h1 style={{ textAlign: "center" }}> Trending Jobs</h1>
        <h3 style={{ textAlign: "center" }}>
          The most popular job types in the last 24 hours!
        </h3>
        <br />
        <Grid stackable centered>
          <Grid.Row>
            <Grid.Column width={3}>
              <List link>
                <List.Item as="a">NHS jobs</List.Item>
                <List.Item as="a"> Immediate start jobs</List.Item>
                <List.Item as="a">Supermarket jobs</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <List link>
                <List.Item>
                  {" "}
                  <Link to={`/`}>Delivery driver jobs</Link>
                </List.Item>
                <List.Item as="a">Work from home jobs</List.Item>
                <List.Item as="a">Part time jobs</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <List link>
                <List.Item as="a">Health and Medicine jobs</List.Item>
                <List.Item as="a"> Emergency call handlers</List.Item>
                <List.Item as="a">Farm jobs</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <List link>
                <List.Item as="a">Warehouse jobs</List.Item>
                <List.Item as="a">Social care jobs</List.Item>
                <List.Item as="a">Administration jobs</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
      </Container>
    </Segment>
  );
};
