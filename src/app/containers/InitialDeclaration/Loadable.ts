/**
*
* Asynchronously loads the component for InitialDeclaration
*
*/

import { lazyLoad } from 'utils/loadable';

export const InitialDeclaration = lazyLoad(() => import('./index'), module => module.InitialDeclaration);