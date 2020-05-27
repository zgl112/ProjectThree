import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Image,
  Divider,
} from "semantic-ui-react";
export const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "5em 0em", position: "relative", bottom: "0" }}
    >
      <Container>
        <Grid inverted>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="JOBS" />
              <List link inverted>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Job search</List.Item>
                <List.Item as="a">Recruiter directory</List.Item>
                <List.Item as="a">Work from home</List.Item>
                <List.Item as="a">Browse jobs</List.Item>
                <List.Item as="a">Browse location</List.Item>
                <List.Item as="a">Popular searches</List.Item>
                <List.Item as="a">Career Advice</List.Item>
                <List.Item as="a">Average salary checker</List.Item>
                <List.Item as="a">Help</List.Item>
                <List.Item as="a">Contact a REED office</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="RECRUITER" />
              <List link inverted>
                <List.Item as="a">Recruiter site</List.Item>
                <List.Item as="a">Post a Job</List.Item>
                <List.Item as="a">CV search</List.Item>
                <List.Item as="a">Recruitment agency</List.Item>
                <List.Item as="a">Recruiter Advice</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted content="COURSES" />
              <List link inverted>
                <List.Item as="a">Help</List.Item>
                <List.Item as="a">Contact us</List.Item>
                <List.Item as="a">Find a course</List.Item>
                <List.Item as="a">View all subjects</List.Item>
                <List.Item as="a">Discount courses</List.Item>
                <List.Item as="a">Online courses</List.Item>
                <List.Item as="a">Free courses</List.Item>
                <List.Item as="a">Awarding body directory</List.Item>
                <List.Item as="a">Career guides</List.Item>
                <List.Item as="a">Advertise a course</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted content="MORE" />
              <List link inverted>
                <List.Item as="a">About us</List.Item>
                <List.Item as="a">Careers at reed.co.uk</List.Item>
                <List.Item as="a">For developers</List.Item>
                <List.Item as="a">Press Office</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted content="REED" />

              <List link inverted>
                <List.Item as="a">Tempzone: timesheets & holiday</List.Item>
                <List.Item as="a">Authorize timesheets</List.Item>
                <List.Item as="a">Reed Global</List.Item>
                <List.Item as="a">Reed in Partnership </List.Item>
                <List.Item as="a">Careers with Reed</List.Item>
                <List.Item as="a">James Reed - Official Site</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider section />
        <Grid centered>
          <Image
            style={{ height: "88px", width: "176px", position: "center" }}
            src="/assets/appButtons.png"
          />
        </Grid>
      </Container>
    </Segment>
  );
};
