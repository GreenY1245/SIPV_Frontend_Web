import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

  root: {
  },
});


const Signin = (props) => {

  return (
    <>
      <p>SIGNIN COMPONENT</p>
    </>
  )
}

Signin.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Signin);