/* eslint-disable prettier/prettier */
/**
 *
 * ListWarehouse
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectListWarehouse } from './selectors';
import { listWarehouseSaga } from './saga';

import Navbar from '../../components/Navbar';
import { Sidebar } from 'app/components/Sidebar';

import "./styles.scss"

interface Props {}

export function ListWarehouse(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: listWarehouseSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const listWarehouse = useSelector(selectListWarehouse);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  let pathname = window.location.pathname.replace('/', '');

  return (
    <>
      <Helmet>
        <title>ListWarehouse</title>
        <meta name="description" content="Description of ListWarehouse" />
      </Helmet>
      <Div>{t('')}</Div>

      <div className="page-container">
        <Sidebar />
        <div
          className={
            pathname === 'blank' ? 'is_blank_page main-content' : 'main-content'
          }
          id="main_content_sec"
        >
          <Navbar />
          <div className="main-content-inner">
              xxx
          </div>
        </div>
      </div>
    </>
  );
}

const Div = styled.div``;
