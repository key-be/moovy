import cartFilm from '../assets/bag.svg';
import '../styles/cartWidget.scss';

export const CartWidget = () => {
  return <div className='cart'>
    <div className='cart-btn'>
      <img src={cartFilm} alt='cart films'/>
    </div>
  </div>
  
}
