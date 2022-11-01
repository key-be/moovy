import React from 'react'
import '../styles/item.scss';
import {Link} from 'react-router-dom';

export const Item = (props) => {
  return (
    <Link  to={`/detail/${props.id}`} className='movie-card'>
      <img src={props.img} alt=''></img>
      <span>{props.movieGender}</span>
      <h3>{props.movieTitle}</h3>
      <p>$ {props.price}</p>
    </Link>
  )
}
