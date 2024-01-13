import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=971cc6db";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;


// import './App.css';
// import SearchIcon from './search.svg';
// import { useEffect, useState } from 'react';
// import movieCard from './movieCard';

// const API_URL = 'https://omdbapi.com?apikey=971cc6db';

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//     const searchMovies = async (title) => {
//       const response = await fetch(`${API_URL}&s=${title}`);
//       const data = await response.json();

//       setMovies(data.Search);
//     }
//   useEffect(() => {
//     searchMovies('Spiderman');
//     }, []);
//   return (
//     <div className="app">
//       <h1>Movies Club</h1>

//       <div className='search'>
//         <input
//           placeholder='Search for Movies'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img
//           src={SearchIcon}
//           alt='search'
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {
//         movies?.length > 0 ? (
//           <div className='container'>
//             {movies.map((movie) => (
//               <movieCard movie={movie}/>
//             ))}
//           </div>
//         ) : (
//           <div className='empty'>
//             <h2>no movies found!</h2>
//           </div>
//         )
//       }
//     </div>
//   );
// };

// export default App;
