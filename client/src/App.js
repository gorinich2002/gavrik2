

import logo from './logo.svg';
import './App.css';


// import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch, Redirect, withRouter } from "react-router-dom";

//rexux imports
// import { createStore } from 'redux' 
// import { addProductToCartAction } from "./actions/actions";
// import mainShopReduser from "./redusers/mainReduser";

import checkAuth from './httpFunctions/checkAuth'

//import components
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


// const initialState = {};
// const store = createStore(mainShopReduser);
// const reduxContext = createContext();

function App() {
  const [isAuth, setAuth] = useState(false);
  useEffect(async ()=>{
    let isAuth = await checkAuth();
    console.log(isAuth)
    setAuth(isAuth) 
  })
  if(!isAuth){
    return  <BrowserRouter >
      <LoginForm/>
    </BrowserRouter>
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main">
          {withRouter(<><Header><NavBar /></Header><Content><Main /></Content></>)}
        </Route>
        <Route exact path="/shop">
          {withRouter(<><Header><NavBar /></Header><Content><Shop /></Content></>)}
        </Route>
        <Route exact path="/cart">
          {withRouter(<><Header><NavBar /></Header><Content><Cart /></Content></>)}
        </Route>
        <Route exact path="/order">
          {withRouter(<><Header><NavBar /></Header><Content><OrderForm /></Content></>)}
        </Route>
        <Route exact path="/signup">
          <RegistrationForm />
        </Route>
        <Route exact path="/signin">
          <LoginForm />
        </Route>
        <Redirect to="/signin" />
      </Switch>
    </BrowserRouter>
  );
}



export { App };
