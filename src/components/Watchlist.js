import { observer } from "mobx-react";

/*** Components ***/
import MovieItem from "./MovieItem";

import movieStore from "../stores/movieStore";
import AddButton from "./buttons/AddButton";

const Watchlist = () => {
  const filteredMovie = movieStore.movies.filter((movie) => !movie.watched);
  const watchList = filteredMovie.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <>
      <AddButton />
      <table class="table table-hover">
        <tbody>{watchList}</tbody>
      </table>
    </>
  );
};

export default observer(Watchlist);
