import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = "http://localhost:8000";

export const getAllProducts = createAsyncThunk("products/all", async () => {
    try {
      const {
        data: { productData },
      } = await axios.get(`${URL}/restaurant/products/all`);
      return productData;
    } catch (error) {
      console.log(error, "error while calling getAllProducts api");
    }
  });
  
  export const getSingleRestaurantProducts = createAsyncThunk(
    "products/single",
    async (id) => {
      try {
        const {
          data: { product },
        } = await axios.get(`${URL}/restaurant/products/singleRestaurant/${id}`);
        return product;
      } catch (error) {
        console.log(error, "error while calling getSingleRestaurantProducts api");
      }
    }
  );
  
  export const getSingleProduct = createAsyncThunk(
    "products/singleProduct",
    async (id) => {
      try {
        const {
          data: { product },
        } = await axios.get(`${URL}/restaurant/products/singleProduct/${id}`);
        return product;
      } catch (error) {
        console.log(error, "error while calling getSingleProduct api");
      }
    }
  );
  
  export const getUserCart = createAsyncThunk("products/cart", async (id) => {
    try {
      const {
        data: { items },
      } = await axios.get(`${URL}/user/cart/${id}`);
      return items;
    } catch (error) {
      console.log(error, "error while calling getUserCart api");
    }
  });
  
  export const deleteItemFromCart = createAsyncThunk(
    "product/deleteItemFromCart",
    async ({ id, userID,cb }) => {
      try {
        const {data} = await axios.put(`${URL}/user/deleteItem`, { userID, productID: id });
        cb?.(data)
        return data;
      } catch (error) {
        console.log(error, "error while calling deleteItemFromCart api");
      }
    }
  );
  
  export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async ({ productID, restaurantID, cb }) => {
      try {
        const { data } = await axios.put(
          `${URL}/restaurant/products/delete`,
          { productID, restaurantID }
        );
        cb?.(data)
        return data;
      } catch (error) {
        console.log(error, "Error while calling deleteProduct api");
      }
    }
  );
  
  export const updateProduct = createAsyncThunk(
    "product/update",
    async ({ data, restaurantID, cb }) => {
      try {
        const res = await axios.put(`${URL}/restaurant/products/update`, {
          data,
          restaurantID,
        });
        console.log(res)
        cb?.(res?.data);
        return res.data;
      } catch (error) {
        console.log(error, "error while calling updateProduct api");
      }
    }
  );
  
  export const getOrderedProducts = createAsyncThunk(
    "products/orders",
    async (id) => {
      try {
        const {
          data: { orders },
        } = await axios.get(`${URL}/restaurant/products/orderedProducts/${id}`);
        return orders;
      } catch (error) {
        console.log(error, "error while calling getOrderedProducts api");
      }
    }
  );
  
  export const clearCart = createAsyncThunk("products/clearCart", async (id) => {
    try {
      const {
        data: { cart },
      } = await axios.put(`${URL}/user/clearCart/${id}`);
      return cart;
    } catch (error) {
      console.log(error, "error while calling clear cart api");
    }
  });
  
  export const getPastOrders = createAsyncThunk(
    "products/pastOrders",
    async (id) => {
      try {
        const {
          data: { details },
        } = await axios.get(`${URL}/user/pastOrders/${id}`);
        return details;
      } catch (error) {
        console.log(error, "error while calling getPastOrder api");
      }
    }
  );
  
  