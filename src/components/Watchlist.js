import { observer } from "mobx-react";

/*** Components ***/
import MovieItem from "./MovieItem";

import movieStore from "../stores/movieStore";
import AddButton from "./buttons/AddButton";

import SearchBar from "./SearchBar";

import { useState } from "react";

const Watchlist = () => {
  const [query, setQuery] = useState("");

  // const filteredMovie = movieStore.movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(query.toLowerCase())
  // );

  const filteredMovie = movieStore.movies.filter((movie) => !movie.watched);

  const watchList = filteredMovie.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <table class="table table-hover">
        <tbody>{watchList}</tbody>
      </table>
    </>
  );
};

export default observer(Watchlist);
