import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  
  return (
    <div className={styles.product_list}>
      {products.map((product) => (
        <div key={product.id} className={styles.product_item}>
          <div className={styles.overlay}></div>
          <div className={styles.favorite_icon}>
            <img src="/assets/icon/tym.svg" alt="Yêu thích" />
          </div>

          <img 
            src={`http://localhost:1337${product.mainImage?.url}`} 
            alt={product.title}
            onError={(e) => {
              e.target.src = "/assets/image/english.jpg";
            }}
          />
          <h3>{product.title}</h3>
          <p>
            {product.shortDesc ||
              product.description?.[0]?.children?.[0]?.text?.substring(
                0,
                100
              ) + "..."}
          </p>
          <p className={styles.price}>
            {product.price
              ? product.price.toLocaleString("vi-VN") + "đ"
              : "Liên hệ"}
          </p>

          <div className={styles.actionButtons}>
            <Link to={`/product/${product.id}`} className={styles.button_productDetail}>
              Xem chi tiết
            </Link>
            <button
              className={styles.button_addToCart}
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              + Giỏ hàng
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
