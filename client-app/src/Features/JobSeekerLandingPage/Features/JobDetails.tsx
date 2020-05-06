
import React from 'react'
import {Grid, Header, Container, GridColumn} from 'semantic-ui-react'
import {JobCard} from './JobCard'
import { SimilarJobs } from './SimilarJobs'
export const JobDetails = () => {
    return (
    <Container >
<Grid>
  <GridColumn width={12}>
<JobCard/>
  </GridColumn>
  <GridColumn width={4}>
 <SimilarJobs/>
  </GridColumn>
</Grid>
</Container>
)
}
