/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { reducer } from 'api/slice';
import { InjectedReducersType } from 'utils/types/injector-typings'
import { connectRouter } from 'connected-react-router/immutable';
import {history} from 'store/configureStore';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */


export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return state => state;
  } else {
    return combineReducers({      
      request: reducer,
      router:connectRouter(history),
      ...injectedReducers,      
    });
  }
}
