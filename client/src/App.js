import {createContext} from 'react';


import logo from './logo.svg';
import './App.css';


// import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

//rexux imports
// import { createStore } from 'redux' 
// import { addProductToCartAction } from "./actions/actions";
// import mainShopReduser from "./redusers/mainReduser";


//import components
import Header from'./components/Header'
import NavBar from'./components/NavBar'
import Content from'./components/Content'
import Cart from './components/Cart';
import Footer from'./components/Footer'
import Shop from './components/Shop';
import Main from './components/Main';
import OrderForm from './components/OrderForm';






// const initialState = {};
// const store = createStore(mainShopReduser);
// const reduxContext = createContext();

function App() {
 
  return (
   <BrowserRouter>
      <Header>
        <NavBar/>
        
      
      </Header>
      <Content>
     
       
       <Switch>
            <Route path="/main">
              <Main/>
            </Route>
            <Route path="/shop">
              <Shop/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/order">
              <OrderForm/>
            </Route>
            <Redirect to="/main"></Redirect>
        </Switch>
            
      
      </Content>

      <Footer> <NavBar/></Footer>
      </BrowserRouter>
   
  );
}



export {App};
