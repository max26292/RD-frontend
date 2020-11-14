/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import 'styles/scss/App.scss';
import { HomePage } from './containers/HomePage/Loadable';
import { MainLayout } from 'app/containers/MainLayout';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { AuthorizeContainer } from './containers/AuthorizeContainer/Loadable';
import { LoginForm } from 'app/components/LoginForm';

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

      <Switch>
        <Route exact path="/" component={MainLayout} />
        <Route exact path="/dashboard" component={HomePage} />

        <Route
          path="/auth"
          render={({ match: { url } }) => (
            <AuthorizeContainer>
              <Route path={`${url}/login`} component={LoginForm} />
            </AuthorizeContainer>
          )}
        />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
