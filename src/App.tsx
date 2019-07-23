import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {hot} from "react-hot-loader";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> sadsa d and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React Test
                </a>
            </header>
        </div>
    );
};

export default hot(module)(App);
