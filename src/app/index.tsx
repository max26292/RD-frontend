/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * App.tsx
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import  React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import 'styles/scss/App.scss';
// import { HomePage } from './containers/HomePage/Loadable';
import { MainLayout } from 'app/containers/MainLayout';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { AuthorizeContainer } from './containers/AuthorizeContainer/Loadable';
import {LoginForm} from './components/LoginForm'
import DeclareListofWarehouse from './containers/DeclareListofWarehouse'
import {ListWarehouse} from './containers/ListWarehouse/Loadable'
import { InitialDeclaration } from './containers/InitialDeclaration/Loadable';
// import Register from './components/LoginForm/Register';
// import {Navbar} from './components/Navbar';

export function App() {

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      {/* <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/dashboard" component={MainLayout} /> 
        <Route
          path="/auth"
          render={({ match: { url } }) => (
            <AuthorizeContainer>
              <Route path={`${url}/login`} component={LoginForm} />
            </AuthorizeContainer>
          )}
        /> 

        <Route component={NotFoundPage} />
      </Switch> */}
      <GlobalStyle />
      {/* <Route component={ListWarehouse} /> */}

      <Route component={InitialDeclaration} />
      
    </BrowserRouter>
  );
}