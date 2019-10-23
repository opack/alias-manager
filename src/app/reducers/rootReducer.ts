import { combineReducers } from 'redux-starter-kit';

import aliasesReducer from './aliases.reducer'

const rootReducer = combineReducers({
    aliases: aliasesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
