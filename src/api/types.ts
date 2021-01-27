export interface initRequestState {
    loading:boolean,
    error?: RepoErrorType | null;
    message?:string |string[]
}

export enum RepoErrorType {
    NOT_FOUND = 404,    
}
export interface ResponseType{
   error?: RepoErrorType | null;
   message?:string |string[]
}