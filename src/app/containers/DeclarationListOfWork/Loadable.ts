/**
 *
 * Asynchronously loads the component for DeclarationListOfWork
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DeclarationListOfWork = lazyLoad(
  () => import('./index'),
  module => module.DeclarationListOfWork,
);
