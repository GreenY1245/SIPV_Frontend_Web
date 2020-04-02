import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

  root: {
  },
});


const Signup = (props) => {

  return (
    <>
      <p>SIGNUP COMPONENT</p>
    </>
  )
}

Signup.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Signup);