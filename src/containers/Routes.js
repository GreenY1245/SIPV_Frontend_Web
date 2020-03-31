//  Lib imports
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

//  Project imports


const Routes = (props) => {

    return (
        <Switch>
            <Route exact path="/signin" component={} />
            <Route exact path="/signup" component={} />
            <Route path="/" component={} />
        </Switch>
    );
}


const mapStateToProps = ({ auth }) => auth;

export default withRouter(connect(mapStateToProps, null))(Routes));
