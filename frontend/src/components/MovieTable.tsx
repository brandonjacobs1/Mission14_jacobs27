import React, { useState, useEffect } from "react";

//Typescript declaration of Movie objedct found in Movie.cs
export type Movie = {
  movieID: number;
  title: string;
  year: string;
  director: string;
  rating: string;
  category: string;
  lentTo: string;
  edited: boolean;
  notes: string;
};
//Table that displays movies

function MovieTable() {
  const [movies, setMovies] = useState<Movie[]>([]);
  //Fetch data from API
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://localhost:4000/movie");
      const data = await response.json();
      console.log(data);
      setMovies(data);
    }
    fetchMovies();
  }, []);
  //Map movies to be dynamically displayed
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Movie ID</th>
          <th>Title</th>
          <th>Year</th>
          <th>Director</th>
          <th>Rating</th>
          <th>Category</th>
          <th>Lent To</th>
          <th>Edited</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie: Movie) => (
          <tr key={movie.movieID}>
            <td>{movie.movieID}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.director}</td>
            <td>{movie.rating}</td>
            <td>{movie.category}</td>
            <td>{movie.lentTo}</td>
            <td>{movie.edited ? "Yes" : "No"}</td>
            <td>{movie.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieTable;
