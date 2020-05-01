import React from "react";
import { Container, Grid, Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const extra = <Link to={`/`}>Company placeholder</Link>;

export const DisplayJobsCard = () => {
  return (
    <Container>
      <br style={{ lineHeight: "10px" }} />

      <h1 style={{ textAlign: "center" }}>
        Find a job you love with the UK's #1 job site
      </h1>
      <h3 style={{ textAlign: "center" }}>
        Your next role could be with one of these leading companies. Apply
        today.
      </h3>
      <br />
      <Grid centered>
        <Grid.Row columns={3}>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
          <Grid.Column width={3}>
            <Card image="/assets/placeholder.png" extra={extra}></Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
    </Container>
  );
};
