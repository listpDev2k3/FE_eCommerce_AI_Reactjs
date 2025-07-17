# React + Vite

Đây là frontend dự án thương mại điện tử tích hợp AI, được xây dựng bằng ReactJS, sử dụng Vite

### 1. **Yêu cầu hệ thống**

- Node.js >= 18
- npm >= 9 hoặc yarn/pnpm

### 2. **Chạy dự án ở môi trường phát triển**
-npm run dev -> Mở trình duyệt và truy cập: http://localhost:3000
### 3. ** Cấu trúc thư mục chính **
FE_eCommerce_AI_Reactjs/
├── public/               # Ảnh, favicon,...
├── src/
│   ├── assets/           # Ảnh, icon,...
│   ├── components/       # Các component dùng lại (ProductCard, Header,...)
│   ├── pages/            # Các trang chính (Home, ProductDetail, Favorites,...)
│   ├── services/         # Cấu hình gọi API bằng Axios
│   ├── utils/            # Hàm tiện ích (format price, debounce,...)
│   ├── App.jsx           # Router chính
│   └── main.jsx          # Điểm khởi chạy React
├── .env                  # Biến môi trường
├── vite.config.js        # Cấu hình vite
└── package.json
### 4. ** Tính năng nổi bật **
- Danh sách sản phẩm, chi tiết sản phẩm

- Yêu thích sản phẩm: nhấn vào icon Yêu Thích trong mỗi sản phẩm khi bạn hover vào , sẽ thêm vào danh sách yêu thích , để vào trang danh sách yêu thích, nhấn vào avata người dùng -> tới mục yêu thích sản phẩm 

- Gợi ý sản phẩm phù hợp dựa trên hành vi người dùng: Tôi tạo ra 1 nút dể người dùng có thể nhấn vào để đưa ra các sản phẩm gợi ý theo danh sách yêu thích trong trang danh sách yêu thích 

- Tương tác với backend RESTful API
### 5. ** Clone dự án về máy **
- git clone https://github.com/listpDev2k3/FE_eCommerce_AI_Reactjs.git
