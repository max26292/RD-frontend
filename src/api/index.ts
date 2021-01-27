import axios from 'axios';
import { IapiRequest } from 'types/apiType';
import { actions } from './slice'

export function requestApi<T>(data: IapiRequest <any>){
    console.debug('call api');

    return null
}


export const apiRequest = actions.makeRequest;