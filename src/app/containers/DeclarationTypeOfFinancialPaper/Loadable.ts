/**
 *
 * Asynchronously loads the component for DeclarationTypeOfFinancialPaper
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DeclarationTypeOfFinancialPaper = lazyLoad(
  () => import('./index'),
  module => module.DeclarationTypeOfFinancialPaper,
);
