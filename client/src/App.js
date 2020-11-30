import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import './style.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup} />
      </div>
    </Router>
  ); 
}

export default App;
