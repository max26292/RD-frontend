import { IAuthorization } from 'types';

/* --- STATE --- */
export interface AuthorizeContainerState {
  registerUser?: string;
  auth?: IAuthorization;
  registrationError?: any;
  loading?: any;
  user?: string;
}

export interface IloginBody {
  username: string;
  password: string;
}

export type ContainerState = AuthorizeContainerState;
