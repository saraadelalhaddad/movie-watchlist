import React from "react";
import { Button } from "react-bootstrap";
import movieStore from "../../stores/movieStore";

const WatchedButton = ({ movieId }) => {
  return (
    <Button
      variant="outline-success"
      onClick={() => movieStore.watchedMovie(movieId)}
    >
      Watched
    </Button>
  );
};

export default WatchedButton;
