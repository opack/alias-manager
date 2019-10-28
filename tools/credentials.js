const credentials = require('./app-keys');

const ovh = require('ovh')(credentials);

ovh.request('POST', '/auth/credential', {
    'accessRules': [
        { 'method': 'GET', 'path': '/email/domain/*' },
        { 'method': 'POST', 'path': '/email/domain/*' },
        { 'method': 'PUT', 'path': '/email/domain/*' },
        { 'method': 'DELETE', 'path': '/email/domain/*' }
    ]
}, function (error, credential) {
    console.log(error || credential);
});