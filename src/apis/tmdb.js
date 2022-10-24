import axios from "axios";

const API_KEY = "e49c2bb2faf3b4e177c9affb09c5ff03";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});


export default tmdb;