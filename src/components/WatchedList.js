import Watchlist from "./Watchlist";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";

const WatchedList = () => {
  const watchedList = movieStore.movies.filter((movie) => (
    <Watchlist key={movie.id} movie={movie} />
  ));
  return (
    <table class="table table-hover">
      <tbody>{watchedList}</tbody>
    </table>
  );
};

export default observer(WatchedList);
