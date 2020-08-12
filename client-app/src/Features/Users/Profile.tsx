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
} from "semantic-ui-react";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <Grid style={{ paddingTop: "200px" }}>
      <GridColumn width={16}>
        <Card
          fluid
          centered
          style={{ borderTop: "3px rgb(33, 138, 174) solid" }}
        >
          <Card.Content>
            <Image centered src={user.picture} size="tiny" circular />
            <Header as="h1" style={{ marginBottom: "0px" }}>
              {user.name}
            </Header>
          </Card.Content>
        </Card>
      </GridColumn>
    </Grid>
  );
};

export default Profile;
