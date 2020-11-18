import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

const WatchedList = () => {
  const filteredMovie = movieStore.movies.filter((movie) => movie.watched);
  const watchedList = filteredMovie.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));
  return (
    <table class="table table-hover">
      <tbody>{watchedList}</tbody>
    </table>
  );
};

export default observer(WatchedList);
