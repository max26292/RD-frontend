/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { isEmpty } from 'lodash'; //thư viện JavaScript mạnh mẽ dùng để xử lý Array, Object, Function, Collection ..v.v
//The AvForm component wraps reactstrap's form to add context
//that the other Av components know about to help share validation state
import qs from 'qs';
import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Alert, Button, Row ,Form,FormGroup} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { actions } from 'app/containers/AuthorizeContainer/slice'
// import { checkLogin } from '../../../store/actions';
import "./scss/loginPage.scss";
import { IapiRequest } from 'types/apiType';
import { makeRequest } from 'api';
import { ContainerState } from 'app/containers/AuthorizeContainer/types';
import {selectAuthInfo} from 'app/containers/AuthorizeContainer/selectors';
import {actions as layoutActions} from 'app/containers/MainLayout/slice'
import { IAuthorization } from 'types';
import { history } from 'store/configureStore';



interface LoginInfo {
  username: string;
  password: string | number;
}
export function LoginPage(props) {

  const selectData  =  useSelector(selectAuthInfo);
  const dispatch = useDispatch();
  const requestParams: LoginInfo = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });

  ;
  const [{ username, password }, setCredentials] = useState<LoginInfo>({
    username: '',
    password: ''
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
    return <Redirect to= '/dashboard' />;
  }
  
  const hanleLogin = (submit:LoginInfo) =>{
    // type xx =  typeof actions.setLoginInfo;
    // console.debug(typeof actions.setLoginInfo);
    const {username,password } = submit;
    const data : IapiRequest<LoginInfo> = {
      method: 'POST',
      url: '/login',
      action:actions.setLoginInfo,          
      requestBody: {
        username: username,
        password: password
      }  
    };
    dispatch(makeRequest(data));
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
                onValidSubmit={(e,data)=>{
                  hanleLogin(data);
                  
                }}
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
                      name="username"
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
                    <Button  color="primary" >Login</Button>
                    {/* <a 
                      type="submit"
                      type="submit" onClick={(e)=>{e.preventDefault()}}
                      color="primary"
                      className="btn btn-primary"
                      href = "/data-declare"
                    > Login 
                    </a> */}
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




