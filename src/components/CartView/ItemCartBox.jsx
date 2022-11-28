import React from 'react';
import '../../styles/cartView.scss';

export const ItemCartBox = (props) => {
  return (
    <div className='card-cart-view'>
      <h3>{props.title}</h3>
      <p>Cantidad: {props.quantity}</p>
      <p>Precio: $ {props.price}</p>
      <p>Total: $ {parseFloat(props.total.toFixed(2))}</p>
      <button className='remove-btn' onClick={props.onClick}>X</button>
    </div>
  )
}
