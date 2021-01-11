/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * DeclarationTypeOfFinancialPaper
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDeclarationTypeOfFinancialPaper } from './selectors';
import { declarationTypeOfFinancialPaperSaga } from './saga';

import ListOfFinancialPaper from 'app/components/ListOfFinancialPaper';

interface Props {}

export const DeclarationTypeOfFinancialPaper = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: declarationTypeOfFinancialPaperSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const declarationTypeOfFinancialPaper = useSelector(
    selectDeclarationTypeOfFinancialPaper,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>DeclarationTypeOfFinancialPaper</title>
        <meta
          name="description"
          content="Description of DeclarationTypeOfFinancialPaper"
        />
      </Helmet>
      <ListOfFinancialPaper />
    </>
  );
});

const Div = styled.div``;
