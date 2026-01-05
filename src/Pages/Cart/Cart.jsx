import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://695bfe631d8041d5eeb9406c.mockapi.io/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cart.map((item) => (
            <div key={item.id} className={styles.Cycle}>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
