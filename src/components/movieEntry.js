import React from 'react';

var MovieEntry = (props) => (
    <div class='movieEntry'>{props.movie.title}
        <button class='watchBtn'>Watch</button>
    </div>
);
  
export default MovieEntry;