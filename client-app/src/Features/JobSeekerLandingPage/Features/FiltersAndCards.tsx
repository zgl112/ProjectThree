import React from "react";
import { Grid, GridColumn, Header, Container } from "semantic-ui-react";
import { Filters } from "./Filters";
import Cards from "./Cards";

export const FiltersAndCards = () => {
  return (
    <Container>
      <Header content="Jobs Counter Placeholder" size="large" />
      <Grid>
        <GridColumn width={4}>
          <Filters />
        </GridColumn>
        <GridColumn width={12}>
          <Cards />
        </GridColumn>
      </Grid>
    </Container>
  );
};
