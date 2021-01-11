/**
 *
 * Asynchronously loads the component for YearStarting
 *
 */

import { lazyLoad } from 'utils/loadable';

export const YearStarting = lazyLoad(
  () => import('./index'),
  module => module.YearStarting,
);
