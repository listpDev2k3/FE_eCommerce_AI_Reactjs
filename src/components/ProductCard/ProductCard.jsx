import React from 'react'

import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => (
  <div className={styles.card}>
    {/* <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.shortDesc}</p>
    <button>Xem chi tiết</button> */}
    <h1>product</h1>
  </div>
);

export default ProductCard
