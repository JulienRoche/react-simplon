import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

import Product from './components/product/Product';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import { cars } from './cars';
import { CartItem } from './models/CartItem';
import { Car } from './models/Car';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const onAdd = (car: Car) => {
    const exist = cartItems.some((cartItem) => cartItem.car.id === car.id);

    if (exist) {
      setCartItems(
        cartItems?.map((cartItem) =>
          cartItem.car.id === car.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      )
    } else {
      setCartItems([
        ...cartItems,
        {
          car: car,
          quantity: 1
        }
      ])
    }
  }

  const onRemove = (car: Car) => {
    const exist = cartItems.find((cartItem) => cartItem.car.id === car.id);

    if (exist?.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.car.id !== car.id))
    } else {
      setCartItems(
        cartItems?.map((cartItem) =>
          cartItem.car.id === car.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      )
    }
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <div className="products">
        {cars.map((car) => <Product key={car.id} product={car} onAdd={onAdd} />)}
      </div>
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}

export default App;
