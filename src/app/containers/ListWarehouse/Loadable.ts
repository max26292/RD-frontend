/**
 *
 * Asynchronously loads the component for ListWarehouse
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ListWarehouse = lazyLoad(
  () => import('./index'),
  module => module.ListWarehouse,
);
