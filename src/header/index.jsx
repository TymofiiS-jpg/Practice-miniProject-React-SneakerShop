import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.navbar} ${isActive ? styles.active : ""}`
          }
        >
          Главная
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${styles.navbar} ${isActive ? styles.active : ""}`
          }
        >
          Корзина
        </NavLink>

        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `${styles.navbar} ${isActive ? styles.active : ""}`
          }
        >
          Контакты
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
