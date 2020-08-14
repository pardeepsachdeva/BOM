import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import  HomePage  from '../HomePage/HomePage';
import  LoginPage  from '../LoginPage/LoginPage';
import  RegisterPage  from '../RegisterPage/RegisterPage';
<<<<<<< HEAD
import  AddPart  from '../AddPart/AddPart';
=======
import { AddPart } from '../AddPart/AddPart';
>>>>>>> afterbuild2
import { AddProject } from '../Add-Project';
import { AllProjects } from '../All-Projects'
import { AllParts } from '../All-Parts';
import  {ProjectDetails}  from '../ProjectDetails/ProjectDetails'

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
        
    }

    render() {
        const { alert } = this.props;
        return (
                    <div >
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        
                        <Router history={history}>
                            <Switch>
                            <PrivateRoute  component={withRouter(HomePage)} path="/" exact   />

                                <Route path="/login" component={withRouter(LoginPage)} />
                                <Route path="/register" component={withRouter(RegisterPage)} />
                                <PrivateRoute path="/add-project" component={AddProject} />
                                <PrivateRoute path="/projects/:projectId" component={ProjectDetails} />

                                        <PrivateRoute path="/projects" component={AllProjects} />

                                <PrivateRoute path="/all-parts" component={AllParts} />
                                <PrivateRoute path="/add-part" component={AddPart} />
                                <Redirect from="*" to="/home" />
                            </Switch>
                        </Router>
                    </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };