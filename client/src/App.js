import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Login } from './components/FormSection/Login'
import { Signup } from './components/FormSection/Signup'
import { Home } from './components/Home/Home';
import { Books } from './components/Books/Books';
import userContext from './context/authContext';
import axios from 'axios';
import './App.css'


const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  return (
    <>
      <Router>
        <userContext.Provider value={{userData, setUserData}}>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/books' exact component={Books} />
            <Route path='/login' exact component={Login}/>
            <Route path='/signup' exact component={Signup} />
          </Switch>
        </userContext.Provider>
      </Router>
    </>
  ); 
}

export default App;
