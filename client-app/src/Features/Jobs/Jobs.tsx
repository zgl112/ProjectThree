import React from "react";
import { Image, Segment, Item, Header, Form, Button } from "semantic-ui-react";
const SearchContainer = {
  position: "absolute",
  bottom: "50%",
  width: "100%",
  height: "auto",
  color: "white",
};
const SearchCounter = {
  position: "absolute",
  textAlign: "Center",
top: "70px",
  width: "100%",
  height: "auto",
  color: "white",
};
const Search = {
  position: "absolute",
  bottom: "-70%",
  right: "13%",
  width: "75%",
  height: "auto",
  color: "white",
};



export const Jobs = () => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src= "assets/logoreed.png"
          fluid
              /></Segment>
              <Segment basic style={SearchContainer}>
              <Item.Group><Item><Item.Content><Header basic style={SearchCounter}><p>Search for your new job</p></Header></Item.Content></Item>
              </Item.Group>
              </Segment>
              <Segment basic style={SearchContainer}>
               <Form basic style={Search}>
                 <Form.Group widths = "equal">
                  <Form.Field fluid  >
                    <label>What</label>
                    <input placeholder="e.g. nurse" />
                  </Form.Field>
                  <Form.Field fluid >
                    <label>Where</label>
                    <input placeholder="location or postcode" />
                  </Form.Field>
                  <Form.Button inline type="submit">Submit</Form.Button>
                </Form.Group>
                </Form>
                </Segment>
                </Segment.Group>
    
  );
};
