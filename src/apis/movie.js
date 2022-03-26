import axios from 'axios'

export async function search(keyword, cancelToken) {
  const params = {
    apikey: process.env.REACT_APP_API_KEY,
    s: keyword,
  }

  const { data } = await axios.get('http://www.omdbapi.com', { params, cancelToken })

  if(!data.Search) throw(new Error(data.Error));

  return data.Search.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
  }));
}