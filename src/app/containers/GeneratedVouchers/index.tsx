/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * GeneratedVouchers
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectGeneratedVouchers } from './selectors';
import { generatedVouchersSaga } from './saga';
import ListOfGeneratedVouchers from 'app/components/ListOfGeneratedVouchers';

interface Props {}

export const GeneratedVouchers = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: generatedVouchersSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const generatedVouchers = useSelector(selectGeneratedVouchers);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>GeneratedVouchers</title>
        <meta name="description" content="Description of GeneratedVouchers" />
      </Helmet>

      <ListOfGeneratedVouchers />
    </>
  );
});

const Div = styled.div``;
