import '../../styles/itemListContainer.scss';
import getItemsFromAPI, {getItemFromAPIbyCategory} from '../mocks/mockService';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {
  const [moviesList, setMoviesList] = useState([]);
  const { category } = useParams()

  useEffect( () => {
    if(category) {
      getItemFromAPIbyCategory(category).then( moviesDB => setMoviesList(moviesDB) )  
    } else{
      getItemsFromAPI().then( moviesDB => setMoviesList(moviesDB))
    }
  }, [category])

  return <div className="item-list-container">
    <ItemList moviesList={moviesList}/>
  </div>
}
