import React from "react";
import { Segment, Divider } from "semantic-ui-react";
import { SearchBar } from "./Features/SearchBar";
import { TrendingJob } from "./Features/TrendingJob";
import { DisplayJobsCard } from "./Features/DisplayJobsCard";
import { Sectors } from "./Features/Sectors";
import { Locations } from "./Features/Locations";
import { Courses } from "./Features/Courses";

export const Jobs = () => {
  return (
    <Segment>
      <SearchBar />
      <Divider section />
      <TrendingJob />
      <DisplayJobsCard />
      <Divider section />
      <Courses />
      <Sectors />
      <Locations />
    </Segment>
  );
};
