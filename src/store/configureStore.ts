/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import { createReducer } from './reducers';
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER  } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
export const persistConfig = {
  key: 'root',
  storage: storage,
  // blacklist: ['extras'],
  transforms: [immutableTransform()]
};

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  // const middlewares = [sagaMiddleware];
  /**
   * add logger 
   */
  const middlewares = [sagaMiddleware,logger];
  
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const rootReducers = createReducer();
  const persistedReducer = persistReducer (persistConfig, rootReducers)
  let store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });
  let persistor = persistStore(store)





  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return {store,persistor};
}
