/**
*
* Asynchronously loads the component for DataDeclaration
*
*/

import { lazyLoad } from 'utils/loadable';

export const DataDeclaration = lazyLoad(() => import('./index'), module => module.DataDeclaration);