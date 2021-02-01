import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'redux';
import { IapiRequest } from 'types/apiType';
import { actions } from './slice';
import { config } from 'config';
import { isEmpty } from 'lodash';
import { ResponseType } from './types';
import { requestState } from './selectors';
// export function requestApi<T,TResponse>(data: IapiRequest <T>):Observable<TResponse>|Observable<Array<TResponse>>{

export function requestApi<T, RT>(data: IapiRequest<T>): ResponseType<RT> {
  console.debug('call api', data);
  const token = null;
  /*
add this for get query
params: {
ID: 12345
},
paramsSerializer: function (params) {
return Qs.stringify(params, {arrayFormat: 'brackets'})
},*/
  const preparedRequest: AxiosRequestConfig = {
    url: config.apiUrl + data.url,
    method: data.method,
    headers: {},
    responseType: 'json',
    validateStatus: function (status) {
      return status < 500; // default
    },
  };
  if (token) {
    preparedRequest.headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
  } else {
    preparedRequest.headers = { 'Content-Type': 'application/json' };
  }
  const { requestBody = false } = data;
  if (requestBody) {
    preparedRequest.data = requestBody;
  }
  const res: ResponseType<RT> = <ResponseType<RT>>axios
    .request<any, AxiosResponse>(preparedRequest)
    .then((respon: AxiosResponse<RT>) => {
      return {
        data: respon.data,
        status: respon.status,
      };
    })
    .catch(error => {
      console.log(error);
    });
  return res;
}

export const { makeRequest, isLoading, isLoaded } = actions;
export { requestState };
