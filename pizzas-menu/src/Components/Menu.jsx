import Pizza from './Pizza';
import { pizzaData } from '../data';

const Menu = () => {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6creative dishes to choose from. All from
            our stone oven, all orgaic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are currently working on menu, Please check after some time.</p>
      )}
    </div>
  );
};
export default Menu;
