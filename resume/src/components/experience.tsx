import * as React from 'react';

import Heading from "./heading";
import EmploymentTimeline from "./employmentTimeline"
import EmploymentDetails from "./employmentDetails"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

interface ExperienceProps {

}

interface ExperienceState {

}

class Experience extends React.Component<ExperienceProps, ExperienceState> {
  // state = { :  }
  render() {
    return (
    <React.Fragment>
      <Heading data="Professional experience"></Heading>
      <Box >
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Grid item >
            <EmploymentTimeline></EmploymentTimeline>
        </Grid>
        <Grid item>
          {/* <Paper>Lovely</Paper> */}
          <EmploymentDetails></EmploymentDetails>
        </Grid>
      </Grid>
    </Box>

    </React.Fragment>
    );
  }
}

export default Experience;