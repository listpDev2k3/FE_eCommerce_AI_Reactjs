# Hướng dẫn tùy chỉnh cho dự án React Frontend

- **Ngôn ngữ:** Luôn phản hồi bằng tiếng Việt cho tất cả các giải thích và bình luận.
- **Công nghệ:**
    - Dự án sử dụng React và Vite cho frontend.
    - Chúng ta sử dụng Tailwind CSS để tạo kiểu.
    - Logic component nên được viết bằng functional components và React Hooks.
    - Quản lý trạng thái (state management) chủ yếu sử dụng hook `useState`.
- **Quy tắc code:**
    - Sử dụng arrow functions cho tất cả components và callbacks.
    - Định dạng code với Prettier. Đảm bảo thụt lề là 2 dấu cách.
    - Sử dụng `const` và `let` thay vì `var`.
- **Cấu trúc dự án:**
    - Components nên được tổ chức trong thư mục `src/components`.
    - Các trang (pages) nên ở trong thư mục `src/pages`.
    - Các dịch vụ API nên ở trong thư mục `src/services`.
- **Thực hành tốt nhất:**
    - Ưu tiên sử dụng `async/await` để xử lý các tác vụ bất đồng bộ.
    - Luôn xử lý các lỗi tiềm ẩn trong các cuộc gọi API bằng các khối `try...catch`.
    - Đảm bảo tất cả code đều responsive và hoạt động tốt trên các thiết bị di động.