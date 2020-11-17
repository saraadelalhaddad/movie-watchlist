import { MovieWrapper } from "../styles";
// import movies from "../movies";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper className="col-lg-3 col-md-4 col-sm-6">
      <p>{movie.title}</p>
      <p>{movie.genre}</p>
      <p>{movie.plot}</p>
      <p>{movie.image}</p>
      {/* <UpdateButton candy={candy} />
      <DeleteButton candyId={candy.id} /> */}
    </MovieWrapper>
  );
};

export default MovieItem;

// import UpdateButton from "./UpdateButton";
// import { observer } from "mobx-react";

// /*** Components ***/
// import DeleteButton from "./buttons/DeleteButton";

/*** Styles ***/
