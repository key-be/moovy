import './styles/global.scss';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer 
        greeting="Bienvenidos a Moovy!"
      />
    </div>
  );
}

export default App;
