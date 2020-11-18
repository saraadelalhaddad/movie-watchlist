import { makeObservable, observable, action } from "mobx";

/*** Data ***/
import movies from "../movies";

class MovieStore {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
      watchedMovie: action,
    });
  }

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };

  watchedMovie = (movieId) => {
    const movie = this.movies.find((movie) => movie.id === movieId);
    movie.watched = !movie.watched;
    // movie.watched = movie.watched ? false : true;
  };
}

const movieStore = new MovieStore();
export default movieStore;
