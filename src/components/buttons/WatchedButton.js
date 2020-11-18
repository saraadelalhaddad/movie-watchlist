import React from "react";
import { WatchedButtonStyled } from "../../styles";
import movieStore from "../../stores/movieStore";

const WatchedButton = ({ movieId }) => {
  return (
    <WatchedButtonStyled onClick={() => movieStore.watchedMovie(movieId)}>
      Watched
    </WatchedButtonStyled>
  );
};

export default WatchedButton;
