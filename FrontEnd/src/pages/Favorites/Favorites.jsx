import React, { useEffect, useState } from "react";
import api from "../../services/api.js";
import styles from "./Favorites.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const Favorites = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = "user123";

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteIds(saved);
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const requests = favoriteIds.map((id) => api.get(`/products/${id}`));
        const responses = await Promise.all(requests);
        const data = responses.map((res) => res.data);
        setFavoriteProducts(data);
      } catch (err) {
        setError("Không thể lấy danh sách sản phẩm yêu thích.");
      } finally {
        setLoading(false);
      }
    };

    if (favoriteIds.length > 0) {
      fetchFavorites();
    } else {
      setFavoriteProducts([]);
      setLoading(false);
    }
  }, [favoriteIds]);

  const handleGetSuggestions = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/suggestions?userId=${userId}`);
      setSuggestedProducts(res.data);
    } catch (err) {
      setError("Không thể lấy gợi ý lúc này.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.favorites_container}>
      <h2>Sản phẩm yêu thích</h2>

      {loading ? (
        <p>Đang tải...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {favoriteProducts.length === 0 ? (
            <p>Chưa có sản phẩm nào được yêu thích.</p>
          ) : (
            <>
              <h3>Đã yêu thích</h3>
              <ProductCard products={favoriteProducts} />
            </>
          )}
          <button
            className={styles.suggestion_button}
            onClick={handleGetSuggestions}
          >
            Gợi ý sản phẩm phù hợp
          </button>
          {suggestedProducts.length > 0 && (
            <>
              <h3>Gợi ý cho bạn</h3>
              <ProductCard products={suggestedProducts} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Favorites;
