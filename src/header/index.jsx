import styles from "./styles.module.css";
import { useState } from "react";
function Header() {
  const [active, setActive] = useState("home");

  return (
    <div className={styles.headerContainer}>
      <p className={styles.sneakerStore}>Сникер - Магазин</p>
      <div className={styles.navigation}>
        <p
          className={`${styles.navbar} ${
            active === "home" ? styles.active : ""
          }`}
          onClick={() => setActive("home")}
        >
          Главная
        </p>

        <p
          className={`${styles.navbar} ${
            active === "cart" ? styles.active : ""
          }`}
          onClick={() => setActive("cart")}
        >
          Корзина
        </p>

        <p
          className={`${styles.navbar} ${
            active === "contacts" ? styles.active : ""
          }`}
          onClick={() => setActive("contacts")}
        >
          Контакты
        </p>
      </div>
    </div>
  );
}
export default Header;
