import React, { useContext, useEffect } from "react";
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
} from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { IListSearchResult } from "../../../App/Models/Models";
import { observer } from "mobx-react-lite";
import { JobStore } from "../../../App/Store/jobsStore";
import Dotdotdot from "react-dotdotdot";
import { formatDistance, parseISO } from "date-fns";
interface IProps {
  results?: IListSearchResult;
}
const Cards: React.FC<IProps> = ({ results }) => {
  const jobsStore = useContext(JobStore);
  const { getJobs } = jobsStore;

  const jobs = getJobs();
  results = jobs;

  const onclick = async (id: number) => {};
  return (
    <CardGroup>
      {results?.lists.map((job, index) => (
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
              src="./assets/placeholder.png"
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
              //  onClick={() => onclick(job.jobId!)}
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
                  src="./assets/placeholder.png"
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
                <Button
                  primary
                  as={Link}
                  //onClick={() => onclick(job.jobId!)}
                  to={`/jobs/result/${job.jobId}`}
                >
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
