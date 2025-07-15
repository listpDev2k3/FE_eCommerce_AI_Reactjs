import React from "react";
import styles from "./ProductCard.module.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();

  const countProducts = products.length;
  console.log(countProducts);

  const handleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.product_list}>
      {products.map((product) => (
        <div key={product.id} className={styles.product_item}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.shortDesc}</p>
          <p>{product.price}</p>
          <button
            className={styles.button_productDetail}
            onClick={() => handleProduct(product.id)}
          >
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
