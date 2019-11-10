import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './index.css';
import requestCredentials from './app/services/ovh-credentials.service';

const render = () => {
    const App = require('./app/components/app/app').default

    ReactDOM.render(
        <Fragment>
            <App />
            <button onClick={requestCredentials}>Request credentials</button>
        </Fragment>,
        document.getElementById('root')
    )
}

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app/components/app/app', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
