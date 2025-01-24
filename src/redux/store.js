import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import mealReducer from './mealSlice';
import orderReducer from './orderSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealReducer,
    orders: orderReducer
  }
});

export default store;
