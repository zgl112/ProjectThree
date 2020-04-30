import React from "react";
import {
  Image,
  Segment,
  Item,
  Header,
  Form,
  Button,
  FormInput,
  SegmentInline,
  Divider,
} from "semantic-ui-react";

export const Jobs = () => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image src="assets/logoreed.png" fluid />
        <Form className="searchForm">
          <Form.Group widths="equal" className="searchFormStyle">
            <Form.Field>
              <Form.Input placeholder="e.g. nurse" label="What" />
            </Form.Field>
            <Form.Field>
              <Form.Input placeholder="location or postcode" label="Where" />
            </Form.Field>
            <Form.Field>
              <Button primary>Search</Button>
            </Form.Field>
          </Form.Group>
        </Form>
      </Segment>
      {/* <Header basic className="searchCounter">
        <p className="counterColor">Search for your new job</p>
      </Header> */}
      {/* <Segment>
          <Form className="searchForm">
        <Form.Group widths="equal" className="searchFormStyle">
          <Form.Field>
            <Form.Input placeholder="e.g. nurse" label="What" />
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="location or postcode" label="Where" />
          </Form.Field>
          <Form.Field>
            <Button primary>Search</Button>
          </Form.Field>
        </Form.Group>
      </Form>
      </Segment> */}
      {/* <Form className="searchForm">
        <Form.Group widths="equal" className="searchFormStyle">
          <Form.Field>
            <Form.Input placeholder="e.g. nurse" label="What" />
          </Form.Field>
          <Form.Field>
            <Form.Input placeholder="location or postcode" label="Where" />
          </Form.Field>
          <Form.Field>
            <Button primary>Search</Button>
          </Form.Field>
        </Form.Group>
      </Form> */}
  
    </Segment.Group>
  );
};
