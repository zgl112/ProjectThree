import React from "react";
import { Menu, Container, Button, Dropdown, Image } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { history } from "../..";

export const NavBar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  

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

        {isAuthenticated ? (
          <Menu.Item position="right">
            <Dropdown
              style={{
                backgroundColor: "transparent",
                padding: "3px",
                marginRight: "10px",
              }}
              pointing="top left"
              text={user.name}
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/`}
                  text="My profile"
                  icon="user"
                />
                <Dropdown.Item
                  onClick={() => logout()}
                  text="Logout"
                  icon="power"
                />
              </Dropdown.Menu>
            </Dropdown>
            <Image
              avatar
              spaced="right"
              src={user!.picture || "/assets/user.png"}
            />
          </Menu.Item>
        ) : (
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
              onClick={() => loginWithRedirect()}
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
            </Button>{" "}
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};
