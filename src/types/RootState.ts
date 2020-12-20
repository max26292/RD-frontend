/* eslint-disable prettier/prettier */
import { AuthorizeContainerState } from 'app/containers/AuthorizeContainer/types';
import { InitialDeclarationState } from 'app/containers/InitialDeclaration/types';
import { ListWarehouseState } from 'app/containers/ListWarehouse/types';

// import { listWarehouseState } from 'app/containers/ListWarehouseState/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  initialDeclaration: InitialDeclarationState;
  mainLayout: import("d:/Reactjs/KakaloseQ/src/app/containers/MainLayout/types").MainLayoutState;
  authorizeContainer?: AuthorizeContainerState;
  listWarehouse?: ListWarehouseState;
  innitialDeclaration?: InitialDeclarationState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
