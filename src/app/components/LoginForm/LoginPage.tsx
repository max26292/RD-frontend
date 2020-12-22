/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Alert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';


import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//The AvForm component wraps reactstrap's form to add context
//that the other Av components know about to help share validation state
import qs from 'qs';
import { isEmpty } from 'lodash'; //thư viện JavaScript mạnh mẽ dùng để xử lý Array, Object, Function, Collection ..v.v
import { Redirect } from 'react-router-dom';
import { AnyARecord } from 'dns';
import { MainLayout } from 'app/containers/MainLayout';

// import { checkLogin } from '../../../store/actions';
import "./scss/loginPage.scss";

interface LoginInfo {
  username: string;
  password: string | number;
  href?: string;
}
export function LoginPage(props) {
  const requestParams: LoginInfo = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });
  const [{ username, password }, setCredentials] = useState<LoginInfo>({
    username: '',
    password: '',
    href: '',
  });

  const login = (event: React.FormEvent, value: any) => {
    event.preventDefault();
    console.debug({ value }, { username }, { password });
  };

  if (
    !isEmpty(requestParams) &&
    !isEmpty(requestParams.username) &&
    !isEmpty(requestParams.password)
  ) {
    console.debug('in redirect ', { props }, { requestParams });
    return <Redirect to= '/dashboard' />;
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="container-fluid">
          <Row>
            <div className="login-bg">
              <div className="login-overlay"></div>
              {/* <div className="login-left">
                                    <img src={loginLogo} alt="Logo" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit.</p>
                                    <button className="btn btn-primary">Learn More</button>
                                </div> */}
            </div>

            <div className="login-form">
              <AvForm
                id="login_form_sec"
                onValidSubmit={login}
                onInvalidSubmit={data => {
                  console.debug('invalid', data);
                }}
              >
                <div className="login-form-body">
                  {props.user && (
                    <Alert color="success">Your Login is successfull.</Alert>
                  )}

                  {props.loginError && (
                    <Alert color="danger">{this.props.loginError}</Alert>
                  )} 

                  <div>
                    <AvField
                      name="email"
                      label="Email"
                      value={username}
                      placeholder="Enter Email Address"
                      validate={{ email: true }}
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <AvField
                      name="password"
                      label="Password"
                      value={password}
                      placeholder="Enter Password"
                      type="password"
                      required
                    />
                  </div>

                  <div className="submit-btn-area">
                    <a 
                      type="submit"
                      color="primary"
                      className="btn btn-primary"
                      href = "/dashboard"
                    > Login 
                    </a>
                  </div>
                  <div className="form-footer text-center mt-5">
                                            <p className="text-muted">Don't have Account? <Link to="/auth/register"><i className="mdi mdi-lock"></i> Register Now </Link></p>
                                        </div>
                </div>
              </AvForm>
            </div>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}




