import React from "react";
import { Container, Grid, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";


export const DisplayJobsCard = () => {
  return (
    <Container fluid style={{ backgroundColor: "#f5f7fa" }}>
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
              <Card image="/assets/hays.png" extra={<p>Hays Company</p>}></Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card
                image="/assets/trainingroom.png"
                extra={<p>The training room</p>}
              ></Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card
                image="/assets/tradewind.png"
                extra={<p>Tradewind</p>}
              ></Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <Card
                image="/assets/rise.png"
                extra={<p>Rise Technical</p>}
              ></Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card
                image="/assets/prospero.png"
                extra={<p>Prospero Teaching</p>}
              ></Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card
                image="/assets/teachingpersonnel.png"
                extra={<p>Teaching Personnel</p>}
              ></Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width={3}>
              <Card
                image="/assets/academics.png"
                extra={<p>Academics</p>}
              ></Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card
                image="/assets/nhsscotland.png"
                extra={<p>NHS Scotland</p>}
              ></Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card image="/assets/nhsjobs.png" extra={<p>NHS Jobs</p>}></Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
      </Container>
    </Container>
  );
};
