import React from "react";

const movieCard = ({movie: {imdbID, Year, Poster, Title, Type}}) => {
    return (
        <div className='movie' key={imdbID}>
          <div>
            <p>{Year}</p>
          </div>

          <div>
            <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
            {/* <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placehodler.com/400'} alt={movie.Title}/> */}
          </div>

          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
    );
}

export default movieCard;