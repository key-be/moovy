import { useState, useEffect, useContext } from 'react';
//import { getSingleItemFromAPI } from './mocks/mockService';
import { getSingleItemFromAPI } from '../firebase/firebase.js';
import '../styles/itemDetailContainer.scss';
import { useParams } from 'react-router-dom';
import {ItemsCounter} from './ItemsCounter';
import {Link} from 'react-router-dom';
import { cartContext } from '../context/CartContext';
import { Spinner } from './Spinner/Spinner';

export const ItemDetailContainer = () => {
  const [movie, setMovie] = useState([]);
  const [isInCart, setIsInCart] = useState(false)

  const {id} = useParams();

  useEffect( () => {
    getSingleItemFromAPI(id)
    .then( 
      moviesDB => setMovie(moviesDB)
    )
    .catch( () => alert('Error') )
  }, [])

  const { addToCart } = useContext(cartContext)

  function onAddToCart(counter) {
    const itemForCart = {
      ...movie,
      quantity: counter
    }
    addToCart(itemForCart)

    setIsInCart(true)
  }

  

  return <div className='item-detail-container'>
      { movie.length === 0 ? <Spinner/> : 
        <>
        <div className='movie-img'>
          <img src={movie.movie_img} alt=''></img>
        </div>
        <div className='movie-data'>
          <span className='category-label'>{movie.movie_gender}</span>
          <h2>{movie.movie_title}</h2>
          <p className='sinopsis'>{movie.movie_description}</p>
          <p className='director'><strong>Director:</strong> {movie.movie_director}</p>
          <p className='price'><strong>Price:</strong> ${movie.price}</p>
          {!isInCart ?
            <ItemsCounter 
            onAddToCart={onAddToCart} 
            stock={movie.stock}
          /> :
          <div className='done-btns'>
            <Link to='/cart' className='link-cart'>Ir al carrito</Link>
            <Link to='/cart' className='link-cart'>Volver al catalogo</Link>
            <Link to='/cart' className='link-cart'>Quitar del carrito</Link>
          </div>
          }
        </div>
      </>
    }
  </div> 
}
