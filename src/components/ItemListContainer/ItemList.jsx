import React from 'react'
import { Item } from '../Item'
import {Spinner} from '../Spinner/Spinner';

export const ItemList = (props) => {
  let emptyArray = props.moviesList.length === 0;

  return (
    <>
      { emptyArray ? <Spinner/> :
        props.moviesList.map( movie => 
          <Item
            key={movie.id}
            img={movie.movie_img}
            movieTitle={movie.movie_title}
            movieGender={movie.movie_gender}
            price={movie.price}
            id={movie.id}
          />
        )
      }
    </>
  )
}
