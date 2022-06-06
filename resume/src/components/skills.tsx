import * as React from 'react';

import Heading from './heading';


interface SkillsProps {

}

interface SkillsState {

}

class Skills extends React.Component<SkillsProps, SkillsState> {
  // state = { :  }
  render() {
    return (
    <React.Fragment>
      <Heading data="Skills"></Heading>
      
    </React.Fragment>
    );
  }
}

export default Skills;