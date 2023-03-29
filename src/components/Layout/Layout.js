

import React from 'react'
import Header from '../Header/Header.jsx';
import Routes from '../../routes/Routers';
import Footer from '../Footer/Footer.jsx';
import Carts from '../UI/cart/Carts.jsx';

import { useSelector } from 'react-redux';
import { cartUiActions } from './../../store/shopping-cart/cartUiSlice';


const Layout = () => {
  const showCart = useSelector(state=> state.cartUi.cartIsVisible)
  return (
    <div>
      <Header/>
        {
          showCart && <Carts/>

        }
      <div>
        <Routes/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout