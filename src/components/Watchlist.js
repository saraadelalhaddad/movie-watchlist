/*** Styles ***/
import { ListWrapper } from "../styles";

/*** Components ***/
import MovieItem from "./MovieItem";

/*** Data ***/
import movies from "../movies";

const Watchlist = () => {
  const watchList = movies.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return <ListWrapper>{watchList}</ListWrapper>;
};

export default Watchlist;
