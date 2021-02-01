/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * App.tsx
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { apiProcessSaga } from 'api/saga';
import { sliceKey } from 'api/slice';
// import { HomePage } from './containers/HomePage/Loadable';
import { MainLayout } from 'app/containers/MainLayout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from 'store/configureStore';
import { GlobalStyle } from 'styles/global-styles';
import 'styles/scss/App.scss';
import { useInjectSaga } from 'utils/redux-injectors';
import { LoginForm } from './components/LoginForm';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { AuthorizeContainer } from './containers/AuthorizeContainer/Loadable';
import { RouteList } from './routes';
import { selectAuthInfo } from 'app/containers/AuthorizeContainer'
import { LoadingComponent } from 'app/components/LoadingComponent';

export { selectAuthInfo, LoadingComponent };
export function App() {
  useInjectSaga({ key: sliceKey, saga: apiProcessSaga });
  // useInjectReducer({ key: sliceKey, reducer: reducer });         
  return (
    <Router history={history}>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      {/* <ConnectedRouter history={history} context={ReactReduxContext}> */}
      <>
        <Route
          path='/'
          render={(props) => <MainLayout {...props}>
            <RouteList {...props} />
          </MainLayout>}
        >
        </Route>


        <Route
          path="/auth"
          render={({ match: { url } }) => {
            return (
              <AuthorizeContainer>
                <Switch>
                  <Route exact path={`${url}/login`} component={LoginForm} />
                  <Route exact path={`${url}/register`} component={LoginForm} />
                </Switch>
              </AuthorizeContainer>
            )
          }}
        />
        <Route exact path='/404' component={NotFoundPage} />

      </>
      <GlobalStyle />
      {/* <Route component={ListWarehouse} /> */}

      {/* <Route component={InitialDeclaration} /> */}

    </Router>
  );
}