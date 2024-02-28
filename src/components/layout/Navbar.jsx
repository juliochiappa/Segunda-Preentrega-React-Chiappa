import { CartWidget } from '../common/CartWidget';
import { Link } from "react-router-dom";
import "./Navbar.css"; 

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img
        src="https://res.cloudinary.com/daiikhnag/image/upload/v1707272308/images_gesb63.jpg"
        alt="Logo del Centro de Estética"
        className="logo"
      />
      <h1>C.I.E.C.</h1>
      <ul className="nav-list">
      <Link to="/">
        <li>Inicio</li>
        </Link>
        <Link to="/category/aparatos">
        <li>Aparatología</li>
        </Link>
        <Link to="/category/tratamientos">
        <li>Tratamientos Varios</li>
        </Link>
        <Link to="/category/kit">
        <li>Kit de Productos Faciales</li>
        </Link>
      </ul>
      <h5>Carrito</h5>
      <Link to="/cart">
      <CartWidget />
      </Link>
    </div>
  );
};
