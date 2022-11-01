import { useState, useEffect } from 'react';
import { getSingleItemFromAPI } from './mocks/mockService';
import '../styles/itemDetailContainer.scss';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [movie, setMovie] = useState([]);

  const {id} = useParams();

  useEffect( () => {
    getSingleItemFromAPI(id)
    .then
      ( moviesDB => setMovie(moviesDB))
    .catch( () => alert('Error') )
  }, [])

  return <div className='item-detail-container'>
    <div className='movie-img'>
      <img src={movie.movie_img} alt=''></img>
    </div>
    <div className='movie-data'>
      <span className='category-label'>{movie.movie_gender}</span>
      <h2>{movie.movie_title}</h2>
      <p className='sinopsis'>{movie.movie_description}</p>
      <p className='director'><strong>Director:</strong> {movie.movie_director}</p>
      <p className='price'><strong>Price:</strong> ${movie.price}</p>
      <button>add to rent cart</button>
    </div>
  </div> 
}
