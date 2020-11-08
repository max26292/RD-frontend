import { AuthorizeContainerState } from 'app/containers/AuthorizeContainer/types';
import { MainLayoutState } from 'app/containers/MainLayout/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  authorizeContainer?: AuthorizeContainerState;
  mainLayout?: MainLayoutState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
