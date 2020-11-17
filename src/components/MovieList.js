// import SearchBar from "./SearchBar";
import movieStore from "../components/stores/movieStore";

/*** Components ***/
import MovieItem from "./MovieItem";

/*** Styles ***/
import { ListWrapper } from "../styles";

const MovieList = ({ movieStore }) => {
  const movieList = movies.map((movie) => (
    <MovieItem
      key={movie.id}
      movie={movie}
      // deleteMovie={movie.deleteMovie}
    />
  ));
  return (
    <div className="container">
      {/* <SearchBar setQuery={setQuery} /> */}
      <ListWrapper>{movieList}</ListWrapper>
    </div>
  );
};

export default MovieList;

// const filteredMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(query.toLowerCase())
//   );
