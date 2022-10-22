import 'dotenv/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const latestTvAsync = createAsyncThunk('tv/fetch_latest_tv', async () => {
  const { data: axiosData } = await axios.get(
    `${process.env.REACT_APP_TMDB_BASE_URL}tv/latest?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  return axiosData.data;
});

const tvSlice = createSlice({
  name: 'tv',
  initialState: {},
  reducers: {
    search: (state, action) => {
      state.searchTv = action.payload.keyword;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(latestTvAsync.rejected, (state, error) => {
        state.error = error.message;
        state.loading = false;
      })
      .addCase(latestTvAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(latestTvAsync.fulfilled, (state, action) => {
        state.latestTV = action.payload;
        state.loading = false;
      });
  },
});

export const { search } = tvSlice.action;

export const selectTV = (state) => state.tv.tv;

export default tvSlice.reducer;
