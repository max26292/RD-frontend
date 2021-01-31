export interface initRequestState {
  loading: boolean;
}

export enum RepoErrorType {
  NOT_FOUND = 404,
}
export interface ResponseType<T = void> {
  message?: string | string[];
  error?: string | string[] | number | number[];
  status?: number;
  data?: T;
}
