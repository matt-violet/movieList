import React from 'react';
import MovieEntry from './movieEntry.js';


var MovieList = (props) => (
    <div>
        {props.movies.map(movie => (
            <MovieEntry movie={movie} />
        ))}
    </div>
);


export default MovieList;