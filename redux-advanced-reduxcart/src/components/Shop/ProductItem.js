import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addToCart } from '../../store/cart';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props.product;
  const addToCartHandler = () => {
    dispatch(addToCart({ ...props.product, total: price, quantity: 1 }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
