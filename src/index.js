import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
function tick() {
    const element = (
        <div>
            <h1 className='header'>Hello, World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <a href="https://www.hyperiondev.com/" target="_blank" rel="noopener noreferrer"><button>Go to Hyperion</button></a>
            <p>This page uses the MERN Stack, which consists of:
                <ul>
                    <li>Mongo</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </p>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
