/**
 *
 * MainLayout
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectMainLayout } from './selectors';
import { mainLayoutSaga } from './saga';
import Navbar from '../../components/Navbar';
import { Sidebar } from 'app/components/Sidebar';

interface Props { }

export function MainLayout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: mainLayoutSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainLayout = useSelector(selectMainLayout);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  let pathname = window.location.pathname.replace('/', '');
  return (
    <>
      <div className="page-container">
        <Sidebar />
        <div
          className={
            pathname === 'blank' ? 'is_blank_page main-content' : 'main-content'
          }
          id="main_content_sec"
        >
          <Navbar />
          <div className="main-content-inner">xxx</div>
        </div>
      </div>
    </>
  );
}

const Div = styled.div``;
