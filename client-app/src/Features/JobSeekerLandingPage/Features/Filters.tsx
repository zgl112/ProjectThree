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
import { IQueryRequest, ICounters } from "../../../App/Models/Models";
import { JobStore } from "../../../App/Store/jobsStore";
import { toJS } from "mobx";

const Filters: React.FC<{ counters: ICounters }> = ({ counters }) => {
  const jobsStore = useContext(JobStore);
  const { combineQuery } = jobsStore;
  const onSubmit = async () => {
    await combineQuery(queryX!);
    console.log(queryX);
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
  const [show, toggleShow] = React.useState(false);
  const setTrue = () => {
    toggleShow(true);
  };
  console.log(toJS(counters));
  return (
    <Container>
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <SegmentGroup>
              <Segment>
                <Header content="Filter your search" size="medium" />
              </Segment>

              {show && (
                <Segment>
                  <Button
                    fluid
                    style={{ backgroundColor: "#2185d0", color: "#fff" }}
                    animated="fade"
                  >
                    <Button.Content visible>Update</Button.Content>
                    <Button.Content hidden>Search</Button.Content>
                  </Button>
                </Segment>
              )}

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
                    onClick={setTrue}
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
                    onClick={setTrue}
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
                <Form.Group grouped>
                  <Checkbox
                    label={
                      counters === undefined
                        ? "Temporary"
                        : `Temporary (${counters.temporary})`
                    }
                    value="temporary"
                    onClick={setTrue}
                    onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                      setQuery({
                        ...queryX!,
                        contract: e.currentTarget.innerText
                          .toLowerCase()
                          .replace(` (${counters.temporary})`, ""),
                      })
                    }
                  />
                </Form.Group>
                <Form.Group grouped>
                  <Checkbox
                    label={
                      counters === undefined
                        ? "Permanent"
                        : `Permanent (${counters.permanent})`
                    }
                    value="permanent"
                    onClick={setTrue}
                    onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                      setQuery({
                        ...queryX!,
                        contract: e.currentTarget.innerText
                          .toLowerCase()
                          .replace(` (${counters.permanent})`, ""),
                      })
                    }
                  />
                </Form.Group>
                <Form.Group grouped>
                  <Checkbox
                    label={
                      counters === undefined
                        ? "Contract"
                        : `Contract (${counters.contract})`
                    }
                    value="contract"
                    onClick={setTrue}
                    onChange={(e: SyntheticEvent<HTMLElement, Event>) =>
                      setQuery({
                        ...queryX!,
                        contract: e.currentTarget.innerText
                          .toLowerCase()
                          .replace(` (${counters.contract})`, ""),
                      })
                    }
                  />
                </Form.Group>
                <Form.Group grouped>
                  <Checkbox
                    onChange={(
                      e: SyntheticEvent<HTMLElement, Event>,
                      data: any
                    ) =>
                      setQuery({
                        ...queryX!,
                        fullTime: data.checked,
                      })
                    }
                    label={
                      counters === undefined
                        ? "Full-time"
                        : `Full-time (${counters.fullTime})`
                    }
                    onClick={setTrue}
                    value={"true"}
                    checked={queryX?.fullTime === true}
                  />{" "}
                </Form.Group>
                <Form.Group grouped>
                  <Checkbox
                    onChange={(
                      e: SyntheticEvent<HTMLElement, Event>,
                      data: any
                    ) =>
                      setQuery({
                        ...queryX!,
                        partTime: data.checked,
                      })
                    }
                    label={
                      counters === undefined
                        ? "Part-time"
                        : `Part-time (${counters.partTime})`
                    }
                    onClick={setTrue}
                    value={"true"}
                    checked={queryX?.partTime === true}
                  />{" "}
                </Form.Group>
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
                    onClick={setTrue}
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
