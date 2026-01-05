import React from "react";
import styles from "./styles.module.css";
function Card({ item, onAddToCart }) {
  return (
    <div className={styles.container}>
      <img src={item.imageUrl} alt={item.title} className={styles.image} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <button onClick={() => onAddToCart(item)}>Добавить в корзину</button>
    </div>
  );
}

export default Card;
