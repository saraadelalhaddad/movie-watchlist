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

  return (
    <ListWrapper>
      {/* {watchList} */}
      <table class="table table-hover">
        <tbody>
          <watchList>
            <th scope="row">{watchList.title}</th>
            <td>WatchedButton</td>
            <td>DeleteButton</td>
          </watchList>
          <watchList>
            <th scope="row">2</th>
            <td>WatchedButton</td>
            <td>DeleteButton</td>
          </watchList>
          <watchList>
            <th scope="row">3</th>
            <td>WatchedButton</td>
            <td>DeleteButton</td>
          </watchList>
        </tbody>
      </table>
    </ListWrapper>
  );
};

export default Watchlist;
