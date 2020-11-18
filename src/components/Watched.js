import MovieItem from "./MovieItem";
import movieStore from "../stores/movieStore";
import { observer } from "mobx-react";
import { Table } from "react-bootstrap";

const Watched = () => {
  const filteredMovie = movieStore.movies.filter((movie) => movie.watched);
  const watched = filteredMovie.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Watched</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{watched}</tbody>
    </Table>
  );
};

export default observer(Watched);
