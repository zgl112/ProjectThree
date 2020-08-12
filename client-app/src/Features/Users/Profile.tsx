import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Tab,
  Container,
  CardGroup,
  Card,
  Image,
  Icon,
  Header,
  Segment,
  Grid,
  GridColumn,
  GridRow,
  CardDescription,
  CardMeta,
} from "semantic-ui-react";

const Profile = () => {
  const { user } = useAuth0();
  const panes = [
    { menuItem: 'Shortlisted', render: () => <Tab.Pane style={{height: "500px"}}></Tab.Pane> },
    { menuItem: 'Profile', render: () => <Tab.Pane style={{height: "500px"}}></Tab.Pane> },
    { menuItem: 'Settings', render: () => <Tab.Pane style={{height: "500px"}}></Tab.Pane> }

  ]


  
  return (
    <Grid style={{ paddingTop: "100px" ,backgroundColor: "rgb(245, 247, 250)" }} centered >
    <GridRow centered>
      <GridColumn width={1} >
      <Card >
      <Image centered src={user.picture} />
    <Card.Content extra>
      <Card.Header>{user.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
     
    </Card.Content>
   
   
  </Card>
  </GridColumn>
  
  <GridColumn width={6}>
        <Card
          fluid
          
          style={{ borderTop: "3px rgb(33, 138, 174) solid" }}
        >
          <Card.Content centered>
<Header as="h3" style={{ marginBottom: "0px" }}>Preferred Role</Header>
            Software Developer
            </Card.Content>
          <Card.Content centered>
            
            <Header as="h3" style={{ marginBottom: "0px" }}>
              About Me
            </Header>
            
          </Card.Content>
<CardDescription style={{paddingLeft: "17px"}}> <CardMeta> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</CardMeta></CardDescription>

        </Card>
        </GridColumn>
     
      </GridRow>
      <GridRow centered>
        <GridColumn width={7}>
        
        <Tab panes = {panes}  />
        <br/>
        <br/>
       
        </GridColumn> 
        </GridRow>
        
           </Grid>
           
  );
};

export default Profile;
