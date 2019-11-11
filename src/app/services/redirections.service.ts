import credentials from './app-keys';
import AliasData from './@data-types/alias-data';

const ovh = require('ovh')(credentials);

const fetchRedirections = (): Promise<Array<AliasData>> => {
    return ovh.requestPromised('GET', '/email/domain/valdera.fr/redirection')
    .then((redirectionIds: Array<string>) => {
        const aliasPromises: Array<Promise<AliasData>> = [];
        redirectionIds.forEach(id => {
            const promise = ovh.requestPromised('GET', `/email/domain/valdera.fr/redirection/${id}`)
            aliasPromises.push(promise);
        });
        return Promise.all(aliasPromises);
    })
};

const createRedirection = (from: string, to: string): Promise<Array<AliasData>> => {
    return ovh.requestPromised('POST', '/email/domain/valdera.fr/redirection',
    {
        domain: 'valdera.fr',
        from,
        to
    })
};

export { fetchRedirections, createRedirection };