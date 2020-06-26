import React, { useContext, SyntheticEvent } from "react";
import {
  Header,
  Segment,
  SegmentGroup,
  Checkbox,
  Container,
  Button,
  Form,
} from "semantic-ui-react";
import { salaryOptions, timeAdded } from "../../../App/Util/FilterOptions";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Form as FinalForm } from "react-final-form";
import { IQueryRequest } from "../../../App/Models/Models";
import { JobStore } from "../../../App/Store/jobsStore";

const Filters = () => {
  const jobsStore = useContext(JobStore);
  const { combineQuery } = jobsStore;
  const onSubmit = async () => {
    await combineQuery(queryX!);
  };
  const returnValue = (text: string) => {
    let result;
    for (var i = 0; i < salaryOptions.length; i++) {
      if (salaryOptions[i].text === text) {
        result = salaryOptions[i].value;
      }
    }
    return result;
  };
  const returnDateValue = (text: string) => {
    let result;
    for (var i = 0; i < timeAdded.length; i++) {
      if (timeAdded[i].text === text) {
        result = timeAdded[i].value;
      }
    }
    const data = result;
    return new Date(Date.parse(data!));
  };

  const [queryX, setQuery] = React.useState<IQueryRequest>();

  return (
    <Container>
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Form onClick={handleSubmit}>
            <Form.Group>
              <SegmentGroup>
                <Segment>
                  <Header content="Filter your search" size="medium" />
                </Segment>

                <Segment>
                  <label>From :</label>
                  <Form.Field>
                    <Form.Select
                      onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                        setQuery({
                          ...queryX!,
                          minimumSalary: returnValue(e.currentTarget.innerText),
                        })
                      }
                      placeholder="£Any"
                      fluid
                      selection
                      options={salaryOptions}
                      value={queryX?.minimumSalary}
                    ></Form.Select>
                  </Form.Field>

                  <label>To :</label>
                  <br />
                  <Form.Field>
                    <Form.Select
                      onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                        setQuery({
                          ...queryX!,
                          maximumSalary: returnValue(e.currentTarget.innerText),
                        })
                      }
                      placeholder="£Any"
                      fluid
                      selection
                      options={salaryOptions}
                      name="maximumSalary"
                      value={queryX?.maximumSalary}
                    ></Form.Select>
                  </Form.Field>
                </Segment>
                <Segment>
                  <Header content="Job Type :" size="tiny" />
                  <Form.Field>
                    <Form.Group>
                      <Form.Field>
                        <Form.Radio
                          label="Permanent"
                          value="permanent"
                          checked={queryX?.contract === "permanent"}
                          onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                            setQuery({
                              ...queryX!,
                              contract: e.currentTarget.innerText.toLowerCase(),
                            })
                          }
                        />
                        <Form.Radio
                          label="Temporary"
                          value="temporary"
                          checked={queryX?.contract === "temporary"}
                          onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                            setQuery({
                              ...queryX!,
                              contract: e.currentTarget.innerText.toLowerCase(),
                            })
                          }
                        />
                        <Form.Radio
                          label="Contract"
                          value="contract"
                          checked={queryX?.contract === "contract"}
                          onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                            setQuery({
                              ...queryX!,
                              contract: e.currentTarget.innerText.toLowerCase(),
                            })
                          }
                        />
                      </Form.Field>
                    </Form.Group>
                    <Form.Group>
                      <Form.Field>
                        <Form.Radio
                          onChange={(
                            e: SyntheticEvent<HTMLElement, Event>,
                            data: any
                          ) =>
                            setQuery({
                              ...queryX!,
                              fullTime: data.checked,
                            })
                          }
                          label="Full-time"
                          checked={queryX?.fullTime === true}
                          name="fullTime"
                        />{" "}
                      </Form.Field>
                    </Form.Group>
                    <Form.Group>
                      <Form.Field>
                        <Form.Radio
                          onChange={(
                            e: SyntheticEvent<HTMLElement, Event>,
                            data: any
                          ) =>
                            setQuery({
                              ...queryX!,
                              fullTime: data.checked,
                            })
                          }
                          label="Part-time"
                          checked={queryX?.partTime === true}
                          name="partTime"
                        />{" "}
                      </Form.Field>
                    </Form.Group>
                  </Form.Field>
                </Segment>
                <Segment>
                  <Form.Field>
                    <Header content="Date posted :" size="tiny" />
                    <Form.Select
                      onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                        setQuery({
                          ...queryX!,
                          date: returnDateValue(e.currentTarget.innerText),
                        })
                      }
                      placeholder="Anytime"
                      fluid
                      selection
                      options={timeAdded}
                      name="minimumSalary"
                    ></Form.Select>
                  </Form.Field>
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
                  <Checkbox
                    style={{ marginBottom: "9px" }}
                    label="Agency(26.431)"
                  />
                  <Checkbox
                    style={{ marginBottom: "9px" }}
                    label="Employer(15.321)"
                  />
                  <Checkbox
                    style={{ marginBottom: "9px" }}
                    label="Reed(54.123)"
                  />
                </Segment>
                <Segment>
                  <Header content="More options :" size="tiny" />
                  <Checkbox
                    style={{ marginBottom: "9px" }}
                    label="Suitable for graduates"
                  />
                </Segment>
              </SegmentGroup>

              <Button>Search</Button>
            </Form.Group>
          </Form>
        )}
      >
        {" "}
      </FinalForm>
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
export default observer(Filters);
