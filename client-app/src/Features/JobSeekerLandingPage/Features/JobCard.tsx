import React from "react";
import {
  Grid,
  Card,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Modal,
  Button,
  CardGroup,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IJobResult } from "../../../App/Models/Models";
import { formatDistance, parseISO } from "date-fns";

const JobCard: React.FC<{ job: IJobResult }> = ({ job }) => {
  if (job === undefined)
    return (
      <Card fluid style={{ borderTop: "3px rgb(33, 138, 174) solid" }}>
        <Card.Content>
          <Header>
            Sorry, the job you're looking for is no longer being advertised.
            However, you can still search for similar jobs.
          </Header>
        </Card.Content>
      </Card>
    );
  return (
    <CardGroup>
      <Card fluid style={{ borderTop: "3px rgb(33, 138, 174) solid" }}>
        <Card.Content>
          <Header as="h1" style={{ marginBottom: "0px" }}>
            {job?.jobTitle}
          </Header>
          <Card.Meta style={{ font: "6" }}>
            Posted{" "}
            {formatDistance(parseISO(job?.datePosted!.toString()), new Date(), {
              addSuffix: true,
            })}{" "}
            by {job?.employerName}
          </Card.Meta>
          <Grid>
            <GridColumn width="12">
              <GridRow>
                <Card.Description>
                  <Segment
                    style={{ marginTop: "25px", backgroundColor: "#F7F8FA" }}
                  >
                    <Grid>
                      <GridRow>
                        <GridColumn width="8">
                          <GridRow>
                            <Header as="h5">
                              <Icon.Group size="small">
                                <Icon name="pound sign" />
                              </Icon.Group>
                              {job?.yearlyMinimumSalary === 0
                                ? "Depending on experiece"
                                : `${job?.yearlyMinimumSalary} to
                            ${job?.yearlyMaximumSalary}`}
                            </Header>
                          </GridRow>
                        </GridColumn>
                        <GridColumn width="8">
                          <Header as="h5">
                            <Icon.Group size="small">
                              <Icon name="location arrow" />
                            </Icon.Group>
                            {job?.locationName}
                          </Header>
                        </GridColumn>
                      </GridRow>
                      <GridRow>
                        <GridColumn width="8">
                          <Header as="h5">
                            <Icon.Group size="small">
                              <Icon name="clock outline" />
                            </Icon.Group>
                            {job?.contractType}
                          </Header>
                        </GridColumn>
                        {job?.applications! < 10 ? (
                          <GridColumn width="8">
                            <Header as="h5">
                              <Icon.Group size="small">
                                <Icon name="universal access" />
                              </Icon.Group>
                              {"Be one of the first ten applicants"}
                            </Header>
                          </GridColumn>
                        ) : (
                          ""
                        )}
                      </GridRow>
                    </Grid>
                  </Segment>
                </Card.Description>
                <br />
                <Card.Description>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: job?.jobDescription!,
                    }}
                  />
                </Card.Description>
              </GridRow>
            </GridColumn>
            <GridColumn width="4">
              <GridRow>
                <Modal
                  trigger={
                    <Button
                      style={{
                        width: "100%",
                        backgroundColor: "#e84188",
                        color: "white",
                        border: "1px solid #e84188",
                        borderRadius: "8px",
                        marginBottom: "15px",
                        marginTop: "25px",
                        padding: "9px",
                      }}
                    >
                      {" "}
                      <p style={{ fontWeight: "bold" }}>Apply Now</p>
                    </Button>
                  }
                  basic
                  size="small"
                >
                  <Header icon="browser" content="Success!" />
                  <Modal.Content>
                    <h3>
                      Congratulations! Your application is now being redirected
                      to {job?.employerName}!
                    </h3>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="green" inverted>
                      <Icon name="checkmark" /> Got it
                    </Button>
                  </Modal.Actions>
                </Modal>

                <Button
                  floated="right"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #0079d1",
                    borderRadius: "8px",
                    color: "#0079d1",
                    width: "100%",
                    padding: "7px",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>
                    <Icon name="share alternate"></Icon>Share job
                  </p>
                </Button>
                <SegmentGroup style={{ marginTop: "54px" }}>
                  <Segment>
                    <Grid>
                      <GridRow as={NavLink} to="/jobs">
                        <p style={{ textAlign: "center", width: "100%" }}>
                          {job.employerName}
                        </p>
                      </GridRow>
                    </Grid>
                  </Segment>

                  <Segment>
                    <Grid>
                      <GridRow as={NavLink} to="/jobs">
                        <p style={{ textAlign: "center", width: "100%" }}>
                          About this company
                        </p>
                      </GridRow>
                    </Grid>
                  </Segment>
                </SegmentGroup>
              </GridRow>
            </GridColumn>
          </Grid>
        </Card.Content>
      </Card>
    </CardGroup>
  );
};
export default observer(JobCard);
