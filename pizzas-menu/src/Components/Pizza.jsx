const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredient}</p>
        <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span>
      </div>
    </li>
  );
};
export default Pizza;
