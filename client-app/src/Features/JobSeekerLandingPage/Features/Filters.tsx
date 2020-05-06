import React from "react";
import {
  Header,
  Segment,
  SegmentGroup,
  Dropdown,
  Checkbox,
  Container,
  Button,
} from "semantic-ui-react";
import { salaryOptions, timeAdded } from "../../../App/Util/FilterOptions";
import { NavLink } from "react-router-dom";

export const Filters = () => {
  return (
    <Container>
      <SegmentGroup fluid>
        <Segment>
          <Header content="Filter your search" size="medium" />
        </Segment>
        <Segment>
          <Header content="Salary Range :" size="tiny" />
          <label>From :</label>
          <Dropdown
            placeholder="£Any"
            fluid
            selection
            options={salaryOptions}
          />
          <br />

          <label>To :</label>
          <Dropdown
            placeholder="£Any"
            fluid
            selection
            options={salaryOptions}
          />
        </Segment>
        <Segment>
          <Header content="Job Type :" size="tiny" />
          <Checkbox style={{ marginBottom: "9px" }} label="Permanent(26.431)" />
          <Checkbox style={{ marginBottom: "9px" }} label="Temporary(15.321)" />
          <Checkbox style={{ marginBottom: "9px" }} label="Contract(54.123)" />
          <Checkbox style={{ marginBottom: "9px" }} label="Full-time(15.321)" />
          <Checkbox label="Part-time(15.321)" style={{ marginBottom: "5px" }} />
        </Segment>
        <Segment>
          <Header content="Date posted :" size="tiny" />
          <Dropdown placeholder="Anytime" fluid selection options={timeAdded} />
        </Segment>
        <Segment>
          <Header content="Specialisms" size="tiny" />
          <Segment style={{ height: "220px", overflowY: "scroll" }}>
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Permanent(26.431)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Temporary(15.321)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Contract(54.123)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Full-time(15.321)"
            />
            <Checkbox
              label="Part-time(15.321)"
              style={{ marginBottom: "5px" }}
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Permanent(26.431)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Temporary(15.321)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Contract(54.123)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Full-time(15.321)"
            />
            <Checkbox
              label="Part-time(15.321)"
              style={{ marginBottom: "5px" }}
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Permanent(26.431)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Temporary(15.321)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Contract(54.123)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Full-time(15.321)"
            />
            <Checkbox
              label="Part-time(15.321)"
              style={{ marginBottom: "5px" }}
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Permanent(26.431)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Temporary(15.321)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Contract(54.123)"
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Full-time(15.321)"
            />
            <Checkbox
              label="Part-time(15.321)"
              style={{ marginBottom: "5px" }}
            />
            <Checkbox
              style={{ marginBottom: "9px" }}
              label="Full-time(15.321)"
            />
          </Segment>
        </Segment>
        <Segment>
          <Header content="Posted by :" size="tiny" />
          <Checkbox style={{ marginBottom: "9px" }} label="Agency(26.431)" />
          <Checkbox style={{ marginBottom: "9px" }} label="Employer(15.321)" />
          <Checkbox style={{ marginBottom: "9px" }} label="Reed(54.123)" />
        </Segment>
        <Segment>
          <Header content="More options :" size="tiny" />
          <Checkbox
            style={{ marginBottom: "9px" }}
            label="Suitable for graduates"
          />
        </Segment>
      </SegmentGroup>
      <SegmentGroup>
        <Segment style={{ borderTop: "3px solid green" }}>
          <p>
            Find your perfect course through <b>reed.co.uk</b>
          </p>
          <Button
            fluid
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
              marginRight: "10px",
            }}
            content="Search courses >"
          ></Button>
        </Segment>
      </SegmentGroup>
      <br />
    </Container>
  );
};
