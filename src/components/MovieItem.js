/*** Styles ***/
import { MovieWrapper } from "../styles";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper className="col-lg-3 col-md-4 col-sm-6">
      <p>{movie.title}</p>
    </MovieWrapper>
  );
};

export default MovieItem;

{
  /* <UpdateButton candy={candy} />
      <DeleteButton candyId={candy.id} /> */
}

// import UpdateButton from "./UpdateButton";
// import { observer } from "mobx-react";

// /*** Components ***/
// import DeleteButton from "./buttons/DeleteButton";
