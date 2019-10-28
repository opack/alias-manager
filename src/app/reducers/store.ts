import { configureStore } from 'redux-starter-kit'

import rootReducer from './rootReducer'
import { AliasStore } from './aliases.reducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  })
}

export type AppDispatch = typeof store.dispatch;

export default store;

export interface GlobalStore {
  aliases: AliasStore
}