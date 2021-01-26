import axios from 'axios';
import { createAction } from '@reduxjs/toolkit'
import { IapiRequest } from 'types/apiType';


export const makeRequestAction = createAction('MAKE_REQUEST_API', function prepare(request :IapiRequest<any>) {
  console.debug('called action',{request})
  return {
    payload: {
      request
    },
  }
})




export const makeApiRequest = (request :IapiRequest<any> ) => {
    /**
     * check request metod type
     * if get => build query 
     * post,put => build body + query
     * delete=> build body
     */
    console.debug({request});
    switch (request.method) {
      case 'get':
        break;
      case 'post':
        break;
      case 'put':
        break;
      case 'delete':
        break;
      default:
        break;
    }
 }