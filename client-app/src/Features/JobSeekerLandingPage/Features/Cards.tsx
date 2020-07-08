import React from "react";
import {
  Card,
  Icon,
  Image,
  CardGroup,
  GridRow,
  Grid,
  GridColumn,
  Header,
  Button,
  Modal,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IListSearchResult, IJobResult } from "../../../App/Models/Models";
import { observer } from "mobx-react-lite";
import Dotdotdot from "react-dotdotdot";
import { formatDistance, parseISO } from "date-fns";
import { LoadingComponent } from "../../../App/Layout/LoadingComponent";
import { JobStore } from "../../../App/Store/jobsStore";

const Cards: React.FC<{
  jobs: IListSearchResult;
  loadingInitial: boolean;
  jobsPag: IJobResult[];
}> = ({ jobs, loadingInitial, jobsPag }) => {
  console.log(jobsPag);
  if (loadingInitial)
    return (
      <CardGroup style={{ boxShadow: "none" }}>
        <Card fluid style={{ height: "300px", boxShadow: "none" }}>
          <Card.Description style={{ boxShadow: "none" }}>
            <LoadingComponent content="Getting job results..." />
          </Card.Description>
        </Card>
      </CardGroup>
    );
  if (jobs?.count === 0)
    return (
      <CardGroup>
        <Container>
          <Header>
            We cannot find any jobs with your search parameters. Please try
            again later or change the location and job title!
          </Header>
        </Container>
      </CardGroup>
    );
  return (
    <CardGroup>
      {jobsPag?.map((job, index) => (
        <Card key={index} fluid>
          <Card.Content>
            <Grid>
              <GridRow>
                <GridColumn width="2">
                  <h6
                    style={{
                      font: "7",
                      marginTop: "-10px",
                      marginBottom: "4px",
                    }}
                  >
                    <b> Promoted</b>
                  </h6>
                </GridColumn>
                <GridColumn width="2">
                  <h6
                    style={{
                      color: "red",
                      font: "7",
                      marginTop: "-10px",
                      marginBottom: "4px",
                    }}
                  >
                    <b> Featured</b>
                  </h6>
                </GridColumn>
                <GridColumn width="1">
                  <h6
                    style={{
                      color: "green",
                      font: "7",
                      marginTop: "-10px",
                      marginBottom: "4px",
                    }}
                  >
                    <b>New</b>
                  </h6>
                </GridColumn>
                <GridColumn width="3">
                  <h6
                    style={{
                      color: "blue",
                      font: "7",
                      marginTop: "-10px",
                      marginBottom: "4px",
                    }}
                  >
                    <b>Easy Apply</b>
                  </h6>
                </GridColumn>
              </GridRow>
            </Grid>
            <Image
              style={{ marginTop: "-20px" }}
              floated="right"
              size="small"
              alt="some image"
              src={job.photos}
            />

            <Card.Header as={Link} to={`/jobs/result/${job.jobId}`}>
              {job.jobTitle}
            </Card.Header>
            <Card.Meta style={{ font: "6" }}>
              <b>Posted</b>
              {formatDistance(
                parseISO(job?.datePosted!.toString()),
                new Date(),
                {
                  addSuffix: true,
                }
              )}
              <b> by </b> {job.employerName}
            </Card.Meta>
            <Card.Description>
              <Grid>
                <GridRow>
                  <GridColumn width="4">
                    <GridRow>
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="pound sign" />
                        </Icon.Group>
                        {job.yearlyMinimumSalary === 0
                          ? "Depending on experiece"
                          : `${job.yearlyMinimumSalary} to
                            ${job.yearlyMaximumSalary}`}
                      </Header>
                    </GridRow>
                  </GridColumn>
                  <GridColumn width="4">
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="location arrow" />
                      </Icon.Group>
                      {job.locationName}
                    </Header>
                  </GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn width="4">
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="clock outline" />
                      </Icon.Group>
                      {job.contractType}
                    </Header>
                  </GridColumn>
                </GridRow>
              </Grid>
            </Card.Description>
            <br />
            <Card.Description className="cardsdescription">
              <Dotdotdot clamp={4} truncationChar="...">
                <p
                  dangerouslySetInnerHTML={{
                    __html: job.jobDescription!.replace(/(<([^>]+)>)/gi, ""),
                  }}
                />
              </Dotdotdot>
            </Card.Description>
            <Button
              floated="right"
              as={Link}
              to={`/jobs/result/${job.jobId}`}
              style={{
                backgroundColor: "transparent",
                border: "1px solid grey",
                borderRadius: "8px",
                padding: "7px",
              }}
              content="Detailed view"
            ></Button>
            <Modal
              trigger={
                <Button
                  floated="right"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid grey",
                    borderRadius: "8px",
                    padding: "7px",
                  }}
                >
                  Quick view
                </Button>
              }
            >
              <Modal.Header>
                {job.employerName}
                <Image
                  wrapped
                  floated="right"
                  size="tiny"
                  src={job.photos}
                  style={{ marginTop: "-6px" }}
                />
              </Modal.Header>

              <Modal.Content scrolling>
                <Header>{job.jobTitle}</Header>
                <Modal.Description>
                  <Grid>
                    <GridRow>
                      <GridColumn width="3">
                        <GridRow>
                          <Header as="h5">
                            <Icon.Group size="small">
                              <Icon name="pound sign" />
                            </Icon.Group>
                            {job.yearlyMinimumSalary === 0
                              ? "Depending on experiece"
                              : `${job.yearlyMinimumSalary} to
                            ${job.yearlyMaximumSalary}`}
                          </Header>
                        </GridRow>
                      </GridColumn>
                      <GridColumn width="3">
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="location arrow" />
                          </Icon.Group>
                          {job.locationName}
                        </Header>
                      </GridColumn>
                      <GridColumn width="3">
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="clock outline" />
                          </Icon.Group>
                          {job.contractType}
                        </Header>
                      </GridColumn>
                    </GridRow>
                  </Grid>
                </Modal.Description>
                <br />
                <Modal.Description>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: job.jobDescription!,
                    }}
                  />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary as={Link} to={`/jobs/result/${job.jobId}`}>
                  Detailed view <Icon name="chevron right" />
                </Button>
              </Modal.Actions>
            </Modal>
          </Card.Content>
        </Card>
      ))}
    </CardGroup>
  );
};
export default observer(Cards);
