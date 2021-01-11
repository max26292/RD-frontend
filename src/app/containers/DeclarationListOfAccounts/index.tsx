/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * DeclarationListOfAccounts
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDeclarationListOfAccounts } from './selectors';
import { declarationListOfAccountsSaga } from './saga';

import ListAccounts from 'app/components/ListAccounts';

interface Props {}

export const DeclarationListOfAccounts = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: declarationListOfAccountsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const declarationListOfAccounts = useSelector(
    selectDeclarationListOfAccounts,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>DeclarationListOfAccounts</title>
        <meta
          name="description"
          content="Description of DeclarationListOfAccounts"
        />
      </Helmet>

      <ListAccounts />
    </>
  );
});

const Div = styled.div``;
