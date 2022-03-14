import 'bulma/css/bulma.min.css';
import './App.scss';

import Product from './components/product/Product';
import { cars } from './cars';

function App() {
  return (
    <div className="App">
      <div className="products">
        {cars.map((car, index) => <Product key={index} product={car} />)}
      </div>
    </div>
  );
}

export default App;
