// import SearchBar from "./SearchBar";
// import { useState } from "react";

/*** Components ***/
import MovieItem from "./MovieItem";

/*** Styles ***/
import { ListWrapper } from "../styles";

const MovieList = (props) => {
  const [query, setQuery] = useState("");

  const filteredMovies = props.movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  const movieList = filteredMovies.map((movie) => (
    <MovieItem
      movie={movie}
      deleteMovie={props.deleteMovie}
      key={movie.id}
      setMovie={props.setMovie}
    />
  ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{movieList}</ListWrapper>
    </div>
  );
};

export default MovieList;
