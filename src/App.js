import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Thriller: [
    { name: "The Dark Knight", rating: "9/10" },
    { name: "Inception", rating: "8.8/10" }
  ],

  SciFi: [
    {
      name: " Godzilla vs. Kong ",
      rating: "6.6/10"
    },
    {
      name: "Zack Snyder's Justice League",
      rating: "8.2/10"
    }
  ],
  Bollywood: [
    {
      name: " Pather Panchali ",
      rating: "8.5/10"
    },
    {
      name: "The World of Apu",
      rating: "8.5/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Thriller");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> HMDB(Humara Movie DataBase) </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Wanna watch my favourite movies?
        Choose a genre.{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}