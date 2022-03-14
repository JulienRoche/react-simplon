import './Header.scss';

type HeaderProps = {
  countCartItems: number;
}

const Header = ({
  countCartItems,
}: HeaderProps) => {

  return (
    <div className="header">
      <h1 className="is-size-3">Mon site de voiture pas cher</h1>
      {countCartItems > 0 && (<div className="tag is-danger">{countCartItems}</div>)}
    </div>
  )
}

export default Header;