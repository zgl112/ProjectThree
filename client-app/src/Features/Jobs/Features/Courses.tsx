import React from "react";
import {
  Grid,
  Image,
  Segment,
  Item,
  Button,
  Container,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const textStyle = {
  position: "absolute",
  bottom: "34%",
  width: "100%",
  height: "auto",
  color: "white",
  textAlign: "center",
};

export const Courses = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Image
            src="/assets/courses.png"
            fluid
            style={{ height: "80%", width: "80%", filter: "brightness(60%)" }}
          />
          <Segment basic style={textStyle}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <h1>Find the right course</h1>

                  <h3>
                    Invest in your future with thousands of courses to help you
                    learn and develop.
                  </h3>
                  <p>Now with an extra 10% off</p>

                  <Button
                    as={NavLink}
                    to="/registercv"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid white",
                      borderRadius: "15px",
                      padding: "7px",
                      marginRight: "10px",
                    }}
                  >
                    <p style={{ color: "white" }}>Learn more</p>
                  </Button>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
// Find the right course
// Invest in your future with thousands of courses to help you learn and develop.
// Now with an extra 10% off
