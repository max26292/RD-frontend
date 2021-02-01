/* eslint-disable prettier/prettier */
/**
 *
 * MainLayout
 *
 */

import { Sidebar } from 'app/components/Sidebar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import Navbar from '../../components/Navbar';
import { InitialDeclaration } from '../InitialDeclaration';
import { mainLayoutSaga } from './saga';
import { selectMainLayout } from './selectors';
import { reducer, sliceKey } from './slice';
import  {history} from 'store';
import {selectAuthInfo} from 'app'
import { isEmpty } from 'lodash';



interface Props {
  children: React.ReactChild
}
export function MainLayout (props: any) : any {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: mainLayoutSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainLayout = useSelector(selectMainLayout);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const authInfo = useSelector(selectAuthInfo);
  const {token} = authInfo;
  useEffect(() => {
    if(isEmpty(token)){
      history.push('/auth/login');
    }   
  }, [token]);
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


