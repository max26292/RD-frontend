import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router-dom';
import './scss/loginPage.scss';


interface LoginInfo {
  username: string;
  password: string | number;
}
export const LoginPage = props => {
  const requestParams: LoginInfo = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });
  const [{ username, password }, setCredentials] = useState<LoginInfo>({
    username: '',
    password: '',
  });

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    console.debug({ username }, { password });
    // const response = await onLogin({
    //   username,
    //   password,
    // });
  };
  if (
    !isEmpty(requestParams) &&
    !isEmpty(requestParams.username) &&
    !isEmpty(requestParams.password)
  ) {
    console.debug('in redirect ', { props }, { requestParams });
    return <Redirect to="/dashboard" />;
  }
  return (
    <form className="loginForm">
      <label className="user-name" htmlFor="username">
        Username: 
      <input 
        placeholder="email"
        value={ username }
        name="username"
        onChange={event => {
          setCredentials({
            username: event.target.value,
            password,
          });
        }}
      />
      </label>

      <label className="pass-word" htmlFor="password">
        Password:
      <input
        placeholder="pass"
        type="password"
        value={ password }
        name="password"
        onChange={event => {
          setCredentials({
            username,
            password: event.target.value,
          });
        }}
      />
      </label>

      <button className="but-ton"
        type="submit"
        onSubmit={e => {
          console.debug(e);
          login(e);
        }}
      >
        Login
      </button>
    </form>
  );
};

class loginFormExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }
}
