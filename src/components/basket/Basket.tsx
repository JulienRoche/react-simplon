import { totalmem } from 'os';
import { Car } from '../../models/Car';
import { CartItem } from '../../models/CartItem';
import { formatPrice } from '../../utils/formatPrice';
import './Basket.scss';

type BasketProps = {
  cartItems: CartItem[];
  onAdd: (car: Car) => void;
  onRemove: (car: Car) => void;
}

const Basket = ({
  cartItems,
  onAdd,
  onRemove,
}: BasketProps) => {

  const total = () =>
    cartItems.reduce((totalPrice, cartItem) => (cartItem.car.price * cartItem.quantity) + totalPrice, 0)

  return (
    <div className="basket">
      {cartItems.length === 0 && (<p>Le panier est vide.</p>)}
      {cartItems.map(({ car, quantity }, index) => (
        <div key={index} className="row">
          <img src={car.imageUrl} className="image" />
          <div className="full">
            <div className="label">{car.label}</div>
            <div className="price">{car.price}</div>
          </div>
          <div className="actions">
            <button className="button" onClick={() => onAdd(car)}>+</button>
            <button className="button" onClick={() => onRemove(car)}>-</button>
          </div>
          <div className="quantity">{quantity}</div>
          <div className="finalPrice">{formatPrice(quantity * car.price)}</div>
        </div>
      ))}
      <div className="total">TOTAL : {formatPrice(total())}</div>
    </div>
  )
}

export default Basket;