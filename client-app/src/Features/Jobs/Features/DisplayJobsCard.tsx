import React, { useContext, SyntheticEvent } from "react";
import { Container, Grid, Card, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { JobStore } from "../../../App/Store/jobsStore";
import { IQueryRequest } from "../../../App/Models/Models";

export const DisplayJobsCard = () => {
  const [queryX, setQuery] = React.useState<IQueryRequest>();
  const jobsStore = useContext(JobStore);
  const { setSearchParams } = jobsStore;

  const handleClick = async (
    e: SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setQuery({
      ...queryX!,
      employerName: data.value,
    });

    if (queryX?.employerName === data.value) {
      console.log(queryX);

      await setSearchParams(queryX!);
    }
  };
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
            <Grid.Column width={4}>
              <Card
                image="/assets/hays.png"
                extra={
                  <List.Item
                    as={Link}
                    value="Hays Specialist Recruitment Limited"
                    onClick={handleClick}
                  ><p style={{textAlign: "center"}}>
                    Jobs at Hays Company
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card
                image="/assets/trainingroom.png"
                extra={
                  <List.Item
                    as={Link}
                    value="The training room"
                    onClick={handleClick}
                  >
                   <p style={{textAlign: "center"}}>
                    Jobs at The Training Room
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card
                image="/assets/tradewind.png"
                extra={
                  <List.Item as={Link} value="tradewind" onClick={handleClick}>
                    <p style={{textAlign: "center"}}>
                    Jobs at Tradewind
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Card
                image="/assets/rise.png"
                extra={
                  <List.Item as={Link} value="rise" onClick={handleClick}>
                    <p style={{textAlign: "center"}}>
                    Jobs at Rise Technical
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card
                image="/assets/prospero.png"
                extra={
                  <List.Item as={Link} value="prospero" onClick={handleClick}>
                    <p style={{textAlign: "center"}}>
                    Jobs at Prospero Learning
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card
                image="/assets/teachingpersonnel.png"
                extra={
                  <List.Item
                    as={Link}
                    value="Teaching Personnel"
                    onClick={handleClick}
                  >
                    <p style={{textAlign: "center"}}>
                    Jobs at The Teaching Personnel
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column width={4}>
              <Card
                image="/assets/academics.png"
                extra={
                  <List.Item as={Link} value="Academics" onClick={handleClick}>
                    <p style={{textAlign: "center"}}>
                    Jobs at Academics
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card
                image="/assets/nhsscotland.png"
                extra={
                  <List.Item
                    as={Link}
                    value="NHS National Services Scotland"
                    onClick={handleClick}
                  >
                    <p style={{textAlign: "center"}}>
                    Jobs at NHS Scotland
                    </p>
                  </List.Item>
                }
              ></Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card
                image="/assets/nhsjobs.png"
                extra={
                  <List.Item
                    as={Link}
                    value="NHS Business Services Authority Jobs"
                    onClick={handleClick}
                  >
                    <p style={{textAlign: "center"}}>
                    Jobs at NHS Business
                    </p>
                  </List.Item>
                }
              ></Card>
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
