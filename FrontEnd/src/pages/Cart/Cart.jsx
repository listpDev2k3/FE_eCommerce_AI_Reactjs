import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, emptyCart } from "../../store/cart/cartSlice";
import styles from "./Cart.module.scss";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cart_container}>
      <h2>🛒 Giỏ hàng</h2>
      {items.length === 0 ? (
        <div className={styles.empty_cart}>
          <p>Giỏ hàng trống</p>
          <button className={styles.continue_shopping}>
            Tiếp tục mua sắm
          </button>
        </div>
      ) : (
        <>
          <div className={styles.cart_items}>
            {items.map((item) => (
              <div key={item.id} className={styles.cart_item}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={styles.item_image}
                />
                <div className={styles.item_details}>
                  <h3>{item.name}</h3>
                  <div className={styles.item_price}>
                    {item.price.toLocaleString()}đ
                  </div>
                </div>
                <div className={styles.item_quantity}>
                  <button className={styles.quantity_btn}>-</button>
                  <span>{item.quantity}</span>
                  <button className={styles.quantity_btn}>+</button>
                </div>
                <button 
                  className={styles.remove_btn}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Xoá
                </button>
              </div>
            ))}
          </div>
          
          <div className={styles.cart_summary}>
            <div className={styles.total_row}>
              <span className={styles.total_label}>Tổng cộng:</span>
              <span className={styles.total_amount}>
                {total.toLocaleString()}đ
              </span>
            </div>
            <div className={styles.cart_actions}>
              <button 
                className={styles.clear_cart_btn}
                onClick={() => dispatch(emptyCart())}
              >
                Xoá toàn bộ
              </button>
              <button className={styles.checkout_btn}>
                Thanh toán
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
