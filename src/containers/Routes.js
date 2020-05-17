//  Lib imports
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

//  Project imports
import Authentication from './modules/auth';
import Home from './modules/home';
import Chat from './modules/chat';

const Routes = (props) => {

    return (
        <Switch>
            <Route path="/auth" component={Authentication} />
            <Route path="/chat" component={Chat} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
}

//const mapStateToProps = ({ auth }) => auth;

export default withRouter(connect(null, null)(Routes));
