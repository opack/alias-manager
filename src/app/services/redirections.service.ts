import AliasData from './@data-types/alias-data';
import OvhApiClientService from './ovh-api-client.service';

const fetchRedirections = (): Promise<Array<AliasData>> => {
    return OvhApiClientService.request('GET', `/email/domain/${OvhApiClientService.domain}/redirection`)
    .then((redirectionIds: Array<string>) => {
        const aliasPromises: Array<Promise<AliasData>> = [];
        redirectionIds.forEach(id => {
            const promise = OvhApiClientService.request('GET', `/email/domain/${OvhApiClientService.domain}/redirection/${id}`)
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
    return OvhApiClientService.request('POST', `/email/domain/${OvhApiClientService.domain}/redirection`,
    {
        from,
        to,
        localCopy: false
    })
    .then((result: any) => {
        return OvhApiClientService.request('GET', `/email/domain/${OvhApiClientService.domain}/redirection`,
        {
            from
        });
    });
};

const deleteRedirection = (id: string): Promise<Array<any>> => {
    return OvhApiClientService.request('DELETE', `/email/domain/${OvhApiClientService.domain}/redirection/${id}`);
};

export { fetchRedirections, createRedirection, deleteRedirection };