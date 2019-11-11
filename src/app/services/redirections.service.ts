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

/**
 * 
 * @param from 
 * @param to 
 * @returns The promise resolves to an array of strings that are the IDs of the created redirections
 */
const createRedirection = (from: string, to: string): Promise<Array<string>> => {
    return ovh.requestPromised('POST', '/email/domain/valdera.fr/redirection',
    {
        from,
        to,
        localCopy: false
    })
    .then((result: any) => {
        return ovh.requestPromised('GET', '/email/domain/valdera.fr/redirection',
        {
            from
        });
    });
};

const deleteRedirection = (id: string): Promise<Array<any>> => {
    return ovh.requestPromised('DELETE', `/email/domain/valdera.fr/redirection/${id}`);
};

export { fetchRedirections, createRedirection, deleteRedirection };