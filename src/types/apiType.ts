export interface IapiRequest <T> {
    method: string,
    url: string,
    requestBody? : T   
    path?:string
}