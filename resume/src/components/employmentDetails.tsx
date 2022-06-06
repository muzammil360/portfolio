import * as React from 'react';

import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
// import { Box } from '@mui/material';

interface EmploymentDetailsProps {

}

interface EmploymentDetailsState {

}

class EmploymentDetails extends React.Component<EmploymentDetailsProps, EmploymentDetailsState> {
  state = {
    value: "one",
    employments: [
      {
        label: "Team Lead",
        details: [
          "line1",
          "line2"
        ]
      },
      {
        label: "Senior Software Engineer",
        details: [
          "line1",
          "line2"
        ]
      },
      {
        label: "Machine Learning Engineer",
        details: [
          "line1",
          "line2"
        ]
      }            
    ]
  };


  handleChange = (event: React.SyntheticEvent, newValue: string) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value, employments } = this.state;

    return (
      <Tabs
        value={value}
        onChange={this.handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label={employments[0].label} />
        <Tab value="two" label={employments[1].label} />
        <Tab value="three" label={employments[2].label} />
      </Tabs>
    );
  }
}

export default EmploymentDetails;