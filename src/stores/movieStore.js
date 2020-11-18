import { makeObservable, observable } from "mobx";

/*** Data ***/
import movies from "./movies";

class MovieStore {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
    });
  }
}

const movieStore = new MovieStore();
export default movieStore;
