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
import { Navbar } from 'app/components/Navbar';
interface Props {}

export function MainLayout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: mainLayoutSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainLayout = useSelector(selectMainLayout);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Div>
        <Navbar />
      </Div>
    </>
  );
}

const Div = styled.div``;
