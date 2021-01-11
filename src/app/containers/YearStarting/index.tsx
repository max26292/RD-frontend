/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 *
 * YearStarting
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectYearStarting } from './selectors';
import { yearStartingSaga } from './saga';

import YearStartingTable from 'app/components/YearStartingTable'

interface Props {}

export const YearStarting = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: yearStartingSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const yearStarting = useSelector(selectYearStarting);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>YearStarting</title>
        <meta name="description" content="Description of YearStarting" />
      </Helmet>

      <YearStartingTable />
     
    </>
  );
});

const Div = styled.div``;
