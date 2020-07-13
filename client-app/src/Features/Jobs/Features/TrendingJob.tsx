<<<<<<< HEAD
import React, {
  SyntheticEvent,
  useState,
  useContext,
  useCallback,
} from "react";
=======
import React, { SyntheticEvent, useContext } from "react";
>>>>>>> a2214b3465e962731657981ae8b86b74048109a0
import { Container, Grid, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IQueryRequest } from "../../../App/Models/Models";
import { JobStore } from "../../../App/Store/jobsStore";
import { observer } from "mobx-react-lite";
<<<<<<< HEAD
import { sleep } from "../.././../App/API/agent";
=======
>>>>>>> a2214b3465e962731657981ae8b86b74048109a0

const TrendingJob = () => {
  const [queryX, setQuery] = React.useState<IQueryRequest>();
  const jobsStore = useContext(JobStore);
<<<<<<< HEAD
  const { combineQuery, setSearchParams, getListJobs } = jobsStore;
=======
  const { setSearchParams } = jobsStore;
>>>>>>> a2214b3465e962731657981ae8b86b74048109a0

  const handleClick = async (
    e: SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setQuery({
      ...queryX!,
      jobTitle: data.value,
    });

    if (queryX?.jobTitle === data.value) {
      await setSearchParams(queryX!);
    }
  };

  const trueValue = (data: string) => {
    if (data === "true") return true;
    else return false;
  };

  return (
    <Container>
      <br /> <br />
      <h1 style={{ textAlign: "center" }}> Trending Jobs</h1>
      <h3 style={{ textAlign: "center" }}>
        The most popular job types in the last 24 hours!
      </h3>
      <br />
      <Grid stackable centered>
        <Grid.Row>
          <Grid.Column width={3}>
            <List link>
              <List.Item as={Link} value="NHS" onClick={handleClick}>
                NHS jobs
              </List.Item>
              <List.Item as={Link} value="immediate" onClick={handleClick}>
                {" "}
                Immediate start jobs
              </List.Item>
              <List.Item as={Link} value="supermarket" onClick={handleClick}>
                Supermarket jobs
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link>
              <List.Item as={Link} value="delivery" onClick={handleClick}>
                Delivery driver jobs
              </List.Item>
              <List.Item as={Link} value="work home" onClick={handleClick}>
                Work from home jobs
              </List.Item>
              <List.Item
                as={Link}
                value="true"
                onClick={(e: SyntheticEvent<HTMLElement, Event>, data: any) => {
                  setQuery({
                    ...queryX!,
                    partTime: trueValue(data.value),
                  });
                  if (queryX?.partTime === trueValue(data.value)) {
                    setSearchParams(queryX!);
                  }
                }}
              >
                Part time jobs
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link>
              <List.Item as={Link} value="medicine" onClick={handleClick}>
                Health and Medicine jobs
              </List.Item>
              <List.Item as={Link} value="emergency" onClick={handleClick}>
                {" "}
                Emergency call handlers
              </List.Item>
              <List.Item as={Link} value="farm" onClick={handleClick}>
                Farm jobs
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <List link>
              <List.Item as={Link} value="warehouse" onClick={handleClick}>
                Warehouse jobs
              </List.Item>
              <List.Item as={Link} value="social care" onClick={handleClick}>
                Social care jobs
              </List.Item>
              <List.Item as={Link} value="administration" onClick={handleClick}>
                Administration jobs
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
};
export default observer(TrendingJob);
