import './styles/global.scss';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer';
//import { ItemsCounter } from './components/ItemsCounter';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext.jsx';
import { CartView } from './components/CartView/CartView';

import {exportItemsToFirestrore, getSingleItemFromAPI}  from './firebase/firebase';
import { Checkout } from './components/CartView/Checkout';

function App() {
  getSingleItemFromAPI('mKWMV1u2fsslNk5KAbUb')
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartView/>} />
            <Route path='/checkout/:orderId' element={<Checkout/>} />
            <Route path='*' element={<h1>404 Ruta no encontrada</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
