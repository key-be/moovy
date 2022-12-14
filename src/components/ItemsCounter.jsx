import React, {useState} from 'react';
import '../styles/itemsCounter.scss'

export const ItemsCounter = ({stock, onAddToCart}) => {
  const [counter, setCouter] = useState(1);


  const handleDecrease = () => {
    if (counter > 1){
      setCouter(counter - 1)
    }
  }

  const handleIncrease = () => {
    if (counter < stock){
      setCouter(counter + 1)
    }
  }

  return <div className='items-counter'>
    <div className='items-counter-container'>
      <button onClick={handleDecrease}>-</button>
      <p>{counter}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
    <button onClick={() => onAddToCart(counter)}>Agregar al carrito</button>
  </div>  
  
}
