import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import './index.css';
import store from './app/reducers/store';
//import { fetchAliases } from './app/reducers/aliases.reducer';
import requestCredentials from './app/services/ovh-credentials.service';

import {fetchAliases} from './app/services/redirections.service';
import AliasData from './app/services/@data-types/alias-data';
import { populateAliases } from './app/reducers/aliases.reducer';

const render = () => {
    const App = require('./app/components/app/app').default

    ReactDOM.render(
        <Provider store={store}>
            <App />
            <button onClick={requestCredentials}>Request credentials</button>
        </Provider>,
        document.getElementById('root')
    )
}

render();

// DBG Fetch alias list
fetchAliases().then((fetchedAliases: Array<AliasData>) => {
    store.dispatch(populateAliases(fetchedAliases));
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app/components/app/app', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
