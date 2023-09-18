import { createSlice } from '@reduxjs/toolkit';
import { clearCart, deleteItemFromCart, deleteProduct, getAllProducts, getOrderedProducts, getPastOrders, getSingleProduct, getSingleRestaurantProducts, getUserCart, updateProduct } from './builderFunctions.js';

const initialState = {
    allRestaurantProduct: [],
    singleRestaurantProducts: [],
    singleProduct: [],
    cart: [],
    orders: [],
    pastOrders: []
}


export const RestaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getAllProducts.fulfilled, (state, action) => {
            state.allRestaurantProduct = action.payload
        });
        builders.addCase(getSingleRestaurantProducts.fulfilled, (state, action) => {
            state.singleRestaurantProducts = action.payload
        })
        builders.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.singleProduct = action.payload
        })
        builders.addCase(getUserCart.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        builders.addCase(deleteItemFromCart.fulfilled, (state, action) => {
            state.cart = action.payload
        });
        builders.addCase(deleteProduct.fulfilled, (state, action) => {
            state.singleRestaurantProducts = action.payload
        });
        builders.addCase(updateProduct.fulfilled, (state, action) => {
            state.singleRestaurantProducts = action.payload
        });
        builders.addCase(getOrderedProducts.fulfilled, (state, action) => {
            state.orders = action.payload
        })
        builders.addCase(clearCart.fulfilled, (state, action) => {
            state.cart = action.payload
        });
        builders.addCase(getPastOrders.fulfilled, (state, action) => {
            state.pastOrders = action.payload
        })
    }
})
