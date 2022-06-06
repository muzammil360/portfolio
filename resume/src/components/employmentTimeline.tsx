import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


interface EmploymentTimelineProps {

}

interface EmploymentTimelineState {

}

class EmploymentTimeline extends React.Component<EmploymentTimelineProps, EmploymentTimelineState> {
  // state = { :  }

  getItemJsx(left: string, right: string, enableConnector:boolean =true) {

    const output = (<TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {left}
    </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {enableConnector? <TimelineConnector />: ""}
      </TimelineSeparator>
    <TimelineContent>{right}</TimelineContent>
    </TimelineItem>);

    return output;

  }

  render() {
    return (<React.Fragment>
      <Timeline>
        {this.getItemJsx("Oct 2020","Team Lead – Veeve")}
        {this.getItemJsx("Dec 2019","Senior Software Engineer – Veeve")}
        {this.getItemJsx("June 2019","Machine Learning Engineer – VisionX")}
        {this.getItemJsx("Aug 2017","Graduate Research Assistant – WPI")}
        {this.getItemJsx("Aug 2015","Software Engineer – Burqstream",false)}
      </Timeline>
    </React.Fragment>);
  }
}

export default EmploymentTimeline;