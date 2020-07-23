import React, { useContext, SyntheticEvent } from "react";
import {
  Container,
  Grid,
  List,
  Image,
  Segment,
  Item,
  Header,
} from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { IQueryRequest } from "../../../App/Models/Models";
import { JobStore } from "../../../App/Store/jobsStore";
import { observer } from "mobx-react-lite";

const textStyle = {
  position: "absolute",
  bottom: "39%",
  width: "100%",
  height: "auto",
  color: "white",
  textAlign: "center",
};

const Locations = () => {
  const [queryX, setQuery] = React.useState<IQueryRequest>();
  const jobsStore = useContext(JobStore);
  const { setSearchParams } = jobsStore;

  const handleClick = async (
    e: SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setQuery({
      ...queryX!,
      locationName: data.value,
    });

    if (queryX?.locationName === data.value) {
      console.log(queryX);

      await setSearchParams(queryX!);
    }
 
  };
  return (
    <Container>
      <br style={{ lineHeight: "10px" }} />

      <h1 style={{ textAlign: "center" }}>Browse local jobs</h1>
      <h3 style={{ textAlign: "center" }}>
        See who's hiring in your area. Find a job close to home.
      </h3>
      <br />
      <Grid centered>
        <br />

        <Grid.Row>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered>
                <Image
                  src="/assets/london.png"
                  circular
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />

                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="london"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> London</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link>
              <List.Item 
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="london"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in London</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="south east england"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in South East England</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="surrey"
                onClick={handleClick}
              ><p className="linkHover">
                Jobs in Surrey
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Essex"
                onClick={handleClick}
                
              >
                <p className="linkHover">
                Jobs in Essex
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Kent"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Kent
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="south west england"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in South West England</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="bristol"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Bristol
                </p>
              </List.Item>{" "}
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Devon"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Devon
                </p>
              </List.Item>{" "}
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Plymouth"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Plymouth
                </p>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered>
                <Image
                  circular
                  src="/assets/glasgow.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="Glasgow"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Glasgow</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link>
            <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="East Midlands"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in East Midlands</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Nottingham"
                onClick={handleClick}
              >
               <p className="linkHover">
                Jobs in Nottingham
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Leicester"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Leicester
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Derby"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Derby
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="West Midlands"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in West Midlands</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Birmingham"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Birmingham
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Coventry"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Coventry
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Stoke-on-Trent"
                onClick={handleClick}
              >
               <p className="linkHover">
                Jobs in Stoke-on-Trent
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="East Anglia"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in East Anglia</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Cambridge"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Cambridge
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Norwich"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Norwich
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Peterborough"
                onClick={handleClick}
              >
               <p className="linkHover">
                Jobs in Peterborough
                </p>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered>
                <Image
                  circular
                  src="/assets/manchester.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="Manchester"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Manchester</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link>
            <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="North East England"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in North East England</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Newcastle Upon Tyne"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Newcastle Upon Tyne
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Middlesbrough"
                onClick={handleClick}
                
              >
                <p className="linkHover">
                Jobs in Middlesbrough
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Sunderland"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Sunderland
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="North West England"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in North West England</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Manchester"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Manchester
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Liverpool"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Liverpool
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Bolton"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Bolton
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="Jobs in Yorkshire and Humberside"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in Yorkshire</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Leeds"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Leeds
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Sheffield"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Sheffield
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Hull"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Hull
                </p>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered>
                <Image
                  circular
                  src="/assets/liverpool.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <List.Item
                          as={Link}
                          value="Liverpool"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Liverpool</h1>
                        </List.Item>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Grid.Row>
            </Grid>
            <br />
            <List link>
            <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="Scotland"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in Scotland</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Glasgow"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Glasgow
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Edinburgh"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Edinburgh
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Aberdeen"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Aberdeen
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="Wales"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in Wales</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Cardiff"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Cardiff
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Swansea"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Swansea
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Newport"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Newport
                </p>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "40px" }}
                as={Link}
                value="Northern Ireland"
                onClick={handleClick}
              >
                <h4 className="linkHover">Jobs in Northern Ireland</h4>
              </List.Item>
              <List.Item
                style={{ color: "#0079d1", paddingLeft: "60px" }}
                as={Link}
                value="Belfast"
                onClick={handleClick}
              >
                <p className="linkHover">
                Jobs in Belfast
                </p>
              </List.Item>
             
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
    </Container>
  );
};
export default observer(Locations);
