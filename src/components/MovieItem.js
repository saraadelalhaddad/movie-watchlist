/*** Styles ***/
import { MovieWrapper } from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper>
      <p>{movie.title}</p>
    </MovieWrapper>
  );
};

export default MovieItem;
