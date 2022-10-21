import 'dotenv/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { searchMovie: '', error: '', isLoading: false };

const BASE_URL = 'https://api.themoviedb.org/3/';

const trendingMovieAsync = createAsyncThunk(
  'movie/fetch_trending_movie',
  async () => {
    const { data: axiosData } = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    return axiosData.data;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchMovie = action.payload.amount;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(trendingMovieAsync.rejected, (state, error) => {
      console.log(state);
      console.log(error);
      state.error = error.message;
      state.isLoading = false;
    });
    builder.addCase(trendingMovieAsync.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(trendingMovieAsync.fulfilled, (state, action) => {
      state.trendingMovie = action.payload;
      state.isLoading = false;
    });
  },
});

export const { search } = movieSlice.action;

export const selectMovie = (state) => state.movie.movie;
export const selectSearch = (state) => state.movie.search;

export default movieSlice.reducer;
