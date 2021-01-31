/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createReducer } from './reducers';

export const history = createBrowserHistory();
export const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
  blacklist: ['request'],
  transforms: [immutableTransform()],
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
  const middlewares = [sagaMiddleware, logger];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const rootReducers = createReducer();
  let persistedReducer = persistReducer(persistConfig, rootReducers);
  let store = configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });
  let persistor = persistStore(store);
  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
      // const nextRootReducer = rootReducers;
      // store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
}
export const { store, persistor } = configureAppStore();
