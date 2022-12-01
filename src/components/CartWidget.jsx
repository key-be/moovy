import cartFilm from '../assets/bag.svg';
import '../styles/cartWidget.scss';
import { useContext } from 'react';
import {cartContext} from '../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const {itemsInCart} = useContext(cartContext)

  return <div className='cart'>
    <Link to='/cart' className='cart-btn'>
      <img src={cartFilm} alt='cart films'/>
      <small>{itemsInCart() === 0 ? '' : itemsInCart()}</small>
    </Link>
  </div>
}
