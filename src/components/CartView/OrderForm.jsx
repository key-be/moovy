import { useState } from 'react';
import '../../styles/orderForm.scss';

export const OrderForm = (props) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  console.log(userData)

  const onHanldeChange = (e) => {
    // Accedo al name de cada input
    const name = e.target.name
    const value = e.target.value
    const newUserData = {...userData}
    //Propiedad dinámica. Accede a todos los name de userData y almacena el value.
    newUserData[name] = value;
    setUserData(newUserData)
  }

  const onSubmit = (e) => {
    e.prevent.default();
    props.onSubmit(userData);
  }

  return <form className="order-form" onSubmit={onSubmit}>
    <label>Nombre:</label>
    <input 
      type='text' 
      name="name" 
      placeholder='Tu nombre' 
      onChange={onHanldeChange}
      value={userData.name}
      required
    />
    <label>Email:</label>
    <input 
      type='email' 
      name="email" 
      placeholder='Tu email'
      onChange={onHanldeChange}
      value={userData.email} 
      required
    />
    <label>Teléfono:</label>
    <input 
      type='phone' 
      name="phone" 
      placeholder='Tu numero'
      onChange={onHanldeChange}
      value={userData.phone}
      required
    />
    <button className='cvb done' onClick={onSubmit}>Terminar mi compra</button>
  </form>
}