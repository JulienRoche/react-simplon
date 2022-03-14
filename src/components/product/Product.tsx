import { Car } from '../../models/Car';
import './Product.scss';

type ProductProps = {
  product: Car;
}

const Product = (props: ProductProps) => {
  const formatPrice = (): string =>
    props.product.price.toLocaleString() + " €";

  return (
    <div className="product card">
      <img src={props.product.imageUrl} alt={props.product.label} />
      <p className="label">{props.product.label}</p>
      <div className="price">{formatPrice()}</div>
      <button className="button">Ajouter au panier</button>
    </div>
  )
}

export default Product;