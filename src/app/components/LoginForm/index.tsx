/* eslint-disable prettier/prettier */
/**
 *
 * LoginForm
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { RouteProps, match } from 'types';
import { LoginPage } from './LoginPage';
import Register from './Register';

interface params {

}
export function LoginForm(props: RouteProps<match<params>>) {
  const { match } = props;
  const { path } = match;
  console.table(match);
  return (
    <Div>
      {path !== '/auth/login' ? <Register {...props}/> :
      <LoginPage {...props} />
      }
    </Div>
  );
}

const Div = styled.div``;
