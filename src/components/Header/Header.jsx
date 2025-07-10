import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import fbIcon from "../../../public/assets/icon/facebook.svg";
import intaIcon from "../../../public/assets/icon/instagram.svg";
import searchIcon from "../../../public/assets/icon/gg_search.svg";
import logo from "../../../public/assets/image/Logo.jpg";
import cart from "../../../public/assets/icon/shopping-cart.svg";
import userImg from "../../../public/assets/image/avataUser.svg";
const Header = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  // Chưa lấy data từ search . 
  const [searchHistory, setSearchHistory] = useState([
    "Sách toán lớp 9",
    "Tiếng anh giao tiếp",
    "Vật lý cơ bản",
  ]);
  const dropdownRef = useRef(null);

  const handleUserClick = () => {
    setShowUserDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.header_contaner}>
      <div className={styles.header_top}>
        <div>
          <img src={logo} alt="Biểu tượng logo" width="100" height="100" />
          <nav>
            <a className={styles.nav_items} href="">
              Home
            </a>
            <a className={styles.nav_items} href="">
              Books
            </a>
            <a className={styles.nav_items} href="">
              About
            </a>
          </nav>
          <div>
            Call Us: 0987556203
            <div className={styles.wrap_icon_fb_instag}>
              <a href="https://www.facebook.com" target="_blank" rel="">
                <img
                  src={fbIcon}
                  alt="Biểu tượng Facebook"
                  width="20"
                  height="20"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="">
                <img
                  src={intaIcon}
                  alt="Biểu tượng Instagram"
                  width="20"
                  height="20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header_bottom}>
        <div className={styles.wrap_search}>
          <img
            src={searchIcon}
            alt="Biểu tượng Search"
            width="20"
            height="20"
          />
          <input type="text" placeholder="Sách tiếng anh lớp 10 ..." />
        </div>
        <div className={styles.wrap_cartUser}>
          <div className={styles.cart}>
            <img src={cart} alt="Icon Cart" width={32} height={32} />
          </div>
          <div
            className={styles.user}
            onClick={handleUserClick}
            ref={dropdownRef}
          >
            <img
              src={userImg}
              alt="Hình đại diện Người dùng"
              width={32}
              height={32}
            />
            {showUserDropdown && (
              <div className={styles.user_dropdown}>
                <a href="/account">Tài khoản của tôi</a>
                <a href="/wishlist">Danh sách yêu thích</a>
                <a href="/compare">So sánh</a>
                <a href="/login">Đăng nhập</a>
                <div className={styles.search_history}>
                  <h4>Lịch sử tìm kiếm</h4>
                  <ul>
                    {searchHistory.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
