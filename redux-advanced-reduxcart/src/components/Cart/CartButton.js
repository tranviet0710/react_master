import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const number = useSelector(state => state.cart.items.length);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      {number > 0 && <span className={classes.badge}>{number}</span>}
    </button>
  );
};

export default CartButton;
