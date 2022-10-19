import '../styles/itemListContainer.scss';

export const ItemListContainer = (props) => {
  return <div className="item-list-container">
    <h2>{props.greeting}</h2>
  </div>
}
