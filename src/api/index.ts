import axios, { AxiosRequestConfig,AxiosResponse,ResponseType} from 'axios';
import { Observable } from 'redux';
import { IapiRequest } from 'types/apiType';
import { actions } from './slice';
import { config } from 'config';
import { isEmpty } from 'lodash';
import { ResponseFail, ResponseSuccess } from './types';
// export function requestApi<T,TResponse>(data: IapiRequest <T>):Observable<TResponse>|Observable<Array<TResponse>>{

export function requestApi<T,ResponeType=any>(data: IapiRequest<T>) :ResponseSuccess<any>|ResponseFail|any {
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
    }
    if (token) {
        preparedRequest.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    } else {
        preparedRequest.headers = { 'Content-Type': 'application/json' }
    }
    const {requestBody = false} =  data ;
    if(requestBody){
        preparedRequest.data = requestBody;
    }
    const res = axios.request<any,AxiosResponse>(preparedRequest)
    .then((respon : AxiosResponse)=>{
        return {
            data:respon.data,
            status: respon.status
        };
    })
      .catch((error)=>{
        console.log(error);
      });


    return res;
}


export const apiRequest = actions.makeRequest;