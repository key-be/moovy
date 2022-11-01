import React from 'react'
import { Item } from '../Item'

export const ItemList = (props) => {
  return (
    <>
      {
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
