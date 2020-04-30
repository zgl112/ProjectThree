import React from "react";
import {
  Button,
  Container,
  Header,
  Form,
  Grid,
  Label
} from "semantic-ui-react";

export const Jobs = () => {
  return(
  // <Container fluid className= "searchContainer">
   <Container fluid className= "searchContainer" style={{backgroundImage: 'url(/assets/logoreed.png)' }}>
     
    <Header
      as='h2'
      content='Jobs count placeholder'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
        textAlign: 'center',
        paddingTop: "100px"
      }}
    />
    <Container>
        <Grid centered>
          <Form className="searchForm">
            <Form.Group className="searchFormStyle">
              <Form.Field> 
              <label style={{color: "white", textAlign: "left"}} >What</label> 
                <Form.Input placeholder="e.g. nurse"  />
              </Form.Field>
              <Form.Field>
                <label style={{color: "white", textAlign: "left"}} >Where</label>
                <Form.Input placeholder="location or postcode"/>
              </Form.Field>
              <Form.Field>
                <Button primary>Search</Button>
              </Form.Field>
            </Form.Group>
          </Form>
        </Grid>
      </Container>
   
  </Container>
)}

// export const Jobs = () => {
//   return (
//     <Segment.Group>
//       <Segment basic attached="top" style={{ padding: "0" }}>
//         <Image src="assets/logoreed.png" fluid />
//         <Form className="searchForm">
//           <Form.Group widths="equal" className="searchFormStyle">
//             <Form.Field>
//               <Form.Input placeholder="e.g. nurse" label="What" />
//             </Form.Field>
//             <Form.Field>
//               <Form.Input placeholder="location or postcode" label="Where" />
//             </Form.Field>
//             <Form.Field>
//               <Button primary>Search</Button>
//             </Form.Field>
//           </Form.Group>
//         </Form>
//       </Segment>
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
  
    // </Segment.Group>
