import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://695bfe631d8041d5eeb9406c.mockapi.io/acrticles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (item) => {
    axios
      .post("https://695bfe631d8041d5eeb9406c.mockapi.io/cart", item)
      .then((res) => console.log("Добавлено в корзину:", res.data))
      .catch((err) => console.error(err));
  };

  if (loading) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>Главная</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {articles.map((item) => (
          <Card key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
