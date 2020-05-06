import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import {SearchBar} from './Features/SearchBar'
import { JobDetails } from './Features/JobDetails'
export const DetailedView = () => {
    return (
        <Segment>
      <SearchBar />
      <Divider section />
      <JobDetails/>
    </Segment>
    )
}
