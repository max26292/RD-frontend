import { RootState } from './RootState';
import * as H from 'history';

export type { RootState };

export interface RouteProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
export interface IAuthorization {
  username?: string;
  token?: string;
  userId?: Number;
  id?: Number;
}
