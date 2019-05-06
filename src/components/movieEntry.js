import React from 'react';

// props = movie and markWatched()
var MovieEntry = (props) => (
    <div class='movieEntry'>
        {props.movie.title}
        <input 
            type='button' 
            class='watchBtn' 
            id='watchBtn'
            value='watch' 
            onClick={(event) => props.markWatched(event, props.movie)} 
           // onClick={() => props.toggleWatchBtn()}
        />
    </div>
);
  

export default MovieEntry;