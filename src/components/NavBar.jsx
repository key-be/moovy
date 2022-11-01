import '../styles/navbar.scss';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return <div className='nav-bar'>
    <div className='inner-nav-bar'>
      <Link to='/'>
        <div className='brand'>Moovy</div>
      </Link>
      <div className='nav'>
        <Link to='/category/Suspense' className='nav-links'>SUSPENSO</Link>
        <Link to='/category/Drama' className='nav-links'>DRAMA</Link>
        <Link to='/category/Romance' className='nav-links'>ROMANTICA</Link>
        <Link to='/category/Comedy' className='nav-links'>COMEDIA</Link>
        <Link to='/category/Crime' className='nav-links'>CRIMEN</Link>
        <Link to='/category/Horror' className='nav-links'>HORROR</Link>
      </div>
      <div className='cart'>
        <CartWidget />
      </div>
    </div>
  </div>
  
}
