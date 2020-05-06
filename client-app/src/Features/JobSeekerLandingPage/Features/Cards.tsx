import React from "react";
import {
  Card,
  Icon,
  Container,
  Image,
  CardGroup,
  GridRow,
  Grid,
  GridColumn,
  Header,
  Button,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const Cards = () => {
  return (
    <CardGroup>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Grid>
            <GridRow>
              <GridColumn width="2">
                <h6
                  style={{ font: "7", marginTop: "-10px", marginBottom: "4px" }}
                >
                  <b> Promoted</b>
                </h6>
              </GridColumn>
              <GridColumn width="2">
                <h6
                  style={{
                    color: "red",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b> Featured</b>
                </h6>
              </GridColumn>
              <GridColumn width="1">
                <h6
                  style={{
                    color: "green",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>New</b>
                </h6>
              </GridColumn>
              <GridColumn width="3">
                <h6
                  style={{
                    color: "blue",
                    font: "7",
                    marginTop: "-10px",
                    marginBottom: "4px",
                  }}
                >
                  <b>Easy Apply</b>
                </h6>
              </GridColumn>
            </GridRow>
          </Grid>
          <Image
            style={{ marginTop: "-20px" }}
            floated="right"
            size="small"
            src="./assets/placeholder.png"
          />

          <Card.Header as={NavLink} to="/registercv">
            Job Title Placeholder
          </Card.Header>
          <Card.Meta style={{ font: "6" }}>
            Posted /dateplaceholder/ by /Company ph/
          </Card.Meta>
          <Card.Description>
            <Grid>
              <GridRow>
                <GridColumn width="4">
                  <GridRow>
                    <Header as="h5">
                      <Icon.Group size="small">
                        <Icon name="pound sign" />
                      </Icon.Group>
                      Salary ph
                    </Header>
                  </GridRow>
                </GridColumn>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="location arrow" />
                    </Icon.Group>
                    Location ph
                  </Header>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width="4">
                  <Header as="h5">
                    <Icon.Group size="small">
                      <Icon name="clock outline" />
                    </Icon.Group>
                    Job type ph
                  </Header>
                </GridColumn>
              </GridRow>
            </Grid>
          </Card.Description>
          <br />
          <Card.Description style={{ width: "75%" }}>
            Qualified Accountant, accountancy practice, Southampton, to 40,000
            This is an exciting role for a business minded candidate with a good
            all round skill set who enjoys dealing with clients and the
            management of their affairs. You will be working for a growing...
          </Card.Description>
          <Button
            floated="right"
            as={NavLink}
            to="/registercv"
            style={{
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "7px",
            }}
            content="More details"
          ></Button>
        </Card.Content>
      </Card>
    </CardGroup>
  );
};
