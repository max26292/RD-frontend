/* eslint-disable prettier/prettier */
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



interface Props {
  children: React.ReactChild
}
export function MainLayout (props: any) : any {
  console.debug('%c MainLayout', 'background: #222; color: #bada55')
  console.debug({ props });
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: mainLayoutSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainLayout = useSelector(selectMainLayout);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { location } = props;
  let pathname = window.location.pathname.replace('/', '');
  const errorPage = ['/404', '/401', '/403', '/423', '/500', '/auth/login','/auth/register','/auth', '/sso'];
  if (errorPage.indexOf(location.pathname) >= 0) {
    console.debug('trigger 404 AppContainer');
    return false;
  }
  else {
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
            <div className="main-content-inner">
              {props.children}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const Div = styled.div``; 
