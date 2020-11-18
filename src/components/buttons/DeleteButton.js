import React from "react";
import { Button } from "react-bootstrap";
import movieStore from "../../stores/movieStore";

const DeleteButton = ({ movieId }) => {
  return (
    <Button
      variant="outline-danger"
      onClick={() => movieStore.deleteMovie(movieId)}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
