import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
          style={{ fontSize: "18pt", height: " 40px", width: "280px" }}
          name="title"
          value={movie.title}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
        <Button variant="outline-primary">Add</Button>
      </form>
    </>
  );
};

export default AddButton;
