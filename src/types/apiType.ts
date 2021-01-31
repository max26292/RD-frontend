import { Method } from 'axios';

export interface IapiRequest<T = any> {
  method: Method;
  url: string;
  action?: Function;
  requestBody?: T;
  path?: string;
}
export interface IapiFunction<T, RT = any> {
  (data?: IapiRequest<T>): IapiResponse<RT>;
}
export interface IapiResponse<T> {
  data: T;
  message?: string;
}
