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
  Modal,
  Divider,
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
            content="Detailed view"
          ></Button>
          <Modal
            trigger={
              <Button
                floated="right"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  padding: "7px",
                }}
              >
                Quick view
              </Button>
            }
          >
            <Modal.Header>
              Company placeholder
              <Image
                wrapped
                floated="right"
                size="tiny"
                src="./assets/placeholder.png"
                style={{ marginTop: "-6px" }}
              />
            </Modal.Header>

            <Modal.Content scrolling>
              <Header>Job Title placeholder</Header>
              <Modal.Description>
                <Grid>
                  <GridRow>
                    <GridColumn width="3">
                      <GridRow>
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="pound sign" />
                          </Icon.Group>
                          Salary ph
                        </Header>
                      </GridRow>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="location arrow" />
                        </Icon.Group>
                        Location ph
                      </Header>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="clock outline" />
                        </Icon.Group>
                        Job type ph
                      </Header>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Modal.Description>
              <br />
              <Modal.Description>
                <p>
                  PA to Head of Strategy Permanent role Birmingham £25,000 -
                  £30,000 + benefits Our client, an established organisation
                  based in Coventry, is looking to recruit a permanent PA to
                  work with the Head of Strategy. You will work across 2 sites,
                  but primarily at the Coventry office, with some travel just a
                  short distance away. Responsible for all generalist
                  secretarial support you will have worked in a senior PA role
                  previously and be conformable with the below duties whilst
                  working in a fast-paced challenging environment. Duties of the
                  PA to Head of Strategy will include: * Organising and
                  summarising papers and reports in preparation for meetings *
                  Providing diary management and meeting organisation, including
                  ordering of papers/reports in advance of meetings and
                  recording notes/actions for distribution * Following meetings
                  co-ordinating the communication of schedules, plans and
                  deadlines * Responsible for enquiries via email, calls and
                  visits; drafting responses and redirecting as appropriate to
                  ensure time is managed effectively * Co-ordinating full and
                  complex travel and itinerary arrangements as required *
                  Producing MI and processing invoices and expenses * Booking of
                  travel and accommodation * Co-ordinating and arranging events
                  as required Skills required of the PA to Head of Strategy will
                  include: * Experience as an efficient and comprehensive PA to
                  senior management * Ability to liaise with multiple
                  stakeholders and manage expectations, across various levels *
                  Strong communication skills * Ability to manage and prioritise
                  competing priorities * Able to work at pace and prioritise
                  workload effectively * Good knowledge of Microsoft Office and
                  appropriate programmes . Various versions have evolved over
                  the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. ish. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). Where
                  does it come from? Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section
                  1.10.32. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham. ish. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). Where does it come from? Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary as={NavLink} to="/registercv">
                Detailed view <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
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
            content="Detailed view"
          ></Button>
          <Modal
            trigger={
              <Button
                floated="right"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  padding: "7px",
                }}
              >
                Quick view
              </Button>
            }
          >
            <Modal.Header>
              Company placeholder
              <Image
                wrapped
                floated="right"
                size="tiny"
                src="./assets/placeholder.png"
                style={{ marginTop: "-6px" }}
              />
            </Modal.Header>

            <Modal.Content scrolling>
              <Header>Job Title placeholder</Header>
              <Modal.Description>
                <Grid>
                  <GridRow>
                    <GridColumn width="3">
                      <GridRow>
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="pound sign" />
                          </Icon.Group>
                          Salary ph
                        </Header>
                      </GridRow>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="location arrow" />
                        </Icon.Group>
                        Location ph
                      </Header>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="clock outline" />
                        </Icon.Group>
                        Job type ph
                      </Header>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Modal.Description>
              <br />
              <Modal.Description>
                <p>
                  PA to Head of Strategy Permanent role Birmingham £25,000 -
                  £30,000 + benefits Our client, an established organisation
                  based in Coventry, is looking to recruit a permanent PA to
                  work with the Head of Strategy. You will work across 2 sites,
                  but primarily at the Coventry office, with some travel just a
                  short distance away. Responsible for all generalist
                  secretarial support you will have worked in a senior PA role
                  previously and be conformable with the below duties whilst
                  working in a fast-paced challenging environment. Duties of the
                  PA to Head of Strategy will include: * Organising and
                  summarising papers and reports in preparation for meetings *
                  Providing diary management and meeting organisation, including
                  ordering of papers/reports in advance of meetings and
                  recording notes/actions for distribution * Following meetings
                  co-ordinating the communication of schedules, plans and
                  deadlines * Responsible for enquiries via email, calls and
                  visits; drafting responses and redirecting as appropriate to
                  ensure time is managed effectively * Co-ordinating full and
                  complex travel and itinerary arrangements as required *
                  Producing MI and processing invoices and expenses * Booking of
                  travel and accommodation * Co-ordinating and arranging events
                  as required Skills required of the PA to Head of Strategy will
                  include: * Experience as an efficient and comprehensive PA to
                  senior management * Ability to liaise with multiple
                  stakeholders and manage expectations, across various levels *
                  Strong communication skills * Ability to manage and prioritise
                  competing priorities * Able to work at pace and prioritise
                  workload effectively * Good knowledge of Microsoft Office and
                  appropriate programmes . Various versions have evolved over
                  the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. ish. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). Where
                  does it come from? Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section
                  1.10.32. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham. ish. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). Where does it come from? Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary as={NavLink} to="/registercv">
                Detailed view <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
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
            content="Detailed view"
          ></Button>
          <Modal
            trigger={
              <Button
                floated="right"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  padding: "7px",
                }}
              >
                Quick view
              </Button>
            }
          >
            <Modal.Header>
              Company placeholder
              <Image
                wrapped
                floated="right"
                size="tiny"
                src="./assets/placeholder.png"
                style={{ marginTop: "-6px" }}
              />
            </Modal.Header>

            <Modal.Content scrolling>
              <Header>Job Title placeholder</Header>
              <Modal.Description>
                <Grid>
                  <GridRow>
                    <GridColumn width="3">
                      <GridRow>
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="pound sign" />
                          </Icon.Group>
                          Salary ph
                        </Header>
                      </GridRow>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="location arrow" />
                        </Icon.Group>
                        Location ph
                      </Header>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="clock outline" />
                        </Icon.Group>
                        Job type ph
                      </Header>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Modal.Description>
              <br />
              <Modal.Description>
                <p>
                  PA to Head of Strategy Permanent role Birmingham £25,000 -
                  £30,000 + benefits Our client, an established organisation
                  based in Coventry, is looking to recruit a permanent PA to
                  work with the Head of Strategy. You will work across 2 sites,
                  but primarily at the Coventry office, with some travel just a
                  short distance away. Responsible for all generalist
                  secretarial support you will have worked in a senior PA role
                  previously and be conformable with the below duties whilst
                  working in a fast-paced challenging environment. Duties of the
                  PA to Head of Strategy will include: * Organising and
                  summarising papers and reports in preparation for meetings *
                  Providing diary management and meeting organisation, including
                  ordering of papers/reports in advance of meetings and
                  recording notes/actions for distribution * Following meetings
                  co-ordinating the communication of schedules, plans and
                  deadlines * Responsible for enquiries via email, calls and
                  visits; drafting responses and redirecting as appropriate to
                  ensure time is managed effectively * Co-ordinating full and
                  complex travel and itinerary arrangements as required *
                  Producing MI and processing invoices and expenses * Booking of
                  travel and accommodation * Co-ordinating and arranging events
                  as required Skills required of the PA to Head of Strategy will
                  include: * Experience as an efficient and comprehensive PA to
                  senior management * Ability to liaise with multiple
                  stakeholders and manage expectations, across various levels *
                  Strong communication skills * Ability to manage and prioritise
                  competing priorities * Able to work at pace and prioritise
                  workload effectively * Good knowledge of Microsoft Office and
                  appropriate programmes . Various versions have evolved over
                  the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. ish. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). Where
                  does it come from? Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section
                  1.10.32. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham. ish. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). Where does it come from? Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary as={NavLink} to="/registercv">
                Detailed view <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
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
            content="Detailed view"
          ></Button>
          <Modal
            trigger={
              <Button
                floated="right"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  padding: "7px",
                }}
              >
                Quick view
              </Button>
            }
          >
            <Modal.Header>
              Company placeholder
              <Image
                wrapped
                floated="right"
                size="tiny"
                src="./assets/placeholder.png"
                style={{ marginTop: "-6px" }}
              />
            </Modal.Header>

            <Modal.Content scrolling>
              <Header>Job Title placeholder</Header>
              <Modal.Description>
                <Grid>
                  <GridRow>
                    <GridColumn width="3">
                      <GridRow>
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="pound sign" />
                          </Icon.Group>
                          Salary ph
                        </Header>
                      </GridRow>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="location arrow" />
                        </Icon.Group>
                        Location ph
                      </Header>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="clock outline" />
                        </Icon.Group>
                        Job type ph
                      </Header>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Modal.Description>
              <br />
              <Modal.Description>
                <p>
                  PA to Head of Strategy Permanent role Birmingham £25,000 -
                  £30,000 + benefits Our client, an established organisation
                  based in Coventry, is looking to recruit a permanent PA to
                  work with the Head of Strategy. You will work across 2 sites,
                  but primarily at the Coventry office, with some travel just a
                  short distance away. Responsible for all generalist
                  secretarial support you will have worked in a senior PA role
                  previously and be conformable with the below duties whilst
                  working in a fast-paced challenging environment. Duties of the
                  PA to Head of Strategy will include: * Organising and
                  summarising papers and reports in preparation for meetings *
                  Providing diary management and meeting organisation, including
                  ordering of papers/reports in advance of meetings and
                  recording notes/actions for distribution * Following meetings
                  co-ordinating the communication of schedules, plans and
                  deadlines * Responsible for enquiries via email, calls and
                  visits; drafting responses and redirecting as appropriate to
                  ensure time is managed effectively * Co-ordinating full and
                  complex travel and itinerary arrangements as required *
                  Producing MI and processing invoices and expenses * Booking of
                  travel and accommodation * Co-ordinating and arranging events
                  as required Skills required of the PA to Head of Strategy will
                  include: * Experience as an efficient and comprehensive PA to
                  senior management * Ability to liaise with multiple
                  stakeholders and manage expectations, across various levels *
                  Strong communication skills * Ability to manage and prioritise
                  competing priorities * Able to work at pace and prioritise
                  workload effectively * Good knowledge of Microsoft Office and
                  appropriate programmes . Various versions have evolved over
                  the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. ish. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). Where
                  does it come from? Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section
                  1.10.32. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham. ish. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). Where does it come from? Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary as={NavLink} to="/registercv">
                Detailed view <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
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
            content="Detailed view"
          ></Button>
          <Modal
            trigger={
              <Button
                floated="right"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  padding: "7px",
                }}
              >
                Quick view
              </Button>
            }
          >
            <Modal.Header>
              Company placeholder
              <Image
                wrapped
                floated="right"
                size="tiny"
                src="./assets/placeholder.png"
                style={{ marginTop: "-6px" }}
              />
            </Modal.Header>

            <Modal.Content scrolling>
              <Header>Job Title placeholder</Header>
              <Modal.Description>
                <Grid>
                  <GridRow>
                    <GridColumn width="3">
                      <GridRow>
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="pound sign" />
                          </Icon.Group>
                          Salary ph
                        </Header>
                      </GridRow>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="location arrow" />
                        </Icon.Group>
                        Location ph
                      </Header>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="clock outline" />
                        </Icon.Group>
                        Job type ph
                      </Header>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Modal.Description>
              <br />
              <Modal.Description>
                <p>
                  PA to Head of Strategy Permanent role Birmingham £25,000 -
                  £30,000 + benefits Our client, an established organisation
                  based in Coventry, is looking to recruit a permanent PA to
                  work with the Head of Strategy. You will work across 2 sites,
                  but primarily at the Coventry office, with some travel just a
                  short distance away. Responsible for all generalist
                  secretarial support you will have worked in a senior PA role
                  previously and be conformable with the below duties whilst
                  working in a fast-paced challenging environment. Duties of the
                  PA to Head of Strategy will include: * Organising and
                  summarising papers and reports in preparation for meetings *
                  Providing diary management and meeting organisation, including
                  ordering of papers/reports in advance of meetings and
                  recording notes/actions for distribution * Following meetings
                  co-ordinating the communication of schedules, plans and
                  deadlines * Responsible for enquiries via email, calls and
                  visits; drafting responses and redirecting as appropriate to
                  ensure time is managed effectively * Co-ordinating full and
                  complex travel and itinerary arrangements as required *
                  Producing MI and processing invoices and expenses * Booking of
                  travel and accommodation * Co-ordinating and arranging events
                  as required Skills required of the PA to Head of Strategy will
                  include: * Experience as an efficient and comprehensive PA to
                  senior management * Ability to liaise with multiple
                  stakeholders and manage expectations, across various levels *
                  Strong communication skills * Ability to manage and prioritise
                  competing priorities * Able to work at pace and prioritise
                  workload effectively * Good knowledge of Microsoft Office and
                  appropriate programmes . Various versions have evolved over
                  the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. ish. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). Where
                  does it come from? Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section
                  1.10.32. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham. ish. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). Where does it come from? Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary as={NavLink} to="/registercv">
                Detailed view <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
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
            content="Detailed view"
          ></Button>
          <Modal
            trigger={
              <Button
                floated="right"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  padding: "7px",
                }}
              >
                Quick view
              </Button>
            }
          >
            <Modal.Header>
              Company placeholder
              <Image
                wrapped
                floated="right"
                size="tiny"
                src="./assets/placeholder.png"
                style={{ marginTop: "-6px" }}
              />
            </Modal.Header>

            <Modal.Content scrolling>
              <Header>Job Title placeholder</Header>
              <Modal.Description>
                <Grid>
                  <GridRow>
                    <GridColumn width="3">
                      <GridRow>
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="pound sign" />
                          </Icon.Group>
                          Salary ph
                        </Header>
                      </GridRow>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="location arrow" />
                        </Icon.Group>
                        Location ph
                      </Header>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="clock outline" />
                        </Icon.Group>
                        Job type ph
                      </Header>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Modal.Description>
              <br />
              <Modal.Description>
                <p>
                  PA to Head of Strategy Permanent role Birmingham £25,000 -
                  £30,000 + benefits Our client, an established organisation
                  based in Coventry, is looking to recruit a permanent PA to
                  work with the Head of Strategy. You will work across 2 sites,
                  but primarily at the Coventry office, with some travel just a
                  short distance away. Responsible for all generalist
                  secretarial support you will have worked in a senior PA role
                  previously and be conformable with the below duties whilst
                  working in a fast-paced challenging environment. Duties of the
                  PA to Head of Strategy will include: * Organising and
                  summarising papers and reports in preparation for meetings *
                  Providing diary management and meeting organisation, including
                  ordering of papers/reports in advance of meetings and
                  recording notes/actions for distribution * Following meetings
                  co-ordinating the communication of schedules, plans and
                  deadlines * Responsible for enquiries via email, calls and
                  visits; drafting responses and redirecting as appropriate to
                  ensure time is managed effectively * Co-ordinating full and
                  complex travel and itinerary arrangements as required *
                  Producing MI and processing invoices and expenses * Booking of
                  travel and accommodation * Co-ordinating and arranging events
                  as required Skills required of the PA to Head of Strategy will
                  include: * Experience as an efficient and comprehensive PA to
                  senior management * Ability to liaise with multiple
                  stakeholders and manage expectations, across various levels *
                  Strong communication skills * Ability to manage and prioritise
                  competing priorities * Able to work at pace and prioritise
                  workload effectively * Good knowledge of Microsoft Office and
                  appropriate programmes . Various versions have evolved over
                  the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. ish. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). Where
                  does it come from? Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section
                  1.10.32. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham. ish. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). Where does it come from? Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary as={NavLink} to="/registercv">
                Detailed view <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
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
            content="Detailed view"
          ></Button>
          <Modal
            trigger={
              <Button
                floated="right"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  padding: "7px",
                }}
              >
                Quick view
              </Button>
            }
          >
            <Modal.Header>
              Company placeholder
              <Image
                wrapped
                floated="right"
                size="tiny"
                src="./assets/placeholder.png"
                style={{ marginTop: "-6px" }}
              />
            </Modal.Header>

            <Modal.Content scrolling>
              <Header>Job Title placeholder</Header>
              <Modal.Description>
                <Grid>
                  <GridRow>
                    <GridColumn width="3">
                      <GridRow>
                        <Header as="h5">
                          <Icon.Group size="small">
                            <Icon name="pound sign" />
                          </Icon.Group>
                          Salary ph
                        </Header>
                      </GridRow>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="location arrow" />
                        </Icon.Group>
                        Location ph
                      </Header>
                    </GridColumn>
                    <GridColumn width="3">
                      <Header as="h5">
                        <Icon.Group size="small">
                          <Icon name="clock outline" />
                        </Icon.Group>
                        Job type ph
                      </Header>
                    </GridColumn>
                  </GridRow>
                </Grid>
              </Modal.Description>
              <br />
              <Modal.Description>
                <p>
                  PA to Head of Strategy Permanent role Birmingham £25,000 -
                  £30,000 + benefits Our client, an established organisation
                  based in Coventry, is looking to recruit a permanent PA to
                  work with the Head of Strategy. You will work across 2 sites,
                  but primarily at the Coventry office, with some travel just a
                  short distance away. Responsible for all generalist
                  secretarial support you will have worked in a senior PA role
                  previously and be conformable with the below duties whilst
                  working in a fast-paced challenging environment. Duties of the
                  PA to Head of Strategy will include: * Organising and
                  summarising papers and reports in preparation for meetings *
                  Providing diary management and meeting organisation, including
                  ordering of papers/reports in advance of meetings and
                  recording notes/actions for distribution * Following meetings
                  co-ordinating the communication of schedules, plans and
                  deadlines * Responsible for enquiries via email, calls and
                  visits; drafting responses and redirecting as appropriate to
                  ensure time is managed effectively * Co-ordinating full and
                  complex travel and itinerary arrangements as required *
                  Producing MI and processing invoices and expenses * Booking of
                  travel and accommodation * Co-ordinating and arranging events
                  as required Skills required of the PA to Head of Strategy will
                  include: * Experience as an efficient and comprehensive PA to
                  senior management * Ability to liaise with multiple
                  stakeholders and manage expectations, across various levels *
                  Strong communication skills * Ability to manage and prioritise
                  competing priorities * Able to work at pace and prioritise
                  workload effectively * Good knowledge of Microsoft Office and
                  appropriate programmes . Various versions have evolved over
                  the years, sometimes by accident, sometimes on purpose
                  (injected humour and the like). Where does it come from?
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. ish. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). Where
                  does it come from? Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from
                  sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                  Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section
                  1.10.32. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham. ish. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like). Where does it come from? Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested. Sections
                  1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                  Cicero are also reproduced in their exact original form,
                  accompanied by English versions from the 1914 translation by
                  H. Rackham.
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button primary as={NavLink} to="/registercv">
                Detailed view <Icon name="chevron right" />
              </Button>
            </Modal.Actions>
          </Modal>
        </Card.Content>
      </Card>
    </CardGroup>
  );
};
