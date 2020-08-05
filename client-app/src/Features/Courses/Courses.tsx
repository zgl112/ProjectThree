import React, { useContext, useEffect, Key, useState } from "react";
import { Container, Button } from "semantic-ui-react";
import { UnderConstruction } from "../../App/Layout/UnderConstruction";
import { JobStore } from "../../App/Store/jobsStore";

export const Courses = () => {
  const jobsStore = useContext(JobStore);
  const { createIndex, indexButton } = jobsStore;

  function useKey(key: Key) {
    const [pressed, setPressed] = useState(false);

    const match = (e: KeyboardEvent) => key == e.key.toLowerCase();

    const onDown = (e: KeyboardEvent) => {
      if (match(e)) setPressed(true);
    };

    const onUp = (e: KeyboardEvent) => {
      if (match(e)) setPressed(false);
    };

    useEffect(() => {
      window.addEventListener("keydown", onDown);
      window.addEventListener("keyup", onUp);
      return () => {
        window.removeEventListener("keydown", onDown);
        window.removeEventListener("keyup", onUp);
      };
    }, [key]);

    return pressed;
  }
  const and = (a: boolean, b: boolean) => {
    return a && b;
  };
  const key = and(useKey("shift"), useKey("z"));
  return (
    <Container>
      <UnderConstruction />
      <Container>
        {key && (
          <Button
            primary
            fluid
            onClick={() => createIndex()}
            loading={indexButton}
          >
            Import Jobs
          </Button>
        )}
      </Container>
    </Container>
  );
};
