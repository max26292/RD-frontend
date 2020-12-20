/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
*
* InitialDeclaration
*
*/

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectInitialDeclaration } from './selectors';
import { initialDeclarationSaga } from './saga';

import Navbar from '../../components/Navbar';
import { Sidebar } from 'app/components/Sidebar';
import TableInitialDeclaration from 'app/components/TableInitialDeclaration'

interface Props {}


export const InitialDeclaration = memo((props: Props) => {
useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: initialDeclarationSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialDeclaration = useSelector(selectInitialDeclaration);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { t, i18n } = useTranslation();
let pathname = window.location.pathname.replace('/', '');

return (
<>
  <Helmet>
    <title>InitialDeclaration</title>
    <meta name="description" content="Description of InitialDeclaration" />
  </Helmet>  

  <TableInitialDeclaration />
</>
);

});

const Div = styled.div``;
