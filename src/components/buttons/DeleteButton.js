import React from "react";
import { DeleteButtonStyled } from "../../styles";
import movieStore from "../../stores/movieStore";

const DeleteButton = ({ movieId }) => {
  return (
    <DeleteButtonStyled onClick={() => movieStore.deleteMovie(movieId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
