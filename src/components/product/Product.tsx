import { Car } from '../../models/Car';
import { formatPrice } from '../../utils/formatPrice';
import './Product.scss';

type ProductProps = {
  product: Car;
  onAdd: (car: Car) => void;
}

const Product = ({
  product,
  onAdd,
}: ProductProps) => {
  const addToBasket = () =>
    onAdd(product)

  return (
    <div className="product card">
      <img src={product.imageUrl} alt={product.label} />
      <p className="label">{product.label}</p>
      <div className="price">{formatPrice(product.price)}</div>
      <button className="button" onClick={addToBasket}>Ajouter au panier</button>
    </div>
  )
}

export default Product;