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





/* 
<div>
    <p>{props.movies[0].title}</p>
    <p>{props.movies[1].title}</p>
    <p>{props.movies[2].title}</p>
    <p>{props.movies[3].title}</p>
    <p>{props.movies[4].title}</p>
</div> 
*/