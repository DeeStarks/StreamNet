import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';
import Body from './components/Body'
import AuthIn from './components/AuthIn'
import AuthUp from './components/AuthUp'
import DropDown from './components/DropDown'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER

ReactDOM.render(
<Router history={createHistory}>
  <Switch>
    <Route path='/' exact component={App} />
    <Route path='/home' exact component={Body} />
    <Route path='/sign_in' component={AuthIn} />
    <Route path='/sign_up' component={AuthUp} />
    <Route path="/dropdown" component={DropDown} />
  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
