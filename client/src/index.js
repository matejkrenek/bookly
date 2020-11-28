import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import App from './App';
import { Login } from './components/Login';
import { Signup } from './components/Signup';



ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={props => <App {...props}/>} />
        <Route path='/signup' exact render={props => <Signup {...props}/>} />
        <Route path='/login' exact render={props => <Login {...props}/>} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

