

export interface ResponseType<T = void> {
  message?: string | string[];
  error?: string | string[] | number | number[];
  status?: number;
  data?: T;
}

export interface initRequestState extends ResponseType {
  loading: boolean;
}

export enum RepoErrorType {
  NOT_FOUND = 404,
}