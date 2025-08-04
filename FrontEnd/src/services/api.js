// import axios from 'axios';

// // Khởi tạo instance axios trỏ về Strapi backend
// const api = axios.create({
//   baseURL: 'http://localhost:1337/api',
//   timeout: 5000,
// });


// export default api;


import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockProducts from '../data/mockProducts'; 


const api = axios.create({
  baseURL: 'https://fake-api.com',
  timeout: 1000,
});

const mock = new MockAdapter(api, { delayResponse: 500 });

// Lấy toàn bộ sản phẩm
mock.onGet('/products').reply(200, mockProducts);

// Lấy chi tiết 1 sản phẩam theo ID
mock.onGet(/\/products\/.+/).reply(config => {
  const id = config.url.split('/').pop();
  const product = mockProducts.find(p => p.id === id);
  return product ? [200, product] : [404, { message: "Không thể lấy gợi ý lúc này" }];
});
// gợi ý sản phẩm
mock.onGet(/\/suggestions\?userId=.+/).reply(() => {
  const suggestions = mockProducts.slice(0, 4); 
  return [200, suggestions];
});


export default api;