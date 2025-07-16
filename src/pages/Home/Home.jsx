import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import api from "../../services/api.js";
import styles from "./Home.module.scss";
import classNames from "classnames";

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

  const clearAllFilters = () => {
    setSelectedPriceFilter(null);
    setSelectedCategory(null);
  };

  const totalProducts = (products, priceProduct) => {
    switch (priceProduct) {
      case "0to200":
        return products.filter((p) => p.price <= 200000).length;
      case "200to500":
        return products.filter((p) => p.price > 200000 && p.price <= 500000)
          .length;
      case "500to1mil":
        return products.filter((p) => p.price > 500000 && p.price < 1000000)
          .length;
      case "1000to1500":
        return products.filter((p) => p.price >= 1000000 && p.price <= 1500000)
          .length;
      case "above1500":
        return products.filter((p) => p.price > 1500000).length;
      default:
        return 0;
    }
  };

  const filterProducts = (products, priceFilter) => {
    let result = [...products];
    switch (priceFilter) {
      case "0to200":
        result = result.filter((p) => p.price <= 200000);
        break;
      case "200to500":
        result = result.filter((p) => p.price > 200000 && p.price <= 500000);
        break;
      case "500to1mil":
        result = result.filter((p) => p.price > 500000 && p.price < 1000000);
        break;
      case "1000to1500":
        result = result.filter((p) => p.price >= 1000000 && p.price <= 1500000);
        break;
      case "above1500":
        result = result.filter((p) => p.price > 1500000);
        break;
    }
    return result;
  };

  const filteredProducts = filterProducts(products, selectedPriceFilter);

  return (
    <div className={styles.home_container}>
      <div className={styles.left__content_filters}>
        <h3>Filters</h3>
        <button
          onClick={clearAllFilters}
          className={classNames({
            [styles.active_clear]: selectedPriceFilter || selectedCategory,
          })}
        >
          Clear Filters
        </button>
        <div className={styles.left__content_filters_category}>
          <ul>
            <div>
              <h4>Category</h4>
              <img src="/assets/icon/down.svg" alt="DOWN ICON" />
            </div>
            <li>
              <span>Tiếng Anh</span>
              <span>10</span>
            </li>
            <li>
              <span>Toán Học</span>
              <span>10</span>
            </li>
            <li>
              <span>Vật Lý</span>
              <span>10</span>
            </li>
          </ul>
        </div>
        <div className={styles.left__content_filters_price}>
          <ul>
            <div>
              <h4>Price</h4>
              <img src="/assets/icon/down.svg" alt="DOWN ICON" />
            </div>
            {[
              { key: "0to200", label: "0 - 200.000đ" },
              { key: "200to500", label: "200.000đ - 500.000đ" },
              { key: "500to1mil", label: "500.000đ - 1.000.000đ" },
              { key: "1000to1500", label: "1.000.000đ - 1.500.000đ" },
              { key: "above1500", label: "Trên 1.500.000đ" },
            ].map((item) => (
              <li
                key={item.key}
                className={classNames({
                  [styles.active]: selectedPriceFilter === item.key,
                })}
                onClick={() => setSelectedPriceFilter(item.key)}
              >
                <span>{item.label}</span>
                <span>{totalProducts(products, item.key)}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          className={classNames(styles.applyButton, {
            [styles.activeApply]: selectedPriceFilter || selectedCategory,
          })}
        >
          Apply Filters
        </button>
      </div>

      <div className={styles.product_grid}>
        {(selectedPriceFilter || selectedCategory) && (
          <div className={styles.selectedFiltersBox}>
            <span>
              Filter: {selectedPriceFilter === "0to200" && "0 - 200.000đ"}
              {selectedPriceFilter === "200to500" && "200.000đ - 500.000đ"}
              {selectedPriceFilter === "500to1mil" && "500.000đ - 1.000.000đ"}
              {selectedPriceFilter === "1000to1500" &&
                "1.000.000đ - 1.500.000đ"}
              {selectedPriceFilter === "above1500" && "Trên 1.500.000đ"}
            </span>

            <button onClick={clearAllFilters} className={styles.clearBoxBtn}>
              Clear All
            </button>
          </div>
        )}
        <ProductCard products={filteredProducts} />
      </div>
    </div>
  );
};
export default Home;
