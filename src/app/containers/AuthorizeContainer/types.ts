/* --- STATE --- */
export interface AuthorizeContainerState {
  registerUser?: string;
  user?: string;
  registrationError?: any;
  loading?: any;
}

export type ContainerState = AuthorizeContainerState;
