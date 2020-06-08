import React from "react";
import { SearchBar } from "./Features/SearchBar";
import { Segment, Divider } from "semantic-ui-react";
import { FiltersAndCards } from "./Features/FiltersAndCards";
import { withRouter } from "react-router-dom";
const SearchResults = () => {
  return (
    <Segment>
      <SearchBar />
      <Divider section />
      <FiltersAndCards />
    </Segment>
  );
};
export default SearchResults;
