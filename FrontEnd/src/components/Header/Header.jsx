import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchInput.trim()) {
      setSearchHistory((prev) => [searchInput, ...prev.slice(0, 9)]);
      setSearchInput("");
    }
  };

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.header__top}>
        <div className={styles.header__top_wrap}>
          <div>
            <span>
              Mon-Thu: <span style={{ color: "white" }}>9:00 AM - 5:30 PM</span>
            </span>
          </div>
          <div>
            Visit our showroom in 19 Nguyễn Du, P7, Gò Vấp, TPHCM
            <a href="tel:0987556203"> | Contact Us</a>
          </div>
          <div>
            Call Us: 0987556203
            <div className={styles.wrap_icon_fb_instag}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icon/facebook.svg" alt="Facebook" width="20" height="20" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icon/instagram.svg" alt="Instagram" width="20" height="20" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={styles.header__main}>
        <div className={styles.header__main_container}>
          
          <Link to="/" className={styles.logo}>
            <img src="/assets/image/logo.png" alt="Logo" />
          </Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.nav_link_home}>Trang chủ</Link>
            <Link to="/favorites">Yêu thích</Link>
            <Link to="/cart">Giỏ hàng</Link>
            <Link to="/add-book">Thêm sách</Link>
            <Link to="/history">Lịch sử</Link>
          </nav>

          {/* Mobile hamburger */}
          <div
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile nav */}
          <nav className={`${styles.mobile_nav} ${mobileMenuOpen ? styles.active : ""}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Trang chủ</Link>
            <Link to="/favorites" onClick={() => setMobileMenuOpen(false)}>Yêu thích</Link>
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Giỏ hàng</Link>
            <Link to="/add-book" onClick={() => setMobileMenuOpen(false)}>Thêm sách</Link>
            <Link to="/history" onClick={() => setMobileMenuOpen(false)}>Lịch sử</Link>
          </nav>

          {/* Right side: Search, Cart, User */}
          <div className={styles.header__actions}>
            {/* Search */}
            <div className={styles.search_wrapper}>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearchKeyPress}
                className={styles.search_input}
              />
              <button className={styles.search_btn}>
                <img src="/assets/icon/gg_search.svg" alt="search" width="20" height="20" />
              </button>
            </div>

            {/* Cart */}
            <Link to="/cart" className={styles.cart_wrapper}>
              <img src="/assets/icon/shopping-cart.svg" alt="Cart" width="24" height="24" />
              {totalItems > 0 && (
                <span className={styles.cart_badge}>{totalItems}</span>
              )}
            </Link>

            {/* User */}
            <div className={styles.user_wrapper} ref={dropdownRef}>
              <img
                src="/assets/image/avataUser.svg"
                alt="User"
                width="32"
                height="32"
                onClick={handleUserClick}
                className={styles.user_avatar}
              />
              {showUserDropdown && (
                <div className={styles.user_dropdown}>
                  <Link to="/profile">Tài khoản của tôi</Link>
                  <Link to="/favorites">Danh sách yêu thích</Link>
                  <Link to="/compare">So sánh</Link>
                  <Link to="/login">Đăng nhập</Link>
                  <Link to="/history">Lịch sử tìm kiếm</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
