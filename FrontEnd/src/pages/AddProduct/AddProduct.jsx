import React, { useState } from "react";
import api from "../../services/api";
import styles from "./AddProduct.module.scss";

const AddProduct = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    author: "",
    publisher: "",
    year: "",
    language: "",
    pages: "",
    format: "",
    supplier: "",
    dimensions: "",
    weight: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await api.post("/products", form);
      setSuccess("Thêm sản phẩm thành công!");
      setForm({
        id: "",
        name: "",
        price: "",
        category: "",
        author: "",
        publisher: "",
        year: "",
        language: "",
        pages: "",
        format: "",
        supplier: "",
        dimensions: "",
        weight: "",
        description: "",
        image: "",
      });
    } catch (err) {
      setError("Có lỗi khi thêm sản phẩm!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="id" placeholder="Mã sản phẩm" value={form.id} onChange={handleChange} className={styles.input} required />
        <input name="name" placeholder="Tên sản phẩm" value={form.name} onChange={handleChange} className={styles.input} required />
        <input name="price" placeholder="Giá" type="number" value={form.price} onChange={handleChange} className={styles.input} required />
        <input name="category" placeholder="Danh mục" value={form.category} onChange={handleChange} className={styles.input} />
        <input name="author" placeholder="Tác giả" value={form.author} onChange={handleChange} className={styles.input} />
        <input name="publisher" placeholder="Nhà xuất bản" value={form.publisher} onChange={handleChange} className={styles.input} />
        <input name="year" placeholder="Năm xuất bản" type="number" value={form.year} onChange={handleChange} className={styles.input} />
        <input name="language" placeholder="Ngôn ngữ" value={form.language} onChange={handleChange} className={styles.input} />
        <input name="pages" placeholder="Số trang" type="number" value={form.pages} onChange={handleChange} className={styles.input} />
        <input name="format" placeholder="Định dạng" value={form.format} onChange={handleChange} className={styles.input} />
        <input name="supplier" placeholder="Nhà cung cấp" value={form.supplier} onChange={handleChange} className={styles.input} />
        <input name="dimensions" placeholder="Kích thước" value={form.dimensions} onChange={handleChange} className={styles.input} />
        <input name="weight" placeholder="Trọng lượng" type="number" value={form.weight} onChange={handleChange} className={styles.input} />
        <textarea name="description" placeholder="Mô tả" value={form.description} onChange={handleChange} className={styles.textarea} />
        <input name="image" placeholder="Link ảnh" value={form.image} onChange={handleChange} className={styles.input} />
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Đang lưu..." : "Thêm sản phẩm"}
        </button>
      </form>
      {success && <p className={styles.success}>{success}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default AddProduct;
