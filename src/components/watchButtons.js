import React from 'react';


// props = movies, watchedArr, showWatched
var WatchButtons = (props) => (
    <div>
        <input 
            value='To Watch' 
            type='button' 
            class='btn' 
            onClick={(event) => props.showToWatch(event, props.toWatchArr)}
        />
        <input 
            value='Watched' 
            type='button' 
            class='btn'
            onClick={(event) => props.showWatched(event, props.watchedArr)} 
        />
    </div>
);



export default WatchButtons;