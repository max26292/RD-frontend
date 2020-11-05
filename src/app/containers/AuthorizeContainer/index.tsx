/**
 *
 * AuthorizeContainer
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { RouteProps } from 'react-router';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAuthorizeContainer } from './selectors';
import { authorizeContainerSaga } from './saga';
import { Switch, Route } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  match?: any;
}

export function AuthorizeContainer(props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authorizeContainerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authorizeContainer = useSelector(selectAuthorizeContainer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  console.debug(props);
  // cu phap mac dinh
  // const match = props.match;
  const { match } = props;
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
