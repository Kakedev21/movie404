import React from "react";

const Moviecard = ({ movie }) => {
  const { Title, Year, Poster, Type } = movie;
  return (
    <div className="movie-card">
      <p className="year">{Year}</p>
      <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
      />
      <div className="cardDesc">
        <p>{Title}</p>
        <p>{Type}</p>
      </div>
    </div>
  );
};

export default Moviecard;
