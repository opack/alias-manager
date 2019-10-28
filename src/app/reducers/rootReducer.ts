import { combineReducers } from 'redux-starter-kit';

import aliasesReducer from './aliases.reducer';
import ovhCredentialsReducer from './ovh-credentials.reducer';

const rootReducer = combineReducers({
    aliases: aliasesReducer,
    ovhCredentials: ovhCredentialsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
