import React, { useContext, SyntheticEvent } from "react";
import {
  Container,
  Grid,
  List,
  Image,
  Segment,
  Item,
  Header,
} from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { IQueryRequest } from "../../../App/Models/Models";
import { JobStore } from "../../../App/Store/jobsStore";
import { observer } from "mobx-react-lite";

const textStyle = {
  position: "absolute",
  bottom: "39%",
  width: "100%",
  height: "auto",
  color: "white",
  textAlign: "center",
};

const Locations = () => {
  const [queryX, setQuery] = React.useState<IQueryRequest>();
  const jobsStore = useContext(JobStore);
  const { setSearchParams } = jobsStore;

  const handleClick = async (
    e: SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setQuery({
      ...queryX!,
      locationName: data.value,
    });

    if (queryX?.locationName === data.value) {
      console.log(queryX);

      await setSearchParams(queryX!);
    }
  };
  return (
    <Container>
      <br style={{ lineHeight: "10px" }} />

      <h1 style={{ textAlign: "center" }}>Browse local jobs</h1>
      <h3 style={{ textAlign: "center" }}>
        See who's hiring in your area. Find a job close to home.
      </h3>
      <br />
      <Grid centered>
        <br />

        <Grid.Row>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  src="/assets/london.png"
                  circular
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />

                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="london"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> London</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link >
              <List.Item
                style={{ color: "#0079d1" }}
                as={Link}
                value="london"
                onClick={handleClick}
              >
                <h4>Jobs in London</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1" }}
                as={Link}
                value="south east england"
                onClick={handleClick}
              >
                <h4>Jobs in South East England</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "20px" }}
                as={Link}
                value="surrey"
                onClick={handleClick}
              >
                Jobs in Surrey
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "20px" }}
                as={Link}
                value="Essex"
                onClick={handleClick}
              >
                Jobs in Essex
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "20px" }}
                as={Link}
                value="Kent"
                onClick={handleClick}
              >
                Jobs in Kent
              </List.Item>
              <List.Item
                style={{ color: "#0079d1" }}
                as={Link}
                value="south west england"
                onClick={handleClick}
              >
                <h4>Jobs in South West England</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "20px" }}
                as={Link}
                value="bristol"
                onClick={handleClick}
              >
                Jobs in Bristol
              </List.Item>{" "}
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "20px" }}
                as={Link}
                value="Devon"
                onClick={handleClick}
              >
                Jobs in Devon
              </List.Item>{" "}
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "20px" }}
                as={Link}
                value="Plymouth"
                onClick={handleClick}
              >
                Jobs in Plymouth
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  circular
                  src="/assets/glasgow.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="Glasgow"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Glasgow</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  circular
                  src="/assets/manchester.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="Manchester"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Manchester</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  circular
                  src="/assets/liverpool.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="Liverpool"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Liverpool</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
              <List.Item as="a">Job Category placeholder</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
    </Container>
  );
};
export default observer(Locations);
