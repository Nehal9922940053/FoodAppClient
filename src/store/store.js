import {configureStore} from  '@reduxjs/toolkit';
import {RestaurantSlice} from './restaurantSlice.js';


export const store = configureStore({
    reducer:{
        restaurants: RestaurantSlice.reducer
    }
})
