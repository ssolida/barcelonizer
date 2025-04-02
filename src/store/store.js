import { configureStore } from '@reduxjs/toolkit';
import apartmentsReducer from './apartmentsSlice';

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer,
  },
}); 