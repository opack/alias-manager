import React, { Fragment } from "react";
import Home from "../home/home.container";
import { useDispatch, useSelector } from "react-redux";
import { setConsumerKey } from "../../reducers/ovh-credentials.reducer";
import OvhCredentials from "../ovh-credentials/ovh-credentials.container";
import OvhApiClientService from "../../services/ovh-api-client.service";
import { GlobalStore } from "../../reducers/store";

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
            <Home />
            <OvhCredentials />
        </Fragment>
    );
};

export default App;