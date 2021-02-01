/**
 * Create the store with dynamic reducers
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import logger from 'redux-logger';
import { persistReducer, persistStore,createTransform } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { routerMiddleware } from 'connected-react-router/immutable'
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createReducer } from './reducers';
import localForage from "localforage";

export const history = createBrowserHistory();

const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState : Array<any>, key) => {
    // convert mySet to an Array.
    console.debug('Transform Inbound');
    console.table(inboundState);
    return { ...inboundState};
  },
  // transform state being rehydrated
  (outboundState, key) => {
    console.debug('Transform outbound');
    console.table(outboundState);
    // convert mySet back to a Set.
    return { ...outboundState };
  },
  // define which reducers this transform gets called for.
  { whitelist: ['someReducer'] }
);

export const persistConfig = {
  key: 'root',
  storage: localForage,
  transforms: [SetTransform],
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
  const middlewares:Array<any> = [sagaMiddleware];
  middlewares.push(routerMiddleware(history));
  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
  }

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
      const nextRootReducer = rootReducers;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
}
export const { store, persistor } = configureAppStore();
