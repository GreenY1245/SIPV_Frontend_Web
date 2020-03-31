import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

  root: {
    width: '100vw',
    height: '100vh',
  },
});


const Home = (props) => {

  return (
    <>
      <p>TESTING HOME</p>
    </>
  )
}

Home.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Home)