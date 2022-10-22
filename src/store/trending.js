import axios from 'axios';
import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useTrendingStore = create(
  persist((set) => ({
    trendingAllDay: [],
    fetchTrendingAllDay: async () => {
      const { data: axiosData } = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      set(
        produce((state) => {
          state.trendingAllDay = axiosData;
        })
      );
    },
    fetchTrendingByMediaTypeAndTimeWindow: async (mediaType, timeWindow) => {
      const { data: axiosData } = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}trending/${mediaType}/${timeWindow}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      set(
        produce((state) => {
          state.trendingAllDay = axiosData;
        })
      );
    },
  }))
);
