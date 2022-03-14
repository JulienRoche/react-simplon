import './Product.scss';

const Product = () => {
  return (
    <div className="product card">
      <img src="/products/audi-e-tron.jpeg" />
      <p className="label">Audi RS e-tron GT 598ch</p>
      <div className="price">156900 €</div>
      <button className="button">Ajouter au panier</button>
    </div>
  )
}

export default Product;