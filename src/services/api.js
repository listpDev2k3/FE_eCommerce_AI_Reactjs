
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

// Lấy chi tiết 1 sản phẩm theo ID
mock.onGet(/\/products\/.+/).reply(config => {
  const id = config.url.split('/').pop();
  const product = mockProducts.find(p => p.id === id);
  return product ? [200, product] : [404, { message: "Không thể lấy gợi ý lúc này" }];
});


export default api;
