import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink  } from "react-router-dom";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <p style={{ fontSize: "19px" }}>
            <b>reed</b>.co.uk
          </p>
        </Menu.Item>
        <Menu.Item name="Jobs" as={NavLink} to="/jobs" />
        <Menu.Item name="Courses" as={NavLink} to="/courses" />
        <Menu.Item name="Career advice" as={NavLink} to="/careeradvice" />
        <Menu.Item name="Recruiting?Post a job" as={NavLink} to="/recruiting" />
        <Menu.Item position="right">
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
            <p style={{ color: "white" }}>Register CV</p>
          </Button>
          <Button
            as={NavLink}
            to="/signin"
            style={{
              backgroundColor: "transparent",
              padding: "3px",
              marginRight: "10px",
            }}
          >
            <p style={{ color: "white" }}>Sign in</p>
          </Button>
          <Button
            as={NavLink}
            to="/shortlistedjobs"
            style={{
              backgroundColor: "transparent",
              padding: "3px",
              marginRight: "10px",
            }}
          >
            <p style={{ color: "white" }}>Shortlisted jobs</p>
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
