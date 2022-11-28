import { useParams, Link } from 'react-router-dom';
import '../../styles/checkout.scss';
import check from '../../assets/check.svg';

export const Checkout = () => {
  const { orderId } = useParams()
    
  return <div className='checkout'>
    <div className='checkout-message'>
      <img src={check} alt='check'/>
      <h2>Tu compra a finalizado con éxito</h2>
      <h3>¡Gracias por elegir Moovy!</h3>
      <p>Este es tu código de compra: {orderId}</p>
      <Link to='/' className='go-back'>Volver al home</Link>
    </div>
  </div>
}
