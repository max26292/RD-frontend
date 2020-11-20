/**
 *
 * LoginForm
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import LoginPage  from './LoginPage';
interface Props {}

export function LoginForm(props: Props) {
  return (
    <Div>
      <LoginPage {...props} />
    </Div>
  );
}

const Div = styled.div``;
