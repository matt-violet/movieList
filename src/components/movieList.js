import React from 'react';


var MovieList = (props) => (
    <div>
        <p>{props.movies[0].title}</p>
        <p>{props.movies[1].title}</p>
        <p>{props.movies[2].title}</p>
        <p>{props.movies[3].title}</p>
        <p>{props.movies[4].title}</p>
    </div>
);


export default MovieList;
