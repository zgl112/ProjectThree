import React from "react";
import {
  Container,
  Grid,
  Card,
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

export const Locations = () => {
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
              <Grid.Row centered>
                <Image
                  src="/assets/london.png"
                  circular
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>London</h1>
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
                  src="/assets/glasgow.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>Glasgow</h1>
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
                  src="/assets/manchester.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>Manchester</h1>
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
                  src="/assets/liverpool.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <h1>Liverpool</h1>
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
