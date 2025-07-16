import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductCard = ({ products }) => {
  const navigate = useNavigate();

  const handleProduct = (id) => {
    navigate(`/product/${id}`);
  };
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const isRemoving = prev.includes(productId);
      const updated = isRemoving
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      localStorage.setItem("favorites", JSON.stringify(updated));

      // Tạo ID khác nhau cho 2 trạng thái
      const toastId = `favorite-toast-${productId}-${
        isRemoving ? "remove" : "add"
      }`;

      if (!toast.isActive(toastId)) {
        if (isRemoving) {
          toast.warning("Đã xoá khỏi danh sách yêu thích", {
            toastId,
            autoClose: 1500,
          });
        } else {
          toast.success("Đã thêm vào danh sách yêu thích", {
            toastId,
            autoClose: 1500,
          });
        }
      }

      return updated;
    });
  };

  return (
    <div className={styles.product_list}>
      {products.map((product) => {
        const isFavorited = favorites.includes(product.id);
        return (
          <div key={product.id} className={styles.product_item}>
            <div className={styles.overlay}></div>
            <div
              className={`${styles.favorite_icon} ${
                isFavorited ? styles.active : ""
              }`}
              onClick={() => toggleFavorite(product.id)}
            >
              <img src="/assets/icon/tym.svg" alt="Yêu thích" />
            </div>

            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.shortDesc}</p>
            <p className={styles.price}>
              {typeof product.price === "number"
                ? product.price.toLocaleString("vi-VN") + "đ"
                : "Liên hệ"}
            </p>

            <div className={styles.actionButtons}>
              <button
                className={styles.button_productDetail}
                onClick={() => handleProduct(product.id)}
              >
                Xem chi tiết
              </button>
              <button className={styles.button_addToCart}>+ Giỏ hàng</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
