import React from "react";
import { Grid, GridColumn, Header, Container } from "semantic-ui-react";
import Filters from "./Filters";
import Cards from "./Cards";
import { IListSearchResult } from "../../../App/Models/Models";
import { observer } from "mobx-react-lite";

const FiltersAndCards: React.FC<{
  jobs?: IListSearchResult;
}> = ({ jobs }) => {
  return (
    <Container>
      <Header size="large">{`${jobs?.count} Jobs & Vacancies`}</Header>
      <Grid>
        <GridColumn width={4}>
          <Filters />
        </GridColumn>
        <GridColumn width={12}>
          <Cards jobs={jobs!} />
        </GridColumn>
      </Grid>
    </Container>
  );
};
export default observer(FiltersAndCards);
