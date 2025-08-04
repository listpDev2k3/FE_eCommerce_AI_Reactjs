import React, { useState, useEffect } from "react";
import api from "../../services/api.js";
import styles from "./ProductDetail.module.scss";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeOwlDot, setActiveOwlDot] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState("");
  const { id } = useParams();
  
  console.log('Product ID from URL:', id); // Debug ID
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        console.log('Fetching product with ID:', id);
        
        // Dùng filter để tìm theo id
        const response = await api.get(`/products-books?filters[id][$eq]=${id}&populate=*`);
        console.log('API Response:', response.data);
        
        const productData = response.data.data[0]; // Lấy phần tử đầu tiên từ array
        
        if (!productData) {
          setError("Không tìm thấy sản phẩm");
          return;
        }
        
        // Map data từ Strapi sang format component cần
        const mappedProduct = {
          id: productData.id,
          documentId: productData.documentId,
          name: productData.title,
          title: productData.title,
          price: productData.price,
          discount: productData.discount,
          author: productData.author,
          publisher: productData.publisher,
          year: productData.year,
          language: productData.language,
          pages: productData.pages,
          format: productData.format,
          dimensions: productData.dimensions,
          weight: productData.weight,
          supplier: productData.supplier,
          category: productData.category,
          tags: productData.tags,
          mainImage: productData.mainImage?.url ? `http://localhost:1337${productData.mainImage.url}` : "/assets/image/english.jpg",
          sliderImages: productData.sliderImages?.map(img => `http://localhost:1337${img.url}`) || ["/assets/image/english.jpg"],
          description: productData.description?.[0]?.children?.[0]?.text || "Chưa có mô tả"
        };
        
        console.log('Mapped product:', mappedProduct);
        setProduct(mappedProduct);
        setActiveImg(mappedProduct.mainImage);
      } catch (err) {
        console.error('API Error:', err);
        setError("Không thể lấy thông tin sản phẩm");
      } finally {
        setLoading(false);
      }
    };
    
    if (id) fetchProduct();
  }, [id]);

  // Điều khiển số lượng
  const onChangeQuantity = (signal) => {
    setQuantity((prev) => {
      if (signal === "UP") return prev + 1;
      if (signal === "DOWN" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const getUrlMainImg = (index) => {
    setActiveImg(product.sliderImages[index]);
    setActiveOwlDot(index);
  };

  if (loading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Lỗi: {error}</h2>
        <button onClick={() => window.history.back()}>Quay lại</button>
      </div>
    );
  }

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.section__top}>
          <div className={styles.about_product_breadcrumb}>
            {["Thông tin sản phẩm", "Chi tiết", "Thông số"].map(
              (tab, index) => (
                <div
                  key={index}
                  className={activeIndex === index ? styles.active : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {tab}
                </div>
              )
            )}
          </div>
          <div className={styles.section__top_bill}>
            <span>
              Giá từ <b>{product.price.toLocaleString()} VND</b>
            </span>
            <div className={styles.section__top_bill_quantity}>
              <span>{quantity}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "scaleY(-1)" }}
                onClick={() => onChangeQuantity("UP")}
              >
                <path
                  d="M10 5.76923L8 7.76923L6 5.76923"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => onChangeQuantity("DOWN")}
              >
                <path
                  d="M10 5.76923L8 7.76923L6 5.76923"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <button>Đặt hàng</button>
            <button>
              Thanh Toán
            </button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.product_detai}>
            <div className={styles.product_detai_wrapper}>
              <div className={styles.pape_breadcrumb}>
                <span>Trang chủ &gt;  </span>
                <span> &gt;  {product.category}</span>
                <span> &gt; {product.name}</span>
              </div>
              <h3>{product.name}</h3>
              <p>Hãy là người đầu tiên đánh giá sản phẩm này</p>
              {activeIndex === 0 && <div>{product.description}</div>}
              {activeIndex === 1 && (
                <div>
                  <p>
                    <strong>Nhà cung cấp:</strong> {product.supplier}
                  </p>
                  <p>
                    <strong>Tác giả:</strong> {product.author}
                  </p>
                  <p>
                    <strong>Nhà xuất bản:</strong> {product.publisher}
                  </p>
                  <p>
                    <strong>Năm xuất bản:</strong> {product.year}
                  </p>
                  <p>
                    <strong>Ngôn ngữ:</strong> {product.language}
                  </p>
                </div>
              )}
              {activeIndex === 2 && (
                <div>
                  <p>
                    <strong>Trọng lượng:</strong> {product.weight}g
                  </p>
                  <p>
                    <strong>Kích thước:</strong> {product.dimensions}
                  </p>
                  <p>
                    <strong>Số trang:</strong> {product.pages}
                  </p>
                  <p>
                    <strong>Định dạng:</strong> {product.format}
                  </p>
                </div>
              )}
              <div className={styles.product_detai_sku}>
                <span>
                  <b>Có câu hỏi?</b>{" "}
                  <span className="contact-link">Liên hệ chúng tôi</span>
                </span>
                <span>SKU: {product.id}</span>
              </div>
              <span className="more-info">+ Thông tin thêm</span>
            </div>
          </div>
          <div className={styles.product_image}>
            <img
              src={activeImg || product.mainImage}
              alt={product.name}
              className="main-image"
            />
            <div className={styles.icon_image}>
              <img src="/assets/icon/tym.svg" alt="Tym" />
              <img src="/assets/icon/opinion.svg" alt="Frame Icon" />
              <img src="/assets/icon/mail.svg" alt="Mail Icon" />
            </div>
            <div className={styles.owl__dots}>
              {product.sliderImages.map((img, index) => (
                <button
                  key={index}
                  className={activeOwlDot === index ? styles.activeOwlDot : ""}
                  onClick={() => getUrlMainImg(index)}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#0e0f10" }}>
        <div className={styles.baner_wrapper}>
          <div className={styles.title_baner}>
            <h3>{product.name}</h3>
            <span>{product.shortDesc}</span>
            <br />
            <span>{product.description}</span>
          </div>
        </div>
      </section>


    </>
  );
};

export default ProductDetail;
