import { useState, createContext } from "react";
//1 - Inciamos Context con CreateContext

export const cartContext = createContext();

//2 - Definimos nuestro provider
export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (itemData) => {
    let itemFound = cart.find( itemInCart => itemInCart.id === itemData.id)

    if(itemFound){
      let newCart = cart.map(itemInCart => {
        if(itemInCart.id === itemData.id){
          itemInCart.quantity += itemData.quantity
          return itemInCart
        } else {
          return itemInCart 
        }
      })
      setCart(newCart)
    } else {
      const newCart = [...cart]
      newCart.push(itemData)
      setCart(newCart)
    }
  }

  const itemsInCart = () => {
    let total = 0
    cart.forEach( (itemIncart) => {
      total = itemIncart.quantity + total
    })
    return total; 
  }

  const totalPriceInCart = () => {
    let finalPrice = 0

    cart.forEach( price  => {
      let finalPriceByItem = price.price * price.quantity
      finalPrice = finalPriceByItem + finalPrice
    })
    return finalPrice
  }

  const removeItem = (itemId) => {
    setCart(cart.filter( r => r.id !== itemId))
  }

  const clear = () => {
    setCart([])
  }
  
  const value = {
    cart,
    addToCart,
    itemsInCart,
    removeItem,
    clear,
    totalPriceInCart
  }

  // 3 - Creamos el "value" para los componentes que consuman el context

  return (
    //4 - Retornamos el context provider con el value creado
    <cartContext.Provider value={value}>
      {props.children}
    </cartContext.Provider>
  )
}


