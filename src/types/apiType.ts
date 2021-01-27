import { Method } from "axios";
interface genericFunction<T>  {
    (payload :any): T;
  }
export interface IapiRequest <T> {
    action?:Function,
    method: Method,
    url: string,   
    requestBody? : T   
    path?:string
}
export interface IapiResponse<T> {
    data:T,
    message?:string
}