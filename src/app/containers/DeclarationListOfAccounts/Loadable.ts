/**
 *
 * Asynchronously loads the component for DeclarationListOfAccounts
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DeclarationListOfAccounts = lazyLoad(
  () => import('./index'),
  module => module.DeclarationListOfAccounts,
);
