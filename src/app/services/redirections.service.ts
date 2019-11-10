import credentials from './app-keys';
import AliasData from './@data-types/alias-data';

const ovh = require('ovh')(credentials);

const fetchAliases = (): Promise<Array<AliasData>> => {
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

export {fetchAliases};