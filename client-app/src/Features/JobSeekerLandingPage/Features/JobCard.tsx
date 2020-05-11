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
export const JobCard = () => {
  return (
    <CardGroup>
      <Card fluid style={{ borderTop: "3px rgb(33, 138, 174) solid" }}>
        <Card.Content>
          <Header as="h1" style={{ marginBottom: "0px" }}>
            Job Title Placeholder
          </Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
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
                              Salary ph
                            </Header>
                          </GridRow>
                        </GridColumn>
                        <GridColumn width="8">
                          <Header as="h5">
                            <Icon.Group size="small">
                              <Icon name="location arrow" />
                            </Icon.Group>
                            Location ph
                          </Header>
                        </GridColumn>
                      </GridRow>
                      <GridRow>
                        <GridColumn width="8">
                          <Header as="h5">
                            <Icon.Group size="small">
                              <Icon name="clock outline" />
                            </Icon.Group>
                            Job type ph
                          </Header>
                        </GridColumn>
                        <GridColumn width="8">
                          <Header as="h5">
                            <Icon.Group size="small">
                              <Icon name="universal access" />
                            </Icon.Group>
                            Be one of the first ten applicants
                          </Header>
                        </GridColumn>
                      </GridRow>
                    </Grid>
                  </Segment>
                </Card.Description>
                <br />
                <Card.Description>
                  JOB TITLE - Reception Teacher, Enfield, September 2020 ABOUT
                  THE SCHOOL Prospero Teaching is looking for a Reception
                  Teacher for an Ofsted "Good" Primary school in Enfield, North
                  London. The school is a vibrant two-form entry mainstream
                  Primary School with a supportive senior leadership team. The
                  school is going from strength to strength and providing
                  training to all staff. The position is open to both NQT's and
                  experienced teachers. Depending on performance the school
                  would look at either extending the contract or offering a
                  permanent position. CONTRACT/POSITION DETAILS Location -
                  Enfield, North London Position - Nursery Teacher Type of work
                  - Class Teacher - planning, preparation, marking, parents
                  evenings etc Contract or position start date - 3rd September
                  2020 Duration / Likely Duration - 2 terms until end of the
                  academic year July 2021 Contract or position end date (if
                  applicable) - July 2021 Contract type (temp/perm/temp to perm)
                  - Temporary, long term Full time/part time - Full time Minimum
                  rate of pay - Minimum rate £130 per day / paid to scale Hours
                  - 8:30 am - 4pm : Mon - Fri (term time only) EXPERIENCE,
                  TRAINING AND QUALIFICATIONS QTS or equivalent Minimum 1 year
                  Key Stage 2 teaching experience in the UK Up to date
                  Safeguarding training issued in the last year TO BE ELIGIBLE
                  FOR THIS ROLE THROUGH PROSPERO TEACHING, YOU MUST: Hold Right
                  to Work in the UK Hold an enhanced child barred list DBS
                  certificate registered with the online update service or be
                  willing to process a new application Provide two professional
                  child related references OTHER If you would like to be
                  considered for this role, please apply with a copy of your up
                  to date CV. Unfortunately, only shortlisted candidates will be
                  contacted. Prospero Teaching is acting as an employment
                  business/education recruitment agency in relation to this
                  vacancy. The successful candidate will be required to register
                  with Prospero Teaching in order to fill this vacancy. Prospero
                  Teaching is able to offer the successful candidate: Free,
                  accredited continued professional development courses
                  including safeguarding and behaviour management In-house
                  Training and Development Team
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
                  <Header icon="browser" content="Cookies policy" />
                  <Modal.Content>
                    <h3>
                      Congratulations! Your application is now being redirected
                      to /Company ph/!
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
                          Placeholder company
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
