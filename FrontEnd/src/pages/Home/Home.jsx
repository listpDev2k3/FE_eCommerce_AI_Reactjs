import React, { useEffect, useState } from "react";
import BannerSlider from "../../components/BannerSlider/bannerSlider";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategorySection from "../../components/CategorySection/CategorySection";
import api from "../../services/api";
import styles from "./Home.module.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await api.get("/products-books?populate=*&pagination[limit]=100");
        console.log("All products:", res.data.data);
        setProducts(res.data.data);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];
  const newProducts = products.filter((p) => p.new === true);

  return (
    <div>
      <BannerSlider />
      <section className={styles.newProduct_container}>
        <h1>New Products</h1>
        <ProductCard products={newProducts} />
      </section>
      {categories.map((category) => (
        <CategorySection
          key={category}
          title={category}
          products={products.filter((p) => p.category === category)}
          heroImage={`/assets/image/${category}.jpg`}
          heroTitle={category}
        />
      ))}
    </div>
  );
};

export default Home;
