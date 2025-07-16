import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
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
    <header className={`${styles.header} ${styles.max_width}`}>
      <div className={styles.header__top}>
        <div className={styles.header__top_wrap}>
          <div>
            <span>
              Mon-Thu: <span style={{ color: "white" }}>9:00 AM - 5:30 PM</span>
            </span>
          </div>

          <div>
            Visit our showroom in 19 Nguyễn Du, P7, Gò Vấp, TPHCM
            <a href="tel:0987556203">Contact Us</a>
          </div>

          <div>
            Call Us: 0987556203
            <div className={styles.wrap_icon_fb_instag}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icon/facebook.svg"
                  alt="Facebook"
                  width="20"
                  height="20"
                  className={styles.header__top_iconFacebook}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icon/instagram.svg"
                  alt="Instagram"
                  width="20"
                  height="20"
                  className={styles.header__top_iconInstagram}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header__last}>
        <div className={styles.header__last__container}>
          <img
            src="/assets/image/logo.png"
            alt="Logo"
            width="60"
            height="60"
            className={styles.header__logo}
          />

          <nav className={styles.nav}>
            <a href="/">Books</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
          </nav>

          <div
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav
            className={`${styles.mobile_nav} ${
              mobileMenuOpen ? styles.active : ""
            }`}
          >
            <a href="/">Books</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
          </nav>

          <div className={styles.header__last__cartUser}>
            <div className={styles.search_input_wrapper}>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearchKeyPress}
              />
              <img
                src="/assets/icon/gg_search.svg"
                alt="search icon"
                width="24"
                height="24"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className={styles.cart_icon_wrapper}>
              <img
                src="/assets/icon/shopping-cart.svg"
                alt="Cart"
                width="28"
                height="28"
                style={{ cursor: "pointer" }}
              />
            </div>

            <div>
              <img
                src="/assets/image/avataUser.svg"
                alt="User"
                width="36"
                height="36"
                onClick={handleUserClick}
                style={{ cursor: "pointer" }}
              />
              {showUserDropdown && (
                <div className={styles.user_dropdown}>
                  <span>
                    <a href="">Tài khoản của tôi</a>
                  </span>
                  <span>
                    <a href="/favorites">Danh sách yêu thích</a>
                  </span>
                  <span>
                    <a href="">So sánh</a>
                  </span>
                  <span>
                    <a href="">Đăng nhập</a>
                  </span>
                  <span>
                    <a href="">Lịch sử tìm kiếm</a>
                  </span>
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
