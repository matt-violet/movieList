import React from 'react';
import MovieEntry from './movieEntry.js';

// props = movies array and markWatched()
var MovieList = (props) => (
    <div>
        {props.movies.map(movie => (
            <MovieEntry 
                movie={movie} 
                markWatched={props.markWatched} 
                toggleWatchBtn={props.toggleWatchBtn}
            />
        ))}
    </div>
);


export default MovieList;