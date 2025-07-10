import React, { use } from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ products }) => {
  const countProducts = products.length
  console.log(countProducts)
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.shortDesc}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
