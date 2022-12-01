import './styles/global.scss';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from './context/CartContext.jsx';
import { CartView } from './components/CartView/CartView';
import { Checkout } from './components/CartView/Checkout';
import { Home } from './components/Home';
import { UrlNotFound } from './components/UrlNotFound';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartView/>} />
            <Route path='/checkout/:orderId' element={<Checkout/>} />
            <Route path='*' element={<UrlNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
