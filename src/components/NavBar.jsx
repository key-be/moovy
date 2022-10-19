import '../styles/navbar.scss';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return <div className='nav-bar'>
    <div className='inner-nav-bar'>
      <div className='brand'>Moovy</div>
      <div className='nav'>
        <a href='/' className='nav-links'>PELÍCULAS</a>
        <a href='/' className='nav-links'>PROYECTO</a>
        <a href='/' className='nav-links'>COMUNIDAD</a>
      </div>
      <div className='cart'>
        <CartWidget />
      </div>
    </div>
  </div>
  
}
