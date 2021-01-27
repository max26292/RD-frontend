export interface initRequestState extends ResponseFail, ResponseSuccess{
    loading:boolean,
}

export enum RepoErrorType {
    NOT_FOUND = 404,    
}
interface ResponseType{
   message?:string |string[]
}
export interface ResponseFail extends ResponseType {
    error?:string | string[]|number|number[];
    status?:number;
}

export interface ResponseSuccess<T=any> extends ResponseType{
    data?: T;
    status?:number;
}