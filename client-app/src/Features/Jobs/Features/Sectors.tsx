import React from "react";
import {
  Container,
  Grid,
  TextArea,
  List,
  Image,
  Segment,
  Item,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const textStyle = {
  position: "absolute",
  bottom: "39%",
  width: "100%",
  height: "auto",
  color: "white",
  textAlign: "center",
};

export const Sectors = () => {
  return (
    <Container>
      <br style={{ lineHeight: "10px" }} />

      <h1 style={{ textAlign: "center" }}>Choose your sector</h1>
      <h3 style={{ textAlign: "center" }}>
        Jobs across 42 sectors. See the latest roles now.
      </h3>
      <br />
      <Grid centered>
        <br />

        <Grid.Row>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered>
                <Image
                  circular
                  src="/assets/technology.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>Technology</h1>
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
              <Grid.Row centered>
                <Image
                  circular
                  src="/assets/engineering.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>Engineering</h1>
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
              <Grid.Row centered>
                <Image
                  circular
                  src="/assets/graduation.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>Graduates</h1>
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
              <Grid.Row centered>
                <Image
                  circular
                  src="/assets/health.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>Health</h1>
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
