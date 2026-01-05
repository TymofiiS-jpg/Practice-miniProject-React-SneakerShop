import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.sneakerStore}>Сникер - Магазин</p>
      <div className={styles.navigation}>
        <NavLink
          to="/"
          end
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
      </div>
    </div>
  );
}

export default Header;
