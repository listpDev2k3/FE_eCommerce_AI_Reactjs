import React from 'react';
import styles from './CategorySection.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const CategorySection = ({ title, products, heroImage, heroTitle }) => {
  return (
    <section className={styles.category_section}>
      <h2 className={styles.section_title}>{title}</h2>
      
      <div className={styles.category_grid}>
        {/* Hero Card */}
        <div className={styles.hero_card}>
          <img src={heroImage} alt={heroTitle} />
          <div className={styles.hero_content}>
            <h3>{heroTitle}</h3>
            <p>Khám phá bộ sưu tập</p>
            <button>Xem tất cả</button>
          </div>
        </div>

        <ProductCard products={products} />
        
      </div>
    </section>
  );
};

export default CategorySection;