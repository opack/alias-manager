import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { requestCredentials, OvhCredentialsRequestData } from '../../services/ovh-credentials.service';
import { setConsumerKey } from '../../reducers/ovh-credentials.reducer';

const OvhCredentials = () => {
    const [ validationUrl, setValidationUrl ] = useState<string>('');
    const dispatch = useDispatch();

    const onRequestCredentials = () => {    
        requestCredentials().then(({ validationUrl, consumerKey }: OvhCredentialsRequestData) => {
            // Put consumerKey in local storage to find it when the user gets back
            localStorage.setItem('consumerKey', consumerKey);

            // Update the validation link
            setValidationUrl(validationUrl);

            // Update the store directly, in case the user opens the link in a new tab
            dispatch(setConsumerKey(consumerKey));
        });
    }

    const validationLink = validationUrl && <a href={validationUrl}>Click here to validate the received token</a>;

    return (
        <Fragment>
            {validationLink}
            <button onClick={onRequestCredentials}>Request new credentials</button>
        </Fragment>
    );
};

export default OvhCredentials;