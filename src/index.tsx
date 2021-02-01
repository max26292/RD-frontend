/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import root app
import { App } from 'app';
import { Provider,ReactReduxContext } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Spinner } from 'reactstrap';
import 'sanitize.css/sanitize.css';
import * as serviceWorker from 'serviceWorker';
import { configureAppStore } from 'store/configureStore';
// Initialize languages
import './locales/i18n';
import { LoadingComponent } from 'app/components/LoadingComponent';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

interface Props {
  Component: typeof App;
}
const { store, persistor } = configureAppStore();
const ConnectedApp = ({ Component }: Props) => {
  return(
  <Provider store={store} context={ReactReduxContext}>
    <PersistGate loading={<LoadingComponent color="warning" />} persistor={persistor} >
      <HelmetProvider>
        <Component />
      </HelmetProvider>
    </PersistGate>
  </Provider>
)};
const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./app').App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
