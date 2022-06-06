

import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect, withRouter } from "react-router-dom";
import checkAuth from './httpFunctions/checkAuth'

import Header from './components/Header'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Cart from './components/Cart';
import Shop from './components/Shop';
import Main from './components/Main';
import OrderForm from './components/OrderForm';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm'
import { useEffect, useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(()=>{
    checkAuth().then(setAuth) 
    console.log(auth)
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main">
          {withRouter(()=><><Header><NavBar setAuth={setAuth} auth={auth}/></Header><Content><Main /></Content></>)}
        </Route>
        <Route exact path="/shop">
          {withRouter(()=><><Header><NavBar setAuth={setAuth} auth={auth}/></Header><Content><Shop /></Content></>)}
        </Route>
        <Route exact path="/cart">
          {withRouter(()=><><Header><NavBar setAuth={setAuth} auth={auth}/></Header><Content><Cart auth={auth}/></Content></>)}
        </Route>
        <Route exact path="/order">
          {withRouter(()=><><Header><NavBar setAuth={setAuth} auth={auth}/></Header><Content><OrderForm /></Content></>)}
        </Route>
        <Route exact path="/signup">
          <RegistrationForm />
        </Route>
        <Route exact path="/signin">
          <LoginForm />
        </Route>
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
}



export { App };
