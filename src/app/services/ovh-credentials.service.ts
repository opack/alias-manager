import credentials from './app-keys';
const ovh = require('ovh')(credentials);

const requestCredentials = () => {
    ovh.request(
        'POST',
        '/auth/credential',
        {
            'accessRules': [
                { 'method': 'GET', 'path': '/email/domain/*' },
                { 'method': 'POST', 'path': '/email/domain/*' },
                { 'method': 'PUT', 'path': '/email/domain/*' },
                { 'method': 'DELETE', 'path': '/email/domain/*' }
            ]
        },
        (error: any, credential: any) => {
            console.log(error || credential);
        }
    );
};

const logout = () => {
    ovh.request(
        'POST',
        '/auth/logout',
        {},
        (error: any, result: any) => {
            console.log(error || result);
        }
    );
};

export {requestCredentials, logout};