import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';

function App() {
    return(
        <>
        <Route>
            <Navbar />
            <switch>
                <Route path='/' /> 
            </switch>
        </Route>
               

        </>
    );
}

export default App;