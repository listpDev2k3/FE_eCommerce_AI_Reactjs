import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import api from "../../services/api.js";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  const filterProducts = (products, priceFilter, categoryFilter) => {
    let result = [...products];

    if (priceFilter) {
      switch (priceFilter) {
        case "0to200":
          result = result.filter((p) => p.price <= 200000);
          break;
        case "200to500":
          result = result.filter((p) => p.price > 200000 && p.price <= 500000);
          break;
        case "1000to1500":
          result = result.filter(
            (p) => p.price >= 1000000 && p.price <= 1500000
          );
          break;
        case "above1500":
          result = result.filter((p) => p.price > 1500000);
          break;
      }
    }

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    return result;
  };

  const filteredProducts = filterProducts(
    products,
    selectedPriceFilter,
    selectedCategory
  );

  return (
    <div className={styles.home_container}>
      <div className={styles.left__content_filters}>
        <h3>Filters</h3>
        <button>Clear Filters</button>
        <div className={styles.left__content_filters_category}>
          <ul>
            <div>
              <h4>Category</h4>
              <img src="/assets/icon/down.svg" alt="DOWN ICON" />
            </div>
            <li onClick={() => setSelectedCategory("Tiếng Anh")}>
              <span>Tiếng Anh</span>
            </li>
            <li onClick={() => setSelectedCategory("Toán học")}>
              <span>Toán Học</span>
            </li>
            <li onClick={() => setSelectedCategory("Vật Lý")}>
              <span>Vật Lý</span>
            </li>
          </ul>
        </div>
        <div className={styles.left__content_filters_price}>
          <ul>
            <div>
              <h4>Price</h4>
              <img src="/assets/icon/down.svg" alt="DOWN ICON" />
            </div>
            <li onClick={() => setSelectedPriceFilter("0to200")}>
              <span>0 - 200.000đ</span>
              <span>15</span>
            </li>
            <li onClick={() => setSelectedPriceFilter("200to500")}>
              <span>200.000đ - 500.000đ</span>
              <span>45</span>
            </li>
            <li onClick={() => setSelectedPriceFilter("500to1mil")}>
              <span>500.000đ - 1.000.000đ</span>
              <span>15</span>
            </li>
            <li onClick={() => setSelectedPriceFilter("1000to1500")}>
              <span>1.000.000đ - 1.500.000đ</span>
              <span>1</span>
            </li>
            <li onClick={() => setSelectedPriceFilter("above1500")}>
              <span>Trên 1.500.000đ</span>
              <span>1</span>
            </li>
          </ul>
        </div>
        <button>Apply Filters (2)</button>
      </div>
      <div className={styles.product_grid}>
        <ProductCard products={filteredProducts} />
      </div>
    </div>
  );
};

export default Home;
