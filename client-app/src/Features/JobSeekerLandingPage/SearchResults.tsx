import React from "react";
import { SearchBar } from "./Features/SearchBar";
import { Segment, Divider } from "semantic-ui-react";
import { FiltersAndCards } from "./Features/FiltersAndCards";
export const SearchResults = () => {
  return (
    <Segment>
      <SearchBar />
      <Divider section />
      <FiltersAndCards />
    </Segment>
  );
};
