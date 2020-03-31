import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';

const Router = (props) => {

  return (
    <Switch>
      <Route exact path="/auth" component={Signin} />
      <Route path="/auth/signin" component={Signin} />
      <Route path="/auth/signup" component={Signup} />
    </Switch>
  )
}

Router.propTypes = {
  classes: PropTypes.object,
}

export default Router