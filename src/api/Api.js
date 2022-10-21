const API_KEY = 'c977963b3d63734b126e3cda94f53a0f';

const request = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchUpComing: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default request;