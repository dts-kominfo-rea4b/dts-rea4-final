import 'dotenv/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const trendingAllAsync = createAsyncThunk(
  'trending/fetch_trending_all',
  async () => {
    const { data: axiosData } = await axios.get(
      `${process.env.REACT_APP_TMDB_BASE_URL}trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    return axiosData.data;
  }
);

const latestMovieAsync = createAsyncThunk(
  'movie/fetch_latest_movie',
  async () => {
    const { data: axiosData } = await axios.get(
      `${process.env.REACT_APP_TMDB_BASE_URL}movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    return axiosData.data;
  }
);

const latestTvShowAsync = createAsyncThunk(
  'movie/fetch_latest_movie',
  async () => {
    const { data: axiosData } = await axios.get(
      `${process.env.REACT_APP_TMDB_BASE_URL}movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    return axiosData.data;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {},
  reducers: {
    search: (state, action) => {
      state.searchMovie = action.payload.amount;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(trendingAllAsync.rejected, (state, error) => {
        state.error = error.message;
        state.loading = false;
      })
      .addCase(trendingAllAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(trendingAllAsync.fulfilled, (state, action) => {
        state.trendingMovie = action.payload;
        state.loading = false;
      })
      .addCase(latestMovieAsync.rejected, (state, error) => {
        state.error = error.message;
        state.loading = false;
      })
      .addCase(latestMovieAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(latestMovieAsync.fulfilled, (state, action) => {
        state.trendingMovie = action.payload;
        state.loading = false;
      })
      .addCase(latestTvShowAsync.rejected, (state, error) => {
        state.error = error.message;
        state.loading = false;
      })
      .addCase(latestTvShowAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(latestTvShowAsync.fulfilled, (state, action) => {
        state.trendingMovie = action.payload;
        state.loading = false;
      });
  },
});

export const { search } = movieSlice.action;

export const selectMovie = (state) => state.movie.movie;
export const selectSearch = (state) => state.movie.search;

export default movieSlice.reducer;
