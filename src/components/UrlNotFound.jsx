import { Link } from 'react-router-dom'

export const UrlNotFound = () => {
  return (
    <div className='url-not-found'>
      <span>Oops!</span>
      <h3>404 Ruta no encontrada</h3>
      <Link to='/' className='go-home'>Ir al home</Link>
    </div>
  )
}
