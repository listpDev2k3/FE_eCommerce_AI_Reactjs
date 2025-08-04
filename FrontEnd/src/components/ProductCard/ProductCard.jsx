import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.product_list}>
      {products.map((product) => {
        return (
          <div key={product.id} className={styles.product_item}>
            <div className={styles.overlay}></div>
            <div className={styles.favorite_icon}>
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
              <button className={styles.button_productDetail}>
                Xem chi tiết
              </button>
              <button
                className={styles.button_addToCart}
                onClick={() => {
                  console.log('🚀 Dispatch addToCart với product:', product);
                  dispatch(addToCart(product));
                  console.log('✅ Dispatch hoàn thành');
                }}
              >
                + Giỏ hàng
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
