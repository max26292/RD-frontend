/**
 *
 * Asynchronously loads the component for AuthorizeContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AuthorizeContainer = lazyLoad(
  () => import('./index'),
  module => module.AuthorizeContainer,
);
