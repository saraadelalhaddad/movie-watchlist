import React, { useState } from "react";
import { AddButtonStyled } from "../../styles";
import movieStore from "../../stores/movieStore";

const AddButton = () => {
  const [movie, setMovie] = useState({
    title: "",
  });

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.addMovie(movie);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={movie.title}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
        <AddButtonStyled>Add</AddButtonStyled>
      </form>
    </>
  );
};

export default AddButton;
