/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * DeclarationListOfWork
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDeclarationListOfWork } from './selectors';
import { declarationListOfWorkSaga } from './saga';
import ListWorks from 'app/components/ListWorks';

interface Props {}

export const DeclarationListOfWork = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: declarationListOfWorkSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const declarationListOfWork = useSelector(selectDeclarationListOfWork);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>DeclarationListOfWork</title>
        <meta
          name="description"
          content="Description of DeclarationListOfWork"
        />
      </Helmet>

      <ListWorks />
    </>
  );
});

const Div = styled.div``;
