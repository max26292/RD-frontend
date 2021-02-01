/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * AuthorizeContainer
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey,actions } from './slice';
import { selectAuthInfo } from './selectors';
import { authorizeContainerSaga } from './saga';
import { isEmpty } from 'lodash';
import { Irestore } from './types';
import {history} from 'store';
interface Props {
  children?: React.ReactNode;
  match?: any;
}

export function AuthorizeContainer(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authorizeContainerSaga });
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authInfo = useSelector(selectAuthInfo);
  if(isEmpty(authInfo.token)){
    const payload :Irestore = {
      isRestore:true
    }
    dispatch(actions.restoreAuthInfo(payload ));
  }
  useEffect(() => {
    console.debug(authInfo);
    const {token}  =  authInfo ;
    if(token.length>0){
      history.push('/data-declare');
    }
  }, [authInfo])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  // cu phap mac dinh
  // const match = props.match;

  return (
    <>
      <Helmet>
        <title>AuthorizeContainer</title>
        <meta name="description" content="Description of AuthorizeContainer" />
      </Helmet>
      <Div>{props.children}</Div>
    </>
  );
}

const Div = styled.div``;
