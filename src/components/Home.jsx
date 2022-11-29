import { Cover } from './Cover';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

export const Home = () => {
  return <div className='home'>
   <Cover />
   <h3 className='subtitle'>Todas las pelis:</h3>
   <ItemListContainer />
  </div>
}
