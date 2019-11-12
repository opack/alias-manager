import OvhCredentialsData from './@data-types/ovh-credentials-data';

class OvhApiClientService {
    private client: any = undefined; // Ovh class is not exported in ovh.es6.js...
    public domain: string = 'valdera.fr';

    setCredentials(credentials: OvhCredentialsData) {
        console.log('OvhApiClientService.setCredentials: Using new credentials', credentials);
        // We need to pass a new plain object because Ovh adds new properties to the passed object.
        // Thus, we must pass it an extensible object, and an instance of OvhCredentialsData is not extensible.
        // This is why we create a new object containing all the properties of OvhCredentialsData. Lame...
        this.client = require('ovh')({...credentials});
    }

    setDomain(domain: string) {
        this.domain = domain;
    }

    request(method: string, url: string, params: {} = {}): Promise<any> {
        if (this.client === undefined) {
            return Promise.reject('OVH Client was not set properly. Make sure to call setCredentials() before trying to request().');
        }
        return this.client.requestPromised(method, url, params)
    }
}

export default new OvhApiClientService();