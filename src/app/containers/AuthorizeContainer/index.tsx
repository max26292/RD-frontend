/**
 *
 * AuthorizeContainer
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAuthorizeContainer } from './selectors';
import { authorizeContainerSaga } from './saga';
interface Props {
  children?: React.ReactNode;
  match?: any;
}

export function AuthorizeContainer(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authorizeContainerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authorizeContainer = useSelector(selectAuthorizeContainer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
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
