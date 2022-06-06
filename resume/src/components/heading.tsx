import * as React from 'react';
import { FunctionComponent } from 'react';
import { Divider } from '@mui/material'
import { Chip } from '@mui/material';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface HeadingProps {
  data: string
}

const Heading: FunctionComponent<HeadingProps> = (HeadingProps) => {
  return (
    <React.Fragment>
      <Divider variant="fullWidth" component="li" >
        <Chip label={HeadingProps.data} />
      </Divider>
    </React.Fragment>
  )
}

export default Heading;