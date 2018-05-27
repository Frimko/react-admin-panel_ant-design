import axios from 'axios';

const endpoint = 'http://localhost:8000/api/';

let publicApi = axios.create({
  baseURL: endpoint,
  crossDomain: true,
});
export const getAllItems = ({ type, page }) => {
  return publicApi.get(`/${type}?page=${page}`);
};
export const getItem = ({ type, id }) => {
  return publicApi.get(`/${type}/${id}`);
};

export const deleteItem = (type, id) => {
  return publicApi.delete(`/${type}/${id}`);
};

export const setCustomer = ({ name, address, phone }) => {
  return publicApi.post('/customers', { name, address, phone });
};
export const updateCustomer = (id, { name, address, phone }) => {
  return publicApi.put(`/customers/${id}`, { name, address, phone });
};
export const setProduct = ({ name, price }) => {
  return publicApi.post('/products', { name, price });
};
export const updateProduct = (id, { name, price }) => {
  return publicApi.put(`/products/${id}`, { name, price });
};


