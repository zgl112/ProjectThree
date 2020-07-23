import React, { SyntheticEvent, useContext } from "react";
import { Container, Grid, List, Image, Segment, Item } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import { IQueryRequest } from "../../../App/Models/Models";
import { JobStore } from "../../../App/Store/jobsStore";

const textStyle = {
  position: "absolute",
  bottom: "39%",
  width: "100%",
  height: "auto",
  color: "white",
  textAlign: "center",
};

export const Sectors = () => {
  const [queryX, setQuery] = React.useState<IQueryRequest>();
  const jobsStore = useContext(JobStore);
  const { setSearchParams } = jobsStore;
 const styleP={paddingLeft: "60px", color: "#0079d1"}
  const handleClick = async (
    e: SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setQuery({
      ...queryX!,
      jobTitle: data.value,
    });

    if (queryX?.jobTitle === data.value) {
      console.log(queryX);

      await setSearchParams(queryX!);
    }
  };
  return (
    <Container>
      <br style={{ lineHeight: "10px" }} />

      <h1 style={{ textAlign: "center" }}>Choose your sector</h1>
      <h3 style={{ textAlign: "center" }}>
        Jobs across 42 sectors. See the latest roles now.
      </h3>
      <br />
      <Grid centered>
        <br />

        <Grid.Row>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  circular
                  src="/assets/technology.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                      <List.Item
                          as={Link}
                          value="technology"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Technology</h1>
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
                style={styleP}
                as={Link}
                value="Accountant"
                onClick={handleClick}
              >
                <p className="linkHover">
                Accountancy Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Admin"
                onClick={handleClick}
              >
                <p className="linkHover">
                Admin Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Banking"
                onClick={handleClick}
              >
                <p className="linkHover">
                Banking Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Construction"
                onClick={handleClick}
              >
               <p className="linkHover">
                Construction Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Customer Service"
                onClick={handleClick}
              >
                <p className="linkHover">
                Customer Service Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Education"
                onClick={handleClick}
              >
                <p className="linkHover">
                Education Jobs
                </p>
              </List.Item>
              <br />
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  circular
                  src="/assets/engineering.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                      <List.Item
                          as={Link}
                          value="Engineer"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Engineering</h1>
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
                style={styleP}
                as={Link}
                value="Engineer"
                onClick={handleClick}
              >
                <p className="linkHover">
                Engineering Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Financial"
                onClick={handleClick}
              >
                <p className="linkHover">
                Financial Service Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Insurance"
                onClick={handleClick}
              >
                <p className="linkHover">
                General Insurance Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="HR"
                onClick={handleClick}
              >
                <p className="linkHover">
                Human Resources Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="IT"
                onClick={handleClick}
              >
                <p className="linkHover">
                IT and Telecoms Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Contractor"
                onClick={handleClick}
              >
                <p className="linkHover">
                Contractor Jobs
                </p>
              </List.Item>
              <br />
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  circular
                  src="/assets/graduation.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                      <List.Item
                          as={Link}
                          value="Graduate"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Graduates</h1>
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
                style={styleP}
                as={Link}
                value="Legal"
                onClick={handleClick}
              >
                <p className="linkHover">
                Legal Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Manufactoring"
                onClick={handleClick}
              >
                <p className="linkHover">
                Manufactoring Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Digital"
                onClick={handleClick}
              >
                <p className="linkHover">
                Media, Digital and Creative Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Multilingual"
                onClick={handleClick}
              >
                <p className="linkHover">
                Multilingual Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Recruitment"
                onClick={handleClick}
              >
                <p className="linkHover">
                Recruitment Consultancy Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Motoring"
                onClick={handleClick}
              >
                <p className="linkHover">
                Motoring and Automative Jobs
                </p>
              </List.Item>
              <br />
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row centered as={NavLink} to="/registercv">
                <Image
                  circular
                  src="/assets/health.png"
                  style={{ filter: "brightness(80%)" }}
                />
                <Item className="overlay" />
                <Segment basic style={textStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                      <List.Item
                          as={Link}
                          value="Health"
                          onClick={handleClick}
                        >
                          <h1 style={{ color: "white" }}> Health</h1>
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
                style={styleP}
                as={Link}
                value="Sales"
                onClick={handleClick}
              >
                <p className="linkHover">
                Sales Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Social Care"
                onClick={handleClick}
              >
                <p className="linkHover">
                Social Care Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="NHS"
                onClick={handleClick}
              >
                <p className="linkHover">
                National Health Care Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Transport"
                onClick={handleClick}
              >
                <p className="linkHover">
                Transport and Logisitics Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Security"
                onClick={handleClick}
              >
                <p className="linkHover">
                Security and Consultancy Jobs
                </p>
              </List.Item>
              <br />
              <List.Item
                style={styleP}
                as={Link}
                value="Scientific"
                onClick={handleClick}
              >
                <p className="linkHover">
                Scientific Jobs
                </p>
              </List.Item>
              <br />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
    </Container>
  );
};
