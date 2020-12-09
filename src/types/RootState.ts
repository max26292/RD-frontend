import { AuthorizeContainerState } from 'app/containers/AuthorizeContainer/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  mainLayout: import("d:/Reactjs/KakaloseQ/src/app/containers/MainLayout/types").MainLayoutState;
  authorizeContainer?: AuthorizeContainerState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
