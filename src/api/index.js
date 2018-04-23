import axios from 'axios';

const endpoint = 'http://localhost:8000/api/';

let publicApi = axios.create({
  baseURL: endpoint,
  crossDomain:true
});
export const getAllItems = ({type, page}) => {
  return publicApi.get(`/${type}?page=${page}`)
}
export const getItem = (type, id) => {
  return publicApi.get(`/${type}/${id}`)
}

export const deleteItem = (type, id) => {
  return publicApi.delete(`/${type}/${id}`)
}

export const setCustomer = ({name, address, phone}) => {
  return publicApi.post('/customers', {
      name: name,
      address: address,
      phone: phone
    }
  )
}
export const updateCustomer = (id, {name, address, phone}) => {
  return publicApi.put(`/customers/${id}`, {
    name: name,
    address: address,
    phone: phone
  })
}
export const setProduct = ({name, price}) => {
  return publicApi.post('/products', {
      name: name,
      price: price,
    }
  )
}
export const updateProduct = (id, {name, price}) => {
  return publicApi.put(`/products/${id}`, {
    name: name,
    price: price,
  })
}


