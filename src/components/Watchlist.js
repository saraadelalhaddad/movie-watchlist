import { observer } from "mobx-react";

/*** Components ***/
import MovieItem from "./MovieItem";

import movieStore from "../stores/movieStore";

const Watchlist = () => {
  const watchList = movieStore.movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <table class="table table-hover">
      <tbody>{watchList}</tbody>
    </table>
  );
};

export default observer(Watchlist);
