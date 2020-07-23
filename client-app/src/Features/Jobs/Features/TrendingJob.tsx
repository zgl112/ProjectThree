import React, { SyntheticEvent, useContext } from "react";
import { Container, Grid, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IQueryRequest } from "../../../App/Models/Models";
import { JobStore } from "../../../App/Store/jobsStore";
import { observer } from "mobx-react-lite";

const TrendingJob = () => {
  const [queryX, setQuery] = React.useState<IQueryRequest>();
  const jobsStore = useContext(JobStore);
  const { setSearchParams } = jobsStore;

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
          <Grid.Column width={4}>
            <List link>
              <List.Item as={Link} value="NHS" onClick={handleClick}>
              <p className="linkHover">
                NHS Jobs
                </p>
              </List.Item>
              <br />
              <List.Item as={Link} value="immediate" onClick={handleClick}>
                {" "}
                <p className="linkHover">
                Immediate Start Jobs
                </p>
              </List.Item>
              <br />
              <List.Item as={Link} value="supermarket" onClick={handleClick}>
              <p className="linkHover">
                Supermarket Jobs
                </p>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List link>
              <List.Item as={Link} value="delivery" onClick={handleClick}>
              <p className="linkHover">
                Delivery Driver Jobs
                </p>
              </List.Item>
              <br />
              <List.Item as={Link} value="work home" onClick={handleClick}>
              <p className="linkHover">
                Work From Home Jobs
                </p>
              </List.Item>
              <br />
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
                <p className="linkHover">
                Part Time Jobs
                </p>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List link>
              <List.Item as={Link} value="medicine" onClick={handleClick}>
              <p className="linkHover">
                Health and Medicine Jobs
                </p>
              </List.Item>
              <br />
              <List.Item as={Link} value="emergency" onClick={handleClick}>
                {" "}
                <p className="linkHover">
                Emergency Call Handler Jobs
                </p>
              </List.Item>
              <br />
              <List.Item as={Link} value="farm" onClick={handleClick}>
              <p className="linkHover">
                Farm Jobs
                </p>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <List link>
              <List.Item as={Link} value="warehouse" onClick={handleClick}>
              <p className="linkHover">
                Warehouse Jobs
                </p>
              </List.Item>
              <br />
              <List.Item as={Link} value="social care" onClick={handleClick}>
              <p className="linkHover">
                Social Care Jobs
                </p>
              </List.Item>
              <br />
              <List.Item as={Link} value="administration" onClick={handleClick}>
              <p className="linkHover">
                Administration Jobs
                </p>
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
