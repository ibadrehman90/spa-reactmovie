import React from 'react';

const MovieCard = ({MovieOne}) =>{
    return (
        <div className="movie">
            <div>
                <p>{MovieOne.Year}</p>
            </div>
            <div>
                <img src={MovieOne.Poster !== 'N/A' ? MovieOne.Poster: 'https://via.placeholder.com/400'}/>
            </div>
            <div>
                <span>{MovieOne.Type}</span>
                <h3>{MovieOne.Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard;