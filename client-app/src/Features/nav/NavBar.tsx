import React from "react";
import { Menu, Container, Button} from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
         reed.co.uk
        </Menu.Item>
        <Menu.Item name="Jobs" />
        <Menu.Item name="Courses" />
        <Menu.Item name="Career advice" />
        <Menu.Item name="Recruiting?Post a job" /> 
        <Menu.Item position= "right">
          <Button style={{ backgroundColor:'transparent', border: "1px solid white", borderRadius: "15px", padding: "7px", marginRight: "5px"}}>
          <p style={{color:"white"}} >Register CV</p></Button>
          <Button style={{ backgroundColor:'transparent', padding: "3px", marginRight: "5px"}}>
          <p style={{color:"white"}} >Sign in</p></Button>
          <Button  style={{ backgroundColor:'transparent', padding: "3px", marginRight: "5px" }} >
          <p style={{color:"white"}} >Shortlisted jobs</p></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
