import { makeObservable, observable, action } from "mobx";

/*** Data ***/
import movies from "../movies";

class MovieStore {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
    });
  }

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };
}

const movieStore = new MovieStore();
export default movieStore;
