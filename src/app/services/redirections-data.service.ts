import AliasData from "./@data-types/alias-data";
import { fetchAliases, populateAliases } from "../reducers/aliases.reducer";
import { Dispatch, Action } from "redux";

import credentials from './app-keys';
const ovh = require('ovh')(credentials);

const aliasDataService = (store: any) => (next: Dispatch) => (action: Action) => {
  /*
  Pass all actions through by default
  */
  next(action);
  switch (action.type) {
    // Fetch alias data
    case fetchAliases.type:
        ovh.requestPromised('GET', '/email/domain/valdera.fr/redirection')
        .then((redirections: Array<string>) => {
            console.log('Fetched', redirections);
            const aliases = redirections.map((redirection: string) => new AliasData(redirection, '<unknown>'));
            return next(populateAliases(aliases));

            /*redirections.forEach(id => {
                ovh.requestPromised('GET', `/email/domain/valdera.fr/redirection/${id}`)
                .then((alias: string) => {
                    const data = new AliasData(id, alias);
                    return next(addAlias(data));
                });
            });*/
        });
        break;

    // Do nothing if the action does not interest us
    default:
        break;
  }
}

export default aliasDataService;