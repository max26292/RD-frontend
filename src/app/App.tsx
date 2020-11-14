import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Route>
        <Sidebar />
        <switch>
          <Route path="/" />
        </switch>
      </Route>
    </>
  );
}

export default App;
