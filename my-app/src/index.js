import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import App from './App';
import Contact from './view/Contact'
import Clock from './view/Clock'

const RoutedApp = () => (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/clock" component={Clock} />
      </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    <RoutedApp />, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
