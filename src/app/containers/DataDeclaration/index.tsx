/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
*
* DataDeclaration
*
*/

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDataDeclaration } from './selectors';
import { dataDeclarationSaga } from './saga';

import TableOne from 'app/components/TableOne'
import TableTwo from 'app/components/TableTwo'


interface Props {}


export const DataDeclaration = memo((props: Props) => {
useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: dataDeclarationSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dataDeclaration = useSelector(selectDataDeclaration);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { t, i18n } = useTranslation();

return (
<>
  <Helmet>
    <title>DataDeclaration</title>
    <meta name="description" content="Description of DataDeclaration" />
  </Helmet>
  
  <TableOne />
    {/* <TableTwo /> */}
</>
);

});

const Div = styled.div``;
