import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApartments = createAsyncThunk(
  'apartments/fetchApartments',
  async () => {
    // Replace with your actual API endpoint
    const response = await axios.get('https://api.example.com/apartments');
    return response.data;
  }
);

const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filters: {
      neighborhood: '',
      priceRange: '',
      bedrooms: ''
    }
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApartments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchApartments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = apartmentsSlice.actions;
export default apartmentsSlice.reducer; 