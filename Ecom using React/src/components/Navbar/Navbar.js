import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import "./Navbar.css";

function Navbar(props) {
  const [{ cart }] = useStateValue();

  return (
    <nav className="navbar">
      <ul>
        <Link className="heading" to="/">
          Ecommerce
        </Link>
        <li>Home</li>
        <li>About</li>
      </ul>
      <div className="search">
        <input
          onChange={e => props.setSearchProduct(e.target.value)}
          value={props.searchProduct}
          className="input"
          type="search"
          placeholder="search"
        />
        <span>
          <button>Search</button>
        </span>
      </div>

      <div className="cart">
        <Link to="/checkout" className="link">
          Cart{cart?.length}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
