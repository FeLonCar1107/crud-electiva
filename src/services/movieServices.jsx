import axios from "axios";

const PRODUCT_BASE_REST_API_URL = 'http://localhost:3977/api/v1/movies'

class MovieService{
  getAllMovies(){
    return axios.get(PRODUCT_BASE_REST_API_URL)
  }
  createMovie(movie){
    return axios.post(PRODUCT_BASE_REST_API_URL, movie)
  }
  getMovieById(movieId){
    return axios.get(PRODUCT_BASE_REST_API_URL + '/' + movieId)
  }
  updateMovie(movieId, movie){
    return axios.put(PRODUCT_BASE_REST_API_URL + '/' + movieId, movie)
  }
  deleteMovie(movieId){
     return axios.delete(PRODUCT_BASE_REST_API_URL + '/' + movieId)
  }
}

export default new MovieService();