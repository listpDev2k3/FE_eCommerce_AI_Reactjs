import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import api from "../../services/api.js";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.home_container}>
      <h1>Sản phẩm mới nhất</h1>
      <div className={styles.product_grid}>
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default Home;
