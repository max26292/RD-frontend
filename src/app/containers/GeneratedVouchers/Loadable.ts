/**
 *
 * Asynchronously loads the component for GeneratedVouchers
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GeneratedVouchers = lazyLoad(
  () => import('./index'),
  module => module.GeneratedVouchers,
);
