import React, { useEffect, useState } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";


const Home = () => {
  // const [products, setProducts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("");
  // const [loadingSuggest, setLoadingSuggest] = useState(false);
  // const [modalProduct, setModalProduct] = useState(null);

  // useEffect(() => {
  //   setProducts(mockProducts); 
  // }, []);

  // // Lọc theo tên và giá
  // const filtered = products.filter(
  //   (p) =>
  //     p.name.toLowerCase().includes(search.toLowerCase()) &&
  //     (filter === "" ||
  //       (filter === "<500K" && p.price < 500000) ||
  //       (filter === "500K–1M" && p.price >= 500000 && p.price <= 1000000) ||
  //       (filter === ">1M" && p.price > 1000000))
  // );

  return (
    <div>
      {/* <FilterBar value={filter} onChange={setFilter} />
      <ProductList products={filtered} onViewDetail={setModalProduct} />
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )} */}
      <h1>Home</h1>
    </div>
  );
};
export default Home;