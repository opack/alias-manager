import OvhApiClientService from './ovh-api-client.service';

export interface OvhCredentialsRequestData {
    consumerKey: string;
    validationUrl: string;
    state: string;
}

const requestCredentials = (): Promise<OvhCredentialsRequestData> => {
    return OvhApiClientService.request('POST', '/auth/credential',
    {
        'accessRules': [
            { 'method': 'GET', 'path': '/email/domain/*' },
            { 'method': 'POST', 'path': '/email/domain/*' },
            { 'method': 'PUT', 'path': '/email/domain/*' },
            { 'method': 'DELETE', 'path': '/email/domain/*' }
        ],
        'redirection': 'http://localhost:3000'
    });
};

export { requestCredentials };