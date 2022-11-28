import React, {useContext} from 'react';
import '../../styles/cartView.scss';
import { ItemCartBox } from './ItemCartBox';
import { cartContext } from '../../context/CartContext';
import { createBuyOrderFirebase } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { OrderForm } from './OrderForm';

export const CartView = () => {

  const {cart, removeItem, totalPriceInCart, clear} = useContext(cartContext)

  const navigate = useNavigate()

  function createBuyOrder(userData){
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date()
    }
    createBuyOrderFirebase(buyData).then( orderId => {
      console.log(orderId)
      clear()
      navigate(`/checkout/${orderId}`)
    })
  }

  return (
    <div className='cart-view'>
      <h2>Tu lista de Pelis</h2>
      {
        cart.length === 0 ? 
          <p className='clear-cart'>No hay películas en el carrito</p> 
        :
        <>
          <div className='cart-list-view'>
            {cart.map((cartItem) => (
              <ItemCartBox
                key={cartItem.id}
                title={cartItem.movie_title}
                quantity={cartItem.quantity}
                price={cartItem.price}
                total={cartItem.price * cartItem.quantity}
                onClick={() => removeItem(cartItem.id)}
              />
            ) 
          )}
          </div>
          <div className='cart-list-view total'>Total a pagar: ${parseFloat(totalPriceInCart().toFixed(2))}</div>
          <div className='cart-view-btns'>
            {/*<button className='cvb done' onClick={createBuyOrder}>Terminar mi compra</button>*/}
            <button className='cvb clear' onClick={clear}>Vaciar carrito</button>
          </div>
          <OrderForm onSubmit={createBuyOrder}/>
        </>
      }
      <div>
    </div>
    </div>
  )
}
