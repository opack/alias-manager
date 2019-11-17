import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "../home/home.container";

import { setConsumerKey } from "../../reducers/ovh-credentials.reducer";
import { GlobalStore } from "../../reducers/store";

import OvhCredentials from "../ovh-credentials/ovh-credentials.container";
import OvhApiClientService from "../../services/ovh-api-client.service";
import SimpleRouterLink from "../../components/simple-route-link/simple-route-link.component";

const App: React.FC = () => {
    const { credentials } = useSelector((state: GlobalStore) => state.ovhCredentials);
    const dispatch = useDispatch();

    // Read consumerKey from local storage and update store
    const consumerKey = localStorage.getItem('consumerKey');

    // Update the store directly if we found a different consumerKey.
    // This could happen if the user opened the validation link in a new tab and comes back here,
    // or in a new instance of the application 
    if (consumerKey && consumerKey !== credentials.consumerKey) {
        dispatch(setConsumerKey(consumerKey));
        OvhApiClientService.setCredentials({...credentials, consumerKey});
    }

    return (
        <Fragment>
            <Router>
                <SimpleRouterLink activeOnlyWhenExact={true} to="/" label="Home"/>
                <SimpleRouterLink to="/aliases" label="Aliases"/>
                <SimpleRouterLink to="/ovh-credentials" label="OVH Credentials" />

                <hr />
                
                <Switch>

                    <Route path="/aliases">
                        <Home />
                    </Route>

                    <Route path="/ovh-credentials">
                        <OvhCredentials />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;