const API_KEY = 'c977963b3d63734b126e3cda94f53a0f';

const request = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`
}

export default request;