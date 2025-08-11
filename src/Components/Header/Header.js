import "./header.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../store/actions";
import { useState } from "react";

const Header = ({ className }) => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={className} id="header-id">
      <div id="first-child-header">
        <div id="buy-basket" className="color-text">
          <button
            onClick={() => dispatch({ type: actionTypes.SHOWSABAD })}
            title="سبد خرید"
            className="basket-btn"
          >
            <FiShoppingCart className="fiShoppingCart-class"/>
          </button>
        </div>
        <div id="log">
          <button
            onClick={() => dispatch({ type: actionTypes.VOROD })}
            className="color-text buttom-header-class"
          >
            ورود
          </button>
          /
          <button
            onClick={() => dispatch({ type: actionTypes.SABTNAME })}
            className="color-text buttom-header-class"
          >
            ثبت نام
          </button>
        </div>
        <button
          id="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="باز و بسته کردن منو"
        >
          ☰
        </button>
      </div>

      <nav id="nav-main" className={menuOpen ? "open" : ""}>
        <ul>
          <li>
            <Link className="color-text navli" to="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="color-text navli" to="/shop">
              فروشگاه
            </Link>
          </li>
          <li>
            <Link className="color-text navli" to="/contact-us">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link className="color-text navli" to="/questions">
              سوالات متداول
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
