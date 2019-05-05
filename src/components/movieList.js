import React from 'react';
import MovieEntry from './movieEntry.js';

// needs access to 
var MovieList = (props) => (
    <div>
        {props.movies.map(movie => (
            <MovieEntry movie={movie} />
        ))}
    </div>
);


export default MovieList;