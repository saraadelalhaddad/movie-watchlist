import { observer } from "mobx-react";

/*** Components ***/
import MovieItem from "./MovieItem";

import movieStore from "../stores/movieStore";
import AddButton from "./buttons/AddButton";

import SearchBar from "./SearchBar";

import { useState } from "react";
import { Table } from "react-bootstrap";

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
      <br />
      <AddButton />
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <th>WatchList</th>
          {/* <th>
            <SearchBar setQuery={setQuery} />
          </th> */}
        </thead>
        <tbody>{watchList}</tbody>
      </Table>
    </>
  );
};

export default observer(Watchlist);
