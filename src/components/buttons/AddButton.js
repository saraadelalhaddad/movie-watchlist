import React from "react";
import { AddButtonStyled } from "../../styles";
import movieStore from "../../stores/movieStore";

const AddButton = ({ newMovie }) => {
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.title]: event.target.value });
  };
  return (
    <>
      <form>
        <input
          name="title"
          value={movie.title}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </form>
      <AddButtonStyled onClick={() => movieStore.addMovie(newMovie)}>
        Add
      </AddButtonStyled>
    </>
  );
};

export default AddButton;
