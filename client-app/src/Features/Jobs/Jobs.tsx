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
    <Segment
      style={{
        margin: "0px",
        paddingRight: "0px",
        paddingLeft: "0px",
        borderLeftWidth: "0px",
        borderRightWidth: "0px",
      }}
    >
      <SearchBar />

      <TrendingJob />
      <DisplayJobsCard />

      <Courses />
      <Sectors />
      <Locations />
    </Segment>
  );
};
